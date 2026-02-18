import React from 'react';
import { HelpCircle } from 'lucide-react';
import PaymentMethod from './PaymentMethod';

const CheckoutPage: React.FC = () => {
  const subtotal = 1200000;
  const discount = 240000;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen py-10 px-6" style={{ background: '#F6F4EF' }}>
      {/* Header */}
      <div className="max-w-3xl mx-auto flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: '#1B4332' }}>식</div>
          <span className="font-bold font-korean" style={{ color: '#1B4332' }}>Sikyakdongwon</span>
        </div>
        <button className="flex items-center gap-1 text-sm text-gray-500 font-korean hover:text-gray-700">
          <HelpCircle className="w-4 h-4" />
          Help
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-black font-korean mb-8" style={{ color: '#1B4332' }}>
          Subscription Checkout & Payment
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl border border-gray-400 p-6">
            <h2 className="text-base font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
              Order Summary
            </h2>
            <div className="space-y-3 mb-5 text-sm font-korean">
              <div>
                <p className="text-gray-400 text-xs mb-0.5">Subscription Plan</p>
                <p className="text-gray-800 font-medium">AI-Powered Personalized Health Plan - Annual</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-0.5">Health Goals</p>
                <p className="text-gray-800 font-medium">Diabetes Management, Weight Control</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm font-korean">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>₩{subtotal.toLocaleString()}/yr</span>
              </div>
              <div className="flex justify-between" style={{ color: '#52B788' }}>
                <span>Annual Discount (20%):</span>
                <span>-₩{discount.toLocaleString()}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between">
                <span className="text-base font-bold font-korean text-gray-800">Total Due:</span>
                <span className="text-xl font-black" style={{ color: '#1B4332' }}>
                  ₩{total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-base font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
              Payment Method
            </h2>
            <PaymentMethod />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="forest-btn w-full py-4 rounded-2xl text-base font-korean">
            Complete Subscription · Pay ₩{total.toLocaleString()}
          </button>
          <p className="text-xs text-center text-gray-400 mt-3 font-korean">
            By clicking, you agree to our{' '}
            <a href="#" style={{ color: '#2D6A4F' }}>Terms of Service</a>
            {' '}and{' '}
            <a href="#" style={{ color: '#2D6A4F' }}>Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
