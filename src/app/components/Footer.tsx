import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a3a] bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#06b6d4] flex items-center justify-center">
                <span className="text-[#0a0a0f] font-bold text-lg">IX</span>
              </div>
              <span className="font-semibold text-lg">Innovation Exchange</span>
            </div>
            <p className="text-[#8888a0] max-w-md">
              The world&apos;s first cryptographically secured intellectual property marketplace — where ideas become legally tradeable assets.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/marketplace" className="text-[#8888a0] hover:text-[#00ff88] transition-colors">Marketplace</Link></li>
              <li><Link href="/#how-it-works" className="text-[#8888a0] hover:text-[#00ff88] transition-colors">How It Works</Link></li>
              <li><Link href="/#features" className="text-[#8888a0] hover:text-[#00ff88] transition-colors">Features</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#8888a0] hover:text-[#00ff88] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#8888a0] hover:text-[#00ff88] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[#8888a0] hover:text-[#00ff88] transition-colors">IP Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a2a3a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#8888a0] text-sm">
            &copy; 2026 Innovation Exchange. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-[#8888a0]">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              SHA-256 Secured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
