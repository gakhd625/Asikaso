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
            <div className="px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2" style={{backgroundColor: 'rgba(19,133,255,0.08)', color: 'var(--primary-navy)'}}>
              <Flag className="w-4 h-4" />
              Official Philippine Government Guide
            </div>
          </div>

          <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
            Government Services
            <span className="accent mt-2">Made Simple</span>
          </h1>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-light muted">
            Clear, step-by-step guides for essential government IDs and
            services. Perfect for first-time job seekers and beginners.
          </p>

          {/* Get Started Button */}
          <Link
            href="/services"
            className="btn-primary"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12" style={{color:'var(--primary-navy)'}}>
          Why Choose Asikaso?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-lg border transition-all hover:shadow-lg text-center" style={{borderColor:'rgba(15,23,42,0.06)'}}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4" style={{backgroundColor:'rgba(19,133,255,0.08)'}}>
              <FileText className="w-7 h-7" style={{color:'var(--accent-blue)'}} />
            </div>
            <h3 className="font-serif font-bold text-lg mb-2" style={{color:'var(--primary-navy)'}}>
              Easy Guides
            </h3>
            <p className="text-sm leading-relaxed muted">
              Clear, numbered instructions for every step of the application
              process.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg border transition-all hover:shadow-lg text-center" style={{borderColor:'rgba(15,23,42,0.06)'}}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4" style={{backgroundColor:'rgba(19,133,255,0.08)'}}>
              <Zap className="w-7 h-7" style={{color:'var(--accent-blue)'}} />
            </div>
            <h3 className="font-serif font-bold text-lg mb-2" style={{color:'var(--primary-navy)'}}>
              Quick Access
            </h3>
            <p className="text-sm leading-relaxed muted">
              Direct links to official government websites and fast-track to
              applications.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg border transition-all hover:shadow-lg text-center" style={{borderColor:'rgba(15,23,42,0.06)'}}>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4" style={{backgroundColor:'rgba(19,133,255,0.08)'}}>
              <Flag className="w-7 h-7" style={{color:'var(--accent-blue)'}} />
            </div>
            <h3 className="font-serif font-bold text-lg mb-2" style={{color:'var(--primary-navy)'}}>
              Official Info
            </h3>
            <p className="text-sm leading-relaxed muted">
              All information sourced from official Philippine government
              agencies.
            </p>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 sm:py-20 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-lg" style={{backgroundColor:'rgba(19,133,255,0.04)'}}>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4" style={{color:'var(--primary-navy)'}}>
            Explore 5 Essential Services
          </h2>
          <p className="muted mb-8 max-w-2xl mx-auto">
            From NBI Clearance to BIR TIN Registration, we guide you through
            each process
          </p>
          <Link
            href="/services"
            className="btn-primary inline-flex items-center gap-2"
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
              <h4 className="font-serif font-bold mb-4" style={{color:'var(--primary-navy)'}}>
                About Asikaso
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                A beginner-friendly guide to Philippine government services,
                created to help Filipinos navigate official processes with
                confidence.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-4" style={{color:'var(--primary-navy)'}}>
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
              <h4 className="font-serif font-bold mb-4" style={{color:'var(--primary-navy)'}}>
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
