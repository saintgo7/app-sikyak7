import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, Filter } from 'lucide-react';
import { healthCategories, sideDishes } from '../data/mockData';

const ProductShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredDishes = selectedCategory === 'all' 
    ? sideDishes 
    : sideDishes.filter(dish => dish.category === selectedCategory);

  const getCategoryIcon = (categoryId: string) => {
    const category = healthCategories.find(cat => cat.id === categoryId);
    return category?.icon || '🥗';
  };

  const getCategoryColor = (categoryId: string) => {
    const category = healthCategories.find(cat => cat.id === categoryId);
    return category?.color || 'bg-gray-500';
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 font-korean">
            10대 증상별 맞춤 건강 반찬 & 샐러드
          </h2>
          <p className="text-3xl text-gray-600 max-w-3xl mx-auto font-korean">
            백석남 총주방장이 개발하고 영양학 박사가 검증한<br />
            아쿠아포닉스 채소와 과학적 레시피의 완벽한 조화
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-2xl text-gray-700 font-korean">카테고리별 보기</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`
                px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 font-korean
                ${selectedCategory === 'all'
                  ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
                }
              `}
            >
              전체보기
            </button>
            {healthCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 font-korean flex items-center
                  ${selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-300'
                  }
                `}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Info */}
        {selectedCategory !== 'all' && (
          <div className="mb-12">
            {healthCategories
              .filter(cat => cat.id === selectedCategory)
              .map(category => (
                <div key={category.id} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-2xl`}>
                      {category.icon}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 font-korean">{category.name}</h3>
                      <p className="text-gray-600 font-korean">{category.description}</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <span className="text-sm font-semibold text-gray-700 font-korean">대상 증상: </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {category.targetSymptoms.map((symptom, index) => (
                        <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-korean">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className={`
                bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer
                ${hoveredCard === dish.id ? 'transform scale-105 shadow-2xl' : 'hover:shadow-xl'}
              `}
              onMouseEnter={() => setHoveredCard(dish.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-health-100 flex items-center justify-center">
                <span className="text-6xl">{getCategoryIcon(dish.category)}</span>
                
                {dish.chefRecommended && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center font-korean">
                    <Star className="w-3 h-3 mr-1" />
                    셰프 추천
                  </div>
                )}

                <div className="absolute top-3 right-3">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-korean">
                  {dish.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 font-korean line-clamp-2">
                  {dish.description}
                </p>

                {/* Benefits */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {dish.benefits.slice(0, 2).map((benefit, index) => (
                      <span key={index} className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full font-korean">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nutrition Facts */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600 font-korean mb-1">영양정보 (100g당)</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="font-korean">칼로리: {dish.nutritionFacts.calories}kcal</div>
                    <div className="font-korean">단백질: {dish.nutritionFacts.protein}g</div>
                    <div className="font-korean">지방: {dish.nutritionFacts.fat}g</div>
                    <div className="font-korean">탄수화물: {dish.nutritionFacts.carbs}g</div>
                  </div>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">
                      {dish.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">원</span>
                  </div>
                  
                  <button className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors flex items-center text-sm font-semibold">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    담기
                  </button>
                </div>

                {/* Ingredients (on hover) */}
                {hoveredCard === dish.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                    <div className="text-xs text-gray-600 font-korean mb-1">주요 재료</div>
                    <div className="flex flex-wrap gap-1">
                      {dish.ingredients.slice(0, 4).map((ingredient, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-korean">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Evidence Section */}
        <div className="mt-20 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-korean">
              과학적 근거를 바탕으로 한 효능
            </h3>
            <p className="text-gray-600 mb-8 font-korean">
              모든 반찬의 건강 효능은 국내외 논문과 임상시험 결과를 바탕으로 검증되었습니다
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-korean">과학적 연구</h4>
                <p className="text-sm text-gray-600 font-korean">
                  1,247개의 국내외 논문과<br />
                  임상시험 결과 검증
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-korean">아쿠아포닉스</h4>
                <p className="text-sm text-gray-600 font-korean">
                  무농약 아쿠아포닉스 시스템<br />
                  청정 채소 생산
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 font-korean">안전성 검증</h4>
                <p className="text-sm text-gray-600 font-korean">
                  식품안전처 인증과<br />
                  HACCP 기준 준수
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductShowcase;