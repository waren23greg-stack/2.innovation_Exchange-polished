import { features } from '../data';
import { 
  FingerPrintIcon, 
  LockClosedIcon, 
  ShieldCheckIcon, 
  ChartBarIcon, 
  ScaleIcon, 
  DocumentTextIcon 
} from '@heroicons/react/24/outline';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Fingerprint: FingerPrintIcon,
  Lock: LockClosedIcon,
  ShieldCheck: ShieldCheckIcon,
  BarChart3: ChartBarIcon,
  Scale: ScaleIcon,
  FileSignature: DocumentTextIcon,
};

const gradientMap: Record<string, string> = {
  Fingerprint: 'from-rose-500 to-red-600',
  Lock: 'from-violet-500 to-purple-600',
  ShieldCheck: 'from-emerald-500 to-green-600',
  BarChart3: 'from-cyan-500 to-blue-600',
  Scale: 'from-amber-500 to-orange-600',
  FileSignature: 'from-pink-500 to-rose-600',
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]"></div>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121a]/80 border border-[#2a2a3a] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
            <span className="text-sm text-[#8888a0]">Enterprise Security</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Bank-Grade <span className="gradient-text">Protection</span> for Your Ideas
          </h2>
          <p className="text-[#8888a0] text-lg max-w-2xl mx-auto">
            Military-grade encryption and immutable blockchain timestamps ensure your intellectual property remains secure and verifiable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const gradient = gradientMap[feature.icon] || 'from-[#00ff88] to-[#06b6d4]';
            return (
              <div
                key={index}
                className="group relative glass rounded-2xl p-8 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00ff88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                </div>
                
                <h3 className="relative font-semibold text-xl mb-3 text-[#f0f0f5]">{feature.title}</h3>
                <p className="relative text-[#8888a0] leading-relaxed">{feature.description}</p>
                
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#00ff88]/10 to-transparent rounded-full blur-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
