'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Lock, Globe, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/60 to-[#0a0a0f]"></div>
      
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#00ff88]/20 to-[#06b6d4]/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-[#7c3aed]/20 to-[#06b6d4]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-[#00ff88]/30 to-transparent"></div>
        <div className="absolute top-1/3 right-20 w-px h-48 bg-gradient-to-b from-transparent via-[#7c3aed]/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#06b6d4]/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#12121a]/90 border border-[#2a2a3a] mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse shadow-[0_0_10px_#00ff88]"></span>
            <span className="text-sm text-[#8888a0]">Now Live — Trade Ideas Securely</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            The Global Stock Market
            <br />
            <span className="gradient-text">for Ideas</span>
          </h1>

          <p className="text-xl text-[#8888a0] max-w-2xl mx-auto mb-10 leading-relaxed">
            Cryptographically secured intellectual property marketplace — where ideas become legally tradeable assets with full ownership protection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/marketplace" className="group btn-primary text-lg px-8 py-4 flex items-center gap-2">
              Explore Ideas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/dashboard" className="btn-secondary text-lg px-8 py-4">
              Submit Your Idea
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
          <div className="glass rounded-2xl p-6 text-center hover:border-[#00ff88]/30 transition-colors">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#06b6d4]/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#00ff88]" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-[#f0f0f5]">2,400+</p>
            <p className="text-sm text-[#8888a0] mt-1">Ideas Listed</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover:border-[#7c3aed]/30 transition-colors">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#7c3aed]/20 to-[#06b6d4]/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#7c3aed]" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-[#f0f0f5]">$48M</p>
            <p className="text-sm text-[#8888a0] mt-1">Volume Traded</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover:border-[#06b6d4]/30 transition-colors">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#06b6d4]/20 to-[#00ff88]/20 flex items-center justify-center">
              <Globe className="w-6 h-6 text-[#06b6d4]" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-[#f0f0f5]">15K+</p>
            <p className="text-sm text-[#8888a0] mt-1">Active Users</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-[#8888a0]">
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#00ff88]" />
            SHA-256 Encrypted
          </span>
          <span className="w-1 h-1 rounded-full bg-[#2a2a3a]"></span>
          <span>Zero-Knowledge Proofs</span>
          <span className="w-1 h-1 rounded-full bg-[#2a2a3a]"></span>
          <span>Escrow Protected</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#2a2a3a] flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-[#8888a0] animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
