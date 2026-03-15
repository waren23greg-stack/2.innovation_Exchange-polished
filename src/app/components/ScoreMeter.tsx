'use client';

interface ScoreMeterProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function ScoreMeter({ score, size = 'md' }: ScoreMeterProps) {
  const getColor = () => {
    if (score >= 70) return '#00ff88';
    if (score >= 40) return '#fbbf24';
    return '#ef4444';
  };

  const dimensions = {
    sm: { size: 48, stroke: 3, fontSize: 'text-xs' },
    md: { size: 64, stroke: 4, fontSize: 'text-sm' },
    lg: { size: 96, stroke: 6, fontSize: 'text-xl' },
  };

  const { size: dimension, stroke, fontSize } = dimensions[size];
  const radius = (dimension - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative" style={{ width: dimension, height: dimension }}>
      <svg className="transform -rotate-90" width={dimension} height={dimension}>
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke="#2a2a3a"
          strokeWidth={stroke}
        />
        <circle
          cx={dimension / 2}
          cy={dimension / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-bold ${fontSize}`} style={{ color: getColor() }}>
          {score}
        </span>
      </div>
    </div>
  );
}
