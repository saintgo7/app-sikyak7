import React, { useState } from 'react';
import { Users, Award, MapPin, Phone, Mail, Linkedin, ChefHat, GraduationCap, Code, Heart } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const CompanySection: React.FC = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const companyStats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '15,000+',
      label: '만족 고객',
      description: '개인 맞춤 건강 관리'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: '98.7%',
      label: '고객 만족도',
      description: '지속적인 품질 개선'
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      number: '200+',
      label: '검증된 레시피',
      description: '특급호텔 총주방장 개발'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: '24개월',
      label: '평균 개선 기간',
      description: '건강 지표 유의미한 개선'
    }
  ];

  const companyValues = [
    {
      title: '과학적 근거',
      description: '모든 건강 효능은 임상시험과 논문을 통해 검증됩니다',
      icon: '🔬',
      color: 'bg-blue-50 text-blue-700'
    },
    {
      title: '개인 맞춤',
      description: 'AI 분석을 통한 100% 개인 맞춤형 건강 솔루션',
      icon: '🎯',
      color: 'bg-primary-50 text-primary-700'
    },
    {
      title: '최고의 품질',
      description: '특급호텔 수준의 맛과 영양을 동시에 추구합니다',
      icon: '⭐',
      color: 'bg-amber-50 text-amber-700'
    },
    {
      title: '지속적 혁신',
      description: '최신 의료 기술과 영양학 연구를 끊임없이 적용합니다',
      icon: '🚀',
      color: 'bg-purple-50 text-purple-700'
    }
  ];

  const getTeamMemberIcon = (position: string) => {
    if (position.includes('총주방장')) return <ChefHat className="w-6 h-6" />;
    if (position.includes('박사') || position.includes('영양')) return <GraduationCap className="w-6 h-6" />;
    if (position.includes('개발자') || position.includes('AI')) return <Code className="w-6 h-6" />;
    if (position.includes('한의사')) return <Heart className="w-6 h-6" />;
    return <Users className="w-6 h-6" />;
  };

  return (
    <section id="company" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 font-korean">
            식약동원을 만든 사람들
          </h2>
          <p className="text-3xl text-gray-600 max-w-3xl mx-auto font-korean">
            의료, 영양학, 요리, 기술 분야의 전문가들이 모여<br />
            건강한 식생활 문화를 만들어갑니다
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {companyStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary-500 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-2xl font-semibold text-primary-600 mb-2 font-korean">
                {stat.label}
              </div>
              <div className="text-gray-600 text-xl font-korean">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12 font-korean">
            전문가 팀 소개
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Team Member List */}
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`
                    p-4 rounded-xl cursor-pointer transition-all duration-300 border
                    ${activeTeamMember === index
                      ? 'bg-primary-500 text-white shadow-lg transform scale-105 border-primary-500'
                      : 'bg-gray-50 hover:bg-primary-50 border-gray-200 hover:border-primary-200'
                    }
                  `}
                  onClick={() => setActiveTeamMember(index)}
                >
                  <div className="flex items-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center mr-4
                      ${activeTeamMember === index ? 'bg-white text-primary-500' : 'bg-primary-100 text-primary-600'}
                    `}>
                      {getTeamMemberIcon(member.position)}
                    </div>
                    <div>
                      <h4 className={`font-bold mb-1 font-korean ${
                        activeTeamMember === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {member.name}
                      </h4>
                      <p className={`text-sm font-korean ${
                        activeTeamMember === index ? 'text-primary-100' : 'text-gray-600'
                      }`}>
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Member Detail */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-primary-50 to-health-50 rounded-xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mr-6 text-primary-600">
                    {getTeamMemberIcon(teamMembers[activeTeamMember].position)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-korean">
                      {teamMembers[activeTeamMember].name}
                    </h3>
                    <p className="text-primary-600 font-semibold font-korean">
                      {teamMembers[activeTeamMember].position}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 font-korean">
                  {teamMembers[activeTeamMember].description}
                </p>

                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4 font-korean">전문 분야</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeTeamMember === 0 && (
                      <>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-korean">프랑스 요리</span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-korean">건강 요리</span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-korean">메뉴 개발</span>
                      </>
                    )}
                    {activeTeamMember === 1 && (
                      <>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-korean">임상영양학</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-korean">질병별 영양</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-korean">영양처방</span>
                      </>
                    )}
                    {activeTeamMember === 2 && (
                      <>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-korean">의료 AI</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-korean">딥러닝</span>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-korean">데이터 분석</span>
                      </>
                    )}
                    {activeTeamMember === 3 && (
                      <>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-korean">한의학</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-korean">식이요법</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-korean">동의보감</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12 font-korean">
            우리의 가치
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3 font-korean">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm font-korean">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-korean">
                회사 정보
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-500 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900 font-korean">본사 및 산지</div>
                    <div className="text-gray-600 font-korean">서울특별시 강남구·송파구</div>
                    <div className="text-sm text-gray-500 font-korean">강남 및 송파 지역 오프라인 매장 운영</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-500 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900 font-korean">고객센터</div>
                    <div className="text-gray-600">1588-1234 (평일 9:00-18:00)</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-500 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900 font-korean">이메일</div>
                    <div className="text-gray-600">hello@sikyak.co.kr</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h4 className="font-bold text-primary-900 mb-3 font-korean">
                  투자 및 제휴 문의
                </h4>
                <p className="text-primary-700 text-sm font-korean">
                  건강 기술 혁신에 함께하실 파트너를 찾고 있습니다.<br />
                  business@sikyak.co.kr로 연락주세요.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-korean">
                비전 & 미션
              </h3>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-primary-500 to-health-500 rounded-xl text-white">
                  <h4 className="font-bold text-xl mb-3 font-korean">Vision</h4>
                  <p className="font-korean">
                    "AI가 만들어가는 개인 맞춤 건강 생활, 
                    모든 사람이 자신만의 건강 레시피를 갖는 세상
                    - 식약동원(食藥同源): 음식이 곧 약이다"
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-xl text-gray-900 mb-3 font-korean">Mission</h4>
                  <ul className="space-y-2 text-gray-700 font-korean">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      과학적 근거를 바탕으로 한 개인 맞춤 영양 솔루션 제공
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      특급호텔 총주방장의 경험과 전통 음식의 건강 가치를 현대적으로 재해석
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      AI 기술로 누구나 쉽게 접근할 수 있는 건강 관리
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;