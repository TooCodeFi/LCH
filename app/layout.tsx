import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TourProvider } from "./src/contexts/TourPackageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tour Package Creator",
  description: "Extract and create tour packages",
};

// Add this line
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TourProvider>{children}</TourProvider>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { TourProvider } from "./src/contexts/TourPackageContext";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Tour Package Creator",
//   description: "Extract and create tour packages",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <TourProvider>{children}</TourProvider>
//       </body>
//     </html>
//   );
// }
