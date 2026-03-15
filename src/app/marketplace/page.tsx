'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IdeaCard from '../components/IdeaCard';
import { mockIdeas, categories } from '../data';

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredIdeas = mockIdeas
    .filter(idea => {
      const matchesCategory = selectedCategory === 'All' || idea.category === selectedCategory;
      const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           idea.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-high': return b.price - a.price;
        case 'price-low': return a.price - b.price;
        case 'score': return b.score - a.score;
        default: return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Marketplace</h1>
            <p className="text-[#8888a0]">Discover and trade innovative ideas from around the world</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8888a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search ideas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#12121a] border border-[#2a2a3a] text-[#f0f0f5] placeholder-[#8888a0] focus:outline-none focus:border-[#00ff88]"
                />
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-lg bg-[#12121a] border border-[#2a2a3a] text-[#f0f0f5] focus:outline-none focus:border-[#00ff88]"
              >
                <option value="newest">Newest</option>
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
                <option value="score">Innovation Score</option>
              </select>

              <div className="flex rounded-lg overflow-hidden border border-[#2a2a3a]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-3 ${viewMode === 'grid' ? 'bg-[#00ff88] text-[#0a0a0f]' : 'bg-[#12121a] text-[#8888a0]'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-4 py-3 ${viewMode === 'list' ? 'bg-[#00ff88] text-[#0a0a0f]' : 'bg-[#12121a] text-[#8888a0]'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-[#00ff88] text-[#0a0a0f] font-medium'
                    : 'bg-[#12121a] text-[#8888a0] hover:text-[#f0f0f5] border border-[#2a2a3a]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="text-[#8888a0] mb-6">{filteredIdeas.length} ideas found</p>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredIdeas.map(idea => (
              <IdeaCard key={idea.id} idea={idea} />
            ))}
          </div>

          {filteredIdeas.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#8888a0] text-lg">No ideas found matching your criteria</p>
              <button
                onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                className="mt-4 text-[#00ff88] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
