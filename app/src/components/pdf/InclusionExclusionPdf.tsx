"use client";

import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useTour } from "../../contexts/TourPackageContext";

export default function InclusionExclusionPdf() {
  const { data } = useTour();

  if (data.inclusions.length === 0 && data.exclusions.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto py-4 px-3 print:p-0 print:max-w-none">
      <div className="border-b-2 border-black pb-4 mb-5">
        <h1 className="text-3xl font-bold text-black border-b-2 border-black pb-2">
          Inclusions & Exclusions
        </h1>
        <p className="text-black mt-1">
          {data.tourTitle} • {data.duration}
        </p>
      </div>

      {data.inclusions.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black mb-3">Cost Includes</h2>
          <ul className="text-sm text-black space-y-2">
            {data.inclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.exclusions.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-black mb-3">Cost Excludes</h2>
          <ul className="text-sm text-black space-y-2">
            {data.exclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaTimesCircle className="text-red-600 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
//! inc exc kashmir
// !with icon
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// export default function InclusionExclusionPdf() {
//   return (
//     <div
//       className="max-w-4xl mx-auto py-4 px-3 sm:px-4 md:px-6
//      bg-white print:p-0 print:max-w-none"
//     >
//       <div className="text-left border-b border-gray-300 pb-4 mb-5">
//         <h1
//           className="text-3xl font-semibold text-gray-900 border-b
//          border-gray-300 pb-2"
//         >
//           Inclusions & Exclusions
//         </h1>
//         <p className="text-sm text-gray-600 mt-1">
//           Kashmir Tour Package • 06 Nights / 07 Days
//         </p>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold text-gray-900 mb-3">Cost Includes</h2>
//         <ul className="text-sm text-gray-800 space-y-2 pl-5">
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Welcome drink on arrival in every hotel</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Accommodation for 06 Nights</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Breakfast & Dinner included everywhere</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Cable Car rides in Gulmarg Phase I & Phase II</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Trip to Chandanwari, Betaab Valley & Aru in Pahalgam</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Transport Services as per the itinerary</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>01 Cab Sightseeing Tour Pick up & Drop</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>All toll taxes</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Drivers allowance</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Parking charge</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>01 Hour Shikara ride in famous Dal Lake</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Free use of Internet</span>
//           </li>
//         </ul>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold text-gray-900 mb-3">Cost Excludes</h2>
//         <ul className="text-sm text-gray-800 space-y-2 pl-5">
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Expenses of personal nature such as tips, laundry, telephone &
//               table Drinks etc.
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>Internal Airfare</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>Garden entrance fee Rs 20–50 per person per garden</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Pony Ride in Gulmarg / Pahalgam / Sonmarg (depends on place)
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Local Taxi from zero point in Sonamarg (depends on cab you hire)
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>GST</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
// !without icon
// export default function InclusionExclusionPdf() {
//   return (
//     <div
//       className="max-w-4xl mx-auto py-4 px-3 sm:px-4 md:px-6
//      bg-white print:p-0 print:max-w-none"
//     >
//       <div className="text-left border-b border-gray-300 pb-4 mb-5">
//         <h1
//           className="text-3xl font-semibold text-gray-900 border-b
//          border-gray-300 pb-2"
//         >
//           Inclusions & Exclusions
//         </h1>
//         <p className="text-sm text-gray-600 mt-1">
//           Kashmir Tour Package • 06 Nights / 07 Days
//         </p>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold text-gray-900 mb-3">Cost Includes</h2>
//         <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
//           <li>Welcome drink on arrival in every hotel</li>
//           <li>Accommodation for 06 Nights</li>
//           <li>Breakfast & Dinner included everywhere</li>
//           <li>Cable Car rides in Gulmarg Phase I & Phase II</li>
//           <li>Trip to Chandanwari, Betaab Valley & Aru in Pahalgam</li>
//           <li>Transport Services as per the itinerary</li>
//           <li>01 Cab Sightseeing Tour Pick up & Drop</li>
//           <li>All toll taxes</li>
//           <li>Drivers allowance</li>
//           <li>Parking charge</li>
//           <li>01 Hour Shikara ride in famous Dal Lake</li>
//           <li>Free use of Internet</li>
//         </ul>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold text-gray-900 mb-3">Cost Excludes</h2>
//         <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
//           <li>
//             Expenses of personal nature such as tips, laundry, telephone & table
//             Drinks etc.
//           </li>
//           <li>Internal Airfare</li>
//           <li>Garden entrance fee Rs 20–50 per person per garden</li>
//           <li>Pony Ride in Gulmarg / Pahalgam / Sonmarg (depends on place)</li>
//           <li>
//             Local Taxi from zero point in Sonamarg (depends on cab you hire)
//           </li>
//           <li>GST</li>
//         </ul>
//       </div>
//     </div>
//   );
// }
//! inc exc bhutan
// !with icon
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// export default function InclusionExclusionPdf() {
//   return (
//     <div className="max-w-4xl mx-auto py-4 px-3 sm:px-4 md:px-6 bg-white print:p-0 print:max-w-none">
//       <div className="text-left border-b border-gray-300 pb-4 mb-5">
//         <h1 className="text-3xl font-semibold text-gray-900 border-b border-gray-300 pb-2">
//           Inclusions & Exclusions
//         </h1>
//         <p className="text-sm text-gray-600 mt-1">
//           Bhutan Tour Package • 07 Nights / 08 Days
//         </p>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold text-gray-900 mb-3">Cost Includes</h2>
//         <ul className="text-sm text-gray-800 space-y-2 pl-5">
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Rates are in Indian Rupees (INR), Nett & Non-commissionable
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Per person rates valid only for Indian Nationals / Passport
//               Holders
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>Meet & Greet service upon arrival</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Accommodation as per itinerary on specified meal plan – Twin
//               Sharing Basis
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Services of a Trip Leader (Guide) during Bhutan portion only (as
//               per itinerary)
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>1 Bottle of packaged drinking water per person per day</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Airport / Station transfer IXB (Bagdogra) ↔ Phuentsholing by 1
//               Xylo / similar (max 06 heads per vehicle)
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>
//               01 AC Car – Hyundai Santa Fe / Tucson / similar (suitable for
//               maximum 02 Pax + 02 seats (Driver + Guide))
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>
//               All transfers & sightseeing by dedicated vehicle (point-to-point
//               basis, not disposal) as per itinerary
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaCheckCircle className="text-green-600 mt-1 shrink-0 text-lg" />
//             <span>GST (Goods and Service Tax) included</span>
//           </li>
//         </ul>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold text-gray-900 mb-3">Cost Excludes</h2>
//         <ul className="text-sm text-gray-800 space-y-2 pl-5">
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               E-Permit / Sustainable Development Fee (SDF) charged by Royal
//               Government of Bhutan
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               TCS (Tax Collected at Source) – applicable for Indian Nationals
//               w.e.f. 01/10/2020 (calculated on total invoice amount including
//               GST – charged extra)
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>Air tickets (quoted separately unless mentioned)</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Any supplementary / optional tours or upgradation charges
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Entrance fees / camera fees at monuments & places of interest
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Train fare, rafting charges or any adventure activity charges
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>Any service requested on personal basis</span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Personal expenses: laundry, soft drinks, mini-bar, porterage,
//               tips, telephone calls, etc.
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Any other service / item not specifically mentioned under “Cost
//               Includes”
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Extra vehicle usage cost beyond scheduled itinerary (extra km /
//               extra hours)
//             </span>
//           </li>
//           <li className="flex items-start gap-2">
//             <FaTimesCircle className="text-red-600 mt-1 shrink-0 text-lg" />
//             <span>
//               Cost difference due to unforeseen events: natural calamities,
//               landslides, road blocks, political unrest, mishaps, etc.
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
//! without icon
// export default function InclusionExclusionPdf() {
//   return (
//     <div className="max-w-4xl mx-auto py-4 px-3 sm:px-4 md:px-6 bg-white print:p-0 print:max-w-none">
//       <div className="text-left border-b border-gray-300 pb-4 mb-5">
//         <h1 className="text-3xl font-semibold text-gray-900 border-b border-gray-300 pb-2">
//           Inclusions & Exclusions
//         </h1>
//         <p className="text-sm text-gray-600 mt-1">
//           Bhutan Tour Package • 07 Nights / 08 Days
//         </p>
//       </div>

//       <div className="mb-8">
//         <h2 className="text-xl font-bold text-gray-900 mb-3">Cost Includes</h2>
//         <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
//           <li>Rates are in Indian Rupees (INR), Nett & Non-commissionable</li>
//           <li>
//             Per person rates valid only for Indian Nationals / Passport Holders
//           </li>
//           <li>Meet & Greet service upon arrival</li>
//           <li>
//             Accommodation as per itinerary on specified meal plan – Twin Sharing
//             Basis
//           </li>
//           <li>
//             Services of a Trip Leader (Guide) during Bhutan portion only (as per
//             itinerary)
//           </li>
//           <li>1 Bottle of packaged drinking water per person per day</li>
//           <li>
//             Airport / Station transfer IXB (Bagdogra) ↔ Phuentsholing by 1 Xylo
//             / similar (max 06 heads per vehicle)
//           </li>
//           <li>
//             01 AC Car – Hyundai Santa Fe / Tucson / similar (suitable for
//             maximum 02 Pax + 02 seats (Driver + Guide))
//           </li>
//           <li>
//             All transfers & sightseeing by dedicated vehicle (point-to-point
//             basis, not disposal) as per itinerary
//           </li>
//           <li>GST (Goods and Service Tax) included</li>
//         </ul>
//       </div>

//       <div>
//         <h2 className="text-xl font-bold text-gray-900 mb-3">Cost Excludes</h2>
//         <ul className="text-sm text-gray-800 space-y-2 list-disc pl-5">
//           <li>
//             E-Permit / Sustainable Development Fee (SDF) charged by Royal
//             Government of Bhutan
//           </li>
//           <li>
//             TCS (Tax Collected at Source) – applicable for Indian Nationals
//             w.e.f. 01/10/2020 (calculated on total invoice amount including GST
//             – charged extra)
//           </li>
//           <li>Air tickets (quoted separately unless mentioned)</li>
//           <li>Any supplementary / optional tours or upgradation charges</li>
//           <li>Entrance fees / camera fees at monuments & places of interest</li>
//           <li>Train fare, rafting charges or any adventure activity charges</li>
//           <li>Any service requested on personal basis</li>
//           <li>
//             Personal expenses: laundry, soft drinks, mini-bar, porterage, tips,
//             telephone calls, etc.
//           </li>
//           <li>
//             Any other service / item not specifically mentioned under “Cost
//             Includes”
//           </li>
//           <li>
//             Extra vehicle usage cost beyond scheduled itinerary (extra km /
//             extra hours)
//           </li>
//           <li>
//             Cost difference due to unforeseen events: natural calamities,
//             landslides, road blocks, political unrest, mishaps, etc.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
