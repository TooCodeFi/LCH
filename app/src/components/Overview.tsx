"use client";
import {
  AlertTriangle,
  Car,
  Clock,
  FileText,
  MapPin,
  Utensils,
} from "lucide-react";

export default function Overview() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white text-slate-800 antialiased">
      {/* Header */}
      <div className="border-b-2 border-blue-600 pb-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
          <MapPin className="text-blue-600" /> Tour to Jammu and Kashmir
        </h1>
        <p className="text-slate-500 mt-1">
          Official Itinerary Overview & Terms of Service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Accommodation */}
        <div className="p-5 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="flex items-center gap-2 font-bold text-lg text-blue-700 mb-3">
            <Clock size={20} /> Accommodation
          </h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-slate-600">Check-in:</span>{" "}
              After 14:00
            </p>
            <p>
              <span className="font-semibold text-slate-600">Check-out:</span>{" "}
              Before 12:00 PM
            </p>
            <p className="text-xs italic text-slate-400 mt-4 leading-relaxed">
              * Services subject to weather conditions and seasonal periods.
            </p>
          </div>
        </div>

        {/* Food & Allergies */}
        <div className="p-5 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="flex items-center gap-2 font-bold text-lg text-blue-700 mb-3">
            <Utensils size={20} /> Dining & Dietary
          </h2>
          <p className="text-sm leading-relaxed mb-3 text-slate-600">
            Please notify us of any allergies or special diet requests well in
            advance.
          </p>
          <div className="bg-amber-50 p-2 rounded border border-amber-100 text-xs text-amber-800">
            <strong>Note:</strong> Bookings cannot be amended or cancelled
            within 24 hours.
          </div>
        </div>

        {/* Private Transfers */}
        <div className="md:col-span-2 p-5 border border-slate-200 rounded-xl shadow-sm bg-slate-50">
          <h2 className="flex items-center gap-2 font-bold text-lg text-blue-700 mb-3">
            <Car size={20} /> Private Transfers
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="leading-relaxed text-slate-600">
                Transfers are exclusive to your group. To maintain schedule
                integrity, routes are predetermined. Deviations or unscheduled
                stops are not permitted without a surcharge.
              </p>
            </div>
            <div className="space-y-2 border-l border-slate-200 pl-6">
              <p className="font-semibold text-slate-700 underline">
                Airport Arrival Timing:
              </p>
              <p>
                Domestic:{" "}
                <span className="font-medium text-blue-600">
                  2.5 Hours Prior
                </span>
              </p>
              <p>
                International:{" "}
                <span className="font-medium text-blue-600">
                  3.5 Hours Prior
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="md:col-span-2 p-5 border border-slate-200 rounded-xl shadow-sm">
          <h2 className="flex items-center gap-2 font-bold text-lg text-blue-700 mb-3">
            <FileText size={20} /> Documentation & Compliance
          </h2>
          <div className="grid md:grid-cols-3 gap-4 text-xs lg:text-sm text-slate-600">
            <div className="space-y-2">
              <p className="font-bold text-slate-800 underline uppercase tracking-wider text-[10px]">
                Verification
              </p>
              <p>
                Screenshots of ID proof and payment are required for
                confirmation release.
              </p>
            </div>
            <div className="space-y-2 border-x border-slate-100 px-4">
              <p className="font-bold text-slate-800 underline uppercase tracking-wider text-[10px]">
                Validation
              </p>
              <p>
                Approve the confirmation voucher within 24 hours. Errors cannot
                be rectified later.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-slate-800 underline uppercase tracking-wider text-[10px]">
                Required On-Trip
              </p>
              <p>
                Carry hard/digital copies of Voucher, ID, Tickets, Permits, and
                Passport.
              </p>
            </div>
          </div>
        </div>

        {/* Liability Footer */}
        <div className="md:col-span-2 flex items-start gap-3 bg-red-50 p-4 rounded-lg border border-red-100">
          <AlertTriangle className="text-red-600 shrink-0" size={20} />
          <p className="text-xs text-red-800 leading-normal">
            <strong>Liability & Safety:</strong> Adventure activities may
            require an ‘Indemnity Bond’. Leisure Club Holidays holds no
            liability for personal injury, loss, or damage to personal
            belongings during the tour duration.
          </p>
        </div>
      </div>
    </div>
  );
}
