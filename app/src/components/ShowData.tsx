"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { HiDownload } from "react-icons/hi";
import { useTour } from "../contexts/TourPackageContext";
import AboutUsPdf from "./pdf/AboutUsPdf";
import FooterPdf from "./pdf/FooterPdf";
import HeaderPdf from "./pdf/HeaderPdf";
import InclusionExclusionPdf from "./pdf/InclusionExclusionPdf";
import IternaryPdf from "./pdf/IternaryPdf";
import PageBreakPdf from "./pdf/PageBreakPdf";
import PricingPdf from "./pdf/PricingPdf";
import TermsConditions from "./pdf/TermsConditions";

export default function ShowData() {
  const ref = useRef<HTMLDivElement>(null);
  const { data, isLoaded } = useTour();
  const router = useRouter();

  console.log("👁️ ShowData rendering:", {
    isLoaded,
    hasData: !!data.tourTitle,
    days: data.days.length,
  });

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black font-bold">
        Loading...
      </div>
    );
  }

  if (!data.tourTitle && data.days.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center border-2 border-black p-8 rounded-xl">
          <h1 className="text-3xl font-bold text-black mb-4">No Data Found</h1>
          <p className="text-black mb-6">Please upload a PDF first.</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-black text-white rounded-lg font-bold"
          >
            Go to Upload
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white min-h-screen print:bg-white">
        <div
          ref={ref}
          className="pdf-document mx-auto bg-white shadow-xl print:shadow-none relative"
          style={{ maxWidth: "210mm" }}
        >
          <HeaderPdf />
          <main className="px-12 py-8 space-y-10">
            <AboutUsPdf />
            <PageBreakPdf />
            <PricingPdf />
            <PageBreakPdf />
            <IternaryPdf />
            <PageBreakPdf />
            <InclusionExclusionPdf />
            <PageBreakPdf />
            <TermsConditions />
            <PageBreakPdf />
          </main>
          <FooterPdf />
        </div>
      </div>

      <div className="fixed bottom-8 right-8 flex gap-4 print:hidden">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 border-2 border-black text-black rounded-lg font-bold bg-white"
        >
          ← Edit
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-black text-white rounded-lg font-bold flex items-center gap-2"
        >
          <HiDownload className="w-5 h-5" />
          Print PDF
        </button>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: A4;
          }
          body {
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}
//!this is new look with some changes dynamic prop
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { HiDownload } from "react-icons/hi";
// import AboutUsPdf from "./pdf/AboutUsPdf";
// import FooterPdf from "./pdf/FooterPdf";
// import HeaderPdf from "./pdf/HeaderPdf";
// import InclusionExclusionPdf from "./pdf/InclusionExclusionPdf";
// import IternaryPdf from "./pdf/IternaryPdf";
// import PageBreakPdf from "./pdf/PageBreakPdf";
// import PricingPdf from "./pdf/PricingPdf";
// import TermsConditions from "./pdf/TermsConditions";

// const A4_HEIGHT_PX = 1122;

// export default function ShowData() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [pageCount, setPageCount] = useState(1);

//   useEffect(() => {
//     if (!ref.current) return;
//     setPageCount(Math.ceil(ref.current.scrollHeight / A4_HEIGHT_PX));
//   }, []);

//   return (
//     <>
//       <div className="bg-slate-200 min-h-screen print:bg-white">
//         <div
//           ref={ref}
//           className="pdf-document mx-auto bg-white shadow-xl print:shadow-none relative"
//           style={{ maxWidth: "210mm" }}
//         >
//           <HeaderPdf />

//           <main className="px-12 py-8 space-y-10">
//             <AboutUsPdf />
//             <PageBreakPdf />
//             <PricingPdf
//               title="Tour to Jammu and Kashmir"
//               duration="5 Nights 6 Days"
//               price="₹ 15,900"
//               myterm="per person for 5 star hotels"
//             />
//             <PageBreakPdf />
//             <IternaryPdf />
//             <PageBreakPdf />
//             <InclusionExclusionPdf />
//             <PageBreakPdf />
//             <TermsConditions />
//             <PageBreakPdf />
//           </main>

//           <FooterPdf />
//         </div>
//       </div>

//       {/* Print button floating */}
//       <button
//         onClick={() => window.print()}
//         className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg print:hidden flex items-center gap-2"
//       >
//         <HiDownload className="w-5 h-5" />
//         Download PDF
//       </button>

//       <style jsx global>{`
//         @media print {
//           @page {
//             margin: 0;
//             size: A4;
//           }
//           body {
//             margin: 0;
//             padding: 0;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// !for pdf okay
// "use client";

// import { useEffect, useRef, useState } from "react";

// import AboutUsPdf from "./pdf/AboutUsPdf";
// import FooterPdf from "./pdf/FooterPdf";
// import HeaderPdf from "./pdf/HeaderPdf";
// import InclusionExclusionPdf from "./pdf/InclusionExclusionPdf";
// import IternaryPdf from "./pdf/IternaryPdf";
// import PageBreakPdf from "./pdf/PageBreakPdf";
// import TermsConditions from "./pdf/TermsConditions";

// const A4_HEIGHT_PX = 1122;

// export default function ShowData() {
//   const ref = useRef<HTMLDivElement>(null);
//   const [pageCount, setPageCount] = useState(1);

//   useEffect(() => {
//     if (!ref.current) return;
//     setPageCount(Math.ceil(ref.current.scrollHeight / A4_HEIGHT_PX));
//   }, []);

//   return (
//     <div className="bg-slate-200 min-h-screen  print:bg-white">
//       <div
//         ref={ref}
//         className="pdf-document mx-auto bg-white shadow-xl print:shadow-none relative"
//       >
//         <HeaderPdf />

//         <main className="px-12 py-8 space-y-10">
//           <AboutUsPdf />

//           <PageBreakPdf />
//           <IternaryPdf />
//           <PageBreakPdf />
//           <InclusionExclusionPdf />
//           <PageBreakPdf />

//           <TermsConditions />

//           <PageBreakPdf />
//         </main>

//         <FooterPdf />
//       </div>
//     </div>
//   );
// }
