# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sikyak (식약동원)** is an AI-powered personalized health side dish recommendation service. The application analyzes health checkup results using AI and recommends customized healthy Korean side dishes based on individual health conditions.

## Development Commands

```bash
# Install dependencies (use --legacy-peer-deps if encountering peer dependency issues)
npm install
npm install --legacy-peer-deps  # If standard install fails

# Development server
npm start  # Runs on http://localhost:3000

# Production build
npm run build  # Creates optimized build in build/ directory

# Run tests
npm test  # Interactive watch mode
npm test -- --coverage  # With coverage report
npm test -- --watchAll=false  # Run once without watch

# Eject from Create React App (WARNING: Irreversible)
npm run eject
```

## Architecture Overview

### Tech Stack
- **Frontend**: React 18 with TypeScript (Create React App)
- **Styling**: Tailwind CSS v2 (PostCSS 7 compatibility mode) with Noto Sans KR fonts
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Animations**: Framer Motion + CSS animations with Tailwind utilities
- **TypeScript**: Strict mode enabled

### Application Flow
Single-page application with conditional rendering based on user interaction:
1. **Landing Page**: Hero section with CTA buttons
2. **Main Content**: Product showcase, AI tech, business model, company sections
3. **AI Analysis Modal**: 3-step health analysis flow (triggered by CTAs)

## Component Structure

```
src/
├── components/
│   ├── AIAnalysisFlow.tsx     # 3-step health analysis modal
│   ├── AITechSection.tsx      # AI technology showcase
│   ├── BusinessModel.tsx      # Business model section
│   ├── CompanySection.tsx     # Team and company info
│   ├── Footer.tsx             # Footer with links
│   ├── Header.tsx             # Navigation header
│   ├── HeroSection.tsx        # Landing hero with CTAs
│   └── ProductShowcase.tsx    # Health categories & products
├── data/
│   └── mockData.ts            # All sample data centralized here
└── App.tsx                    # Main app with state management

## Key Implementation Details

### AI Analysis Flow (`AIAnalysisFlow.tsx`)
- **Modal-based**: Overlays entire screen when activated
- **3-step process**: File upload → Analysis → Recommendations
- **State management**: Uses React useState for step navigation and data
- **File handling**: Accepts PDF/images but uses mock data for demo
- **Progress simulation**: Realistic timing with progress indicators

### Product Categories (`ProductShowcase.tsx`)
10 health categories with Korean/English names:
- 스트레스 해소 (Stress relief)
- 면역력 강화 (Immunity boost)
- 당뇨 관리 (Diabetes management)
- 콜레스테롤 개선 (Cholesterol improvement)
- 고혈압 관리 (Hypertension management)
- 소화개선 (Digestion improvement)
- 간 건강 (Liver health)
- 뼈 건강 (Bone health)
- 빈혈 개선 (Anemia improvement)
- 피부 건강 (Skin health)

### Data Management (`src/data/mockData.ts`)
Centralized mock data includes:
- Health checkup sample results
- 12+ side dish products with full details
- Team member profiles
- Health indicator definitions
- Category mappings

## Styling and Design System

### Tailwind Configuration
- Using Tailwind CSS v2 in PostCSS 7 compatibility mode
- Custom color palette: Green (#22c55e) for health, Blue (#0ea5e9) for medical
- Korean typography: Noto Sans KR (imported in index.css)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

### Animation Patterns
- Framer Motion for component animations
- CSS keyframes defined in index.css for custom animations
- Tailwind transitions for hover/focus states
- Smooth scroll behavior for navigation

## State Management Patterns

### App.tsx
- Central state management using React hooks
- `showAnalysis` state controls AI analysis modal visibility
- Props passed down to child components
- No Redux or Context API - simple prop drilling

### Component Communication
- Parent-to-child: Props for data and callbacks
- Child-to-parent: Callback functions (e.g., onClose handlers)
- Sibling components: Communicate through App.tsx state

## Important Notes

### Current Implementation Status
- **Demo/Prototype**: All features use mock data
- **No Backend**: Frontend-only React application
- **No Real AI**: Analysis simulation with setTimeout delays
- **Static Data**: All content hardcoded in mockData.ts
- **No Persistence**: Cart/selections reset on page reload

### Korean Language Considerations
- All UI text in Korean (한국어)
- Date format: YYYY년 MM월 DD일
- Currency: ₩ (Korean Won)
- Phone format: 1588-XXXX or 02-XXXX-XXXX

### Development Gotchas
- **Tailwind v2**: Using compatibility mode, not latest v3
- **React 18**: Some testing library warnings may appear
- **TypeScript Strict**: All components must be properly typed
- **PostCSS 7**: Due to Create React App compatibility