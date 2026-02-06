"use client";
import * as pdfjsLib from "pdfjs-dist";

export interface ExtractedData {
  pricing: {
    tourTitle: string;
    duration: string;
    price: string;
    priceTerm: string;
  };
  itinerary: {
    title: string;
    subtitle: string;
    route: string;
    days: Array<{
      day: number;
      title: string;
      description: string;
    }>;
  };
  inclusions: string[];
  exclusions: string[];
}

export async function extractTextFromPDF(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();

    // Preserve line breaks better
    let lastY = -1;
    const pageLines: string[] = [];
    let currentLine = "";

    content.items.forEach((item: any) => {
      if (item.str) {
        // New line detected
        if (lastY !== -1 && Math.abs(item.transform[5] - lastY) > 5) {
          if (currentLine.trim()) {
            pageLines.push(currentLine.trim());
          }
          currentLine = item.str;
        } else {
          currentLine += (currentLine ? " " : "") + item.str;
        }
        lastY = item.transform[5];
      }
    });

    if (currentLine.trim()) {
      pageLines.push(currentLine.trim());
    }

    text += pageLines.join("\n") + "\n";
  }

  console.log(
    "📄 Extracted text (first 3000 chars):\n",
    text.substring(0, 3000),
  );
  return text;
}

export function parseTourData(rawText: string): ExtractedData {
  console.log("🔍 Starting parseTourData...");

  const data: ExtractedData = {
    pricing: {
      tourTitle: "",
      duration: "",
      price: "",
      priceTerm: "per person",
    },
    itinerary: {
      title: "",
      subtitle: "",
      route: "",
      days: [],
    },
    inclusions: [],
    exclusions: [],
  };

  // ========== PRICING ==========
  const tourMatch = rawText.match(/Tour\s+to\s+([^\n]+?)(?=\n|\d+\s*Night)/i);
  if (tourMatch) {
    data.pricing.tourTitle = "Tour to " + tourMatch[1].trim();
  }

  const durationMatch = rawText.match(
    /(\d+)\s*Nights?\s*[\/]?\s*(\d+)\s*Days?/i,
  );
  if (durationMatch) {
    data.pricing.duration = `${durationMatch[1]} Nights / ${durationMatch[2]} Days`;
    data.itinerary.subtitle = `${durationMatch[1].padStart(2, "0")} Nights / ${durationMatch[2].padStart(2, "0")} Days`;
  }

  const priceMatch = rawText.match(
    /[₹]?\s*([0-9,]+)\s*\/\s*per\s+person\s+for\s+([^\n*]+)/i,
  );
  if (priceMatch) {
    data.pricing.price = `₹ ${priceMatch[1].replace(/,/g, "")}`;
    data.pricing.priceTerm = `per person for ${priceMatch[2].trim()}`;
  }

  // ========== ROUTE ==========
  const routeMatch = rawText.match(
    /([A-Za-z]+)\s*→\s*([A-Za-z]+)\s*→\s*([A-Za-z]+)\s*→\s*([A-Za-z]+)/,
  );
  if (routeMatch) {
    data.itinerary.route = `${routeMatch[1]} → ${routeMatch[2]} → ${routeMatch[3]} → ${routeMatch[4]}`;
  }

  data.itinerary.title = data.pricing.tourTitle + " - Daywise Itinerary";

  // ========== EXTRACT DAYS - PROPER METHOD ==========
  console.log("\n📅 EXTRACTING DAYS...");

  // Split text into lines
  const lines = rawText
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  let currentDay: any = null;
  let inDaySection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check if this is a day header: "Day 01: Arrive Srinagar – Local"
    const dayMatch = line.match(/^Day\s+(\d+)\s*:\s*(.+)/i);

    if (dayMatch) {
      // Save previous day if exists
      if (currentDay && currentDay.description.trim()) {
        data.itinerary.days.push(currentDay);
        console.log(`✅ Added Day ${currentDay.day}: ${currentDay.title}`);
      }

      // Start new day
      currentDay = {
        day: parseInt(dayMatch[1]),
        title: dayMatch[2].trim(),
        description: "",
      };
      inDaySection = true;
      continue;
    }

    // Stop at Inclusions section
    if (
      line.match(/Inclusions?\s*&?\s*Exclusions?/i) ||
      line.match(/Cost\s+Includes?/i)
    ) {
      if (currentDay && currentDay.description.trim()) {
        data.itinerary.days.push(currentDay);
        console.log(`✅ Added Day ${currentDay.day}: ${currentDay.title}`);
      }
      inDaySection = false;
      break;
    }

    // Add to current day description
    if (inDaySection && currentDay) {
      // Skip "Overnight: XXX" lines
      if (!line.match(/^Overnight:/i)) {
        currentDay.description += (currentDay.description ? " " : "") + line;
      }
    }
  }

  console.log(`📅 Total days extracted: ${data.itinerary.days.length}`);

  // ========== INCLUSIONS ==========
  console.log("\n📋 EXTRACTING INCLUSIONS...");

  const incStartIdx = lines.findIndex((l) => l.match(/^Cost\s+Includes?$/i));
  const excStartIdx = lines.findIndex((l) => l.match(/^Cost\s+Excludes?$/i));

  if (incStartIdx !== -1 && excStartIdx !== -1) {
    const incLines = lines.slice(incStartIdx + 1, excStartIdx);
    data.inclusions = incLines.filter(
      (l) => l.length > 5 && !l.match(/Kashmir Tour|Nights.*Days|Cost/i),
    );
    console.log(`✅ Inclusions: ${data.inclusions.length}`);
  }

  // ========== EXCLUSIONS ==========
  console.log("\n📋 EXTRACTING EXCLUSIONS...");

  if (excStartIdx !== -1) {
    const termsIdx = lines.findIndex(
      (l, idx) =>
        idx > excStartIdx && l.match(/Our\s+Terms|Terms\s+and\s+Conditions/i),
    );

    const endIdx = termsIdx !== -1 ? termsIdx : lines.length;
    const excLines = lines.slice(excStartIdx + 1, endIdx);

    data.exclusions = excLines.filter(
      (l) => l.length > 5 && !l.match(/Cost\s+Excludes?/i),
    );
    console.log(`✅ Exclusions: ${data.exclusions.length}`);
  }

  console.log("\n🎉 EXTRACTION COMPLETE");
  console.log("Summary:", {
    title: data.pricing.tourTitle,
    days: data.itinerary.days.length,
    inclusions: data.inclusions.length,
    exclusions: data.exclusions.length,
  });

  return data;
}
