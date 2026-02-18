import React from 'react';
import NutritionChart from '../components/NutritionChart';
import DeliveryCalendar from '../components/DeliveryCalendar';
import RecommendationCard from '../components/RecommendationCard';

const recommendations = [
  { name: '아스파라거스를 곁들인 연어 찜', imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop' },
  { name: '퀴노아 케일 샐러드', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop' },
  { name: '구운 뿌리채소 모듬', imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop' },
];

const DashboardHome: React.FC = () => (
  <div className="grid lg:grid-cols-2 gap-6">
    {/* Left: Nutrition Chart */}
    <NutritionChart />

    {/* Right */}
    <div className="space-y-6">
      {/* Recommendations */}
      <div className="forest-card p-6">
        <h3 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>맞춤 추천</h3>
        <div className="grid grid-cols-3 gap-3">
          {recommendations.map(r => (
            <RecommendationCard key={r.name} name={r.name} imageUrl={r.imageUrl} />
          ))}
        </div>
      </div>

      {/* Calendar */}
      <DeliveryCalendar />
    </div>
  </div>
);

export default DashboardHome;
