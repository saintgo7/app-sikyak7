import React from 'react';

interface HealthMetricBadgeProps {
  label: string;
  value: string;
  status: 'normal' | 'warning' | 'danger';
  unit?: string;
}

const statusColors = {
  normal:  { bg: '#F0FDF4', text: '#166534', dot: '#22C55E' },
  warning: { bg: '#FFFBEB', text: '#92400E', dot: '#F59E0B' },
  danger:  { bg: '#FEF2F2', text: '#991B1B', dot: '#EF4444' },
};

const statusLabels = { normal: 'Normal', warning: 'Borderline', danger: 'High' };

const HealthMetricBadge: React.FC<HealthMetricBadgeProps> = ({ label, value, status, unit }) => {
  const colors = statusColors[status];
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-600 font-korean">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-800">{value} {unit}</span>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full"
          style={{ background: colors.bg, color: colors.text }}
        >
          {statusLabels[status]}
        </span>
      </div>
    </div>
  );
};

export default HealthMetricBadge;
