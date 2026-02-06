"use client";
import { useTour } from "../../contexts/TourPackageContext";

export default function PricingPdf() {
  const { data } = useTour();
  if (!data.tourTitle) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-5 print:p-0 print:max-w-none">
      {/* <div className="border-b-2 border-black pb-4 mb-5">
        <h2 className="text-2xl font-bold text-black">Tour Pricing</h2>
      </div> */}
      <div className="space-y-4 text-black text-[15px]">
        <p className="text-3xl font-bold text-black border-b-2 border-black pb-2">
          {data.tourTitle}
        </p>
        <div className="border-b-2 border-black pb-4 mb-5">
          <h2 className="text-2xl font-bold text-black">Tour Pricing</h2>
        </div>

        <p className="font-bold text-black">{data.duration}</p>
        <p className="text-xl font-bold text-green-700">
          {data.price} /{" "}
          <span className="text-sm text-black">{data.priceTerm}</span>
        </p>
        <p className="text-sm text-black italic">{data.priceNote}</p>
      </div>
    </div>
  );
}
//!this is static only
// type PricingPdfProps = {
//   title: string;
//   duration: string;
//   price: string;
//   note?: string;
//   myterm: string;
// };

// export default function PricingPdf({
//   title,
//   duration,
//   price,
//   myterm,
//   note = "* Cost for private tour with twin/double sharing room",
// }: PricingPdfProps) {
//   return (
//     <div
//       className="max-w-4xl mx-auto px-4 py-5 sm:px-5 md:px-6 print:p-0
//      print:max-w-none"
//     >
//       <div className="border-b border-gray-300 pb-4 mb-5">
//         <h2 className="text-2xl font-semibold text-gray-900">Tour Pricing</h2>
//       </div>

//       <div className="space-y-4 text-gray-800 text-[15px] leading-relaxed">
//         <div>
//           <p
//             className="text-3xl font-semibold text-gray-900 border-b
//          border-gray-300 pb-2"
//           >
//             {title}
//           </p>
//         </div>

//         <div>
//           <p className="font-medium">{duration}</p>
//         </div>

//         <div>
//           <p className="text-xl font-bold text-green-700">
//             {price} / <span className="text-sm text-gray-600">{myterm}</span>
//           </p>
//         </div>

//         {note && (
//           <div>
//             <p className="text-sm text-gray-600 italic">{note}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
