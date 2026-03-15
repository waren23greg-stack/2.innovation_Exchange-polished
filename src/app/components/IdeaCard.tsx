'use client';

import Link from 'next/link';
import { Idea } from '../data';
import ScoreMeter from './ScoreMeter';

interface IdeaCardProps {
  idea: Idea;
}

export default function IdeaCard({ idea }: IdeaCardProps) {
  const getStatusColor = () => {
    switch (idea.status) {
      case 'available': return 'text-[#00ff88]';
      case 'in-escrow': return 'text-[#fbbf24]';
      case 'sold': return 'text-[#ef4444]';
    }
  };

  const getStatusText = () => {
    switch (idea.status) {
      case 'available': return 'Available';
      case 'in-escrow': return 'In Escrow';
      case 'sold': return 'Sold';
    }
  };

  return (
    <Link href={`/idea/${idea.id}`}>
      <div className="glass rounded-xl p-6 card-hover h-full flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#7c3aed]/20 text-[#7c3aed] mb-3">
              {idea.category}
            </span>
            <h3 className="font-semibold text-lg leading-tight mb-2">{idea.title}</h3>
            <p className="text-[#8888a0] text-sm line-clamp-2">{idea.description}</p>
          </div>
          <ScoreMeter score={idea.score} size="sm" />
        </div>

        <div className="mt-auto pt-4 border-t border-[#2a2a3a] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center text-xs font-bold">
              {idea.owner.avatar}
            </div>
            <span className="text-sm text-[#8888a0]">{idea.owner.name}</span>
          </div>

          <div className="text-right">
            <p className="font-semibold text-lg">${idea.price.toLocaleString()}</p>
            <span className={`text-xs ${getStatusColor()}`}>{getStatusText()}</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-[#8888a0]">
          <span className="font-mono">{idea.id}</span>
          <span>{idea.views.toLocaleString()} views</span>
        </div>
      </div>
    </Link>
  );
}
