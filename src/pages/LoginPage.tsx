import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: '#F6F4EF' }}>
      {/* Logo and title */}
      <div className="flex flex-col items-center mb-8">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-3"
          style={{ backgroundColor: '#1B4332' }}
        >
          <span className="text-white text-2xl font-bold font-korean">식</span>
        </div>
        <h1 className="text-2xl font-bold font-korean" style={{ color: '#1B4332' }}>
          식약동원
        </h1>
        <p className="text-xs text-gray-400 mt-1 font-korean">AI 맞춤 건강 반찬 서비스</p>
      </div>

      {/* Login card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-lg font-bold font-korean mb-6" style={{ color: '#1B4332' }}>
          로그인
        </h2>

        {/* Email field */}
        <div className="mb-4">
          <label className="block text-sm font-medium font-korean text-gray-700 mb-1">
            이메일
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-white"
          />
        </div>

        {/* Password field */}
        <div className="mb-6">
          <label className="block text-sm font-medium font-korean text-gray-700 mb-1">
            비밀번호
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 bg-white"
          />
        </div>

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl font-bold font-korean text-white text-sm transition-colors"
          style={{ backgroundColor: '#1B4332' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2D6A4F')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1B4332')}
        >
          로그인
        </button>

        {/* Separator */}
        <div className="my-5 border-t border-gray-100" />

        {/* Back to main */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="text-xs text-gray-400 font-korean hover:text-gray-600 transition-colors"
          >
            메인으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
