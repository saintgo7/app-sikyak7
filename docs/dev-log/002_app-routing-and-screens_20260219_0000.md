# Dev Log #002: 앱 라우팅 및 내부 화면 구현

**Date**: 2026-02-19
**Author**: Ph.D SNT Go.
**Phase**: Frontend - App Architecture & Screen Implementation

---

## Summary

React Router 기반 라우팅 구조를 도입하고, 랜딩 페이지와 앱 내부 화면을 분리했습니다.
인증 컨텍스트(AuthContext), 보호 라우트(Protected Route), 도메인별 화면(health/meals/orders/subscription/checkout)을 구현했습니다.

---

## Previous Session Review

- #001: Mobile-First 타이포그래피 리디자인 완료 (PDCA 100%)
- 커밋 미완료 상태였음

---

## Changes Made

### Dependencies Added
- `react-router-dom ^6.30.3` - SPA 라우팅

### Files Modified

| 파일 | 주요 변경 내용 |
|------|--------------|
| `src/App.tsx` | BrowserRouter + Routes 도입, AuthProvider 래핑, ProtectedRoute 구현, LandingPage/AppPages 분리 |
| `src/components/Header.tsx` | 랜딩 페이지 헤더 업데이트 |
| `src/components/HeroSection.tsx` | CTA → `/login` navigate로 변경 |
| `src/components/AIAnalysisFlow.tsx` | 분석 플로우 컴포넌트 조정 |
| `src/components/AITechSection.tsx` | 스타일 개선 |
| `src/components/BusinessModel.tsx` | 스타일 개선 |
| `src/components/CompanySection.tsx` | 스타일 개선 |
| `src/components/Footer.tsx` | 스타일 개선 |
| `src/components/ProductShowcase.tsx` | 스타일 개선 |
| `src/index.css` | 앱 전용 CSS 변수 및 스타일 대폭 추가 |
| `tailwind.config.js` | 커스텀 색상/토큰 확장 |
| `package.json` / `package-lock.json` | react-router-dom 추가 |

### Files Created

**인증 & 레이아웃**
- `src/context/AuthContext.tsx` - 로그인 상태 관리 (isLoggedIn, login, logout)
- `src/components/AppHeader.tsx` - 앱 내부 상단 헤더
- `src/components/AppLayout.tsx` - 앱 레이아웃 (Sidebar + 콘텐츠 영역)
- `src/components/Sidebar.tsx` - 좌측 네비게이션 사이드바

**페이지**
- `src/pages/LoginPage.tsx` - 로그인 화면
- `src/pages/DashboardHome.tsx` - 대시보드 홈

**공통 컴포넌트**
- `src/components/NutritionChart.tsx` - 영양소 차트
- `src/components/RecommendationCard.tsx` - 추천 카드
- `src/components/DeliveryCalendar.tsx` - 배송 캘린더

**도메인별 화면**
- `src/components/health/HealthDataPage.tsx` - 건강 데이터 현황
- `src/components/health/FoodTherapyPage.tsx` - 식이요법 추천
- `src/components/health/HealthGauge.tsx` - 건강 지표 게이지
- `src/components/health/HealthMetricBadge.tsx` - 건강 지표 뱃지
- `src/components/meals/MealPlanDetail.tsx` - 식단 플랜 상세
- `src/components/orders/OrderHistoryPage.tsx` - 주문 내역
- `src/components/subscription/SubscriptionPlans.tsx` - 구독 플랜 목록
- `src/components/subscription/SubscriptionBuilder.tsx` - 구독 구성 빌더
- `src/components/subscription/PlanCard.tsx` - 플랜 카드 컴포넌트
- `src/components/checkout/CheckoutPage.tsx` - 결제 화면
- `src/components/checkout/PaymentMethod.tsx` - 결제 수단 선택

**기타**
- `docs/dev-log/002_app-routing-and-screens_20260219_0000.md` - 본 파일

---

## Technical Details

### 라우팅 구조

```
/                  → LandingPage (랜딩)
/login             → LoginPage (로그인)
/app               → Protected (AppLayout)
  /app/dashboard   → DashboardHome
  /app/health      → HealthDataPage
  /app/therapy     → FoodTherapyPage
  /app/meals/:id   → MealPlanDetail
  /app/orders      → OrderHistoryPage
  /app/subscription → SubscriptionPlans
  /app/checkout    → CheckoutPage
```

### 인증 흐름

```
랜딩 CTA 클릭 → /login → 로그인 성공 → /app/dashboard
미인증 상태에서 /app/* 접근 → /login redirect
```

### 상태 관리

- `AuthContext`: React Context API로 전역 인증 상태 관리
- 컴포넌트 로컬 state: 각 화면별 UI 상태

---

## Next Steps

- [ ] 실제 Firebase Auth 연동 (현재 mock 상태)
- [ ] 건강 데이터 실제 연동 (PDF 파싱 또는 수동 입력)
- [ ] 구독/결제 백엔드 API 연동
- [ ] E2E 테스트 시나리오 작성

---

## Related

- Commits: (이번 커밋)
- Previous Log: `001_design-improvement_20260216_0000.md`
