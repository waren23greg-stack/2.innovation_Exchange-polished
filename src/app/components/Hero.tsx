'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ff88]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06b6d4]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121a] border border-[#2a2a3a] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
          <span className="text-sm text-[#8888a0]">Now live on Vercel</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The Global Stock Market
          <br />
          <span className="gradient-text">for Ideas</span>
        </h1>

        <p className="text-xl text-[#8888a0] max-w-2xl mx-auto mb-12">
          Cryptographically secure intellectual property marketplace — where ideas become legally tradeable assets with full ownership protection.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/marketplace" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
            Explore Ideas
          </Link>
          <Link href="/dashboard" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
            Submit Your Idea
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">2,400+</p>
            <p className="text-sm text-[#8888a0] mt-1">Ideas Listed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">$48M</p>
            <p className="text-sm text-[#8888a0] mt-1">Volume Traded</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">15K+</p>
            <p className="text-sm text-[#8888a0] mt-1">Active Users</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#8888a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
