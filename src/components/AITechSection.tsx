import React, { useState } from 'react';
import { Brain, Database, Shield, Award, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const AITechSection: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  const analysisProcess = [
    {
      id: 0,
      title: '데이터 수집',
      description: '건강검진 결과 OCR 인식',
      icon: '📄',
      details: [
        '고정밀 OCR 기술로 99.8% 정확도',
        '다양한 검진기관 양식 지원',
        '이미지 전처리 및 노이즈 제거'
      ]
    },
    {
      id: 1,
      title: '데이터 분석',
      description: 'AI 의료진 수준 해석',
      icon: '🧠',
      details: [
        '6,844,615개 의료 데이터 비교 분석',
        '개인별 위험도 점수 산출',
        '연령/성별 맞춤 기준치 적용'
      ]
    },
    {
      id: 2,
      title: '영양 매칭',
      description: '개인 맞춤 영양소 계산',
      icon: '🔬',
      details: [
        '부족/과잉 영양소 정밀 분석',
        '식재료별 생리활성 물질 매칭',
        '상호작용 및 흡수율 고려'
      ]
    },
    {
      id: 3,
      title: '반찬 추천',
      description: '최적화된 레시피 선별',
      icon: '🍽️',
      details: [
        '개인 건강상태 100% 맞춤',
        '맛과 영양의 균형 최적화',
        '계절성 및 가격 효율성 고려'
      ]
    }
  ];

  const techStats = [
    {
      icon: <Database className="w-8 h-8" />,
      title: '6,844,615개',
      subtitle: '의료 데이터베이스',
      description: '국내 최대 규모의 건강검진 빅데이터'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: '98.7%',
      subtitle: '분석 정확도',
      description: '의료진 수준의 판독 정확도 달성'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '2.3초',
      subtitle: '평균 분석 시간',
      description: '실시간 건강 상태 분석 완료'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'ISO 27001',
      subtitle: '보안 인증',
      description: '의료정보 보호 국제 표준 준수'
    }
  ];

  const certifications = [
    {
      name: 'FDA 승인',
      description: '미국 식품의약국 AI 의료기기 승인',
      badge: '🏆'
    },
    {
      name: 'KFDA 인증',
      description: '식품의약품안전처 인공지능 의료기기 인증',
      badge: '✅'
    },
    {
      name: 'ISO 13485',
      description: '의료기기 품질경영시스템 국제 표준',
      badge: '📋'
    },
    {
      name: 'HIPAA 준수',
      description: '미국 의료정보보호법 완전 준수',
      badge: '🔒'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 font-korean">
            의료 AI 기술 소개
          </h2>
          <p className="text-3xl text-gray-600 max-w-3xl mx-auto font-korean">
            의료진 수준의 정확도를 자랑하는 AI 기술로<br />
            개인 맞춤형 건강 솔루션을 제공합니다
          </p>
        </div>

        {/* Tech Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {techStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-health-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-primary-500 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {stat.title}
              </div>
              <div className="text-2xl font-semibold text-primary-600 mb-2 font-korean">
                {stat.subtitle}
              </div>
              <div className="text-gray-600 text-xl font-korean">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* AI Analysis Process */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12 font-korean">
            AI 분석 과정
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Process Steps */}
            <div className="space-y-4">
              {analysisProcess.map((process, index) => (
                <div
                  key={process.id}
                  className={`
                    p-6 rounded-xl cursor-pointer transition-all duration-300
                    ${activeProcess === index
                      ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                      : 'bg-white hover:bg-primary-50 border border-gray-200'
                    }
                  `}
                  onClick={() => setActiveProcess(index)}
                >
                  <div className="flex items-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4
                      ${activeProcess === index ? 'bg-white text-primary-500' : 'bg-primary-100'}
                    `}>
                      {process.icon}
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold mb-1 font-korean ${
                        activeProcess === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {process.title}
                      </h4>
                      <p className={`text-sm font-korean ${
                        activeProcess === index ? 'text-primary-100' : 'text-gray-600'
                      }`}>
                        {process.description}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 ml-auto ${
                      activeProcess === index ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Process Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {analysisProcess[activeProcess].icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2 font-korean">
                  {analysisProcess[activeProcess].title}
                </h4>
                <p className="text-gray-600 font-korean">
                  {analysisProcess[activeProcess].description}
                </p>
              </div>

              <div className="space-y-4">
                {analysisProcess[activeProcess].details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-korean">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                <div className="text-sm text-primary-800 font-korean">
                  <strong>처리 시간:</strong> 평균 {activeProcess + 1 === 1 ? '0.5' : activeProcess + 1 === 2 ? '1.2' : activeProcess + 1 === 3 ? '0.4' : '0.2'}초
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications and Trust */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Certifications */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-korean flex items-center">
              <Award className="w-7 h-7 text-primary-500 mr-3" />
              인증 및 신뢰성
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mr-4">
                    {cert.badge}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 font-korean">{cert.name}</h4>
                    <p className="text-gray-600 text-sm font-korean">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Model Performance */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-korean flex items-center">
              <TrendingUp className="w-7 h-7 text-primary-500 mr-3" />
              AI 모델 성능
            </h3>

            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 font-korean">건강검진 해석 정확도</span>
                    <span className="font-bold text-primary-600">98.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-primary-500 h-3 rounded-full" style={{ width: '98.7%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 font-korean">영양소 매칭 정확도</span>
                    <span className="font-bold text-health-600">96.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-health-500 h-3 rounded-full" style={{ width: '96.4%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 font-korean">개인 맞춤 추천 만족도</span>
                    <span className="font-bold text-green-600">94.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '94.8%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-900 font-korean">데이터 보안 수준</span>
                    <span className="font-bold text-purple-600">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{ width: '99.9%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-700 font-semibold text-sm font-korean">
                    업계 최고 수준의 보안과 정확도를 자랑합니다
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Partnership */}
        <div className="bg-gradient-to-r from-primary-500 to-health-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4 font-korean">
            글로벌 기술 파트너십
          </h3>
          <p className="text-primary-100 mb-8 font-korean">
            세계 최고 수준의 AI 기술 기업들과 협력하여 혁신적인 건강 솔루션을 제공합니다
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">🧠</div>
              <div className="font-semibold font-korean">Google AI</div>
              <div className="text-sm text-primary-100 font-korean">딥러닝 기술</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⚕️</div>
              <div className="font-semibold font-korean">IBM Watson</div>
              <div className="text-sm text-primary-100 font-korean">의료 AI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔬</div>
              <div className="font-semibold font-korean">Microsoft Azure</div>
              <div className="text-sm text-primary-100 font-korean">클라우드 AI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <div className="font-semibold font-korean">NVIDIA</div>
              <div className="text-sm text-primary-100 font-korean">GPU 컴퓨팅</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechSection;