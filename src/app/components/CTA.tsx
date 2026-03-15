import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 to-[#00ff88]/10"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Trade Your <span className="gradient-text">Ideas?</span>
        </h2>
        <p className="text-[#8888a0] text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of innovators protecting and monetizing their intellectual property on the world&apos;s most secure platform.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/marketplace" className="btn-primary text-lg px-8 py-4">
            Start Exploring
          </Link>
          <Link href="/dashboard" className="btn-secondary text-lg px-8 py-4">
            Create Account
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-[#8888a0]">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No setup fees
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            2% transaction fee
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Legal certificates
          </span>
        </div>
      </div>
    </section>
  );
}
