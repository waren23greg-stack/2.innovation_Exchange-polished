'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ScoreMeter from '@/app/components/ScoreMeter';
import { mockIdeas, Idea, Layer } from '@/app/data';

export default function IdeaDetail() {
  const params = useParams();
  const [activeLayer, setActiveLayer] = useState<number | null>(1);
  const [showOfferModal, setShowOfferModal] = useState(false);

  const idea: Idea = mockIdeas.find((i: Idea) => i.id === params.id) || mockIdeas[0];

  const getStatusBadge = () => {
    switch (idea.status) {
      case 'available': return { bg: 'bg-[#00ff88]/20', text: 'text-[#00ff88]', label: 'Available' };
      case 'in-escrow': return { bg: 'bg-[#fbbf24]/20', text: 'text-[#fbbf24]', label: 'In Escrow' };
      case 'sold': return { bg: 'bg-[#ef4444]/20', text: 'text-[#ef4444]', label: 'Sold' };
      default: return { bg: 'bg-[#2a2a3a]/20', text: 'text-[#8888a0]', label: 'Unknown' };
    }
  };

  const status = getStatusBadge();

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/marketplace" className="inline-flex items-center gap-2 text-[#8888a0] hover:text-[#f0f0f5] mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Marketplace
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glass rounded-xl p-8 mb-6">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#7c3aed]/20 text-[#7c3aed] mb-3">
                      {idea.category}
                    </span>
                    <h1 className="text-3xl font-bold mb-2">{idea.title}</h1>
                    <p className="text-[#8888a0]">{idea.description}</p>
                  </div>
                  <ScoreMeter score={idea.score} size="lg" />
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <span className={`px-3 py-1 rounded-full ${status.bg} ${status.text}`}>
                    {status.label}
                  </span>
                  <span className="flex items-center gap-1 text-[#8888a0]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    SHA-256 Secured
                  </span>
                  <span className="text-[#8888a0] font-mono">{idea.id}</span>
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h2 className="text-xl font-semibold mb-6">5-Layer CID Vault</h2>
                <div className="space-y-4">
                  {idea.layers.map((layer: Layer) => (
                    <div
                      key={layer.id}
                      className={`rounded-lg border transition-all ${
                        layer.unlocked
                          ? 'border-[#00ff88] bg-[#00ff88]/5'
                          : 'border-[#2a2a3a] bg-[#12121a]'
                      }`}
                    >
                      <button
                        onClick={() => setActiveLayer(layer.unlocked ? layer.id : null)}
                        className="w-full p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            layer.unlocked ? 'bg-[#00ff88] text-[#0a0a0f]' : 'bg-[#2a2a3a] text-[#8888a0]'
                          }`}>
                            {layer.id}
                          </div>
                          <div className="text-left">
                            <p className="font-medium">{layer.name}</p>
                            <p className="text-sm text-[#8888a0]">{layer.description}</p>
                          </div>
                        </div>
                        {layer.unlocked ? (
                          <svg className="w-5 h-5 text-[#00ff88]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-[#8888a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        )}
                      </button>
                      {activeLayer === layer.id && layer.unlocked && layer.content && (
                        <div className="px-4 pb-4 pt-2 border-t border-[#00ff88]/20">
                          <p className="text-[#f0f0f5] pl-12">{layer.content}</p>
                        </div>
                      )}
                      {!layer.unlocked && (
                        <div className="px-4 pb-4 pt-2 border-t border-[#2a2a3a]">
                          <p className="text-[#8888a0] text-sm pl-12">Purchase to unlock this layer</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass rounded-xl p-6 sticky top-24">
                <div className="mb-6">
                  <p className="text-[#8888a0] text-sm mb-1">Asking Price</p>
                  <p className="text-4xl font-bold gradient-text">${idea.price.toLocaleString()}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8888a0]">Innovation Score</span>
                    <span className="font-medium">{idea.score}/100</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8888a0]">Views</span>
                    <span className="font-medium">{idea.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8888a0]">Listed</span>
                    <span className="font-medium">{idea.createdAt}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="btn-primary w-full py-3">
                    Buy Now
                  </button>
                  <button 
                    onClick={() => setShowOfferModal(true)}
                    className="btn-secondary w-full py-3"
                  >
                    Make Offer
                  </button>
                </div>

                <hr className="my-6 border-[#2a2a3a]" />

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center font-bold">
                    {idea.owner.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{idea.owner.name}</p>
                    <p className="text-sm text-[#8888a0]">Idea Owner</p>
                  </div>
                </div>

                <button className="w-full mt-4 py-2 text-sm text-[#8888a0] hover:text-[#00ff88] transition-colors">
                  Send NDA Request
                </button>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-4">Innovation Metrics</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Novelty', value: 95 },
                    { label: 'Market Potential', value: 88 },
                    { label: 'Technical Feasibility', value: 82 },
                    { label: 'Scalability', value: 90 },
                  ].map(metric => (
                    <div key={metric.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#8888a0]">{metric.label}</span>
                        <span>{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-[#2a2a3a] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00ff88] to-[#06b6d4]"
                          style={{ width: `${metric.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showOfferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="glass rounded-xl p-8 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Make an Offer</h3>
            <p className="text-[#8888a0] mb-6">Submit your offer for &quot;{idea.title}&quot;</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#8888a0] mb-2">Your Offer ($)</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-[#2a2a3a] text-[#f0f0f5] focus:outline-none focus:border-[#00ff88]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#8888a0] mb-2">Message (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Add a message to the owner..."
                  className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-[#2a2a3a] text-[#f0f0f5] focus:outline-none focus:border-[#00ff88] resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowOfferModal(false)}
                className="btn-secondary flex-1 py-3"
              >
                Cancel
              </button>
              <button className="btn-primary flex-1 py-3">
                Submit Offer
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
