'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScoreMeter from '../components/ScoreMeter';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('portfolio');

  const portfolioIdeas = [
    { id: '0x7f3a...8b2c', title: 'Decentralized Identity Protocol', price: 45000, score: 92, status: 'available', views: 1247 },
    { id: '0x9a2b...4e1f', title: 'AI-Powered Drug Discovery Platform', price: 125000, score: 88, status: 'in-escrow', views: 2891 },
  ];

  const recentActivity = [
    { type: 'view', idea: 'Decentralized Identity Protocol', time: '2 hours ago' },
    { type: 'offer', idea: 'Quantum-Resigned Ledger System', details: 'Offer received: $52,000', time: '5 hours ago' },
    { type: 'nda', idea: 'Neural Interface for Stroke Rehabilitation', details: 'NDA signed by Acme Corp', time: '1 day ago' },
    { type: 'sale', idea: 'Solid-State Battery Manufacturing', details: 'Sold for $210,000', time: '3 days ago' },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-[#8888a0]">Manage your ideas and portfolio</p>
            </div>
            <button className="btn-primary">
              + Submit New Idea
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="glass rounded-xl p-6">
              <p className="text-[#8888a0] text-sm mb-1">Portfolio Value</p>
              <p className="text-2xl font-bold gradient-text">$170,000</p>
              <p className="text-xs text-[#00ff88] mt-1">+12% this month</p>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-[#8888a0] text-sm mb-1">Total Ideas</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-[#8888a0] mt-1">2 in escrow</p>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-[#8888a0] text-sm mb-1">Total Views</p>
              <p className="text-2xl font-bold">8,432</p>
              <p className="text-xs text-[#00ff88] mt-1">+24% this week</p>
            </div>
            <div className="glass rounded-xl p-6">
              <p className="text-[#8888a0] text-sm mb-1">Avg Score</p>
              <p className="text-2xl font-bold">86</p>
              <p className="text-xs text-[#8888a0] mt-1">Innovation rating</p>
            </div>
          </div>

          <div className="flex gap-2 mb-6 border-b border-[#2a2a3a]">
            {['portfolio', 'activity', 'offers', 'settings'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium transition-colors capitalize ${
                  activeTab === tab
                    ? 'text-[#00ff88] border-b-2 border-[#00ff88]'
                    : 'text-[#8888a0] hover:text-[#f0f0f5]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'portfolio' && (
            <div className="space-y-4">
              {portfolioIdeas.map(idea => (
                <div key={idea.id} className="glass rounded-xl p-6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <ScoreMeter score={idea.score} size="sm" />
                    <div>
                      <h3 className="font-semibold text-lg">{idea.title}</h3>
                      <p className="text-sm text-[#8888a0] font-mono">{idea.id}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="font-semibold">${idea.price.toLocaleString()}</p>
                      <span className={`text-xs ${
                        idea.status === 'available' ? 'text-[#00ff88]' : 
                        idea.status === 'in-escrow' ? 'text-[#fbbf24]' : 'text-[#ef4444]'
                      }`}>
                        {idea.status === 'available' ? 'Available' : 'In Escrow'}
                      </span>
                    </div>
                    <div className="text-right text-sm text-[#8888a0]">
                      <p>{idea.views.toLocaleString()} views</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn-secondary py-2 px-4 text-sm">Edit</button>
                      <Link href={`/idea/${idea.id}`} className="btn-primary py-2 px-4 text-sm">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="glass rounded-xl divide-y divide-[#2a2a3a]">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-6 flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'view' ? 'bg-[#06b6d4]/20 text-[#06b6d4]' :
                    activity.type === 'offer' ? 'bg-[#7c3aed]/20 text-[#7c3aed]' :
                    activity.type === 'nda' ? 'bg-[#fbbf24]/20 text-[#fbbf24]' :
                    'bg-[#00ff88]/20 text-[#00ff88]'
                  }`}>
                    {activity.type === 'view' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                    {activity.type === 'offer' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {activity.type === 'nda' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {activity.type === 'sale' && (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.idea}</p>
                    {activity.details && (
                      <p className="text-sm text-[#8888a0]">{activity.details}</p>
                    )}
                  </div>
                  <span className="text-sm text-[#8888a0]">{activity.time}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'offers' && (
            <div className="glass rounded-xl p-8 text-center">
              <p className="text-[#8888a0]">No active offers</p>
              <button className="mt-4 text-[#00ff88] hover:underline">Browse marketplace</button>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="glass rounded-xl p-8">
              <h3 className="font-semibold mb-6">Account Settings</h3>
              <div className="space-y-6 max-w-md">
                <div>
                  <label className="block text-sm text-[#8888a0] mb-2">Display Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-[#2a2a3a] text-[#f0f0f5] focus:outline-none focus:border-[#00ff88]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#8888a0] mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-[#2a2a3a] text-[#f0f0f5] focus:outline-none focus:border-[#00ff88]"
                  />
                </div>
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
