import React from 'react';
import { Check } from 'lucide-react';

interface PlanCardProps {
  name: string;
  price: number;
  annualPrice?: number;
  isAnnual: boolean;
  description: string;
  features: string[];
  isHighlighted?: boolean;
  badge?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  name, price, annualPrice, isAnnual, description, features, isHighlighted, badge
}) => {
  const displayPrice = isAnnual && annualPrice ? annualPrice : price;

  return (
    <div
      className="rounded-2xl p-7 flex flex-col relative"
      style={isHighlighted
        ? { background: '#1B4332', color: '#FFFFFF', border: '2px solid #1B4332' }
        : { background: '#FFFFFF', border: '1px solid #E5E7EB' }
      }
    >
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: '#52B788', color: '#FFFFFF' }}>
          {badge}
        </span>
      )}

      <h3 className="text-lg font-bold font-korean mb-2" style={{ color: isHighlighted ? '#B7E4C7' : '#1B4332' }}>
        {name}
      </h3>
      <div className="mb-2">
        <span className="text-4xl font-black" style={{ color: isHighlighted ? '#FFFFFF' : '#1B4332' }}>
          ₩{displayPrice.toLocaleString()}
        </span>
        <span className="text-sm ml-1" style={{ color: isHighlighted ? '#B7E4C7' : '#6B7280' }}>/ month</span>
      </div>
      {isAnnual && (
        <p className="text-xs mb-3 font-korean" style={{ color: isHighlighted ? '#B7E4C7' : '#52B788' }}>
          연간 결제 시 20% 할인 적용
        </p>
      )}
      <p className="text-sm mb-5 font-korean leading-relaxed"
        style={{ color: isHighlighted ? 'rgba(255,255,255,0.8)' : '#6B7280' }}>
        {description}
      </p>

      <div className="mb-6 flex-1">
        <p className="text-xs font-bold mb-3 font-korean" style={{ color: isHighlighted ? '#B7E4C7' : '#374151' }}>
          Benefits
        </p>
        <ul className="space-y-2">
          {features.map(f => (
            <li key={f} className="flex items-start gap-2 text-sm font-korean"
              style={{ color: isHighlighted ? 'rgba(255,255,255,0.85)' : '#4B5563' }}>
              <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: isHighlighted ? '#B7E4C7' : '#52B788' }} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="w-full py-3 rounded-xl font-bold font-korean text-sm transition-all"
        style={isHighlighted
          ? { background: '#FFFFFF', color: '#1B4332' }
          : { background: '#1B4332', color: '#FFFFFF' }
        }
      >
        Subscribe Now
      </button>
    </div>
  );
};

export default PlanCard;
