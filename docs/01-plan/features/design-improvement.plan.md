# Plan: design-improvement (디자인 개선)

**Date**: 2026-02-16
**Feature**: design-improvement
**Phase**: Plan
**Project**: sikyak (식약동원) - AI 맞춤 건강 반찬 추천 서비스

---

## 1. 배경 및 목적 (Background & Purpose)

### 현재 문제점
코드 분석 결과 다음 UI/UX 문제가 발견됨:

1. **폰트 사이즈 과대**
   - HeroSection: h1이 `text-6xl sm:text-7xl lg:text-8xl` - 모바일에서도 매우 큼
   - ProductShowcase: `text-6xl`, `text-3xl` 섹션 제목
   - Header: 로고 `text-3xl`, 네비 `text-xl`, 버튼 `text-xl`
   - 전반적으로 1.5~2배 과도하게 큼

2. **모바일 반응형 미흡**
   - 버튼 `px-12 py-6 text-2xl` - 모바일에서 화면 overflow 위험
   - 그리드 레이아웃이 desktop-first로 설계됨
   - 모바일 헤더 메뉴는 있으나 UX가 단순

3. **전체 UI 일관성 부족**
   - 다양한 컴포넌트에서 스타일 규칙이 혼재
   - 컴포넌트별 폰트 사이즈 체계 없음
   - 여백/간격 일관성 미흡

### 개선 목표
- 현대적이고 세련된 UI/UX로 전면 리디자인
- 모바일 퍼스트(Mobile-First) 반응형 설계
- 타이포그래피 체계(scale) 정립
- 컴포넌트 일관성 확보

---

## 2. 범위 (Scope)

### 포함 (In Scope)
- `Header.tsx` - 헤더/네비게이션 리디자인
- `HeroSection.tsx` - 히어로 섹션 리디자인
- `ProductShowcase.tsx` - 제품 쇼케이스 리디자인
- `AIAnalysisFlow.tsx` - AI 분석 플로우 UI 개선
- `AITechSection.tsx` - AI 기술 섹션 개선
- `CompanySection.tsx` - 회사 소개 섹션 개선
- `Footer.tsx` - 푸터 개선
- `tailwind.config.js` - 타이포그래피 스케일 추가

### 제외 (Out of Scope)
- 비즈니스 로직 변경 없음
- 백엔드 API 변경 없음
- 실제 AI 연동 작업 없음
- 데이터 구조 변경 없음

---

## 3. 요구사항 (Requirements)

### 기능 요구사항 (Functional)
| ID | 요구사항 | 우선순위 |
|----|----------|---------|
| F-01 | 모바일(375px+) 화면에서 가로 스크롤 없이 표시 | High |
| F-02 | 모든 텍스트가 모바일에서 가독성 유지 (최소 14px) | High |
| F-03 | 버튼/링크가 모바일에서 터치 친화적 크기 (최소 44px) | High |
| F-04 | 태블릿(768px+), 데스크탑(1024px+) 최적화 레이아웃 | Medium |
| F-05 | 헤더 sticky 유지 및 모바일 메뉴 개선 | Medium |

### 비기능 요구사항 (Non-Functional)
| ID | 요구사항 | 우선순위 |
|----|----------|---------|
| NF-01 | 기존 기능(AI 분석 플로우, 장바구니) 완전 유지 | High |
| NF-02 | Tailwind CSS만 사용 (외부 CSS 라이브러리 추가 없음) | High |
| NF-03 | 성능 저하 없음 (불필요한 DOM 추가 최소화) | Medium |
| NF-04 | 한국어 폰트(Noto Sans KR) 유지 | Medium |

---

## 4. 타이포그래피 설계 (Typography System)

### 현재 vs 개선 후 폰트 사이즈 매핑

| 용도 | 현재 | 모바일 개선 | 태블릿 | 데스크탑 |
|------|------|------------|--------|---------|
| 메인 헤딩 (H1) | text-8xl | text-3xl | text-4xl | text-5xl |
| 섹션 헤딩 (H2) | text-6xl | text-2xl | text-3xl | text-4xl |
| 서브 헤딩 (H3) | text-3xl | text-lg | text-xl | text-2xl |
| 본문 | text-xl~3xl | text-sm | text-base | text-lg |
| 버튼 | text-2xl | text-sm | text-base | text-base |
| 레이블/캡션 | text-xl | text-xs | text-sm | text-sm |

---

## 5. 컴포넌트별 개선 계획 (Component Plan)

### Header
- 로고 크기 축소: `text-3xl` → `text-xl`
- 네비 링크: `text-xl` → `text-sm md:text-base`
- CTA 버튼: `text-xl px-8 py-3` → `text-sm px-4 py-2 md:px-6 md:py-2`
- 모바일 메뉴: 슬라이드 애니메이션 추가

### HeroSection
- H1: `text-6xl sm:text-7xl lg:text-8xl` → `text-3xl md:text-4xl lg:text-5xl`
- 설명 텍스트: `text-3xl` → `text-base md:text-lg lg:text-xl`
- CTA 버튼: `px-12 py-6 text-2xl` → `px-6 py-3 text-base md:px-8 md:py-4 md:text-lg`
- 배경 애니메이션 요소 모바일 최적화

### ProductShowcase
- 섹션 제목: `text-6xl` → `text-2xl md:text-3xl lg:text-4xl`
- 카테고리 버튼: `px-8 py-4 text-xl` → `px-4 py-2 text-sm md:text-base`
- 카드 그리드: 모바일 1열, 태블릿 2열, 데스크탑 3열 유지

### AIAnalysisFlow
- 전반적 폰트/여백 축소
- 스텝 인디케이터 모바일 최적화
- 파일 업로드 영역 모바일 친화적으로

---

## 6. 구현 순서 (Implementation Order)

1. `tailwind.config.js` - 타이포그래피 확장 설정
2. `Header.tsx` - 헤더 리디자인
3. `HeroSection.tsx` - 히어로 섹션 리디자인
4. `ProductShowcase.tsx` - 제품 카드/필터 개선
5. `AIAnalysisFlow.tsx` - 분석 플로우 UI 개선
6. `AITechSection.tsx` - 기술 섹션 개선
7. `CompanySection.tsx` - 회사 섹션 개선
8. `Footer.tsx` - 푸터 개선

---

## 7. 성공 기준 (Success Criteria)

- [ ] 375px 모바일에서 가로 스크롤 없음
- [ ] 모든 텍스트가 14px 이상으로 가독성 유지
- [ ] 버튼 터치 영역 최소 44px 이상
- [ ] 기존 AI 분석 플로우 동작 유지
- [ ] 장바구니 기능 유지
- [ ] 빌드 오류 없음 (`npm run build` 통과)

---

## 8. 위험 요소 (Risks)

| 위험 | 가능성 | 영향 | 대응 |
|------|--------|------|------|
| 기존 기능 회귀 | Medium | High | 각 컴포넌트 변경 후 기능 확인 |
| 폰트 크기 축소로 가독성 저하 | Low | Medium | 적절한 line-height 및 letter-spacing 유지 |
| 반응형 브레이크포인트 충돌 | Low | Low | Tailwind 표준 브레이크포인트 준수 |

---

**Status**: Plan 완료
**Next Phase**: Design → `/pdca design design-improvement`
