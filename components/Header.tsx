import Link from "next/link";
import { FileText } from "lucide-react";

export function Header() {
  return (
    <header className="bg-blue-950 border-b-4 border-amber-400 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 bg-amber-400 rounded-md flex items-center justify-center 
              group-hover:bg-amber-300 transition-colors shadow-md"
            >
              <FileText className="w-6 h-6 text-blue-950 font-bold" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white font-serif">
                Asikaso
              </h1>
              <p className="text-xs text-blue-200 hidden sm:block">
                PH Government Services
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-blue-100 hover:text-amber-400 transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-blue-100 hover:text-amber-400 transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              href="https://www.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-100 hover:text-amber-400 transition-colors 
              hidden sm:inline-flex items-center gap-1 relative group"
            >
              Gov.ph
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
