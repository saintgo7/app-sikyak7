import React from 'react';
import { Bell, Settings } from 'lucide-react';

interface AppHeaderProps {
  title?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title }) => {
  return (
    <header className="app-header">
      <div className="flex items-center gap-3">
        <span className="text-base font-bold font-korean" style={{ color: '#1B4332' }}>
          식약동원
        </span>
        {title && (
          <>
            <span className="text-gray-300">/</span>
            <span className="text-base font-semibold text-gray-600 font-korean">{title}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-3 ml-auto">
        <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-500" />
        </button>
        <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
          <Settings className="w-5 h-5 text-gray-500" />
        </button>
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: '#1B4332' }}>
          U
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
