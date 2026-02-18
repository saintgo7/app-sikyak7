import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
const deliveryDays = [5, 12, 19, 26]; // upcoming delivery dates

const DeliveryCalendar: React.FC = () => {
  const [month] = useState(new Date(2024, 9)); // Oct 2024
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = Array(firstDay).fill(null).concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  return (
    <div className="forest-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold font-korean" style={{ color: '#1B4332' }}>배송 일정</h3>
        <div className="flex gap-1">
          <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100">
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <button className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-gray-100">
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {DAYS.map(d => (
          <div key={d} className="text-xs font-medium text-gray-400 py-1">{d}</div>
        ))}
        {cells.map((day, i) => (
          <div
            key={i}
            className={`text-sm py-1.5 rounded-full cursor-pointer transition-colors font-korean
              ${!day ? '' : deliveryDays.includes(day) ? 'text-white font-bold' : 'text-gray-600 hover:bg-gray-50'}
            `}
            style={day && deliveryDays.includes(day) ? { background: '#1B4332' } : {}}
          >
            {day || ''}
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 font-korean mt-3">다음 배송: 10월 26일 (토)</p>
    </div>
  );
};

export default DeliveryCalendar;
