import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';

// Auth
import { AuthProvider, useAuth } from './context/AuthContext';

// Landing page components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AIAnalysisFlow from './components/AIAnalysisFlow';
import ProductShowcase from './components/ProductShowcase';
import BusinessModel from './components/BusinessModel';
import AITechSection from './components/AITechSection';
import CompanySection from './components/CompanySection';
import Footer from './components/Footer';

// App layout
import AppLayout from './components/AppLayout';

// Pages
import LoginPage from './pages/LoginPage';
import DashboardHome from './pages/DashboardHome';

// Health
import HealthDataPage from './components/health/HealthDataPage';
import FoodTherapyPage from './components/health/FoodTherapyPage';

// Meals & Orders
import MealPlanDetail from './components/meals/MealPlanDetail';
import OrderHistoryPage from './components/orders/OrderHistoryPage';

// Subscription
import SubscriptionPlans from './components/subscription/SubscriptionPlans';
import SubscriptionBuilder from './components/subscription/SubscriptionBuilder';

// Checkout
import CheckoutPage from './components/checkout/CheckoutPage';

// Protected route — redirects to /login if not authenticated
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

// Landing page wrapper
const LandingPage: React.FC = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      {!showAnalysis ? (
        <>
          <HeroSection onStartAnalysis={() => navigate('/login')} />
          <BusinessModel />
          <ProductShowcase />
          <AITechSection />
          <CompanySection />
          <Footer />
        </>
      ) : (
        <AIAnalysisFlow
          onComplete={() => {}}
          onBack={() => setShowAnalysis(false)}
        />
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Dashboard (protected) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AppLayout title="대시보드">
                  <DashboardHome />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/health"
            element={
              <ProtectedRoute>
                <AppLayout title="건강 데이터">
                  <HealthDataPage />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/therapy"
            element={
              <ProtectedRoute>
                <AppLayout title="약선 식단">
                  <FoodTherapyPage />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/meals"
            element={
              <ProtectedRoute>
                <AppLayout title="오늘의 식단">
                  <MealPlanDetail />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/orders"
            element={
              <ProtectedRoute>
                <AppLayout title="주문 내역">
                  <OrderHistoryPage />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* Subscription (standalone) */}
          <Route path="/subscription" element={<SubscriptionPlans />} />
          <Route path="/subscription/builder" element={<SubscriptionBuilder />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
