"use client";
export default function AboutUsPdf() {
  return (
    <section className="w-full px-6 py-8 text-gray-700">
      <div className="max-w-5xl mx-auto space-y-4">
        {/* Heading */}
        <h2
          className="text-3xl font-semibold text-gray-900 border-b
         border-gray-300 pb-2"
        >
          About Us
        </h2>

        {/* Content */}
        <p className="text-sm leading-relaxed">
          Since its introduction,{" "}
          <span className="font-medium">Leisure Club Holidays</span> has been
          handling both outbound as well as domestic tours. Whether it is a
          completely custom-made tour or a ready-made holiday package, we cater
          to diverse travel needs with precision and care.
        </p>

        <p className="text-sm leading-relaxed">
          Leisure Club Holidays promotes a tourism culture driven by innovation
          and specializes in introducing new concepts to the travel market. Our
          approach is centered on creating meaningful and memorable travel
          experiences.
        </p>

        <p className="text-sm leading-relaxed">
          Our team members are passionate travelers who have explored numerous
          destinations across the globe. Their first-hand experiences and
          insights enable us to recommend destinations and itineraries that best
          suit our clients.
        </p>

        <p className="text-sm leading-relaxed">
          By combining our intuitive travel knowledge with our clients’
          preferences, we deliver thoughtfully curated tour packages that ensure
          comfort, excitement, and satisfaction at every step.
        </p>
      </div>
    </section>
  );
}
