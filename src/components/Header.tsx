import React from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-500 p-2 rounded-full">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900 font-korean">식약동원</span>
              <span className="text-xl text-gray-500">AI 맞춤 건강 반찬</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#service" className="text-xl text-gray-700 hover:text-primary-600 transition-colors font-korean">
              서비스 소개
            </a>
            <a href="#products" className="text-xl text-gray-700 hover:text-primary-600 transition-colors font-korean">
              건강 반찬
            </a>
            <a href="#technology" className="text-xl text-gray-700 hover:text-primary-600 transition-colors font-korean">
              AI 기술
            </a>
            <a href="#company" className="text-xl text-gray-700 hover:text-primary-600 transition-colors font-korean">
              회사소개
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-primary-500 text-white px-8 py-3 text-xl rounded-full hover:bg-primary-600 transition-colors font-korean">
              건강검진 분석하기
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#service" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-korean">
                서비스 소개
              </a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-korean">
                건강 반찬
              </a>
              <a href="#technology" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-korean">
                AI 기술
              </a>
              <a href="#company" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-korean">
                회사소개
              </a>
              <button className="w-full mt-2 bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors font-korean">
                건강검진 분석하기
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;