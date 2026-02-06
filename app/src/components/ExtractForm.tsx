"use client";

import mammoth from "mammoth";
import { useRouter } from "next/navigation";
import * as pdfjsLib from "pdfjs-dist";
import { useEffect, useState } from "react";
import { useTour } from "../contexts/TourPackageContext";
import { extractTextFromPDF, parseTourData } from "../utils/pdfExtractor";

if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();
}

export default function ExtractForm() {
  const {
    data,
    updatePricing,
    updateItinerary,
    updateInclusionsExclusions,
    addDay,
    resetData,
    isLoaded,
  } = useTour();
  const [mode, setMode] = useState<"select" | "upload" | "form">("select");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const router = useRouter();

  console.log("🔄 ExtractForm render, mode:", mode, "data:", data);

  // If data exists, go directly to form mode
  useEffect(() => {
    if (isLoaded && data.tourTitle) {
      console.log("✅ Data exists, switching to form mode");
      setMode("form");
    }
  }, [isLoaded, data.tourTitle]);

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log("📁 File selected:", file.name);
    setLoading(true);
    setFileName(file.name);

    try {
      let text = "";

      if (file.type === "application/pdf") {
        text = await extractTextFromPDF(file);
      } else if (file.type.includes("word")) {
        const buffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer: buffer });
        text = result.value;
      }

      console.log("📝 Extracting data from text...");
      const extracted = parseTourData(text);

      console.log("💾 Saving extracted data to context...");

      // Save all data at once
      updatePricing({
        tourTitle: extracted.pricing.tourTitle,
        duration: extracted.pricing.duration,
        price: extracted.pricing.price,
        priceTerm: extracted.pricing.priceTerm,
      });

      updateItinerary({
        itineraryTitle: extracted.itinerary.title,
        itinerarySubtitle: extracted.itinerary.subtitle,
        itineraryRoute: extracted.itinerary.route,
        days: extracted.itinerary.days,
      });

      updateInclusionsExclusions({
        inclusions: extracted.inclusions,
        exclusions: extracted.exclusions,
      });

      console.log("✅ Data saved! Switching to form...");
      setMode("form");
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Error: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black font-bold">
        Loading...
      </div>
    );
  }

  if (mode === "select") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white border-2 border-black rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-black mb-2 text-center">
            Tour Package Creator
          </h1>
          <p className="text-black text-center mb-8">
            Choose how you want to create your tour package
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => setMode("upload")}
              className="p-8 border-2 border-black rounded-xl transition font-bold"
            >
              <svg
                className="w-12 h-12 mx-auto mb-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <h3 className="text-xl font-bold text-black mb-2">
                Upload PDF/DOCX
              </h3>
              <p className="text-sm text-black">Auto-extract tour details</p>
            </button>

            <button
              onClick={() => {
                resetData();
                setMode("form");
              }}
              className="p-8 border-2 border-black rounded-xl transition font-bold"
            >
              <svg
                className="w-12 h-12 mx-auto mb-4 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-xl font-bold text-black mb-2">
                Create Manually
              </h3>
              <p className="text-sm text-black">Build from scratch</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (mode === "upload") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white border-2 border-black rounded-2xl shadow-xl p-8">
          <button
            onClick={() => setMode("select")}
            className="mb-6 text-black font-bold"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold text-black mb-6">
            Upload Tour Document
          </h2>

          <input
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
            disabled={loading}
          />

          <label
            htmlFor="file-upload"
            className="cursor-pointer block text-center p-12 border-2 border-dashed border-black rounded-xl transition"
          >
            <svg
              className="w-16 h-16 mx-auto mb-4 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <h3 className="text-xl font-bold text-black">
              {loading ? "Processing..." : "Click to Upload"}
            </h3>
            <p className="text-sm text-black mt-2">PDF or DOCX file</p>
          </label>

          {loading && (
            <div className="flex justify-center items-center mt-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
              <span className="ml-3 text-black font-bold">Extracting...</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Form Mode
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div
          className="bg-white border-2 border-black rounded-xl
         shadow-lg p-6 flex justify-between items-center"
        >
          <div>
            <h1 className="text-2xl font-bold text-black">Edit Tour Package</h1>
            <p className="text-black font-bold">
              {data.days.length} days • {data.inclusions.length} inclusions •{" "}
              {data.exclusions.length} exclusions
            </p>
          </div>
          <div className="space-x-4">
            <button
              onClick={() => {
                resetData();
                setMode("select");
              }}
              className="px-4 py-2 border-2 border-black text-black rounded-lg font-bold"
            >
              Reset All
            </button>
            <button
              onClick={() => router.push("/preview")}
              className="px-4 py-2 bg-black text-white rounded-lg font-bold"
            >
              View Preview →
            </button>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6 text-black">
          <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-black">
            Tour Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Tour Title
              </label>
              <input
                type="text"
                value={data.tourTitle}
                onChange={(e) => updatePricing({ tourTitle: e.target.value })}
                className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Duration
              </label>
              <input
                type="text"
                value={data.duration}
                onChange={(e) => updatePricing({ duration: e.target.value })}
                className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Price
              </label>
              <input
                type="text"
                value={data.price}
                onChange={(e) => updatePricing({ price: e.target.value })}
                className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-black mb-1">
                Price Term
              </label>
              <input
                type="text"
                value={data.priceTerm}
                onChange={(e) => updatePricing({ priceTerm: e.target.value })}
                className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Itinerary */}
        <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6 text-black">
          <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-black">
            Day-wise Itinerary ({data.days.length} days)
          </h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Route"
              value={data.itineraryRoute}
              onChange={(e) =>
                updateItinerary({ itineraryRoute: e.target.value })
              }
              className="w-full px-3 py-2 border-2 border-black rounded-lg mb-2"
            />
          </div>

          <div className="space-y-4">
            {data.days.length === 0 && (
              <p className="text-black font-bold">
                No days found. Add manually.
              </p>
            )}
            {data.days.map((day, idx) => (
              <div key={idx} className="border-2 border-black rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-black text-lg">
                    Day {day.day}
                  </h3>
                  <button
                    onClick={() => {
                      const newDays = data.days.filter((_, i) => i !== idx);
                      updateItinerary({ days: newDays });
                    }}
                    className="px-3 py-1 bg-black text-white rounded font-bold"
                  >
                    Remove
                  </button>
                </div>
                <input
                  type="text"
                  value={day.title}
                  onChange={(e) => {
                    const newDays = [...data.days];
                    newDays[idx] = { ...day, title: e.target.value };
                    updateItinerary({ days: newDays });
                  }}
                  className="w-full px-3 py-2 border-2 border-black rounded mb-2"
                  placeholder="Title"
                />
                <textarea
                  value={day.description}
                  onChange={(e) => {
                    const newDays = [...data.days];
                    newDays[idx] = { ...day, description: e.target.value };
                    updateItinerary({ days: newDays });
                  }}
                  rows={3}
                  className="w-full px-3 py-2 border-2 border-black rounded"
                  placeholder="Description"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              addDay({ day: data.days.length + 1, title: "", description: "" })
            }
            className="mt-4 px-4 py-2 bg-black text-white rounded-lg font-bold"
          >
            + Add Day
          </button>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid md:grid-cols-2 gap-6 text-black">
          <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-black">
              Inclusions ({data.inclusions.length})
            </h2>
            <div className="space-y-2">
              {data.inclusions.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newIncs = [...data.inclusions];
                      newIncs[idx] = e.target.value;
                      updateInclusionsExclusions({ inclusions: newIncs });
                    }}
                    className="flex-1 px-3 py-2 border-2 border-black rounded"
                  />
                  <button
                    onClick={() => {
                      const newIncs = data.inclusions.filter(
                        (_, i) => i !== idx,
                      );
                      updateInclusionsExclusions({ inclusions: newIncs });
                    }}
                    className="px-3 py-2 bg-black text-white rounded font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                updateInclusionsExclusions({
                  inclusions: [...data.inclusions, ""],
                })
              }
              className="mt-4 px-4 py-2 bg-black text-white rounded-lg font-bold"
            >
              + Add
            </button>
          </div>

          <div className="bg-white border-2 border-black rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-black mb-4 pb-2 border-b-2 border-black">
              Exclusions ({data.exclusions.length})
            </h2>
            <div className="space-y-2">
              {data.exclusions.map((item, idx) => (
                <div key={idx} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newExcs = [...data.exclusions];
                      newExcs[idx] = e.target.value;
                      updateInclusionsExclusions({ exclusions: newExcs });
                    }}
                    className="flex-1 px-3 py-2 border-2 border-black rounded"
                  />
                  <button
                    onClick={() => {
                      const newExcs = data.exclusions.filter(
                        (_, i) => i !== idx,
                      );
                      updateInclusionsExclusions({ exclusions: newExcs });
                    }}
                    className="px-3 py-2 bg-black text-white rounded font-bold"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                updateInclusionsExclusions({
                  exclusions: [...data.exclusions, ""],
                })
              }
              className="mt-4 px-4 py-2 bg-black text-white rounded-lg font-bold"
            >
              + Add
            </button>
          </div>
        </div>

        <div className="bg-white border-2 border-black rounded-xl p-6 text-center">
          <p className="text-black mb-4 font-bold">
            ✓ Data auto-saved to browser storage
          </p>
          <button
            onClick={() => router.push("/preview")}
            className="px-8 py-3 bg-black text-white rounded-xl font-bold"
          >
            View Final Preview →
          </button>
        </div>
      </div>
    </div>
  );
}
