import React from 'react';
import { ArrowRight, Sparkles, Heart, Brain } from 'lucide-react';

interface HeroSectionProps {
  onStartAnalysis: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartAnalysis }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-health-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-16 h-16 bg-primary-200 rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Heart className="w-12 h-12 text-primary-300 opacity-30" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-pulse">
          <div className="w-20 h-20 bg-health-200 rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-60 right-1/3 animate-bounce delay-1000">
          <Sparkles className="w-10 h-10 text-health-400 opacity-40" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-500">
          <Brain className="w-14 h-14 text-primary-300 opacity-30" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4 font-korean">
                <Sparkles className="w-4 h-4 mr-2" />
                음식이 곧 약이다 - 식약동원(食藥同源)
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 font-korean leading-tight">
              <span className="text-primary-600">건강한 삶을 위한</span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-health-600 bg-clip-text text-transparent">
                특별한 제안!
              </span>
            </h1>

            <p className="text-3xl text-gray-600 mb-8 leading-relaxed font-korean">
              건강검진 결과를 AI가 분석하여<br />
              <span className="text-primary-600 font-semibold">10대 증상별</span> 맞춤 건강 반찬과 아쿠아포닉스 샐러드를 추천합니다.<br />
              <span className="text-primary-600 font-semibold">6,844,615개</span>의 의료 데이터 기반 정확한 분석
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onStartAnalysis}
                className="group bg-primary-500 text-white px-12 py-6 rounded-full text-2xl font-semibold hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-korean flex items-center justify-center"
              >
                건강검진 결과 분석하기
                <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-primary-500 text-primary-600 px-12 py-6 rounded-full text-2xl font-semibold hover:bg-primary-50 transition-all duration-300 font-korean">
                서비스 둘러보기
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 font-korean">6.8M+</div>
                <div className="text-xl text-gray-600 font-korean">의료 데이터</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 font-korean">98.7%</div>
                <div className="text-xl text-gray-600 font-korean">분석 정확도</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 font-korean">10대</div>
                <div className="text-xl text-gray-600 font-korean">증상별 맞춤</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual/Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-korean">AI 건강 분석 결과</h3>
                
                {/* Sample Health Indicators */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-korean text-sm">총콜레스테롤</span>
                    <span className="text-red-600 font-semibold">220 mg/dL ⚠️</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-korean text-sm">혈압</span>
                    <span className="text-yellow-600 font-semibold">135/80 mmHg ⚠️</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-korean text-sm">HDL 콜레스테롤</span>
                    <span className="text-green-600 font-semibold">45 mg/dL ✅</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-3 font-korean text-sm">추천 반찬</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-primary-50 p-3 rounded-lg text-center">
                    <div className="text-2xl mb-1">🥗</div>
                    <div className="text-xs font-korean">혈당관리 아쿠아포닉스 샐러드</div>
                  </div>
                  <div className="bg-health-50 p-3 rounded-lg text-center">
                    <div className="text-2xl mb-1">🌱</div>
                    <div className="text-xs font-korean">혈압관리 셀러리볶음</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Brain className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-health-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <Heart className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Business Model Highlights */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-korean">아쿠아포닉스 농법</h3>
            <p className="text-gray-600 font-korean">무농약 친환경 채소로<br />안전한 샐러드 제공</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏪</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-korean">오프라인 매장</h3>
            <p className="text-gray-600 font-korean">강남·송파 지역<br />직접 체험 가능</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">👨‍🍳</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-korean">백석남 총주방장</h3>
            <p className="text-gray-600 font-korean">특급호텔 출신<br />프리미엄 레시피 개발</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;