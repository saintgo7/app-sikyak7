import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-700 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="display-md text-white font-korean mb-3">
                지금 바로<br />
                <span style={{ color: '#74C69D' }}>건강검진 분석</span>을 시작하세요
              </h2>
              <p className="text-white/60 font-korean">AI가 당신의 건강 데이터를 분석합니다.</p>
            </div>
            <button className="btn-primary text-base px-8 py-4 font-korean flex-shrink-0">
              무료 분석 시작하기
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">식</span>
              </div>
              <div>
                <span className="text-base font-bold font-korean">식약동원(食藥同源)</span>
                <p className="text-white/50 text-xs font-korean">AI 맞춤 건강 반찬 & 샐러드</p>
              </div>
            </div>
            <p className="text-white/60 text-sm font-korean leading-relaxed mb-6 max-w-sm">
              건강검진 결과를 AI가 분석하여 개인 맞춤형 건강 반찬과 샐러드를 추천하는 혁신적인 서비스입니다.
              백석남 총주방장의 레시피와 영양학 박사의 검증으로 맛과 건강을 동시에 추구합니다.
            </p>
            <div className="space-y-2.5">
              {[
                { Icon: MapPin, text: '서울특별시 강남구·송파구 (오프라인 매장 운영)' },
                { Icon: Phone, text: '1588-1234' },
                { Icon: Mail, text: 'hello@sikyak.co.kr' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#74C69D' }} />
                  <span className="text-white/60 text-sm font-korean">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-bold mb-5 font-korean text-white/80 uppercase tracking-wider">빠른 링크</h3>
            <ul className="space-y-3">
              {['서비스 소개', '건강 반찬', 'AI 기술', '회사소개', '고객지원'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors font-korean">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold mb-5 font-korean text-white/80 uppercase tracking-wider">건강 카테고리</h3>
            <ul className="space-y-3">
              {['스트레스 해소', '면역력 강화', '당뇨 관리', '콜레스테롤 개선', '고혈압 관리'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors font-korean">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-sm font-bold mb-1 font-korean">뉴스레터 구독</h3>
              <p className="text-xs text-white/50 font-korean">건강 정보와 새로운 소식을 받아보세요</p>
            </div>
            <div className="flex w-full lg:w-auto gap-2 max-w-md">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-full text-white text-sm placeholder-white/30 outline-none focus:border-primary-400 transition-colors font-korean"
              />
              <button className="btn-primary text-sm px-5 py-2.5 font-korean whitespace-nowrap">구독</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40 font-korean">
            © 2025 식약동원(食藥同源). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Icon className="w-4 h-4 text-white/60" />
              </a>
            ))}
          </div>
          <div className="flex gap-5">
            {['개인정보처리방침', '이용약관', '쿠키정책'].map(item => (
              <a key={item} href="#" className="text-xs text-white/40 hover:text-white transition-colors font-korean">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
