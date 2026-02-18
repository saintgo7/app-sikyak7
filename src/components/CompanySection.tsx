import React, { useState } from 'react';
import { Users, Award, MapPin, Phone, Mail, ChefHat, GraduationCap, Code, Heart, FlaskConical, Target, Star, Zap } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const companyStats = [
  { Icon: Users, value: '15,000+', label: '만족 고객', desc: '개인 맞춤 건강 관리' },
  { Icon: Award, value: '98.7%', label: '고객 만족도', desc: '지속적인 품질 개선' },
  { Icon: ChefHat, value: '200+', label: '검증된 레시피', desc: '특급호텔 총주방장 개발' },
  { Icon: Heart, value: '24개월', label: '평균 개선 기간', desc: '건강 지표 유의미한 개선' },
];

const companyValues = [
  { Icon: FlaskConical, title: '과학적 근거', desc: '모든 건강 효능은 임상시험과 논문을 통해 검증됩니다' },
  { Icon: Target, title: '개인 맞춤', desc: 'AI 분석을 통한 100% 개인 맞춤형 건강 솔루션' },
  { Icon: Star, title: '최고의 품질', desc: '특급호텔 수준의 맛과 영양을 동시에 추구합니다' },
  { Icon: Zap, title: '지속적 혁신', desc: '최신 의료 기술과 영양학 연구를 끊임없이 적용합니다' },
];

const teamSpecialties: Record<number, { label: string; color: string }[]> = {
  0: [
    { label: '프랑스 요리', color: 'bg-amber-50 text-amber-700' },
    { label: '건강 요리', color: 'bg-amber-50 text-amber-700' },
    { label: '메뉴 개발', color: 'bg-amber-50 text-amber-700' },
  ],
  1: [
    { label: '임상영양학', color: 'bg-emerald-50 text-emerald-700' },
    { label: '질병별 영양', color: 'bg-emerald-50 text-emerald-700' },
    { label: '영양처방', color: 'bg-emerald-50 text-emerald-700' },
  ],
  2: [
    { label: '의료 AI', color: 'bg-primary-50 text-primary-700' },
    { label: '딥러닝', color: 'bg-primary-50 text-primary-700' },
    { label: '데이터 분석', color: 'bg-primary-50 text-primary-700' },
  ],
  3: [
    { label: '한의학', color: 'bg-violet-50 text-violet-700' },
    { label: '식이요법', color: 'bg-violet-50 text-violet-700' },
    { label: '동의보감', color: 'bg-violet-50 text-violet-700' },
  ],
};

const getTeamIcon = (position: string) => {
  if (position.includes('총주방장')) return <ChefHat className="w-5 h-5" />;
  if (position.includes('박사') || position.includes('영양')) return <GraduationCap className="w-5 h-5" />;
  if (position.includes('개발자') || position.includes('AI')) return <Code className="w-5 h-5" />;
  if (position.includes('한의사')) return <Heart className="w-5 h-5" />;
  return <Users className="w-5 h-5" />;
};

