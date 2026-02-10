import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asikaso - PH Government Services Guide",
  description:
    "A beginner-friendly guide for Philippine government online applications including NBI Clearance, SSS, Pag-IBIG, and PhilHealth registration.",
  keywords: [
    "NBI Clearance",
    "SSS",
    "Pag-IBIG",
    "PhilHealth",
    "Philippine Government",
    "Guide",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased bg-slate-50 min-h-screen`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
