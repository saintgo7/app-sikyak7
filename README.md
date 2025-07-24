# 식약동원 (Sikyak) - AI 맞춤 건강 반찬 추천 서비스

AI가 건강검진 결과를 분석하여 개인 맞춤형 건강 반찬을 추천하는 혁신적인 웹 서비스입니다.

## 🌟 주요 기능

### 1. AI 건강 분석 플로우
- **Step 1**: 건강검진 결과 PDF/이미지 업로드
- **Step 2**: AI가 주요 건강 지표 분석 및 시각화
- **Step 3**: 개인 맞춤 반찬 추천 및 장바구니 기능

### 2. 10대 증상별 건강 반찬 카테고리
- 스트레스 해소, 면역력 강화, 당뇨 관리
- 콜레스테롤 개선, 고혈압 관리, 소화개선
- 간 건강, 뼈 건강, 빈혈 개선, 피부 건강

### 3. 과학적 근거 기반
- 6,844,615개 의료 데이터베이스 활용
- 백석남 총주방장 레시피
- 영양학 박사 검증
- 아쿠아포닉스 시스템으로 재배한 무농약 채소

## 🚀 개발 환경 설정

### 사전 요구사항
- Node.js 16+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm start
```

개발 서버가 시작되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 빌드

```bash
# 프로덕션 빌드
npm run build
```

## 🛠 기술 스택

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + 한국어 폰트 (Noto Sans KR)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Animations**: CSS Keyframes + Tailwind Transitions

## 📂 프로젝트 구조

```
src/
├── components/           # React 컴포넌트
│   ├── HeroSection.tsx  # 메인 히어로 섹션
│   ├── AIAnalysisFlow.tsx # AI 분석 플로우 (핵심 기능)
│   ├── ProductShowcase.tsx # 건강 반찬 제품 쇼케이스
│   ├── BusinessModel.tsx # 비즈니스 모델 섹션
│   ├── AITechSection.tsx # AI 기술 소개
│   ├── CompanySection.tsx # 회사 및 팀 소개
│   ├── Header.tsx       # 네비게이션 헤더
│   └── Footer.tsx       # 푸터
├── data/
│   └── mockData.ts      # 샘플 데이터 (건강 지표, 반찬, 팀원 정보)
├── App.tsx              # 메인 앱 컴포넌트
└── index.css            # 글로벌 스타일 및 Tailwind CSS
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Green (#22c55e) - 건강과 자연
- **Health**: Blue (#0ea5e9) - 의료와 신뢰
- **Korean Typography**: Noto Sans KR

### 주요 디자인 원칙
- 깔끔하고 현대적인 디자인 (farmkit.kr 참고)
- 모바일 우선 반응형 디자인
- 웹 접근성 (WCAG) 준수
- 부드러운 애니메이션과 인터랙션

## 🔧 개발 가이드

### 상태 관리
- React useState를 사용한 로컬 상태 관리
- 컴포넌트 간 props를 통한 데이터 전달

### 반응형 디자인
- Tailwind CSS의 반응형 접두사 활용 (sm:, md:, lg:, xl:)
- 모바일 우선 접근 방식

### 애니메이션
- CSS 키프레임을 이용한 복잡한 애니메이션
- Tailwind 트랜지션 유틸리티를 이용한 간단한 호버 효과

## 📋 주요 특징

### AI 분석 시뮬레이션
- 실제 OCR이나 AI 분석은 수행하지 않음
- 현실적인 타이밍과 진행 표시기로 UX 플로우 시연

### 한국어 현지화
- 모든 사용자 인터페이스 텍스트는 한국어
- 한국 문화에 맞는 디자인과 콘텐츠 고려

### 건강 데이터 매칭
- 샘플 건강 지표를 사용한 AI 분석 결과 시뮬레이션
- 건강 상태에 따른 적절한 반찬 카테고리 매칭 로직

## 🏪 비즈니스 모델

### 온오프라인 통합
- 강남·송파 지역 오프라인 매장 운영
- 모바일 앱을 통한 주문 및 배송 서비스
- 아쿠아포닉스 시스템으로 재배한 신선한 채소 사용

### 타겟 고객
- 30-40대 주부
- OPAL 세대 (활력있는 시니어)

## 🚀 배포

프로덕션 빌드 후 정적 파일 호스팅 서비스 (Netlify, Vercel 등)에 배포 가능합니다.

## 📞 문의

- 이메일: hello@sikyak.co.kr
- 고객센터: 1588-1234
- 주소: 서울특별시 강남구·송파구

---

> 💡 **참고**: 이 프로젝트는 AI 기반 건강 관리 서비스의 프로토타입입니다. 실제 의료 진단이나 처방을 대체하지 않습니다.