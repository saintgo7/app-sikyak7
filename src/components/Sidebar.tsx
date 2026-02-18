import React from 'react';
import { Home, Heart, Leaf, ShoppingBag, User, CreditCard, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { icon: Home, label: 'Home', path: '/dashboard' },
  { icon: Heart, label: 'My Health', path: '/dashboard/health' },
  { icon: Leaf, label: 'Food Therapy', path: '/dashboard/therapy' },
  { icon: ShoppingBag, label: 'Orders', path: '/dashboard/orders' },
  { icon: CreditCard, label: 'Subscribe', path: '/subscription' },
  { icon: User, label: 'Profile', path: '/dashboard/profile' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="app-sidebar">
      {/* Logo */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-8 cursor-pointer"
        style={{ background: 'rgba(255,255,255,0.15)' }}
        onClick={() => navigate('/')}
      >
        <span className="text-white font-bold text-sm">식</span>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map(({ icon: Icon, label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`sidebar-icon ${location.pathname === path || location.pathname.startsWith(path + '/') ? 'active' : ''}`}
            title={label}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="sidebar-icon mt-2"
        title="로그아웃"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </aside>
  );
};

export default Sidebar;
