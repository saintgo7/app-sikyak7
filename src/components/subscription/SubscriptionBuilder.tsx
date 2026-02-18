import React, { useState } from 'react';
import { Activity, Heart, TrendingDown } from 'lucide-react';

const healthGoals = [
  { id: 'diabetes', icon: Activity, label: 'Diabetes', desc: '혈당 조절에 최적화된 저당 식단' },
  { id: 'hypertension', icon: Heart, label: 'Hypertension', desc: '저염 위주 혈압 관리 식단' },
  { id: 'weightloss', icon: TrendingDown, label: 'Weight Loss', desc: '칼로리 조절 + 포만감 식단' },
];

const frequencies = [
  { id: '2', label: '2 Times a Week', price: 80000 },
  { id: '3', label: '3 Times a Week', price: 110000 },
  { id: '5', label: '5 Times a Week', price: 160000 },
];

const mealPreviews = [
  { name: 'Spicy Tuna Poke Bowl with Brown Rice', tag: '혈당 관리', img: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400&h=200&fit=crop' },
  { name: 'Quinoa Salad with Grilled Chicken and Avocado', tag: '고혈압 관리', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=200&fit=crop' },
  { name: 'Roasted Vegetable and Tofu Stir-Fry', tag: '체중 관리', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=200&fit=crop' },
];

const SubscriptionBuilder: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedFreq, setSelectedFreq] = useState('3');

  const basePrice = 30000;
  const freqPrice = frequencies.find(f => f.id === selectedFreq)?.price ?? 110000;
  const aiCustomFee = 10000;
  const total = basePrice + freqPrice + aiCustomFee;

  return (
    <div className="min-h-screen" style={{ background: '#F6F4EF' }}>
      {/* Top Nav */}
      <nav className="bg-white border-b border-gray-300 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: '#1B4332' }}>식</div>
          <span className="font-bold font-korean" style={{ color: '#1B4332' }}>Sikyakdongwon</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-korean text-gray-500">
          {['Home', 'Our Approach', 'Subscription', 'About Us', 'Contact'].map(item => (
            <a key={item} href="#" className="hover:text-green-700 transition-colors"
              style={{ color: item === 'Subscription' ? '#1B4332' : undefined, fontWeight: item === 'Subscription' ? 600 : undefined }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8 flex gap-8">
        {/* Main Steps */}
        <div className="flex-1 space-y-8">
          {/* Step 1 */}
          <section>
            <h2 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
              1. Choose Your Health Goal
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {healthGoals.map(({ id, icon: Icon, label, desc }) => (
                <button
                  key={id}
                  onClick={() => setSelectedGoal(id)}
                  className="p-5 rounded-2xl text-center border-2 transition-all"
                  style={selectedGoal === id
                    ? { borderColor: '#1B4332', background: '#F0FDF4' }
                    : { borderColor: '#E5E7EB', background: '#FFFFFF' }
                  }
                >
                  <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: selectedGoal === id ? '#B7E4C7' : '#F3F4F6' }}>
                    <Icon className="w-6 h-6" style={{ color: '#1B4332' }} />
                  </div>
                  <p className="font-bold font-korean text-sm mb-1" style={{ color: '#1B4332' }}>{label}</p>
                  <p className="text-xs text-gray-500 font-korean">{desc}</p>
                  {selectedGoal === id && (
                    <span className="mt-2 inline-block text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: '#1B4332', color: '#FFFFFF' }}>Selected</span>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
              2. Select Delivery Frequency
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {frequencies.map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFreq(f.id)}
                  className="p-4 rounded-2xl text-left border-2 transition-all"
                  style={selectedFreq === f.id
                    ? { borderColor: '#1B4332', background: '#F0FDF4' }
                    : { borderColor: '#E5E7EB', background: '#FFFFFF' }
                  }
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: selectedFreq === f.id ? '#1B4332' : '#D1D5DB' }}>
                      {selectedFreq === f.id && (
                        <div className="w-2 h-2 rounded-full" style={{ background: '#1B4332' }} />
                      )}
                    </div>
                    <span className="text-sm font-bold font-korean" style={{ color: '#1B4332' }}>{f.label}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-korean">₩{f.price.toLocaleString()}/월 추가</p>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
              3. AI-Matched Meal Preview
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {mealPreviews.map(meal => (
                <div key={meal.name} className="bg-white rounded-2xl overflow-hidden border border-gray-300">
                  <div className="h-32"
                    style={{ backgroundImage: `url(${meal.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div className="p-3">
                    <p className="text-sm font-semibold font-korean text-gray-800 mb-2 leading-snug">{meal.name}</p>
                    <button className="w-full py-1.5 rounded-lg text-xs font-bold font-korean border-2 transition-all hover:bg-green-50"
                      style={{ borderColor: '#1B4332', color: '#1B4332' }}>
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Cost Summary */}
        <div className="w-72 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-300 p-6 sticky top-6">
            <h3 className="text-base font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
              Total Monthly Cost Summary
            </h3>
            <div className="space-y-2 text-sm font-korean text-gray-600 mb-5">
              <div className="flex justify-between">
                <span>• Base Subscription</span>
                <span>₩{basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>• Selected Goal:</span>
                <span className="text-gray-800 font-medium">{selectedGoal || '[Goal]'}</span>
              </div>
              <div className="flex justify-between">
                <span>• Frequency:</span>
                <span className="text-gray-800 font-medium">{selectedFreq}x/week</span>
              </div>
              <div className="flex justify-between">
                <span>• AI Customization Fee</span>
                <span>₩{aiCustomFee.toLocaleString()}</span>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-4 mb-5">
              <div className="text-2xl font-black font-korean" style={{ color: '#1B4332' }}>
                ₩{total.toLocaleString()}
                <span className="text-sm font-normal text-gray-500"> / month</span>
              </div>
            </div>
            <button className="forest-btn w-full rounded-xl py-3 text-sm font-korean">
              Start My Healthy Journey
            </button>
            <p className="text-xs text-center mt-2 text-gray-400 font-korean">Need Help?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBuilder;
