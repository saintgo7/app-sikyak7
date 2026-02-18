# Plan: stitch-redesign

**Date**: 2026-02-18
**Feature**: stitch-redesign
**Phase**: Plan
**Project**: app-sikyak (식약동원)

---

## 1. 개요 (Overview)

`stitch/` 폴더의 10개 화면 디자인을 기반으로 app-sikyak 웹사이트를 전면 재설계한다.
현재 마케팅 랜딩페이지 구조에서 **앱형 대시보드 + 구독 플로우**를 추가/변환한다.

---

## 2. 현재 상태 vs 목표 상태

| 항목 | 현재 (as-is) | 목표 (to-be) |
|------|------------|------------|
| 타입 | 마케팅 랜딩페이지 | 앱형 대시보드 + 랜딩 |
| 컬러 | 블루 (#0066FF, #99C2FF) | 다크그린 (#1B4332 계열) |
| 레이아웃 | 세로 스크롤 단일 페이지 | 좌측 사이드바 + 메인 콘텐츠 |
| 이미지 | 아이콘/일러스트 | 실제 음식 사진 |
| 기능 | 정적 마케팅 | 대시보드, 구독, 결제 플로우 |
| 결제 | 없음 | KakaoPay, NaverPay, 카드, 계좌 |

---

## 3. stitch 화면 분석

### 3-1. AI Health Dashboard (6개 화면)

| 화면 | 파일 | 주요 구성 |
|------|------|---------|
| Home Dashboard | ai_health_dashboard_v2_1 | 주간 영양 밸런스 차트, 맞춤 추천 카드, 배송 달력 |
| Meal Plan Detail | ai_health_dashboard_v2_2 | 음식 사진, 영양 분석표, 식재료 & 효능, AI 건강 팁 |
| Order History | ai_health_dashboard_v2_3 | 주문 내역 테이블, 영양 자동조정 토글, 제외 재료 설정 |
| Health Data | ai_health_dashboard_v2_4 | 건강검진 업로드, AI 분석 리포트, 추천 반찬 |
| Food Therapy | ai_health_dashboard_v2_5 | 건강지표 게이지(혈당/LDL/BMI), 약선 음식 추천 |
| Condition Dashboard | ai_health_dashboard_v2_6 | 당뇨/고혈압 특화 대시보드, 질환별 전문 식단 |

### 3-2. Subscription (3개 화면)

| 화면 | 파일 | 주요 구성 |
|------|------|---------|
| Plans v1_1 | subscription_plans_v1_1 | 3티어 플랜 (월간), Basic $99 / Intensive $199 / Premium $299 |
| Plans v1_2 | subscription_plans_v1_2 | 연간 결제 토글 (20% 할인) |
| Custom Builder | custom_subscription_builder_v2 | 건강목표 선택 → 배송주기 → 식단 미리보기 → 비용 요약 |

### 3-3. Checkout (1개 화면)

| 화면 | 파일 | 주요 구성 |
|------|------|---------|
| Payment | subscription_checkout_&_payment | 주문 요약, KakaoPay/NaverPay, 카드, 계좌이체 |

---

## 4. 디자인 시스템 변경사항

### 컬러 팔레트 변경
```
현재:
  primary: #0066FF (블루)
  accent:  #99C2FF (라이트블루)
  bg:      #F8FAFE

변경:
  primary: #1B4332 (다크그린)
  mid:     #2D6A4F (미드그린)
  light:   #52B788 (라이트그린)
  accent:  #B7E4C7 (민트)
  bg:      #F6F4EF (크림/베이지)
```

### 레이아웃 구조 변경
```
현재: Header + Section 연속 스크롤

변경:
  ┌────────────────────────────────┐
  │  좌측 사이드바 (64px fixed)    │
  │  - Home / My Health           │
  │  - Orders / Profile           │
  ├────────────────────────────────┤
  │  상단 헤더바 (앱명 + 아이콘)   │
  ├────────────────────────────────┤
  │  메인 콘텐츠 영역              │
  └────────────────────────────────┘
```

### 타이포그래피
- 현재: Pretendard Variable (한국어)
- 유지: Pretendard (변경 없음)
- 폰트 크기: 현재 130% 스케일 유지

---

## 5. 신규 컴포넌트 목록

### 레이아웃
- [ ] `Sidebar.tsx` — 좌측 고정 네비게이션
- [ ] `AppLayout.tsx` — 사이드바 + 헤더 + 메인 래퍼
- [ ] `AppHeader.tsx` — 상단 앱 헤더 (현재 Header.tsx 교체)

### 대시보드
- [ ] `DashboardHome.tsx` — 주간 영양 차트 + 추천 카드 + 달력
- [ ] `NutritionChart.tsx` — Recharts 막대 차트 (주간 영양소)
- [ ] `DeliveryCalendar.tsx` — 월간 배송 달력
- [ ] `RecommendationCard.tsx` — 음식 추천 카드 (이미지 + CTA)

### 건강 데이터
- [ ] `HealthDataPage.tsx` — 건강검진 업로드 + AI 분석
- [ ] `HealthGauge.tsx` — 원형 게이지 (혈당/LDL/BMI)
- [ ] `HealthMetricBadge.tsx` — 수치 + 상태 뱃지

### 식단/주문
- [ ] `MealPlanDetail.tsx` — 식단 상세 (사진 + 영양 + 효능 + 팁)
- [ ] `OrderHistoryPage.tsx` — 주문 내역 테이블
- [ ] `FoodTherapyPage.tsx` — 약선음식 추천 페이지

### 구독
- [ ] `SubscriptionPlans.tsx` — 3티어 플랜 카드 (월간/연간 토글)
- [ ] `SubscriptionBuilder.tsx` — 단계별 구독 설정 (목표→주기→미리보기)
- [ ] `PlanCard.tsx` — 개별 플랜 카드

### 결제
- [ ] `CheckoutPage.tsx` — 주문 요약 + 결제 수단 선택
- [ ] `PaymentMethod.tsx` — KakaoPay/NaverPay/카드/계좌 선택기

---

## 6. 기존 컴포넌트 처리

| 컴포넌트 | 처리 방법 |
|---------|---------|
| `Header.tsx` | → `AppHeader.tsx`로 교체 |
| `HeroSection.tsx` | 유지 (랜딩 첫 화면으로) |
| `BusinessModel.tsx` | 유지 또는 구독 플랜으로 통합 |
| `ProductShowcase.tsx` | → `RecommendationCard` 스타일로 개선 |
| `AITechSection.tsx` | 유지 |
| `CompanySection.tsx` | 유지 |
| `Footer.tsx` | 유지 |
| `AIAnalysisFlow.tsx` | → `HealthDataPage.tsx`로 통합 |

---

## 7. App.tsx 라우팅 구조 (신규)

```
/               → LandingPage (현재 마케팅 페이지)
/dashboard      → DashboardHome
/dashboard/health → HealthDataPage
/dashboard/meals  → MealPlanDetail
/dashboard/orders → OrderHistoryPage
/dashboard/therapy → FoodTherapyPage
/subscription   → SubscriptionPlans
/subscription/builder → SubscriptionBuilder
/checkout       → CheckoutPage
```

---

## 8. 구현 우선순위

### Phase 1 — 디자인 시스템 변경 (색상 + 레이아웃)
1. `tailwind.config.js` 그린 컬러 시스템 추가
2. `index.css` CSS 변수 업데이트
3. `AppLayout.tsx` + `Sidebar.tsx` 생성
4. 랜딩 페이지 컴포넌트 그린 테마 적용

### Phase 2 — 대시보드 핵심 화면
1. `DashboardHome.tsx` (v2_1 기반)
2. `HealthDataPage.tsx` (v2_4, v2_5, v2_6 통합)
3. `MealPlanDetail.tsx` (v2_2 기반)

### Phase 3 — 구독/결제 플로우
1. `SubscriptionPlans.tsx`
2. `SubscriptionBuilder.tsx`
3. `CheckoutPage.tsx`

### Phase 4 — 부가 기능
1. `OrderHistoryPage.tsx`
2. `FoodTherapyPage.tsx`
3. 라우팅 설정 (react-router-dom)

---

## 9. 기술 요구사항

| 항목 | 내용 |
|------|------|
| 라우팅 | react-router-dom v6 (현재 미설치 → 설치 필요) |
| 차트 | recharts (현재 설치됨) |
| 결제 UI | KakaoPay/NaverPay 버튼 UI (실제 연동 제외) |
| 이미지 | 실제 음식 사진 (public/images/ 또는 외부 URL) |
| 반응형 | 모바일 사이드바 → 햄버거 메뉴 |

---

## 10. 예상 작업 범위

| Phase | 작업 | 난이도 |
|-------|------|--------|
| 1 | 컬러/레이아웃 | 중 |
| 2 | 대시보드 3화면 | 상 |
| 3 | 구독/결제 3화면 | 상 |
| 4 | 부가 2화면 + 라우팅 | 중 |

---

## 11. 참조 파일

- stitch 원본: `/Users/saint/01_DEV/25-app-mobile/app-sikyak/stitch/`
- 현재 소스: `/Users/saint/01_DEV/25-app-mobile/app-sikyak/src/`
- 현재 설정: `tailwind.config.js`, `src/index.css`
