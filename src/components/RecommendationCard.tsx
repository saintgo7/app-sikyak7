import React from 'react';

interface RecommendationCardProps {
  name: string;
  imageUrl?: string;
  onViewDetails?: () => void;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ name, imageUrl, onViewDetails }) => (
  <div className="forest-card overflow-hidden">
    <div
      className="h-28 bg-gray-100 flex items-center justify-center"
      style={
        imageUrl
          ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          : { background: '#DCFCE7' }
      }
    >
      {!imageUrl && <span className="text-3xl">🥗</span>}
    </div>
    <div className="p-3">
      <p className="text-sm font-semibold font-korean text-gray-800 mb-2 line-clamp-2">{name}</p>
      <button
        onClick={onViewDetails}
        className="w-full py-1.5 text-xs font-semibold font-korean border rounded-lg transition-colors"
        style={{ borderColor: '#1B4332', color: '#1B4332' }}
        onMouseOver={e => (e.currentTarget.style.background = '#F0FDF4')}
        onMouseOut={e => (e.currentTarget.style.background = '')}
      >
        자세히 보기
      </button>
    </div>
  </div>
);

export default RecommendationCard;
