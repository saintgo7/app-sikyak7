import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-500 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-korean">식약동원(食藥同源)</span>
                <span className="text-sm text-gray-400">AI 맞춤 건강 반찬 & 샐러드</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 font-korean leading-relaxed">
              건강검진 결과를 AI가 분석하여 개인 맞춤형 건강 반찬과 샐러드를 추천하는 
              혁신적인 서비스입니다. 백석남 총주방장의 레시피와 영양학 박사의 
              검증을 통해 맛과 건강을 동시에 추구합니다. 아쿠아포닉스 시스템으로 재배한 
              무농약 채소를 사용합니다.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-primary-400 mr-3" />
                <span className="text-gray-300 text-sm font-korean">
                  서울특별시 강남구·송파구 (오프라인 매장 운영)
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary-400 mr-3" />
                <span className="text-gray-300 text-sm">1588-1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-primary-400 mr-3" />
                <span className="text-gray-300 text-sm">hello@sikyak.co.kr</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-korean">빠른 링크</h3>
            <ul className="space-y-3">
              <li>
                <a href="#service" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  서비스 소개
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  건강 반찬
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  AI 기술
                </a>
              </li>
              <li>
                <a href="#company" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  고객지원
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-korean">건강 카테고리</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  스트레스 해소
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  면역력 강화
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  당뇨 관리
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  콜레스테롤 개선
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-korean">
                  고혈압 관리
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg font-bold mb-4 font-korean">소셜 미디어</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <h3 className="text-lg font-bold mb-4 font-korean">뉴스레터 구독</h3>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 font-korean"
                />
                <button className="bg-primary-500 text-white px-6 py-2 rounded-r-full hover:bg-primary-600 transition-colors font-korean">
                  구독
                </button>
              </div>
              <p className="text-gray-400 text-xs mt-2 font-korean">
                건강 정보와 새로운 소식을 받아보세요
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 lg:mb-0 font-korean">
              © 2024 식약동원(食藥同源). All rights reserved. | 백석남 총주방장
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary-400 transition-colors font-korean">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors font-korean">
                이용약관
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors font-korean">
                쿠키정책
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-8 mb-4">
              <div className="text-2xl">🏆</div>
              <div className="text-2xl">✅</div>
              <div className="text-2xl">📋</div>
              <div className="text-2xl">🔒</div>
            </div>
            <p className="text-gray-400 text-xs font-korean">
              FDA 승인 • KFDA 인증 • ISO 13485 • HIPAA 준수
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;