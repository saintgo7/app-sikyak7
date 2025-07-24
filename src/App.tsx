import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AIAnalysisFlow from './components/AIAnalysisFlow';
import ProductShowcase from './components/ProductShowcase';
import BusinessModel from './components/BusinessModel';
import AITechSection from './components/AITechSection';
import CompanySection from './components/CompanySection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);

  const handleStartAnalysis = () => {
    setShowAnalysis(true);
  };

  const handleAnalysisComplete = (data: any) => {
    setAnalysisData(data);
  };

  return (
    <div className="App min-h-screen bg-white">
      <Header />
      
      {!showAnalysis ? (
        <>
          <HeroSection onStartAnalysis={handleStartAnalysis} />
          <BusinessModel />
          <ProductShowcase />
          <AITechSection />
          <CompanySection />
        </>
      ) : (
        <AIAnalysisFlow 
          onComplete={handleAnalysisComplete}
          onBack={() => setShowAnalysis(false)}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;