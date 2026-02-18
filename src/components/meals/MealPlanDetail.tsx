import React from 'react';

const nutritionData = [
  { label: 'Calories', value: '450 kcal', pct: 70 },
  { label: 'Carbs', value: '15g', pct: 45 },
  { label: 'Protein', value: '32g', pct: 80 },
  { label: 'Fat', value: '12g', pct: 35 },
];

const ingredients = [
  { name: 'Seasonal Greens', benefit: '해독, 비타민 풍부', icon: '🥬' },
  { name: 'Gochujang Sauce', benefit: '장 건강, 신진대사', icon: '🌶️' },
  { name: 'Egg', benefit: '단백질, 뇌 건강', icon: '🥚' },
  { name: 'Fiber, Sustained Energy', benefit: '식이섬유, 지속 에너지', icon: '🌾' },
];

const MealPlanDetail: React.FC = () => (
  <div className="grid lg:grid-cols-5 gap-6">
      {/* Left: Food Image */}
      <div className="lg:col-span-3 space-y-5">
        <div className="forest-card overflow-hidden">
          <div className="h-56"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=600&h=400&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold font-korean mb-1" style={{ color: '#1B4332' }}>
              건강 비빔밥 (AI 맞춤)
            </h2>
            <p className="text-sm text-gray-500 font-korean">
              개인 건강 데이터 기반으로 선별된 약선 비빔밥
            </p>
          </div>
        </div>

        {/* Ingredients */}
        <div className="forest-card p-5">
          <h3 className="text-base font-bold font-korean mb-3" style={{ color: '#1B4332' }}>
            Ingredients & Medicinal Benefits (Food as Medicine)
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {ingredients.map(ing => (
              <div key={ing.name} className="flex items-start gap-3 p-3 rounded-xl"
                style={{ background: '#F0FDF4' }}>
                <span className="text-xl">{ing.icon}</span>
                <div>
                  <p className="text-sm font-semibold font-korean text-gray-800">{ing.name}</p>
                  <p className="text-xs text-gray-500 font-korean">{ing.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Nutrition + AI Tips */}
      <div className="lg:col-span-2 space-y-5">
        <div className="forest-card p-5">
          <h3 className="text-base font-bold font-korean mb-3" style={{ color: '#1B4332' }}>
            Nutritional Breakdown
          </h3>
          <div className="space-y-3">
            {nutritionData.map(n => (
              <div key={n.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-korean text-gray-600">{n.label}</span>
                  <span className="text-sm font-bold text-gray-800">{n.value}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${n.pct}%`, background: '#2D6A4F' }} />
                </div>
                <p className="text-xs text-gray-400 mt-0.5">Daily recommended intake</p>
              </div>
            ))}
          </div>
        </div>

        <div className="forest-card p-5">
          <h3 className="text-base font-bold font-korean mb-3" style={{ color: '#1B4332' }}>
            AI Health Tips for You
          </h3>
          <ul className="space-y-2 text-sm font-korean text-gray-600">
            <li className="flex gap-2"><span style={{ color: '#52B788' }}>•</span> 이 식단은 소화력 향상과 에너지 공급에 효과적입니다.</li>
            <li className="flex gap-2"><span style={{ color: '#52B788' }}>•</span> 한방 재료와 페어링하여 더 좋은 효과를 보세요.</li>
            <li className="flex gap-2"><span style={{ color: '#52B788' }}>•</span> 식이섬유가 혈당을 안정적으로 유지합니다.</li>
          </ul>
        </div>
      </div>
    </div>
);

export default MealPlanDetail;
