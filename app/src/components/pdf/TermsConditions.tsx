"use client";
export default function TermsConditions() {
  return (
    <section className="w-full px-6 py-8 text-gray-700">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Title */}
        <h2
          className="text-3xl font-semibold text-gray-900 border-b
         border-gray-300 pb-2"
        >
          Our Terms and Conditions
        </h2>

        <p className="text-sm leading-relaxed">
          At <span className="font-medium">Leisure Club Holidays</span>,
          transparency and client satisfaction are our priority. Kindly read the
          following Terms & Conditions carefully before confirming your holiday
          booking.
        </p>

        {/* Airfare */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Airfare & Seasonal Information
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>
              Airfare is dynamic and subject to availability at the time of
              booking.
            </li>
            <li>
              Rates may vary during festivals, peak seasons, long weekends, or
              holidays.
            </li>
            <li>
              Christmas & New Year gala dinner charges apply as per hotel
              policy.
            </li>
            <li>Alternate hotels may be provided in case of unavailability.</li>
            <li>
              Guests must adhere to prevailing Covid-19 or government travel
              guidelines.
            </li>
          </ul>
        </div>

        {/* Costing */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Costing Notes
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Any upgrades or changes may attract additional charges.</li>
            <li>
              Extra charges may apply for hotel amenities like spa, gym,
              minibar, heater, etc.
            </li>
            <li>No refunds for unused or missed services.</li>
            <li>
              Adventure activities are subject to weather and government
              regulations.
            </li>
            <li>
              Extra costs due to natural calamities or political disturbances
              are payable by guests.
            </li>
          </ul>
        </div>

        {/* General */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            General Policies
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>
              All communication must be in writing; verbal discussions are not
              binding.
            </li>
            <li>Services will be provided strictly as per booking voucher.</li>
            <li>Meal timings and transfer schedules must be followed.</li>
            <li>Base category rooms are booked unless specified otherwise.</li>
          </ul>
        </div>

        {/* Transfers */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Transfer Guidelines
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>
              Waiting time at hotels is limited to 10 minutes for private
              transfers.
            </li>
            <li>
              Airport pickup waiting time is maximum 1 hour after landing.
            </li>
            <li>SIC transfers operate on fixed schedules and routes.</li>
            <li>Missed transfers due to late arrival are non-refundable.</li>
            <li>Luggage allowance: 1 suitcase + 1 hand bag per person.</li>
          </ul>
        </div>

        {/* Hotel */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Hotel Accommodation Policies
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Standard check-in: 15:00 hrs | Check-out: 10:00 hrs.</li>
            <li>Early check-in / late check-out subject to availability.</li>
            <li>Children below 2 years stay free without extra bed.</li>
            <li>Special meal requests may incur additional charges.</li>
            <li>Hotels may collect a refundable security deposit.</li>
          </ul>
        </div>

        {/* Payment */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Payment Policy
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>50% advance required to confirm booking.</li>
            <li>Balance payment due 30 days before arrival.</li>
            <li>Premium / international packages require 100% advance.</li>
            <li>All payments are subject to prevailing exchange rates.</li>
          </ul>
        </div>

        {/* Cancellation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Cancellation & Refund Policy
          </h3>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>All cancellations must be submitted in writing.</li>
            <li>Advance and token amounts are non-refundable.</li>
            <li>
              Cancellation within 30 days or no-show attracts 100% charges.
            </li>
            <li>
              Refunds, if applicable, are processed after deducting actual
              costs.
            </li>
            <li>
              Force majeure cases may receive non-encashable credit notes.
            </li>
          </ul>
        </div>

        {/* Pricing */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Services with Indian Pricing
          </h3>
          <p className="text-sm leading-relaxed">
            All services are quoted in Indian Rupees (INR) inclusive of
            applicable GST. Prices may change due to supplier policies, fuel
            hikes, or government regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
