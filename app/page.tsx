import Link from "next/link";
import { ArrowRight, FileText, Zap, Flag } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          {/* Government Badge */}
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-blue-950 rounded-full text-amber-400 text-sm font-semibold flex items-center gap-2">
              <Flag className="w-4 h-4" />
              Official Philippine Government Guide
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-blue-950 mb-6 leading-tight">
            Government Services
            <span className="text-amber-400 block mt-2">Made Simple</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10 font-light">
            Clear, step-by-step guides for essential government IDs and
            services. Perfect for first-time job seekers and beginners.
          </p>

          {/* Get Started Button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-blue-950 hover:bg-amber-400 text-white hover:text-blue-950 px-8 sm:px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-blue-950 text-center mb-12">
          Why Choose Asikaso?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-950 rounded-lg mb-4">
              <FileText className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-serif font-bold text-lg text-blue-950 mb-2">
              Easy Guides
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Clear, numbered instructions for every step of the application
              process.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-950 rounded-lg mb-4">
              <Zap className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-serif font-bold text-lg text-blue-950 mb-2">
              Quick Access
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Direct links to official government websites and fast-track to
              applications.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg border-2 border-slate-200 hover:border-blue-300 transition-all hover:shadow-lg text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-950 rounded-lg mb-4">
              <Flag className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-serif font-bold text-lg text-blue-950 mb-2">
              Official Info
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              All information sourced from official Philippine government
              agencies.
            </p>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-blue-950 text-white py-16 sm:py-20 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Explore 5 Essential Services
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            From NBI Clearance to BIR TIN Registration, we guide you through
            each process
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-blue-950 px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-slate-200 mt-16 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-serif font-bold text-blue-950 mb-4">
                About Asikaso
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                A beginner-friendly guide to Philippine government services,
                created to help Filipinos navigate official processes with
                confidence.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-blue-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-blue-950 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-600 hover:text-blue-950 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.gov.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-950 transition-colors"
                  >
                    Gov.ph
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-blue-950 mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.gov.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-950 transition-colors"
                  >
                    Official Government Portal
                  </a>
                </li>
                <li>
                  <span className="text-gray-600">
                    Always verify on official .gov.ph sites
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              This is an informational guide only. Always verify information on
              official government websites.
            </p>
            <p className="text-gray-500 text-xs mt-3">
              Asikaso © {new Date().getFullYear()} • Made with 🇵🇭 for Filipinos
              • A Philippine Government Services Guide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
