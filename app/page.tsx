import { services } from "@/data/services";
import { ServiceCard } from "@/components";
import { Info } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Section */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Philippine Government
          <span className="text-blue-600 block sm:inline"> Services Guide</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Simple step-by-step guides for first-time job seekers and beginners. Learn how to apply
          for essential government IDs and services.
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-5 mb-8 sm:mb-10">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">Getting Started?</h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              If you&apos;re a first-time job seeker, we recommend applying in this order:{" "}
              <strong>SSS → PhilHealth → Pag-IBIG → NBI Clearance</strong>. Most employers require
              all four.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          Choose a Service to Get Started
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 sm:p-6 mt-10">
        <h3 className="font-bold text-amber-900 text-lg mb-3">💡 Pro Tips for Beginners</h3>
        <ul className="space-y-2 text-amber-800 text-sm sm:text-base">
          <li className="flex items-start gap-2">
            <span className="text-amber-600">•</span>
            Always use official government websites (look for .gov.ph domains)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600">•</span>
            Prepare valid IDs before starting any application
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600">•</span>
            Take screenshots of your application reference numbers
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600">•</span>
            Check for schedule availability before visiting branches
          </li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          This is an informational guide only. Always verify information on official government
          websites.
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Asikaso © {new Date().getFullYear()} • Made with 🇵🇭 for Filipinos
        </p>
      </footer>
    </div>
  );
}
