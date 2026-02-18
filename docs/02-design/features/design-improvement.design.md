# Design: design-improvement (디자인 개선)

**Date**: 2026-02-16
**Feature**: design-improvement
**Phase**: Design
**Reference**: docs/01-plan/features/design-improvement.plan.md

---

## 1. 변경 철학

- **모바일 퍼스트**: 기본값 = 모바일, `md:`, `lg:`로 확장
- **타이포그래피 스케일**: 체계적인 폰트 크기 시스템 도입
- **여백 일관성**: 컴포넌트 간 간격 통일 (`py-16 md:py-20`)
- **기능 보존**: 기존 로직(AI 분석, 장바구니) 완전 유지

---

## 2. 타이포그래피 스케일 (전체 적용 기준)

| 용도 | 클래스 | 실제 크기 |
|------|--------|---------|
| 히어로 H1 | `text-3xl md:text-4xl lg:text-5xl` | 30→36→48px |
| 섹션 H2 | `text-2xl md:text-3xl lg:text-4xl` | 24→30→36px |
| 카드 H3 | `text-lg md:text-xl` | 18→20px |
| 본문 | `text-sm md:text-base lg:text-lg` | 14→16→18px |
| 버튼 (주) | `text-sm md:text-base` | 14→16px |
| 버튼 (소) | `text-xs md:text-sm` | 12→14px |
| 레이블 | `text-xs` | 12px |

---

## 3. 컴포넌트별 세부 변경 사양

### 3.1 Header.tsx

**현재 → 개선**

```
로고 텍스트: text-3xl → text-xl
로고 서브텍스트: text-xl → text-xs
네비 링크: text-xl → text-sm
CTA 버튼: text-xl px-8 py-3 → text-sm px-4 py-2
```

**변경 코드**:
- Logo area: `flex-col` 유지, `gap-0`
- 로고명: `text-xl font-bold`
- 로고 부제: `text-xs text-gray-500`
- nav link: `text-sm text-gray-700 hover:text-primary-600`
- CTA btn: `text-sm px-4 py-2 rounded-full`
- 모바일 메뉴 링크: `text-sm` (현재 없음, 유지)
- 헤더 높이: `h-16` 유지

---

### 3.2 HeroSection.tsx

**현재 → 개선**

```
뱃지: text-sm (유지)
H1: text-6xl sm:text-7xl lg:text-8xl → text-3xl md:text-4xl lg:text-5xl
본문: text-3xl → text-base md:text-lg
CTA 버튼 (주): px-12 py-6 text-2xl → px-6 py-3 text-base md:px-8 md:py-4 md:text-lg
CTA 버튼 (부): px-12 py-6 text-xl → px-6 py-3 text-base md:px-8 md:py-4 md:text-lg
통계 수치: text-2xl → text-xl md:text-2xl
통계 레이블: text-base → text-xs md:text-sm
```

**배경 요소**:
- 애니메이션 원/아이콘 크기 모바일에서 50% 축소
- `w-16 h-16` → `w-8 h-8 md:w-16 md:h-16`

**그리드**:
- `grid lg:grid-cols-2` 유지 (이미 모바일 고려됨)
- `pt-20 pb-16` → `pt-16 pb-12 md:pt-20 md:pb-16`

---

### 3.3 ProductShowcase.tsx

**현재 → 개선**

```
섹션 제목: text-6xl → text-2xl md:text-3xl lg:text-4xl
섹션 부제: text-3xl → text-sm md:text-base lg:text-lg
카테고리 버튼: px-8 py-4 text-xl → px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm
카드 제목: (확인 필요) → text-base md:text-lg
카드 가격: → text-lg font-bold
카드 버튼: → text-sm px-3 py-1.5
섹션 패딩: py-20 → py-12 md:py-20
필터 텍스트: text-2xl → text-sm md:text-base
```

**카드 그리드**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` (현재도 비슷하게 적용, 확인 후 조정)

---

### 3.4 AIAnalysisFlow.tsx

**현재 → 개선**

```
스텝 타이틀: (큰 폰트) → text-lg md:text-xl font-semibold
스텝 설명: → text-sm text-gray-600
파일 업로드 영역: → 모바일 전체 너비, 패딩 축소
분석 진행 텍스트: → text-sm md:text-base
결과 제목: → text-xl md:text-2xl
결과 카드: → text-sm
차트 컨테이너: height 조정 (모바일 200px, 데스크탑 300px)
```

---

### 3.5 AITechSection.tsx

**현재 → 개선**

```
섹션 제목: → text-2xl md:text-3xl lg:text-4xl
섹션 부제: → text-sm md:text-base
프로세스 제목: → text-base md:text-lg font-semibold
프로세스 상세: → text-xs md:text-sm
탭 버튼: → text-sm px-3 py-2
```

---

### 3.6 CompanySection.tsx

**현재 → 개선**

```
섹션 제목: → text-2xl md:text-3xl lg:text-4xl
통계 숫자: → text-2xl md:text-3xl font-bold
통계 레이블: → text-xs md:text-sm
팀 멤버 이름: → text-base md:text-lg font-semibold
팀 멤버 역할: → text-xs md:text-sm text-gray-500
```

---

### 3.7 Footer.tsx

**현재 → 개선**

```
로고명: text-2xl → text-lg
부제: text-sm (유지)
본문: text-sm md:text-base → text-sm (이미 적절)
섹션 제목: → text-sm font-semibold uppercase tracking-wider
링크: text-sm (유지)
```

---

## 4. 공통 패딩/여백 가이드

| 요소 | 현재 | 개선 |
|------|------|------|
| 섹션 상하 패딩 | `py-20` | `py-12 md:py-20` |
| 섹션 내 제목 하단 | `mb-16` | `mb-8 md:mb-16` |
| 컨테이너 가로 패딩 | `px-4 sm:px-6 lg:px-8` | 유지 |

---

## 5. 구현 파일 목록

| 파일 | 변경 유형 | 우선순위 |
|------|----------|---------|
| `src/components/Header.tsx` | 폰트/버튼 크기 조정 | High |
| `src/components/HeroSection.tsx` | 폰트/버튼/여백 대폭 조정 | High |
| `src/components/ProductShowcase.tsx` | 폰트/버튼/카드 조정 | High |
| `src/components/AIAnalysisFlow.tsx` | 전반적 크기 조정 | Medium |
| `src/components/AITechSection.tsx` | 폰트/여백 조정 | Medium |
| `src/components/CompanySection.tsx` | 폰트/여백 조정 | Medium |
| `src/components/Footer.tsx` | 소규모 조정 | Low |

---

## 6. 검증 기준 (Do 단계 완료 후 Check)

- [ ] `npm run build` 오류 없음
- [ ] Chrome DevTools에서 375px 모바일 뷰 가로 스크롤 없음
- [ ] 768px 태블릿 뷰 정상 표시
- [ ] 1280px 데스크탑 뷰 정상 표시
- [ ] AI 분석 플로우 (3단계) 정상 동작
- [ ] 장바구니 추가/제거 기능 정상 동작
- [ ] 카테고리 필터 정상 동작

---

**Status**: Design 완료
**Next Phase**: Do → 구현 시작 (`/pdca do design-improvement`)
