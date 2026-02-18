import React, { useState } from 'react';
import HealthGauge from './HealthGauge';

const gaugeData = [
  { label: '혈당', value: 105, unit: 'mg/dL', status: 'warning' as const, max: 200 },
  { label: 'LDL 콜레스테롤', value: 130, unit: 'mg/dL', status: 'warning' as const, max: 200 },
  { label: 'BMI', value: 25, unit: '', status: 'normal' as const, min: 10, max: 40 },
];

const therapyFoods = [
  {
    name: '구기자 닭백숙',
    category: '당뇨 관리',
    effect: '혈당 안정화, 항산화 작용',
    ingredients: ['구기자', '닭고기', '황기', '대추'],
    tag: '혈당 조절',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=200&fit=crop',
  },
  {
    name: '하수오 흑임자죽',
    category: '고혈압 케어',
    effect: '혈압 조절, 신장 보호',
    ingredients: ['하수오', '흑임자', '찹쌀', '꿀'],
    tag: '혈압 안정',
    img: 'https://images.unsplash.com/photo-1559409358-2e1a18eb3bd0?w=400&h=200&fit=crop',
  },
  {
    name: '인삼 두부조림',
    category: '면역 강화',
    effect: '면역력 증진, 피로 회복',
    ingredients: ['인삼', '두부', '마늘', '간장'],
    tag: '면역 강화',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=200&fit=crop',
  },
  {
    name: '연자육 팥죽',
    category: '콜레스테롤 개선',
    effect: 'LDL 감소, 심혈관 보호',
    ingredients: ['연자육', '팥', '찹쌀', '대추'],
    tag: '심혈관 건강',
    img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=200&fit=crop',
  },
];

const conditionFoods: Record<string, { name: string; desc: string; img: string }[]> = {
  diabetes: [
    { name: '여주 볶음', desc: '혈당 강하, 인슐린 유사 성분', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=180&fit=crop' },
    { name: '우엉 조림', desc: '식이섬유 풍부, 혈당 완만 상승', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=180&fit=crop' },
    { name: '콩나물 무침', desc: '저칼로리, 혈당 안정', img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=300&h=180&fit=crop' },
  ],
  hypertension: [
    { name: '미역 줄기 볶음', desc: '칼륨 풍부, 나트륨 배출', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=180&fit=crop' },
    { name: '셀러리 무침', desc: '혈압 강하 피탈라이드 성분', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=180&fit=crop' },
    { name: '검은콩 조림', desc: '안토시아닌, 혈관 건강', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=180&fit=crop' },
  ],
};

const FoodTherapyPage: React.FC = () => {
  const [activeCondition, setActiveCondition] = useState<'diabetes' | 'hypertension'>('diabetes');

  return (
    <div className="space-y-6">
      {/* Health Indicators */}
      <div className="forest-card p-6">
        <h3 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
          현재 건강 지표
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {gaugeData.map(g => (
            <HealthGauge key={g.label} {...g} />
          ))}
        </div>
      </div>

      {/* Food Therapy Recommendations */}
      <div className="forest-card p-6">
        <h3 className="text-lg font-bold font-korean mb-1" style={{ color: '#1B4332' }}>
          약선 음식 추천
        </h3>
        <p className="text-sm text-gray-500 font-korean mb-5">
          식약동원(食藥同源) — 음식으로 건강을 다스립니다
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {therapyFoods.map(food => (
            <div
              key={food.name}
              className="rounded-xl overflow-hidden border border-gray-300 hover:border-green-200 transition-colors"
            >
              <div className="h-36"
                style={{ backgroundImage: `url(${food.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-base font-bold font-korean text-gray-800">{food.name}</p>
                    <p className="text-xs text-gray-500 font-korean">{food.category}</p>
                  </div>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full font-korean flex-shrink-0"
                    style={{ background: '#DCFCE7', color: '#166534' }}
                  >
                    {food.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-korean mb-3">{food.effect}</p>
                <div className="flex flex-wrap gap-1.5">
                  {food.ingredients.map(ing => (
                    <span
                      key={ing}
                      className="text-xs px-2 py-0.5 rounded-full font-korean"
                      style={{ background: '#F0FDF4', color: '#1B4332' }}
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Condition-specific Dashboard */}
      <div className="forest-card p-6">
        <h3 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
          질환별 전문 식단
        </h3>
        <div className="flex gap-3 mb-5">
          {(['diabetes', 'hypertension'] as const).map(cond => (
            <button
              key={cond}
              onClick={() => setActiveCondition(cond)}
              className="px-4 py-2 rounded-full text-sm font-korean font-medium transition-all"
              style={
                activeCondition === cond
                  ? { background: '#1B4332', color: '#FFFFFF' }
                  : { background: '#F0FDF4', color: '#1B4332' }
              }
            >
              {cond === 'diabetes' ? '당뇨 특화' : '고혈압 특화'}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {conditionFoods[activeCondition].map(food => (
            <div key={food.name} className="rounded-xl overflow-hidden border border-gray-300">
              <div className="h-28"
                style={{ backgroundImage: `url(${food.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-3" style={{ background: '#F0FDF4' }}>
                <p className="text-sm font-bold font-korean text-gray-800 mb-1">{food.name}</p>
                <p className="text-xs text-gray-500 font-korean leading-relaxed">{food.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodTherapyPage;
