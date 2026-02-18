import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: '단백질', value: 85 },
  { name: '식이섬유', value: 90 },
  { name: '비타민', value: 75 },
  { name: '미네랄', value: 80 },
];

const NutritionChart: React.FC = () => (
  <div className="forest-card p-6">
    <h3 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>주간 영양 밸런스</h3>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 13, fill: '#6B7280', fontFamily: 'Pretendard' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 12, fill: '#9CA3AF' }}
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={v => `${v}%`}
        />
        <Tooltip
          formatter={(v: number) => [`${v}%`]}
          contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((entry, i) => (
            <Cell key={i} fill="#2D6A4F" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default NutritionChart;
