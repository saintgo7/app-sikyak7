import React from 'react';

interface HealthGaugeProps {
  label: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'danger';
  min?: number;
  max?: number;
}

const statusColors = { normal: '#22C55E', warning: '#F59E0B', danger: '#EF4444' };
const statusLabels = { normal: 'Normal', warning: 'Caution', danger: 'High' };

const HealthGauge: React.FC<HealthGaugeProps> = ({ label, value, unit, status, min = 0, max = 200 }) => {
  const pct = Math.min(Math.max((value - min) / (max - min), 0), 1);
  const color = statusColors[status];

  // SVG arc path
  const cx = 60, cy = 60, r = 45;
  const startAngle = -180;
  const endAngle = startAngle + pct * 180;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startAngle));
  const y1 = cy + r * Math.sin(toRad(startAngle));
  const x2 = cx + r * Math.cos(toRad(endAngle));
  const y2 = cy + r * Math.sin(toRad(endAngle));
  const largeArc = pct > 0.5 ? 1 : 0;

  return (
    <div className="forest-card p-4 text-center">
      <svg viewBox="0 0 120 70" className="w-full max-w-[120px] mx-auto">
        {/* Background arc */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Value arc */}
        {pct > 0 && (
          <path
            d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
          />
        )}
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1F2937">
          {value}
        </text>
        <text x={cx} y={cy + 22} textAnchor="middle" fontSize="8" fill="#6B7280">
          {unit}
        </text>
      </svg>
      <p className="text-sm font-semibold font-korean text-gray-700 mt-1">{label}</p>
      <span
        className="text-xs font-medium px-2 py-0.5 rounded-full"
        style={{ background: color + '20', color }}
      >
        {statusLabels[status]}
      </span>
    </div>
  );
};

export default HealthGauge;
