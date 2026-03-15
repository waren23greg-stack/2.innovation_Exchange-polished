'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-18 glass border-b border-[#2a2a3a]/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-[#00ff88]/20 group-hover:scale-105 transition-transform">
            <span className="text-[#0a0a0f] font-bold text-lg">IX</span>
          </div>
          <span className="font-semibold text-lg text-[#f0f0f5] hidden sm:block">Innovation Exchange</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/marketplace" className="text-[#8888a0] hover:text-[#f0f0f5] transition-colors font-medium">
            Marketplace
          </Link>
          <Link href="/#how-it-works" className="text-[#8888a0] hover:text-[#f0f0f5] transition-colors font-medium">
            How It Works
          </Link>
          <Link href="/#features" className="text-[#8888a0] hover:text-[#f0f0f5] transition-colors font-medium">
            Features
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-[#f0f0f5] hover:text-[#00ff88] transition-colors font-medium">
            Sign In
          </button>
          <Link href="/marketplace" className="group btn-primary flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <button
          className="md:hidden text-[#f0f0f5] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-[#2a2a3a]">
          <div className="flex flex-col p-6 gap-4">
            <Link href="/marketplace" className="text-[#f0f0f5] py-2 font-medium">
              Marketplace
            </Link>
            <Link href="/#how-it-works" className="text-[#f0f0f5] py-2 font-medium">
              How It Works
            </Link>
            <Link href="/#features" className="text-[#f0f0f5] py-2 font-medium">
              Features
            </Link>
            <hr className="border-[#2a2a3a]" />
            <button className="text-left text-[#f0f0f5] py-2 font-medium">Sign In</button>
            <Link href="/marketplace" className="btn-primary text-center">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
