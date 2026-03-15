export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Idea',
      description: 'Upload your idea with detailed documentation. Our system creates a unique SHA-256 fingerprint and timestamps it on the blockchain.',
    },
    {
      number: '02',
      title: 'Secure & Trade',
      description: 'Add layers of encryption for progressive disclosure. Set your price and negotiate with potential buyers through secure escrow.',
    },
    {
      number: '03',
      title: 'Transfer Ownership',
      description: 'Complete the transaction with legal IP certificates. Full ownership transfer recorded on the immutable ledger.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#12121a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-[#8888a0] text-lg max-w-2xl mx-auto">
            Three simple steps to protect and trade your intellectual property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%+20px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-[#2a2a3a] to-transparent"></div>
              )}
              
              <div className="glass rounded-xl p-8 h-full">
                <span className="text-6xl font-bold gradient-text opacity-30">{step.number}</span>
                <h3 className="font-semibold text-xl mt-4 mb-3">{step.title}</h3>
                <p className="text-[#8888a0] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