const CompanySection: React.FC = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <section id="company" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="section-label font-korean mb-5 inline-block">회사소개</span>
          <h2 className="display-md text-ink font-korean mb-4">
            식약동원을 만든<br />
            <span className="gradient-text">전문가들</span>
          </h2>
          <p className="text-base text-ink-secondary font-korean max-w-xl mx-auto">
            의료, 영양학, 요리, 기술 분야의 전문가들이 모여 건강한 식생활 문화를 만들어갑니다
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {companyStats.map(({ Icon, value, label, desc }) => (
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

        {/* Team */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-8">
          <h3 className="text-xl font-bold text-ink text-center mb-10 font-korean">전문가 팀 소개</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {/* List */}
            <div className="space-y-2">
              {teamMembers.map((member: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveTeamMember(i)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                    activeTeamMember === i
                      ? 'bg-primary-600 shadow-glow'
                      : 'bg-white/60 hover:bg-white border border-primary-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeTeamMember === i ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-600'
                    }`}>
                      {getTeamIcon(member.position)}
                    </div>
                    <div>
                      <div className={`text-base font-bold font-korean ${activeTeamMember === i ? 'text-white' : 'text-ink'}`}>
                        {member.name}
                      </div>
                      <div className={`text-sm font-korean ${activeTeamMember === i ? 'text-white/70' : 'text-ink-tertiary'}`}>
                        {member.position}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary-50 to-accent-100 rounded-2xl p-8">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 flex-shrink-0">
                  {getTeamIcon(teamMembers[activeTeamMember].position)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink font-korean">{teamMembers[activeTeamMember].name}</h4>
                  <p className="text-sm text-primary-600 font-semibold font-korean">{teamMembers[activeTeamMember].position}</p>
                </div>
              </div>
              <p className="text-base text-ink-secondary leading-relaxed mb-6 font-korean">
                {teamMembers[activeTeamMember].description}
              </p>
              <div className="bg-white rounded-xl p-5">
                <h5 className="text-sm font-bold text-ink mb-3 font-korean uppercase tracking-wider">전문 분야</h5>
                <div className="flex flex-wrap gap-2">
                  {(teamSpecialties[activeTeamMember] || []).map(({ label, color }) => (
                    <span key={label} className={`text-xs px-3 py-1 rounded-full font-korean font-medium ${color}`}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-ink text-center mb-8 font-korean">우리의 가치</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {companyValues.map(({ Icon, title, desc }) => (
              <div key={title} className="glass-card rounded-3xl p-6 text-center card-hover">
                <div className="w-14 h-14 rounded-2xl bg-surface-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-ink-secondary" />
                </div>
                <h4 className="text-base font-bold text-ink mb-2 font-korean">{title}</h4>
                <p className="text-sm text-ink-tertiary font-korean leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact + Vision */}
        <div className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold text-ink mb-7 font-korean">회사 정보</h3>
              <div className="space-y-4 mb-6">
                {[
                  { Icon: MapPin, title: '본사 및 산지', sub: '서울특별시 강남구·송파구', detail: '강남·송파 지역 오프라인 매장 운영' },
                  { Icon: Phone, title: '고객센터', sub: '1588-1234 (평일 9:00-18:00)', detail: '' },
                  { Icon: Mail, title: '이메일', sub: 'hello@sikyak.co.kr', detail: '' },
                ].map(({ Icon, title, sub, detail }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink font-korean">{title}</div>
                      <div className="text-sm text-ink-secondary font-korean">{sub}</div>
                      {detail && <div className="text-xs text-ink-tertiary font-korean">{detail}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-primary-50 rounded-2xl">
                <h4 className="text-sm font-bold text-primary-900 mb-2 font-korean">투자 및 제휴 문의</h4>
                <p className="text-xs text-primary-700 font-korean leading-relaxed">
                  건강 기술 혁신에 함께하실 파트너를 찾고 있습니다.<br />
                  business@sikyak.co.kr로 연락주세요.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-xl font-bold text-ink mb-7 font-korean">비전 & 미션</h3>
              <div
                className="rounded-2xl p-6 mb-4 text-white"
                style={{ background: 'linear-gradient(135deg, #0052CC 0%, #0066FF 100%)' }}
              >
                <h4 className="font-bold text-lg mb-3 font-korean">Vision</h4>
                <p className="text-sm text-white/80 font-korean leading-relaxed">
                  "AI가 만들어가는 개인 맞춤 건강 생활, 모든 사람이 자신만의 건강 레시피를 갖는 세상
                  — 식약동원(食藥同源): 음식이 곧 약이다"
                </p>
              </div>
              <div className="bg-surface-secondary rounded-2xl p-6">
                <h4 className="font-bold text-lg text-ink mb-4 font-korean">Mission</h4>
                <ul className="space-y-3">
                  {[
                    '과학적 근거를 바탕으로 한 개인 맞춤 영양 솔루션 제공',
                    '특급호텔 총주방장의 경험과 전통 음식의 건강 가치를 현대적으로 재해석',
                    'AI 기술로 누구나 쉽게 접근할 수 있는 건강 관리',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary font-korean">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanySection;
