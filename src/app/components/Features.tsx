import { features } from '../data';
import { Fingerprint, Lock, ShieldCheck, BarChart3, Scale, FileSignature } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Fingerprint,
  Lock,
  ShieldCheck,
  BarChart3,
  Scale,
  FileSignature,
};

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
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00ff88]/10 to-[#06b6d4]/10 border border-[#2a2a3a] flex items-center justify-center mb-4">
                  {Icon && <Icon className="w-7 h-7 text-[#00ff88]" />}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-[#8888a0] text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
