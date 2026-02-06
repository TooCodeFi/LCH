"use client";

import { useTour } from "../../contexts/TourPackageContext";

export default function IternaryPdf() {
  const { data } = useTour();

  return (
    <div className="max-w-4xl mx-auto py-4 px-3 print:p-0 print:max-w-none">
      <div className="border-b-2 border-black pb-4 mb-5">
        <h1 className="text-3xl font-bold text-black border-b-2 border-black pb-2">
          Daywise Itinerary
        </h1>
        <p className="text-black font-bold mt-2">
          {data.itinerarySubtitle || data.duration}
        </p>
        {data.itineraryRoute && (
          <p className="text-black mt-1">{data.itineraryRoute}</p>
        )}
      </div>

      <div className="space-y-6">
        {data.days.length === 0 ? (
          <p className="text-black font-bold">No itinerary days found.</p>
        ) : (
          data.days.map((day) => (
            <div key={day.day} className="border-b border-black pb-4">
              <h2 className="text-lg font-bold text-black mb-2">
                Day {String(day.day).padStart(2, "0")}: {day.title}
              </h2>
              <p className="text-sm text-black leading-relaxed">
                {day.description}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

//!3 kashmir

// export default function IternaryPdf() {
//   return (
//     <div className="max-w-4xl mx-auto py-4 px-3 sm:px-4 md:px-6 bg-white print:p-0 print:max-w-none">
//       <div className="text-left border-b border-gray-300 pb-4 mb-5">
//         <h1 className="text-3xl font-semibold text-gray-900 border-b border-gray-300 pb-2">
//           Kashmir Tour - Daywise Itinerary
//         </h1>
//         <p className="text-sm sm:text-base text-gray-700 mt-2">
//           06 Nights / 07 Days
//         </p>
//         <p className="text-sm text-gray-600 mt-1">
//           Srinagar → Sonmarg → Pahalgam → Gulmarg → Srinagar
//         </p>
//       </div>

//       <div className="space-y-6 divide-y divide-gray-200">
//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 01: Arrive Srinagar – Local
//           </h2>
//           <p className="text-sm text-gray-700">
//             On arrival at Srinagar Airport welcome by representative and
//             transfer to hotel (≈50 min drive) through city passing Abdullah
//             bridge and along Jhelum river. Check in at hotel. Later visit Mughal
//             Gardens – Nishat Bagh (built 1632 AD) and Shalimar Bagh on banks of
//             Dal Lake with Zabarwan hills in background. Dinner and overnight
//             stay in hotel. Overnight: Srinagar.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 02: Srinagar – Sonmarg – Srinagar
//           </h2>
//           <p className="text-sm text-gray-700">
//             After breakfast full day excursion to Sonamarg (Meadow of Gold,
//             altitude 2690 m), one of the most beautiful drives from Srinagar.
//             Optional pony ride (at own cost) to Thajiwas Glacier where snow
//             remains throughout the year. Return to Srinagar in evening.
//             Overnight: Srinagar.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 03: Srinagar → Pahalgam
//           </h2>
//           <p className="text-sm text-gray-700">
//             After breakfast check out and drive to Pahalgam via National Highway
//             1A passing saffron fields of Pampore, Avantipur ruins, Bijbehara
//             village, Anantnag town. Scenic drive along Lidder river. Arrive
//             Pahalgam, check in at hotel and evening nature walks. Overnight:
//             Pahalgam.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 04: Pahalgam Local
//           </h2>
//           <p className="text-sm text-gray-700">
//             Full day in Pahalgam (Valley of Shepherds). Walk along pony trails
//             with magnificent mountain views. Optional (at own cost) visits to
//             Chandanwadi, Aru village, Betaab Valley or horse ride across
//             wildlife sanctuary to meadows. Evening return to hotel. Dinner and
//             overnight. Overnight: Pahalgam.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 05: Pahalgam → Gulmarg
//           </h2>
//           <p className="text-sm text-gray-700">
//             After breakfast drive to Gulmarg (Meadow of Flowers, altitude 2730
//             m) passing colorful villages and rice fields, through Tangmarg town.
//             Famous for world-class ski slopes and highest 18-hole golf course.
//             If weather clear, view of Nanga Parbat peak. Arrive and check in
//             hotel. Afternoon short tour around meadow. Rest of day at leisure.
//             Overnight: Gulmarg.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 06: Gulmarg – Srinagar
//           </h2>
//           <p className="text-sm text-gray-700">
//             Morning Gondola cable car ride to Afarwat mountain range for
//             stunning valley and peak views. Later optional horse ride to
//             Strawberry Valley. Return to Srinagar and visit local markets for
//             shopping. Overnight: Srinagar.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 07: Srinagar – Departure
//           </h2>
//           <p className="text-sm text-gray-700">
//             After breakfast proceed to Srinagar Airport for departure transfer.
//             Return home with wonderful memories of Kashmir. Tour Ends.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

//!2 bhutan

// export default function IternaryPdf() {
//   return (
//     <div className="max-w-4xl mx-auto py-4 px-3 sm:px-4 md:px-6 bg-white print:p-0 print:max-w-none">
//       <div className="text-left border-b border-gray-300 pb-4 mb-5">
//         <h1 className="text-3xl font-semibold text-gray-900 border-b border-gray-300 pb-2">
//           Bhutan Tour - Daywise Itinerary
//         </h1>
//         <p className="text-sm sm:text-base text-gray-700 mt-2">
//           07 Nights / 08 Days • Drive-in Drive-out
//         </p>
//         <p className="text-sm text-gray-600 mt-1">
//           Phuentsholing (1 Nt) → Thimphu (2 Nts) → Punakha → Paro
//         </p>
//       </div>

//       <div className="space-y-6 divide-y divide-gray-200">
//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 01: Bagdogra → Phuentsholing
//           </h2>
//           <p className="text-sm text-gray-700">
//             Pickup from Bagdogra Airport (IXB) or NJP station and transfer to
//             Phuentsholing (165 km ≈ 4–5 hrs, altitude 293 m). Meet & greet at
//             Bhutan gate, complete immigration and entry formalities with
//             assistance. Check in at hotel. Overnight: Phuentsholing.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 02: Phuentsholing → Thimphu
//           </h2>
//           <p className="text-sm text-gray-700">
//             After breakfast complete any remaining permit/visa formalities and
//             drive to Thimphu (158 km ≈ 5–6 hrs, altitude 2,320 m) through scenic
//             mountain roads. On arrival check in at hotel. Evening free to relax
//             or walk around town. Overnight: Thimphu.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 03: Thimphu Local Sightseeing
//           </h2>
//           <p className="text-sm text-gray-700">
//             Full day sightseeing in Thimphu (altitude 2,320 m) covering
//             Sangaygang View Point (BBS Tower), Buddha Point (Kuensel Phodrang),
//             Institute for Zorig Chusum (Traditional Art & Craft School),
//             Textiles Museum, Handicrafts Shops, Simply Bhutan cultural
//             experience, Motithang Takin Preservation Centre (some places closed
//             on weekends, national holidays or school vacations). Overnight:
//             Thimphu.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 04: Thimphu → Punakha
//           </h2>
//           <p className="text-sm text-gray-700">
//             After breakfast drive to Punakha via Dochula Pass (3,080 m) with
//             beautiful mountain views (weather permitting) (70 km ≈ 3–3.5 hrs,
//             altitude 1,273 m). Visit Punakha Dzong. If time permits walk across
//             Suspension Bridge and short hike (≈30 min one way) to Chimi Lhakhang
//             monastery. Overnight: Punakha / Wangdue.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 05: Punakha → Paro via Lamperi
//           </h2>
//           <p className="text-sm text-gray-700">
//             After breakfast drive to Paro with en-route stop at Royal Botanical
//             Garden in Lamperi (148 km ≈ 4–4.5 hrs, altitude 2,200 m). On arrival
//             check in at hotel. Evening free at leisure. Overnight: Paro.
//           </p>
//         </div>

//         <div className="pt-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-2">
//             Day 06: Paro Local Sightseeing
//           </h2>
//           <p className="text-sm text-gray-700">
//             Full day Paro sightseeing covering Dungtse Lhakhang, Bird’s Eye View
//             Point of Paro Valley and airport (best time 10–11 AM), Ta Dzong
//             (National Museum – closed on national holidays), Rinpung Dzong (Paro
//             Dzong), Kichu Lhakhang (one of the oldest temples). Overnight: Paro.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
