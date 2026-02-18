import React, { useState } from 'react';
import { Upload, FileText } from 'lucide-react';
import HealthMetricBadge from './HealthMetricBadge';
import HealthGauge from './HealthGauge';

const healthMetrics = [
  { label: 'Blood Pressure', value: '130/85', unit: 'mmHg', status: 'warning' as const },
  { label: 'Cholesterol', value: '210', unit: 'mg/dL', status: 'warning' as const },
  { label: 'Sugar Levels', value: '95', unit: 'mg/dL', status: 'normal' as const },
];

const gaugeData = [
  { label: 'Glucose', value: 105, unit: 'mg/dL', status: 'warning' as const, max: 200 },
  { label: 'LDL Cholesterol', value: 130, unit: 'mg/dL', status: 'warning' as const, max: 200 },
  { label: 'BMI', value: 25, unit: '', status: 'normal' as const, min: 10, max: 40 },
];

const recommendations = [
  { name: '저염 미역국', reason: '혈압에 도움, 칼륨 풍부', tag: '고혈압 관리', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=160&fit=crop' },
  { name: '가지 된장볶음', reason: '콜레스테롤 저하, 항산화', tag: '콜레스테롤 개선', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=160&fit=crop' },
  { name: '시금치 두부 무침', reason: '혈당 안정, 단백질 공급', tag: '혈당 관리', img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=200&h=160&fit=crop' },
  { name: '고등어 구이', reason: '오메가-3, 심장 건강', tag: '심혈관 건강', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=200&h=160&fit=crop' },
];

const HealthDataPage: React.FC = () => {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="space-y-6">
        {/* Upload + Metrics */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="forest-card p-6">
            <h3 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
              Health Data Integration
            </h3>
            <div className="space-y-2 mb-5">
              {healthMetrics.map(m => (
                <HealthMetricBadge key={m.label} {...m} />
              ))}
            </div>
            <button
              onClick={() => setUploaded(true)}
              className="forest-btn w-full flex items-center justify-center gap-2 text-sm rounded-lg"
            >
              <Upload className="w-4 h-4" />
              Upload Medical Report
            </button>
            {uploaded && (
              <p className="text-xs text-center mt-2" style={{ color: '#2D6A4F' }}>
                ✓ Report uploaded successfully
              </p>
            )}
          </div>

          <div className="forest-card p-6">
            <h3 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
              AI Analysis Report
            </h3>
            <div
              className="p-3 rounded-xl mb-4 text-sm font-korean text-gray-700 leading-relaxed"
              style={{ background: '#F0FDF4', border: '1px solid #B7E4C7' }}
            >
              최근 데이터 기준, 혈압과 콜레스테롤이 약간 높습니다. 저염식·저지방 식단 위주로
              구성된 반찬을 권장합니다.
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-korean">
              <FileText className="w-3.5 h-3.5" />
              Last synced: Oct 23, 2024 · Status: Active
            </div>
          </div>
        </div>

        {/* Health Gauges */}
        <div className="forest-card p-6">
          <h3 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
            Health Metrics Dashboard
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {gaugeData.map(g => (
              <HealthGauge key={g.label} {...g} />
            ))}
          </div>
        </div>

        {/* Recommended Side Dishes */}
        <div className="forest-card p-6">
          <h3 className="text-lg font-bold font-korean mb-4" style={{ color: '#1B4332' }}>
            Recommended Side Dishes for You
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendations.map(r => (
              <div
                key={r.name}
                className="rounded-xl overflow-hidden border border-gray-300 hover:border-green-200 transition-colors"
              >
                <div className="h-28" style={{ backgroundImage: `url(${r.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="p-3">
                <p className="text-sm font-bold font-korean text-gray-800 mb-1">{r.name}</p>
                <p className="text-xs text-gray-500 font-korean mb-2 leading-relaxed">{r.reason}</p>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full font-korean"
                  style={{ background: '#DCFCE7', color: '#166534' }}
                >
                  {r.tag}
                </span>
              </div>
            </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default HealthDataPage;
