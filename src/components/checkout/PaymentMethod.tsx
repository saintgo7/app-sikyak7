import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CreditCard } from 'lucide-react';

type PayMethod = 'kakao' | 'naver' | 'card' | 'bank';

const PaymentMethod: React.FC = () => {
  const [selected, setSelected] = useState<PayMethod>('card');
  const [cardOpen, setCardOpen] = useState(true);
  const [bankOpen, setBankOpen] = useState(false);

  return (
    <div className="space-y-3">
      {/* Quick Pay */}
      <div>
        <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Quick Pay</p>
        <div className="flex gap-3">
          <button
            onClick={() => setSelected('kakao')}
            className="flex-1 py-3 rounded-xl font-bold text-sm transition-all"
            style={{
              background: '#FEE500',
              color: '#1A1A1A',
              border: selected === 'kakao' ? '2px solid #1B4332' : '2px solid transparent',
            }}
          >
            💬 KakaoPay
          </button>
          <button
            onClick={() => setSelected('naver')}
            className="flex-1 py-3 rounded-xl font-bold text-sm transition-all"
            style={{
              background: '#03C75A',
              color: '#FFFFFF',
              border: selected === 'naver' ? '2px solid #1B4332' : '2px solid transparent',
            }}
          >
            N NaverPay
          </button>
        </div>
      </div>

      {/* Credit Card */}
      <div className="border border-gray-400 rounded-xl overflow-hidden bg-white">
        <button
          onClick={() => { setCardOpen(!cardOpen); setSelected('card'); }}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold font-korean text-gray-700"
        >
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Credit/Debit Card
          </div>
          {cardOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {cardOpen && (
          <div className="px-4 pb-4 space-y-2">
            <input placeholder="Card Number" className="w-full text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-400 font-korean" />
            <div className="grid grid-cols-3 gap-2">
              <input placeholder="MM/YY" className="text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-400" />
              <input placeholder="CVV" className="text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-400" />
              <input placeholder="Name on Card" className="text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-400 font-korean" />
            </div>
            <label className="flex items-center gap-2 text-xs text-gray-500 font-korean cursor-pointer">
              <input type="checkbox" className="rounded" />
              Save this card for future use
            </label>
          </div>
        )}
      </div>

      {/* Bank Transfer */}
      <div className="border border-gray-400 rounded-xl overflow-hidden bg-white">
        <button
          onClick={() => { setBankOpen(!bankOpen); setSelected('bank'); }}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold font-korean text-gray-700"
        >
          Bank Transfer
          {bankOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {bankOpen && (
          <div className="px-4 pb-4 space-y-2">
            <select className="w-full text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-400 font-korean">
              <option>Select Bank</option>
              <option>국민은행</option>
              <option>신한은행</option>
              <option>우리은행</option>
              <option>하나은행</option>
            </select>
            <p className="text-xs text-gray-500 font-korean">Account details: 123-456-XXXX</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
