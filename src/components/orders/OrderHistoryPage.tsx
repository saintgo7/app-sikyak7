import React, { useState } from 'react';
import { Plus } from 'lucide-react';
const orders = [
  { date: 'Oct 19, 2024', items: 'Steamed Salmon, Quinoa Salad', status: 'Delivered' },
  { date: 'Oct 12, 2024', items: 'Roasted Root Vegetables, Chicken', status: 'Delivered' },
  { date: 'Oct 5, 2024', items: 'Tofu Scramble, Lentil Soup', status: 'Delivered' },
];

const OrderHistoryPage: React.FC = () => {
  const [autoAdjust, setAutoAdjust] = useState(true);
  const [excluded, setExcluded] = useState<string[]>(['Peanuts']);
  const [inputTag, setInputTag] = useState('');

  const addTag = () => {
    if (inputTag.trim()) {
      setExcluded(prev => [...prev, inputTag.trim()]);
      setInputTag('');
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
        {/* Order History Table */}
        <div className="lg:col-span-2 forest-card p-6">
          <h3 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
            Order History
          </h3>
          <table className="w-full text-sm font-korean">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 text-gray-500 font-medium">Date</th>
                <th className="text-left py-2 text-gray-500 font-medium">Items</th>
                <th className="text-left py-2 text-gray-500 font-medium">Status</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.date} className="border-b border-gray-300 last:border-0">
                  <td className="py-3 text-gray-600">{o.date}</td>
                  <td className="py-3 text-gray-800 font-medium">{o.items}</td>
                  <td className="py-3">
                    <span className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{ background: '#DCFCE7', color: '#166534' }}>
                      {o.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button className="forest-btn-outline text-xs py-1 px-3 rounded-lg">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Customization Panel */}
        <div className="space-y-5">
          <div className="forest-card p-5">
            <h3 className="text-base font-bold font-korean mb-1" style={{ color: '#1B4332' }}>
              Nutrition Customization
            </h3>
            <p className="text-xs text-gray-500 font-korean mb-4">
              최근 건강 데이터를 기반으로 다음 배송을 자동 조정합니다.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-korean text-gray-700">Auto-adjust nutrition</span>
              <button
                onClick={() => setAutoAdjust(!autoAdjust)}
                className="relative w-11 h-6 rounded-full transition-colors"
                style={{ background: autoAdjust ? '#1B4332' : '#D1D5DB' }}
              >
                <span className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  autoAdjust ? 'translate-x-5' : 'translate-x-0.5'
                }`} />
              </button>
            </div>
          </div>

          <div className="forest-card p-5">
            <h3 className="text-base font-bold font-korean mb-3" style={{ color: '#1B4332' }}>
              Exclude Ingredients
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {excluded.map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: '#DCFCE7', color: '#166534' }}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                value={inputTag}
                onChange={e => setInputTag(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addTag()}
                placeholder="Add ingredient to exclude"
                className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-green-400 font-korean"
              />
              <button onClick={addTag} className="forest-btn p-2 rounded-lg">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default OrderHistoryPage;
