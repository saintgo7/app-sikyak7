import React, { useState } from 'react';
import PlanCard from './PlanCard';

const plans = [
  {
    name: 'Basic AI Care',
    price: 99000,
    annualPrice: 79000,
    description: 'AI가 맞춤 설계한 기본 건강 식단',
    features: [
      'Personalized meal delivery',
      'Basic AI nutrition insights',
      'Weekly menu rotation',
      'Access to member community',
    ],
    isHighlighted: false,
  },
  {
    name: 'Intensive Health Care',
    price: 199000,
    annualPrice: 159000,
    description: '당뇨·고혈압 등 건강검진 데이터 기반 집중 관리',
    features: [
      'Includes all Basic Care features',
      'Targeted condition management',
      'Checkup data integration',
      'Low-sodium, low-sugar options',
    ],
    isHighlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Premium Total Care',
    price: 299000,
    annualPrice: 239000,
    description: '전문가 1:1 상담 포함 종합 헬스케어 프로그램',
    features: [
      'Includes all Intensive Care features',
      '1:1 nutrition consultation',
      'Priority support',
      'Exclusive wellness webinars',
      'Quarterly health reviews',
    ],
    isHighlighted: false,
  },
];

const SubscriptionPlans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen py-16 px-6" style={{ background: '#F6F4EF' }}>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <span className="text-sm font-korean text-gray-600">Monthly Billing</span>
        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative w-12 h-6 rounded-full transition-colors"
          style={{ background: isAnnual ? '#1B4332' : '#D1D5DB' }}
        >
          <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
            isAnnual ? 'translate-x-6' : 'translate-x-0.5'
          }`} />
        </button>
        <span className="text-sm font-korean font-semibold" style={{ color: '#1B4332' }}>
          Annual Billing
          <span className="ml-1.5 text-xs px-2 py-0.5 rounded-full font-korean"
            style={{ background: '#DCFCE7', color: '#166534' }}>
            Save 20%
          </span>
        </span>
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black font-korean mb-2" style={{ color: '#1B4332' }}>
          Subscription Plans V1
        </h1>
        <p className="text-base text-gray-500 font-korean">
          건강 목표에 맞는 AI 맞춤 건강식 플랜을 선택하세요
        </p>
      </div>

      {/* Plan Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {plans.map(plan => (
          <PlanCard key={plan.name} {...plan} isAnnual={isAnnual} />
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-8 font-korean">
        © 2024 Sikyakdongwon. All rights reserved.
      </p>
    </div>
  );
};

export default SubscriptionPlans;
