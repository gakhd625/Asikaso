"use client";

import { services } from "@/data/services";
import { ServiceCard } from "@/components";
import { AlertCircle, Lightbulb } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-blue-950 mb-4">
            Government Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Choose a service below to access step-by-step instructions and official government links.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-linear-to-r from-blue-950 to-blue-900 border-l-4 border-amber-400 rounded-lg p-6 sm:p-8 mb-12 shadow-lg">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-white mb-2 text-lg">Recommended Application Order</h3>
              <p className="text-blue-100 leading-relaxed">
                For first-time job seekers, we recommend applying in this order: <span className="text-amber-300 font-semibold">SSS → PhilHealth → Pag-IBIG → NBI Clearance → BIR(TIN)</span>. Most employers require all four documents.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-blue-950 mb-8">
            All Services ({services.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-7">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-7 sm:p-8 mt-12 shadow-md">
          <div className="flex items-start gap-4 mb-4">
            <Lightbulb className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <h3 className="font-serif font-bold text-amber-950 text-xl">Pro Tips for Beginners</h3>
          </div>
          <ul className="space-y-3 text-amber-900">
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold text-lg leading-none">✓</span>
              <span className="text-base">Always use official government websites ending in <span className="font-semibold">.gov.ph</span> domains</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold text-lg leading-none">✓</span>
              <span className="text-base">Prepare and organize valid IDs before starting any application process</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold text-lg leading-none">✓</span>
              <span className="text-base">Take screenshots or save your application reference numbers and confirmation emails</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold text-lg leading-none">✓</span>
              <span className="text-base">Always check for schedule availability before visiting government branches</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-600 font-bold text-lg leading-none">✓</span>
              <span className="text-base">Beware of scams and unauthorized fixers offering quick services</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t-2 border-slate-200 text-center">
          <p className="text-gray-700 text-sm mb-2">
            This is an informational guide only. Always verify information on official Philippine government websites.
          </p>
          <p className="text-gray-500 text-xs">
            Asikaso © {new Date().getFullYear()} • A Philippine Government Services Guide • Made with 🇵🇭 for Filipinos
          </p>
        </footer>
      </div>
    </div>
  );
}
