"use client";

import Image from "next/image";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import logo from "../../assets/logo.svg";

export default function HeaderPdf() {
  return (
    <header className="h-[36vh] relative text-white">
      {/* Background gradient + subtle radial accents */}
      <div
        className="absolute inset-0 bg-linear-to-r from-emerald-800
       via-emerald-700 to-emerald-600 overflow-hidden"
      >
        <div
          className="absolute w-80 h-80 bg-emerald-400/20
        rounded-full -top-20 -left-20 blur-3xl animate-pulse-slow"
        />
        <div
          className="absolute w-64 h-64 bg-white/10
        rounded-full -bottom-16 -right-16 blur-2xl"
        />
      </div>

      <div
        className="relative max-w-[210mm] mx-auto px-12 py-8 flex
      justify-between items-start h-full"
      >
        {/* LEFT — BRAND */}
        <div className="flex flex-col gap-4 w-2/3">
          <div
            className="w-36 h-36 bg-white rounded-2xl p-5 border
           border-emerald-300 shadow-xl hrink-0 relative"
          >
            <Image
              src={logo}
              alt="Leisure Club Holidays"
              className="object-contain w-full h-full"
              priority
            />
            {/* Subtle glow around logo */}
            <div
              className="absolute inset-0 rounded-2xl
             shadow-[0_0_50px_rgba(255,255,255,0.15)] pointer-events-none"
            ></div>
          </div>

          <h1
            className="text-[52px] font-extrabold leading-[1.05]
          tracking-tight bg-linear-to-r from-white
           via-emerald-200 to-white bg-clip-text text-transparent"
          >
            LEISURE CLUB
            <br />
            <span className="text-emerald-300">HOLIDAYS</span>
          </h1>

          <p
            className="text-sm font-semibold uppercase
           tracking-widest text-emerald-200 italic"
          >
            Your Journey… Our Passion
          </p>
        </div>

        {/* RIGHT — SUPPORT INFO */}
        <div className="flex flex-col justify-start text-right space-y-4 w-1/2">
          <div
            className="flex items-center justify-end gap-3
          text-[15px] text-white font-semibold group hover:scale-105 t
          ransition-transform duration-300"
          >
            <span>+91 94226 38006</span>
            <MdPhone className="text-emerald-300 text-lg " />
          </div>

          <div
            className="flex items-center justify-end gap-3 text-[15px]
           text-white font-semibold group hover:scale-105 transition-transform duration-300"
          >
            <span>+91 88066 29967</span>
            <MdPhone className="text-emerald-300 text-lg " />
          </div>

          <div
            className="flex items-center justify-end gap-3 text-[15px]
           text-white font-semibold group hover:scale-105 transition-transform duration-300"
          >
            <span>santosh@leisureclubholidays.in</span>
            <MdEmail className="text-emerald-300 text-lg " />
          </div>

          <div
            className="flex items-center justify-end gap-3 text-[15px]
           text-white font-semibold group hover:scale-105 transition-transform duration-300"
          >
            <span>sonia@leisureclubholidays.in</span>
            <MdEmail className="text-emerald-300 text-lg " />
          </div>

          <div className="flex items-start justify-end gap-3 text-[15px] text-white font-semibold pt-2 leading-snug">
            <p>Govind Apt, Pinto Colony, Jailroad, Nashik – 422101</p>
            <MdLocationOn className="text-emerald-300 text-2xl " />
          </div>
        </div>
      </div>
    </header>
  );
}
