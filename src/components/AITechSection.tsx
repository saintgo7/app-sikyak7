import React, { useState } from 'react';
import { Brain, Database, Shield, Award, TrendingUp, CheckCircle, ArrowRight, FileText, FlaskConical, UtensilsCrossed, Trophy, BadgeCheck, ClipboardList, Lock, Cloud, Zap, Stethoscope } from 'lucide-react';

const analysisProcess = [
  {
    id: 0,
    title: '데이터 수집',
    description: '건강검진 결과 OCR 인식',
    Icon: FileText,
    time: '0.5초',
    details: [
      '고정밀 OCR 기술로 99.8% 정확도',
      '다양한 검진기관 양식 지원',
      '이미지 전처리 및 노이즈 제거',
    ],
  },
  {
    id: 1,
    title: '데이터 분석',
    description: 'AI 의료진 수준 해석',
    Icon: Brain,
    time: '1.2초',
    details: [
      '6,844,615개 의료 데이터 비교 분석',
      '개인별 위험도 점수 산출',
      '연령/성별 맞춤 기준치 적용',
    ],
  },
  {
    id: 2,
    title: '영양 매칭',
    description: '개인 맞춤 영양소 계산',
    Icon: FlaskConical,
    time: '0.4초',
    details: [
      '부족/과잉 영양소 정밀 분석',
      '식재료별 생리활성 물질 매칭',
      '상호작용 및 흡수율 고려',
    ],
  },
  {
    id: 3,
    title: '반찬 추천',
    description: '최적화된 레시피 선별',
    Icon: UtensilsCrossed,
    time: '0.2초',
    details: [
      '개인 건강상태 100% 맞춤',
      '맛과 영양의 균형 최적화',
      '계절성 및 가격 효율성 고려',
    ],
  },
];

const techStats = [
  { Icon: Database, value: '6.8M+', label: '의료 데이터베이스', desc: '국내 최대 규모 빅데이터' },
  { Icon: Brain, value: '98.7%', label: '분석 정확도', desc: '의료진 수준 판독 달성' },
  { Icon: TrendingUp, value: '2.3s', label: '평균 분석 시간', desc: '실시간 건강 상태 분석' },
  { Icon: Shield, value: 'ISO', label: '27001 보안 인증', desc: '의료정보 보호 국제 표준' },
];

const perfMetrics = [
  { label: '건강검진 해석 정확도', value: 98.7 },
  { label: '영양소 매칭 정확도', value: 96.4 },
  { label: '개인 맞춤 추천 만족도', value: 94.8 },
  { label: '데이터 보안 수준', value: 99.9 },
];

