import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 bg-primary-600 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="relative w-9 h-9 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">식</span>
              </div>
            </div>
            <div>
              <span className="text-base font-bold text-ink tracking-tight font-korean">식약동원</span>
              <span className="hidden sm:block text-[10px] text-ink-tertiary font-korean leading-none mt-0.5">
                AI 맞춤 건강 반찬
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: '서비스 소개', href: '#service' },
              { label: '건강 반찬', href: '#products' },
              { label: 'AI 기술', href: '#technology' },
              { label: '회사소개', href: '#company' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium text-ink-secondary hover:text-primary-600 rounded-full hover:bg-primary-50 transition-all duration-200 font-korean"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/login" className="text-sm font-medium font-korean text-ink-secondary hover:text-primary-600 px-4 py-2.5 rounded-full hover:bg-primary-50 transition-all duration-200">
              로그인
            </a>
            <a href="/login" className="btn-primary text-sm px-5 py-2.5 font-korean">
              무료 건강검진 분석하기
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-ink-secondary hover:bg-primary-50 hover:text-primary-600 transition-colors"
            aria-label="메뉴"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-white/60 px-6 py-4 flex flex-col gap-1">
          {[
            { label: '서비스 소개', href: '#service' },
            { label: '건강 반찬', href: '#products' },
            { label: 'AI 기술', href: '#technology' },
            { label: '회사소개', href: '#company' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-ink-secondary hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all font-korean"
            >
              {label}
            </a>
          ))}
          <a href="/login" className="mt-2 px-4 py-3 text-sm font-medium text-ink-secondary hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all font-korean text-center">
            로그인
          </a>
          <a href="/login" className="btn-primary justify-center text-sm font-korean">
            무료 건강검진 분석하기
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
