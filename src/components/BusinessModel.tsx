import React from 'react';
import { TrendingUp, Users, Store, Leaf } from 'lucide-react';

const BusinessModel: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-health-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 font-korean">
            식약동원 비즈니스 모델
          </h2>
          <p className="text-3xl text-gray-600 max-w-3xl mx-auto font-korean">
            AI 기술과 건강한 먹거리의 혁신적인 결합
          </p>
        </div>

        {/* Business Model Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-korean">
              AI 헬스케어 플랫폼
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 font-korean">6,844,615개 의료 데이터 분석</h4>
                  <p className="text-gray-600 font-korean">빅데이터 기반 정확한 건강 상태 파악</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 font-korean">10대 증상별 맞춤 추천</h4>
                  <p className="text-gray-600 font-korean">개인별 건강 상태에 최적화된 식단 제안</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 font-korean">편리한 모바일 서비스</h4>
                  <p className="text-gray-600 font-korean">언제 어디서나 건강 관리 가능</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-korean">
              오프라인 연계 모델
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-health-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Store className="w-6 h-6 text-health-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 font-korean">강남·송파 오프라인 매장</h4>
                  <p className="text-gray-600 font-korean">직접 체험하고 구매 가능한 공간</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-health-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Leaf className="w-6 h-6 text-health-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 font-korean">아쿠아포닉스 시스템</h4>
                  <p className="text-gray-600 font-korean">무농약 친환경 채소 직접 생산</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-health-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-health-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 font-korean">커뮤니티 형성</h4>
                  <p className="text-gray-600 font-korean">건강한 라이프스타일 공유</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Market */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 font-korean">
            타겟 고객층
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-6xl">👩</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-korean">30-40대 주부</h4>
              <p className="text-gray-600 font-korean">
                가족의 건강을 책임지는<br />
                스마트한 선택을 하는 여성
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-6xl">👥</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-korean">OPAL 세대</h4>
              <p className="text-gray-600 font-korean">
                활력있는 노후를 준비하는<br />
                건강 의식이 높은 시니어
              </p>
            </div>
          </div>
        </div>

        {/* Growth Strategy */}
        <div className="bg-gradient-to-r from-primary-500 to-health-500 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <TrendingUp className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4 font-korean">성장 전략</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Phase 1</div>
              <h4 className="text-xl font-semibold mb-2 font-korean">서비스 안정화</h4>
              <p className="font-korean">AI 정확도 향상<br />고객 만족도 제고</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Phase 2</div>
              <h4 className="text-xl font-semibold mb-2 font-korean">시장 확대</h4>
              <p className="font-korean">수도권 매장 확장<br />B2B 시장 진출</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Phase 3</div>
              <h4 className="text-xl font-semibold mb-2 font-korean">플랫폼 고도화</h4>
              <p className="font-korean">헬스케어 생태계 구축<br />글로벌 진출</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;