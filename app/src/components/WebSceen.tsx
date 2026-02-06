"use client";

import { useState } from "react";
import {
  HiClipboardList,
  HiDocumentText,
  HiDownload,
  HiMap,
} from "react-icons/hi";
import { useTour } from "../contexts/TourPackageContext";
import InclusionExclusionPdf from "./pdf/InclusionExclusionPdf";
import IternaryPdf from "./pdf/IternaryPdf";
import PricingPdf from "./pdf/PricingPdf";
import TermsConditions from "./pdf/TermsConditions";

type TabType = "itinerary" | "inclusion" | "terms";

export default function WebScreen() {
  const [activeTab, setActiveTab] = useState<TabType>("itinerary");
  const { data } = useTour();
  if (!data.tourTitle) return null;

  const handleDownloadClick = () => {
    // Simply open /pdf-view in new tab
    window.open("/pdf-view", "_blank");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "itinerary":
        return <IternaryPdf />;
      case "inclusion":
        return <InclusionExclusionPdf />;
      case "terms":
        return <TermsConditions />;
      default:
        return <IternaryPdf />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {data.tourTitle}
          </h1>
          <p className="text-gray-600">Explore the Paradise on Earth</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 ">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg shadow-md overflow-hidden ">
              <div className="border-b border-gray-200">
                <div className="flex gap-2 p-4">
                  <button
                    onClick={() => setActiveTab("itinerary")}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium
                       transition-all duration-200 flex items-center
                        justify-center gap-2 ${activeTab === "itinerary"
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    <HiMap className="w-5 h-5" />
                    Itinerary
                  </button>

                  <button
                    onClick={() => setActiveTab("inclusion")}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium
                      transition-all duration-200 flex items-center
                       justify-center gap-2 ${activeTab === "inclusion"
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    <HiClipboardList className="w-5 h-5" />
                    Tour Details
                  </button>

                  <button
                    onClick={() => setActiveTab("terms")}
                    className={`flex-1 px-4 py-3 rounded-lg font-medium
                      transition-all duration-200 flex items-center
                       justify-center gap-2 ${activeTab === "terms"
                        ? "bg-green-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    <HiDocumentText className="w-5 h-5" />
                    Policy
                  </button>
                </div>
              </div>

              <div className="p-6 min-h-[600px]">{renderContent()}</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <button
                onClick={handleDownloadClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white
                 font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg
                 transform hover:-translate-y-0.5 transition-all duration-200
                  flex items-center justify-center gap-3"
              >
                <HiDownload className="w-6 h-6" />
                View PDF
              </button>
              <PricingPdf />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//!static view
// "use client";

// import { useState } from "react";
// import {
//   HiClipboardList,
//   HiDocumentText,
//   HiDownload,
//   HiMap,
// } from "react-icons/hi";
// import InclusionExclusionPdf from "./pdf/InclusionExclusionPdf";
// import IternaryPdf from "./pdf/IternaryPdf";
// import TermsConditions from "./pdf/TermsConditions";

// type TabType = "itinerary" | "inclusion" | "terms";

// interface WebScreenProps {
//   onDownloadClick: () => void;
// }

// export default function WebScreen({ onDownloadClick }: WebScreenProps) {
//   const [activeTab, setActiveTab] = useState<TabType>("itinerary");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "itinerary":
//         return <IternaryPdf />;
//       case "inclusion":
//         return <InclusionExclusionPdf />;
//       case "terms":
//         return <TermsConditions />;
//       default:
//         return <IternaryPdf />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">
//             Kashmir Tour
//           </h1>
//           <p className="text-gray-600">Explore the Paradise on Earth</p>
//         </div>

//         {/* Main Layout - 30/70 Split */}
//         <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
//           {/* Left Content Area - 70% */}
//           <div className="lg:col-span-7">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               {/* Tab Buttons */}
//               <div className="border-b border-gray-200">
//                 <div className="flex gap-2 p-4">
//                   <button
//                     onClick={() => setActiveTab("itinerary")}
//                     className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === "itinerary"
//                         ? "bg-green-600 text-white shadow-md"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                       }`}
//                   >
//                     <HiMap className="w-5 h-5" />
//                     Itinerary
//                   </button>

//                   <button
//                     onClick={() => setActiveTab("inclusion")}
//                     className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === "inclusion"
//                         ? "bg-green-600 text-white shadow-md"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                       }`}
//                   >
//                     <HiClipboardList className="w-5 h-5" />
//                     Tour Details
//                   </button>

//                   <button
//                     onClick={() => setActiveTab("terms")}
//                     className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${activeTab === "terms"
//                         ? "bg-green-600 text-white shadow-md"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                       }`}
//                   >
//                     <HiDocumentText className="w-5 h-5" />
//                     Policy
//                   </button>
//                 </div>
//               </div>

//               {/* Content Area */}
//               <div className="p-6 min-h-[600px]">{renderContent()}</div>
//             </div>
//           </div>
//           {/* Right Sidebar - 30% */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
//               <button
//                 onClick={onDownloadClick}
//                 className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3"
//               >
//                 <HiDownload className="w-6 h-6" />
//                 Download PDF
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
