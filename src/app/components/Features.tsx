import { features } from '../data';

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-Grade <span className="gradient-text">Security</span>
          </h2>
          <p className="text-[#8888a0] text-lg max-w-2xl mx-auto">
            Every idea is protected by military-grade encryption and immutable blockchain timestamps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00ff88]/20 to-[#06b6d4]/20 flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-[#8888a0] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
