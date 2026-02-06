"use client";

import Image from "next/image";
import logo from "../../assets/logo.svg";

export default function FooterPdf() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Logo – always first, centered */}
        <div className="w-48 sm:w-56 md:w-64 max-w-full">
          <Image
            src={logo}
            alt="Leisure Club Holidays"
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Services */}
        <div className="text-center">
          <h4 className="text-base font-semibold mb-3">Our Services</h4>
          <ul className="space-y-1.5 text-sm">
            <li>International & Domestic Holidays</li>
            <li>Visa Assistance</li>
            <li>Travel Insurance</li>
            <li>Forex Services</li>
            <li>Passport Services</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h4 className="text-base font-semibold mb-3">Connect With Us</h4>
          <ul className="space-y-2 text-sm flex flex-col items-center">
            <li>
              <a
                href="https://leisureclubholidays.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black underline"
              >
                Website
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/leisureclubholidaysnsk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/leisure_club_holidays_23"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@LeisureClubHolidays"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black underline"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/search?q=Leisure+Club+Holidays"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black underline"
              >
                Google Business
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-300 w-full max-w-4xl mt-8 pt-5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Leisure Club Holidays. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
