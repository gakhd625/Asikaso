import Link from "next/link";
import { FileText, X } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Announcement bar */}
      {/* <div className="w-full" style={{ backgroundColor: 'var(--accent-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-white text-sm">
            <div className="flex items-center gap-3">
              <span className="inline-block px-2 py-0.5 rounded-full bg-white/15 text-xs font-semibold">NEW</span>
              <span>Introducing Funnels: Build conversion funnels to collect leads and grow your community <a href="#" className="underline font-medium">Learn how</a></span>
            </div>
            <button aria-label="close announcement" className="opacity-90 hover:opacity-100">
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div> */}

      {/* Main nav */}
      <div className="bg-white" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,58,97,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                {/* <div
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: 'var(--accent-blue)' }}
                >
                  <FileText className="w-5 h-5" style={{ color: 'white' }} />
                </div> */}
                <span className="font-serif font-bold" style={{ color: 'var(--primary-navy)' }}>Asikaso</span>
              </Link>
            </div>

            {/* <nav className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm text-gray-700">
                <div className="relative group">
                  <button className="flex items-center gap-2">Explore <span className="text-xs">▾</span></button>
                </div>
                <div className="relative group">
                  <button className="flex items-center gap-2">Features <span className="text-xs">▾</span></button>
                </div>
                <div className="relative group">
                  <button className="flex items-center gap-2">Compare <span className="text-xs">▾</span></button>
                </div>
                <Link href="/pricing" className="hover:underline">Pricing</Link>
                <div className="relative group">
                  <button className="flex items-center gap-2">Resources <span className="text-xs">▾</span></button>
                </div>
              </div>
            </nav> */}

            <div className="flex items-center gap-3">
              {/* <Link href="#" className="hidden sm:inline-flex items-center px-4 py-2 rounded-md border text-sm" style={{ borderColor: 'rgba(15,23,42,0.06)', color: 'var(--primary-navy)', backgroundColor: 'white' }}>
                Book a Demo
              </Link> */}
              <Link href="/services" className="inline-flex items-center px-4 py-2 rounded-md text-sm btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
