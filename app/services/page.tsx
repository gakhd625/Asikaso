"use client";

import { services } from "@/data/services";
import { ServiceCard } from "@/components";
import { AlertCircle, Lightbulb } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl mb-4">
            Government Services
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed muted">
            Choose a service below to access step-by-step instructions and official government links.
          </p>
        </div>

        {/* Info Banner */}
        <div className="rounded-lg p-6 sm:p-8 mb-12 shadow-sm" style={{backgroundColor:'rgba(19,133,255,0.06)', borderLeft: '4px solid rgba(19,133,255,0.12)'}}>
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6" style={{color:'var(--accent-blue)'}} />
            <div>
              <h3 className="font-serif font-bold mb-2 text-lg" style={{color:'var(--primary-navy)'}}>Recommended Application Order</h3>
              <p className="muted leading-relaxed">
                For first-time job seekers, we recommend applying in this order: <span className="font-semibold">SSS → PhilHealth → Pag-IBIG → NBI Clearance</span>. Most employers require all four documents.
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
        <div className="rounded-lg p-7 sm:p-8 mt-12 shadow-sm" style={{backgroundColor:'rgba(107,114,128,0.05)', border:'1px solid rgba(107,114,128,0.06)'}}>
          <div className="flex items-start gap-4 mb-4">
            <Lightbulb className="w-6 h-6" style={{color:'var(--accent-blue)'}} />
            <h3 className="font-serif font-bold text-xl" style={{color:'var(--primary-navy)'}}>Pro Tips for Beginners</h3>
          </div>
          <ul className="space-y-3 muted">
            <li className="flex items-start gap-3">
              <span className="font-bold text-lg leading-none">✓</span>
              <span className="text-base">Always use official government websites ending in <span className="font-semibold">.gov.ph</span> domains</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-lg leading-none">✓</span>
              <span className="text-base">Prepare and organize valid IDs before starting any application process</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-lg leading-none">✓</span>
              <span className="text-base">Take screenshots or save your application reference numbers and confirmation emails</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-lg leading-none">✓</span>
              <span className="text-base">Always check for schedule availability before visiting government branches</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-lg leading-none">✓</span>
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
