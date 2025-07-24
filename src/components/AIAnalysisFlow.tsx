import React, { useState, useEffect } from 'react';
import { ArrowLeft, Upload, FileText, Brain, CheckCircle, AlertTriangle, XCircle, ShoppingCart } from 'lucide-react';
import { sampleHealthData, sideDishes, aiAnalysisSteps, HealthIndicator, SideDish } from '../data/mockData';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface AIAnalysisFlowProps {
  onComplete: (data: any) => void;
  onBack: () => void;
}

interface AnalysisStep {
  step: number;
  title: string;
  description: string;
  duration: number;
}

const AIAnalysisFlow: React.FC<AIAnalysisFlowProps> = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState(0);
  const [healthData, setHealthData] = useState<HealthIndicator[]>([]);
  const [recommendedDishes, setRecommendedDishes] = useState<SideDish[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  // Simulate AI analysis process
  useEffect(() => {
    if (isAnalyzing && currentAnalysisStep < aiAnalysisSteps.length) {
      const timer = setTimeout(() => {
        setCurrentAnalysisStep(prev => prev + 1);
        
        if (currentAnalysisStep === aiAnalysisSteps.length - 1) {
          // Analysis complete - generate results
          setHealthData(sampleHealthData);
          
          // Recommend dishes based on health issues
          const recommendations = [];
          const hasHighCholesterol = sampleHealthData.find(d => d.name === '총콜레스테롤')?.status === 'danger';
          const hasHighBP = sampleHealthData.find(d => d.name === '혈압')?.status === 'warning';
          const hasHighBloodSugar = sampleHealthData.find(d => d.name === '혈당')?.status === 'warning';
          
          if (hasHighCholesterol) {
            recommendations.push(...sideDishes.filter(d => d.category === 'cholesterol'));
          }
          if (hasHighBP) {
            recommendations.push(...sideDishes.filter(d => d.category === 'hypertension'));
          }
          if (hasHighBloodSugar) {
            recommendations.push(...sideDishes.filter(d => d.category === 'diabetes'));
          }
          
          // Add some general health dishes
          recommendations.push(...sideDishes.filter(d => d.category === 'immunity').slice(0, 2));
          recommendations.push(...sideDishes.filter(d => d.category === 'digestion').slice(0, 1));
          
          setRecommendedDishes(recommendations.slice(0, 6));
          setIsAnalyzing(false);
          setAnalysisComplete(true);
          setCurrentStep(3);
        }
      }, aiAnalysisSteps[currentAnalysisStep].duration);

      return () => clearTimeout(timer);
    }
  }, [isAnalyzing, currentAnalysisStep]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const startAnalysis = () => {
    if (uploadedFile) {
      setIsAnalyzing(true);
      setCurrentStep(2);
      setCurrentAnalysisStep(0);
    }
  };

  const addToCart = (dishId: string) => {
    setCart(prev => [...prev, dishId]);
  };

  const removeFromCart = (dishId: string) => {
    setCart(prev => prev.filter(id => id !== dishId));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'normal':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'danger':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'text-green-600 bg-green-50';
      case 'warning':
        return 'text-yellow-600 bg-yellow-50';
      case 'danger':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  // Prepare chart data
  const chartData = healthData.map(item => ({
    name: item.name,
    value: item.value,
    status: item.status
  }));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-korean">메인으로 돌아가기</span>
          </button>
          
          <h1 className="text-5xl font-bold text-gray-900 font-korean">
            AI 건강검진 분석 시스템
          </h1>
          <p className="text-2xl text-gray-600 mt-2 font-korean">
            6,844,615개의 의료 데이터를 학습한 AI가 10대 증상별 맞춤 솔루션을 제공합니다
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {[
              { num: 1, title: '파일 업로드', desc: '건강검진 결과' },
              { num: 2, title: 'AI 분석', desc: '건강 상태 평가' },
              { num: 3, title: '반찬 추천', desc: '맞춤 추천 결과' }
            ].map((step, index) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg
                  ${currentStep >= step.num 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {step.num}
                </div>
                <div className="mt-2 text-center">
                  <div className="font-semibold text-sm font-korean">{step.title}</div>
                  <div className="text-xs text-gray-500 font-korean">{step.desc}</div>
                </div>
                {index < 2 && (
                  <div className={`
                    absolute top-6 left-1/2 w-24 h-0.5 transform translate-x-6
                    ${currentStep > step.num ? 'bg-primary-500' : 'bg-gray-200'}
                  `} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: File Upload */}
        {currentStep === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <Upload className="w-16 h-16 text-primary-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-korean">
                건강검진 결과를 업로드해주세요
              </h2>
              <p className="text-2xl text-gray-600 mb-8 font-korean">
                PDF 파일 또는 이미지 파일을 업로드하면 AI가 자동으로 분석합니다<br />
                30-40대 주부 및 OPAL세대 맞춤 건강 솔루션 제공
              </p>

              {/* 10대 증상 카테고리 표시 */}
              <div className="mb-8 p-6 bg-primary-50 rounded-xl">
                <p className="text-lg font-semibold text-primary-900 mb-4 font-korean">AI가 분석하는 10대 건강 증상</p>
                <div className="grid grid-cols-5 gap-3">
                  {[
                    { icon: '😓', name: '스트레스' },
                    { icon: '🛡️', name: '면역력' },
                    { icon: '🩺', name: '당뇨' },
                    { icon: '❤️', name: '콜레스테롤' },
                    { icon: '💓', name: '고혈압' },
                    { icon: '🌱', name: '소화기능' },
                    { icon: '🫀', name: '간 건강' },
                    { icon: '🦴', name: '뼈 건강' },
                    { icon: '🩸', name: '빈혈' },
                    { icon: '✨', name: '피부 건강' }
                  ].map((category, index) => (
                    <div key={index} className="text-center p-3 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl mb-1">{category.icon}</div>
                      <div className="text-sm font-korean text-gray-700">{category.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 mb-6 hover:border-primary-400 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-700 font-korean">
                    파일을 여기에 드래그하거나 클릭하여 선택
                  </p>
                  <p className="text-sm text-gray-500 mt-2 font-korean">
                    PDF, JPG, PNG 파일 지원 (최대 10MB)
                  </p>
                </label>
              </div>

              {uploadedFile && (
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold text-primary-800 font-korean">
                      {uploadedFile.name}
                    </span>
                  </div>
                </div>
              )}

              <button
                onClick={startAnalysis}
                disabled={!uploadedFile}
                className={`
                  px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 font-korean
                  ${uploadedFile
                    ? 'bg-primary-500 text-white hover:bg-primary-600 transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                AI 분석 시작하기
              </button>
            </div>
          </div>
        )}

        {/* Step 2: AI Analysis */}
        {currentStep === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-12 h-12 text-primary-500 animate-pulse" />
                </div>
                <div className="absolute inset-0 w-24 h-24 border-4 border-primary-500 rounded-full animate-spin mx-auto opacity-20"></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-korean">
                AI가 건강검진 결과를 분석하고 있습니다
              </h2>

              <div className="space-y-6">
                {aiAnalysisSteps.map((step, index) => (
                  <div key={step.step} className={`
                    flex items-center p-4 rounded-lg transition-all duration-500
                    ${index <= currentAnalysisStep
                      ? 'bg-primary-50 border border-primary-200'
                      : 'bg-gray-50 border border-gray-200'
                    }
                  `}>
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center mr-4 font-semibold
                      ${index < currentAnalysisStep
                        ? 'bg-primary-500 text-white'
                        : index === currentAnalysisStep
                        ? 'bg-primary-500 text-white animate-pulse'
                        : 'bg-gray-300 text-gray-600'
                      }
                    `}>
                      {index < currentAnalysisStep ? '✓' : step.step}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 font-korean">{step.title}</div>
                      <div className="text-sm text-gray-600 font-korean">{step.description}</div>
                    </div>
                    {index === currentAnalysisStep && (
                      <div className="ml-auto">
                        <div className="animate-spin w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Results and Recommendations */}
        {currentStep === 3 && analysisComplete && (
          <div className="space-y-8">
            {/* Health Analysis Results */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-korean">
                건강 분석 결과
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Health Indicators Table */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 font-korean">
                    주요 건강 지표
                  </h3>
                  <div className="space-y-3">
                    {healthData.map((indicator, index) => (
                      <div key={index} className={`
                        flex items-center justify-between p-4 rounded-lg border
                        ${getStatusColor(indicator.status)}
                      `}>
                        <div className="flex items-center">
                          {getStatusIcon(indicator.status)}
                          <span className="ml-3 font-semibold font-korean">{indicator.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">{indicator.value} {indicator.unit}</div>
                          <div className="text-xs opacity-75 font-korean">정상: {indicator.normalRange}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Health Chart */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 font-korean">
                    건강 지표 차트
                  </h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" fontSize={12} />
                        <YAxis />
                        <Tooltip 
                          formatter={(value, name) => [`${value}`, '수치']}
                          labelStyle={{ fontFamily: 'Noto Sans KR' }}
                        />
                        <Bar 
                          dataKey="value" 
                          fill="#22c55e"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Dishes */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-korean">
                AI 맞춤 반찬 & 아쿠아포닉스 샐러드 추천
              </h2>
              <p className="text-gray-600 mb-8 font-korean">
                분석된 건강 상태를 기반으로 선별된 맞춤 반찬과 무농약 샐러드입니다<br />
                백석남 총주방장이 개발한 특별 레시피
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedDishes.map((dish) => {
                  const isInCart = cart.includes(dish.id);
                  return (
                    <div key={dish.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-6xl">{dish.category === 'cholesterol' ? '🫀' : 
                                                      dish.category === 'hypertension' ? '💗' :
                                                      dish.category === 'diabetes' ? '🩺' :
                                                      dish.category === 'immunity' ? '🛡️' :
                                                      dish.category === 'digestion' ? '🌱' : '🥗'}</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 font-korean">
                          {dish.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 font-korean line-clamp-2">
                          {dish.description}
                        </p>
                        <div className="mb-4">
                          <div className="text-sm text-gray-500 mb-2 font-korean">주요 효능:</div>
                          <div className="flex flex-wrap gap-1">
                            {dish.benefits.slice(0, 2).map((benefit, index) => (
                              <span key={index} className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full font-korean">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-primary-600">
                            {dish.price.toLocaleString()}원
                          </span>
                          <button
                            onClick={() => isInCart ? removeFromCart(dish.id) : addToCart(dish.id)}
                            className={`
                              flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all
                              ${isInCart
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-primary-500 text-white hover:bg-primary-600'
                              }
                            `}
                          >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            {isInCart ? '담음' : '담기'}
                          </button>
                        </div>
                        {dish.chefRecommended && (
                          <div className="mt-2">
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-korean">
                              ⭐ 셰프 추천
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {cart.length > 0 && (
                <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary-900 font-korean">
                      장바구니에 {cart.length}개 상품이 담겨있습니다
                    </span>
                    <button className="bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600 transition-colors font-korean">
                      주문하기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAnalysisFlow;