'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 glass">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#06b6d4] flex items-center justify-center">
            <span className="text-[#0a0a0f] font-bold text-lg">IX</span>
          </div>
          <span className="font-semibold text-lg hidden sm:block">Innovation Exchange</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/marketplace" className="text-[#8888a0] hover:text-[#f0f0f5] transition-colors">
            Marketplace
          </Link>
          <Link href="/#how-it-works" className="text-[#8888a0] hover:text-[#f0f0f5] transition-colors">
            How It Works
          </Link>
          <Link href="/#features" className="text-[#8888a0] hover:text-[#f0f0f5] transition-colors">
            Features
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-[#f0f0f5] hover:text-[#00ff88] transition-colors font-medium">
            Sign In
          </button>
          <Link href="/marketplace" className="btn-primary">
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-[#f0f0f5]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-[#2a2a3a]">
          <div className="flex flex-col p-6 gap-4">
            <Link href="/marketplace" className="text-[#f0f0f5] py-2">
              Marketplace
            </Link>
            <Link href="/#how-it-works" className="text-[#f0f0f5] py-2">
              How It Works
            </Link>
            <Link href="/#features" className="text-[#f0f0f5] py-2">
              Features
            </Link>
            <hr className="border-[#2a2a3a]" />
            <button className="text-left text-[#f0f0f5] py-2">Sign In</button>
            <Link href="/marketplace" className="btn-primary text-center">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
