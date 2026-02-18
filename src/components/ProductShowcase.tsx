import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, BookOpen, FlaskConical, Scale, Wind, Shield, Stethoscope, HeartPulse, Sprout, Dumbbell, Droplets, Sparkles, LucideIcon } from 'lucide-react';
import { healthCategories, sideDishes } from '../data/mockData';

const categoryIconMap: Record<string, LucideIcon> = {
  stress:       Wind,
  immunity:     Shield,
  diabetes:     Stethoscope,
  cholesterol:  Heart,
  hypertension: HeartPulse,
  digestion:    Sprout,
  liver:        Droplets,
  bone:         Dumbbell,
  anemia:       HeartPulse,
  skin:         Sparkles,
};

const ProductShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const filteredDishes = selectedCategory === 'all'
    ? sideDishes
    : sideDishes.filter(dish => dish.category === selectedCategory);

  const getCategoryIcon = (categoryId: string): LucideIcon =>
    categoryIconMap[categoryId] ?? Sparkles;

  const toggleLike = (id: string) => {
    setLiked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="section-label font-korean mb-5 inline-block">건강 반찬</span>
          <h2 className="display-md text-ink font-korean mb-4">
            10대 증상별 맞춤<br />
            <span className="gradient-text">건강 반찬 & 샐러드</span>
          </h2>
          <p className="text-base text-ink-secondary font-korean max-w-xl mx-auto">
            백석남 총주방장이 개발하고 영양학 박사가 검증한
            아쿠아포닉스 채소와 과학적 레시피의 완벽한 조화
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 font-korean ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-glow'
                  : 'bg-surface-secondary text-ink-secondary hover:bg-primary-50 hover:text-primary-600 border border-primary-100'
              }`}
            >
              전체보기
            </button>
            {healthCategories.map(cat => {
              const CatIcon = getCategoryIcon(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 font-korean flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-primary-600 text-white shadow-glow'
                      : 'bg-surface-secondary text-ink-secondary hover:bg-primary-50 hover:text-primary-600 border border-primary-100'
                  }`}
                >
                  <CatIcon className="w-3.5 h-3.5" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected category detail */}
        {selectedCategory !== 'all' && (
          <div className="mb-10">
            {healthCategories
              .filter(cat => cat.id === selectedCategory)
              .map(cat => {
                const DetailIcon = getCategoryIcon(cat.id);
                return (
                <div key={cat.id} className="glass-card rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-surface-secondary flex items-center justify-center flex-shrink-0">
                    <DetailIcon className="w-7 h-7 text-ink-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-ink mb-1 font-korean">{cat.name}</h3>
                    <p className="text-sm text-ink-secondary font-korean mb-3">{cat.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.targetSymptoms.map((sym: string, i: number) => (
                        <span key={i} className="text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full font-korean">
                          {sym}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
              })}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {filteredDishes.map(dish => {
            const DishIcon = getCategoryIcon(dish.category);
            return (
            <div
              key={dish.id}
              className="glass-card rounded-3xl overflow-hidden card-hover group"
            >
              {/* Image area */}
              <div className="relative h-44 bg-surface-secondary flex items-center justify-center">
                <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <DishIcon className="w-10 h-10 text-ink-secondary" />
                </div>

                {dish.chefRecommended && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-amber-400 text-white px-2.5 py-1 rounded-full text-xs font-bold font-korean">
                    <Star className="w-3 h-3" />
                    셰프 추천
                  </div>
                )}

                <button
                  onClick={() => toggleLike(dish.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform"
                >
                  <Heart className={`w-4 h-4 transition-colors ${liked.has(dish.id) ? 'text-red-500 fill-red-500' : 'text-ink-muted'}`} />
                </button>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-base font-bold text-ink mb-1.5 font-korean leading-snug">{dish.name}</h3>
                <p className="text-sm text-ink-tertiary font-korean mb-3 line-clamp-2">{dish.description}</p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {dish.benefits.slice(0, 2).map((b: string, i: number) => (
                    <span key={i} className="text-[11px] bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full font-korean">
                      {b}
                    </span>
                  ))}
                </div>

                {/* Nutrition */}
                <div className="p-2.5 bg-surface-secondary rounded-xl mb-4">
                  <div className="text-[10px] text-ink-muted font-korean mb-1.5">영양정보 (100g당)</div>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[11px] text-ink-secondary font-korean">
                    <span>칼로리: {dish.nutritionFacts.calories}kcal</span>
                    <span>단백질: {dish.nutritionFacts.protein}g</span>
                    <span>지방: {dish.nutritionFacts.fat}g</span>
                    <span>탄수화물: {dish.nutritionFacts.carbs}g</span>
                  </div>
                </div>

                {/* Price + Cart */}
                <div className="flex items-center justify-between">
                  <span className="text-base font-extrabold text-primary-600 font-korean">
                    {dish.price.toLocaleString()}원
                  </span>
                  <button className="flex items-center gap-1.5 bg-primary-600 text-white px-3 py-2 rounded-xl text-xs font-bold hover:bg-primary-700 transition-colors font-korean shadow-sm hover:shadow-glow">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    담기
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Science section */}
        <div className="glass-card rounded-3xl p-10 text-center">
          <h3 className="text-xl font-bold text-ink mb-3 font-korean">과학적 근거를 바탕으로 한 효능</h3>
          <p className="text-sm text-ink-secondary font-korean mb-10 max-w-lg mx-auto">
            모든 반찬의 건강 효능은 국내외 논문과 임상시험 결과를 바탕으로 검증되었습니다
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { SciIcon: BookOpen, title: '과학적 연구', desc: '1,247개의 국내외 논문과\n임상시험 결과 검증' },
              { SciIcon: FlaskConical, title: '아쿠아포닉스', desc: '무농약 아쿠아포닉스 시스템\n청정 채소 생산' },
              { SciIcon: Scale, title: '안전성 검증', desc: '식품안전처 인증과\nHACCP 기준 준수' },
            ].map(({ SciIcon, title, desc }) => (
              <div key={title}>
                <div className="w-14 h-14 rounded-2xl bg-surface-secondary flex items-center justify-center mx-auto mb-4">
                  <SciIcon className="w-7 h-7 text-ink-secondary" />
                </div>
                <h4 className="text-base font-bold text-ink mb-2 font-korean">{title}</h4>
                <p className="text-sm text-ink-tertiary font-korean leading-relaxed whitespace-pre-line">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
