# Dev Log #001: 디자인 개선 (Mobile-First Redesign)

**Date**: 2026-02-16
**Author**: Ph.D SNT Go.
**Phase**: UI/UX 개선 (PDCA 완료)

---

## Summary

sikyak(식약동원) 프로젝트의 전체 UI/UX를 Mobile-First 방식으로 리디자인했습니다.
기존에 과도하게 큰 폰트(H1: `text-8xl`, 섹션: `text-6xl`, 본문: `text-3xl`)와
desktop-first 설계를 모바일 친화적인 반응형 타이포그래피 체계로 개선했습니다.
PDCA 사이클 완료 - Match Rate **100%** 달성.

---

## Previous Session Review

첫 번째 개발 세션으로 이전 로그 없음.

---

## Changes Made

### Files Modified

| 파일 | 주요 변경 내용 |
|------|--------------|
| `src/components/Header.tsx` | 로고 `text-3xl`→`text-xl`, 네비 `text-xl`→`text-sm`, CTA `text-xl px-8 py-3`→`text-sm px-4 py-2` |
| `src/components/HeroSection.tsx` | H1 `text-8xl`→`text-3xl~5xl`, 본문 `text-3xl`→`text-sm~lg`, CTA `px-12 py-6 text-2xl`→`px-6 py-3 text-base`, 배경 요소 모바일 축소 |
| `src/components/ProductShowcase.tsx` | 섹션 제목 `text-6xl`→`text-2xl~4xl`, 카테고리 버튼 `px-8 py-4 text-xl`→`px-3 py-1.5 text-xs~sm`, 섹션 패딩 `py-20`→`py-12 md:py-20` |
| `src/components/AITechSection.tsx` | 통계 `text-5xl`→`text-2xl~3xl`, 섹션 제목 `text-6xl`→`text-2xl~4xl`, 패딩 모바일 최적화 |
| `src/components/CompanySection.tsx` | 섹션 제목 `text-6xl`→`text-2xl~4xl`, 통계/팀멤버 폰트 전반적 축소 |
| `src/components/BusinessModel.tsx` | H2 `text-6xl`→`text-2xl~4xl`, H3 `text-3xl`→`text-lg~xl`, 패딩 `py-20`→`py-12 md:py-20`, 여백 `mb-16`→`mb-8 md:mb-16` |
| `src/components/Footer.tsx` | 로고명 `text-2xl`→`text-lg` |

### Files Created

- `docs/01-plan/features/design-improvement.plan.md` - PDCA Plan 문서
- `docs/02-design/features/design-improvement.design.md` - PDCA Design 문서
- `docs/03-analysis/design-improvement.analysis.md` - Gap 분석 보고서
- `.bkit-memory.json` - PDCA 상태 추적 파일
- `docs/dev-log/001_design-improvement_20260216_0000.md` - 본 파일

---

## Technical Details

### 문제 인식

코드 분석 결과 발견된 주요 문제:
1. **폰트 2배 과대**: `text-8xl`(96px), `text-6xl`(60px), `text-3xl`(30px) 남발
2. **버튼 과대**: `px-12 py-6 text-2xl` → 모바일에서 화면 절반 차지
3. **Mobile-First 미적용**: 모바일 브레이크포인트가 데스크탑 크기를 줄이는 방식

### 적용된 타이포그래피 체계

| 용도 | 기존 | 개선 (모바일→데스크탑) |
|------|------|---------------------|
| H1 히어로 | `text-8xl` | `text-3xl md:text-4xl lg:text-5xl` |
| H2 섹션 | `text-6xl` | `text-2xl md:text-3xl lg:text-4xl` |
| H3 카드 | `text-2xl~3xl` | `text-base md:text-lg md:text-xl` |
| 본문 | `text-3xl` | `text-sm md:text-base lg:text-lg` |
| 버튼(주) | `px-12 py-6 text-2xl` | `px-6 py-3 text-base md:px-8 md:py-4 md:text-lg` |
| 버튼(소) | `px-8 py-4 text-xl` | `px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm` |

### PDCA 프로세스

```
Plan ✅ → Design ✅ → Do ✅ → Check ✅ (100%) → 완료
```

**Gap 분석 2회 수행**:
- 1차 분석: 84.4% (27/32) - BusinessModel 패딩/여백 미적용, Design 문서 불일치 발견
- 2차 분석: 100.0% (32/32) - 모든 항목 일치 확인

---

## Test Results

- `npm run build` 성공 (exit code 0)
- Build size: 325.3 kB (CSS), 170.02 kB (JS)
- 빌드 2회 모두 오류 없음

---

## Next Steps

- [ ] `npm start`로 로컬 실행 후 실제 모바일 뷰 확인 (Chrome DevTools 375px)
- [ ] AIAnalysisFlow.tsx 폰트/여백 추가 개선 (이번 작업 범위에서 제외됨)
- [ ] 실제 AI 연동 기능 개발 계획 수립

---

## Related

- Commits: 없음 (커밋 미진행)
- PDCA 문서: `docs/01-plan/`, `docs/02-design/`, `docs/03-analysis/`
- Match Rate: 100% (최종)
