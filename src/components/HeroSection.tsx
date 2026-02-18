import React, { useRef } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Shield, Leaf, Sprout } from 'lucide-react';

interface HeroSectionProps {
  onStartAnalysis: () => void;
}

const stats = [
  { value: '6.8M+', label: '의료 데이터' },
  { value: '98.7%', label: '분석 정확도' },
  { value: '10종', label: '증상별 맞춤' },
];

const badges = [
  '콜레스테롤 개선', '혈당 관리', '고혈압 케어', '면역 강화', '간 건강',
  '스트레스 해소', '빈혈 개선', '뼈 건강', '소화 개선', '피부 건강',
  '콜레스테롤 개선', '혈당 관리', '고혈압 케어', '면역 강화', '간 건강',
  '스트레스 해소', '빈혈 개선', '뼈 건강', '소화 개선', '피부 건강',
];

const HeroSection: React.FC<HeroSectionProps> = ({ onStartAnalysis }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <section className="relative min-h-screen mesh-bg overflow-hidden pt-16 lg:pt-20">
      {/* Orb backgrounds */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Content */}
          <div>
            {/* Label */}
            <div className="mb-8 animate-slide-up">
              <span className="section-label font-korean">
                <Sparkles className="w-3 h-3" />
                식약동원 — 食藥同源
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-lg text-ink mb-6 font-korean animate-slide-up animate-slide-up-delay-1">
              건강검진 결과로<br />
              <span className="gradient-text">맞춤 반찬</span>을 추천받다
            </h1>

            {/* Sub */}
            <p className="text-base lg:text-lg text-ink-secondary leading-relaxed mb-10 font-korean animate-slide-up animate-slide-up-delay-2 max-w-md">
              AI가 건강검진 결과를 분석하여
              <span className="text-primary-600 font-semibold"> 10대 증상별</span> 맞춤 건강 반찬을 추천합니다.
              <br className="hidden sm:block" />
              <span className="text-primary-600 font-semibold">6,844,615개</span>의 의료 데이터 기반 정확한 분석.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-slide-up animate-slide-up-delay-3">
              <button onClick={onStartAnalysis} className="btn-primary font-korean text-base">
                건강검진 결과 분석하기
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary font-korean text-base">
                서비스 둘러보기
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-primary-100 animate-slide-up animate-slide-up-delay-4">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="text-xl lg:text-2xl font-extrabold text-primary-600 font-korean tracking-tight">
                    {value}
                  </div>
                  <div className="text-xs text-ink-tertiary font-korean mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Tilt Card */}
          <div className="flex justify-center lg:justify-end">
            <div
              ref={cardRef}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              className="w-full max-w-sm glass-card rounded-3xl p-7 transition-transform duration-300 ease-out cursor-default"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-gradient flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-ink font-korean">AI 건강 분석 결과</span>
                </div>
                <span className="section-label text-[10px] px-2 py-1">
                  분석 완료
                </span>
              </div>

              {/* Health indicators */}
              <div className="space-y-2.5 mb-5">
                {[
                  { label: '총콜레스테롤', value: '220 mg/dL', status: 'danger', bar: 78 },
                  { label: '혈압', value: '135/80 mmHg', status: 'warning', bar: 60 },
                  { label: 'HDL 콜레스테롤', value: '45 mg/dL', status: 'good', bar: 42 },
                  { label: '혈당(공복)', value: '98 mg/dL', status: 'good', bar: 35 },
                ].map(({ label, value, status, bar }) => (
                  <div
                    key={label}
                    className="p-3 rounded-2xl bg-white/70 border border-white/80"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-ink-secondary font-korean">{label}</span>
                      <span className={`text-xs font-semibold font-korean ${
                        status === 'danger' ? 'text-red-500' :
                        status === 'warning' ? 'text-amber-500' : 'text-emerald-500'
                      }`}>
                        {value}
                      </span>
                    </div>
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          status === 'danger' ? 'bg-red-400' :
                          status === 'warning' ? 'bg-amber-400' : 'bg-emerald-400'
                        }`}
                        style={{ width: `${bar}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendations */}
              <div className="border-t border-primary-300 pt-4">
                <div className="flex items-center gap-1.5 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-primary-600" />
                  <span className="text-xs font-semibold text-ink font-korean">추천 반찬</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { FoodIcon: Leaf, name: '아쿠아포닉스 샐러드', tag: '혈당관리' },
                    { FoodIcon: Sprout, name: '셀러리 볶음', tag: '혈압관리' },
                  ].map(({ FoodIcon, name, tag }) => (
                    <div
                      key={name}
                      className="bg-surface-secondary rounded-2xl p-3 text-center"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mx-auto mb-1.5">
                        <FoodIcon className="w-5 h-5 text-ink-secondary" />
                      </div>
                      <div className="text-[11px] font-medium text-ink font-korean leading-snug mb-1">{name}</div>
                      <span className="text-[10px] text-primary-600 font-korean bg-primary-100 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="border-t border-primary-300 bg-white/50 py-4 overflow-hidden">
        <div className="marquee-track">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-4 text-sm text-ink-secondary font-korean whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