const AITechSection: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  return (
    <section id="technology" className="py-24 lg:py-32 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="section-label font-korean mb-5 inline-block">AI 기술</span>
          <h2 className="display-md text-ink font-korean mb-4">
            의료 AI가 만드는<br />
            <span className="gradient-text">정확한 건강 솔루션</span>
          </h2>
          <p className="text-base text-ink-secondary font-korean max-w-xl mx-auto">
            의료진 수준의 정확도를 자랑하는 AI 기술로 개인 맞춤형 건강 솔루션을 제공합니다
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {techStats.map(({ Icon, value, label, desc }) => (
            <div key={label} className="glass-card rounded-3xl p-6 text-center card-hover">
              <div className="w-10 h-10 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-extrabold gradient-text-dark mb-1 font-korean">{value}</div>
              <div className="text-sm font-semibold text-ink mb-1 font-korean">{label}</div>
              <div className="text-xs text-ink-tertiary font-korean">{desc}</div>
            </div>
          ))}
        </div>

        {/* Analysis process */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-8">
          <h3 className="text-xl font-bold text-ink text-center mb-10 font-korean">AI 분석 과정</h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Steps */}
            <div className="space-y-3">
              {analysisProcess.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveProcess(i)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                    activeProcess === i
                      ? 'bg-primary-600 shadow-glow'
                      : 'bg-white/60 hover:bg-white border border-primary-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeProcess === i ? 'bg-white/20' : 'bg-primary-50'
                    }`}>
                      <step.Icon className={`w-5 h-5 ${activeProcess === i ? 'text-white' : 'text-primary-600'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-base font-bold font-korean ${activeProcess === i ? 'text-white' : 'text-ink'}`}>
                        {step.title}
                      </div>
                      <div className={`text-sm font-korean ${activeProcess === i ? 'text-white/70' : 'text-ink-tertiary'}`}>
                        {step.description}
                      </div>
                    </div>
                    <ArrowRight className={`w-4 h-4 flex-shrink-0 ${activeProcess === i ? 'text-white' : 'text-ink-muted'}`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="bg-white rounded-2xl p-8 border border-primary-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {React.createElement(analysisProcess[activeProcess].Icon, { className: 'w-8 h-8 text-primary-600' })}
                </div>
                <h4 className="text-xl font-bold text-ink mb-1 font-korean">{analysisProcess[activeProcess].title}</h4>
                <p className="text-base text-ink-secondary font-korean">{analysisProcess[activeProcess].description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {analysisProcess[activeProcess].details.map((detail) => (
                  <div key={detail} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-ink-secondary font-korean">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 p-3 bg-primary-50 rounded-xl">
                <TrendingUp className="w-4 h-4 text-primary-600" />
                <span className="text-sm text-primary-700 font-korean font-medium">
                  처리 시간: {analysisProcess[activeProcess].time}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance + Certs */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Performance */}
          <div className="glass-card rounded-3xl p-8 card-hover">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-bold text-ink font-korean">AI 모델 성능</h3>
            </div>
            <div className="space-y-5">
              {perfMetrics.map(({ label, value }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-ink font-korean">{label}</span>
                    <span className="text-sm font-bold text-primary-600">{value}%</span>
                  </div>
                  <div className="h-2 bg-primary-50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-gradient rounded-full transition-all duration-1000"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card rounded-3xl p-8 card-hover">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-bold text-ink font-korean">인증 및 신뢰성</h3>
            </div>
            <div className="space-y-3">
              {[
                { BadgeIcon: Trophy, name: 'FDA 승인', desc: '미국 식품의약국 AI 의료기기 승인 예정', color: 'text-amber-500 bg-amber-50' },
                { BadgeIcon: BadgeCheck, name: 'KFDA 인증', desc: '식품의약품안전처 인공지능 의료기기 인증 예정', color: 'text-emerald-600 bg-emerald-50' },
                { BadgeIcon: ClipboardList, name: 'ISO 13485', desc: '의료기기 품질경영시스템 국제 표준 취득 예정', color: 'text-primary-600 bg-primary-50' },
                { BadgeIcon: Lock, name: 'HIPAA 준수', desc: '미국 의료정보보호법 완전 준수 예정', color: 'text-violet-600 bg-violet-50' },
              ].map(({ BadgeIcon, name, desc, color }) => (
                <div key={name} className="flex items-center gap-4 p-3 bg-surface-secondary rounded-2xl">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
                    <BadgeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-ink font-korean">{name}</div>
                    <div className="text-sm text-ink-tertiary font-korean">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #52B788 0%, #40916C 60%, #2D6A4F 100%)' }}>
          <div className="p-10 text-center">
            <h3 className="text-lg font-bold text-white mb-2 font-korean">글로벌 기술 파트너십</h3>
            <p className="text-sm text-white/60 mb-10 font-korean">세계 최고 수준의 AI 기술 기업들과 협력합니다</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { PartnerIcon: Brain, name: 'Google AI', tag: '딥러닝 기술' },
                { PartnerIcon: Stethoscope, name: 'IBM Watson', tag: '의료 AI' },
                { PartnerIcon: Cloud, name: 'Microsoft Azure', tag: '클라우드 AI' },
                { PartnerIcon: Zap, name: 'NVIDIA', tag: 'GPU 컴퓨팅' },
              ].map(({ PartnerIcon, name, tag }) => (
                <div
                  key={name}
                  className="rounded-2xl p-5 text-center"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <PartnerIcon className="w-5 h-5 text-forest-300" />
                  </div>
                  <div className="text-sm font-bold text-white font-korean">{name}</div>
                  <div className="text-xs text-white/50 font-korean">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AITechSection;
