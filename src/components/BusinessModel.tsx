import React from 'react';
import { TrendingUp, Users, Store, Leaf, BarChart3, Target, Smartphone, UserRound, UsersRound } from 'lucide-react';

const BusinessModel: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white" id="service">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="section-label font-korean mb-5 inline-block">비즈니스 모델</span>
          <h2 className="display-md text-ink font-korean mb-4">
            AI 기술과 건강한 먹거리의<br />
            <span className="gradient-text">혁신적인 결합</span>
          </h2>
          <p className="text-base text-ink-secondary font-korean max-w-xl mx-auto">
            식약동원은 의료 데이터 AI 분석을 통해 개인에게 최적화된 건강식을 제공합니다.
          </p>
        </div>

        {/* Two column cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 card-hover">
            <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-6 font-korean">AI 헬스케어 플랫폼</h3>
            <div className="space-y-5">
              {[
                { Icon: BarChart3, title: '6,844,615개 의료 데이터 분석', desc: '빅데이터 기반 정확한 건강 상태 파악' },
                { Icon: Target, title: '10대 증상별 맞춤 추천', desc: '개인별 건강 상태에 최적화된 식단 제안' },
                { Icon: Smartphone, title: '편리한 모바일 서비스', desc: '언제 어디서나 건강 관리 가능' },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-1 font-korean">{title}</h4>
                    <p className="text-sm text-ink-tertiary font-korean">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 card-hover">
            <div className="w-12 h-12 bg-accent-700 rounded-2xl flex items-center justify-center mb-6">
              <Store className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-6 font-korean">오프라인 연계 모델</h3>
            <div className="space-y-5">
              {[
                { Icon: Store, title: '강남·송파 오프라인 매장', desc: '직접 체험하고 구매 가능한 공간' },
                { Icon: Leaf, title: '아쿠아포닉스 시스템', desc: '무농약 친환경 채소 직접 생산' },
                { Icon: Users, title: '커뮤니티 형성', desc: '건강한 라이프스타일 공유' },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-ink mb-1 font-korean">{title}</h4>
                    <p className="text-sm text-ink-tertiary font-korean">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target market */}
        <div className="glass-card rounded-3xl p-10 mb-8 card-hover">
          <h3 className="text-xl font-bold text-ink text-center mb-10 font-korean">타겟 고객층</h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { Icon: UserRound, title: '30–40대 주부', desc: '가족의 건강을 책임지는\n스마트한 선택을 하는 여성', bg: 'bg-primary-50', color: 'text-primary-600' },
              { Icon: UsersRound, title: 'OPAL 세대', desc: '활력있는 노후를 준비하는\n건강 의식이 높은 시니어', bg: 'bg-accent-100', color: 'text-primary-700' },
            ].map(({ Icon, title, desc, bg, color }) => (
              <div key={title} className="flex items-center gap-6">
                <div className={`w-20 h-20 ${bg} rounded-3xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-9 h-9 ${color}`} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ink mb-2 font-korean">{title}</h4>
                  <p className="text-base text-ink-secondary font-korean leading-relaxed whitespace-pre-line">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth phases */}
        <div className="glass-card rounded-3xl">
          <div className="p-10 lg:p-14">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-ink font-korean">성장 전략</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { phase: '01', title: '서비스 안정화', items: ['AI 정확도 향상', '고객 만족도 제고'] },
                { phase: '02', title: '시장 확대', items: ['수도권 매장 확장', 'B2B 시장 진출'] },
                { phase: '03', title: '플랫폼 고도화', items: ['헬스케어 생태계 구축', '글로벌 진출'] },
              ].map(({ phase, title, items }) => (
                <div
                  key={phase}
                  className="rounded-2xl p-7 bg-surface-secondary border border-primary-300"
                >
                  <div className="text-5xl font-black mb-3 font-korean text-primary-200">
                    {phase}
                  </div>
                  <h4 className="text-lg font-bold text-ink mb-3 font-korean">{title}</h4>
                  <ul className="space-y-2">
                    {items.map(item => (
                      <li key={item} className="text-base font-korean flex items-center gap-2 text-ink-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessModel;
