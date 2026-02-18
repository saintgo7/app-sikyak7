import React from 'react';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex min-h-screen" style={{ background: '#F6F4EF' }}>
      <Sidebar />
      <div className="app-main flex-1">
        <AppHeader title={title} />
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
