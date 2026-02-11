import Link from "next/link";

export function Header() {
  return (
    <header className="bg-blue-950 border-b-4 border-amber-400 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
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
            <Link
              href="/faqs"
              className="text-sm font-medium text-blue-100 hover:text-amber-400 transition-colors relative group"
            >
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
