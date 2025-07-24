# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Sikyak (식약동원)** is an AI-powered personalized health side dish recommendation service. The application analyzes health checkup results using AI and recommends customized healthy Korean side dishes based on individual health conditions.

## Development Commands

### Development Server
```bash
npm start
# Starts the development server on http://localhost:3000
```

### Build
```bash
npm run build
# Creates an optimized production build in the build/ directory
```

### Test
```bash
npm test
# Runs the test suite in interactive watch mode
```

### Linting and Formatting
```bash
npm run eject
# Ejects from Create React App (WARNING: This is irreversible)
```

## Architecture Overview

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Korean fonts (Noto Sans KR)
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Animations**: CSS animations with Tailwind utilities

### Application Structure
The app follows a single-page application (SPA) pattern with conditional rendering:
- **Main Flow**: Hero → Product Showcase → AI Tech → Company sections
- **AI Analysis Flow**: Triggered by CTA buttons, provides 3-step analysis process

### Component Architecture
```
App.tsx (Main container with routing logic)
├── Header.tsx (Navigation and branding)
├── HeroSection.tsx (Landing page with CTA)
├── AIAnalysisFlow.tsx (Core AI analysis feature)
├── ProductShowcase.tsx (10 health categories + products)
├── AITechSection.tsx (Technology showcase)
├── CompanySection.tsx (Team and company info)
└── Footer.tsx (Links and contact info)
```

## Key Features

### 1. AI Health Analysis Flow (Core Feature)
- **Step 1**: File upload (PDF/image health checkup results)
- **Step 2**: AI analysis simulation with progress tracking
- **Step 3**: Personalized side dish recommendations with shopping cart

### 2. Health Categories System
10 specialized categories:
- Stress relief (스트레스 해소)
- Immunity boost (면역력 강화)
- Diabetes management (당뇨 관리)
- Cholesterol improvement (콜레스테롤 개선)
- Hypertension management (고혈압 관리)
- Digestion improvement (소화개선)
- Liver health (간 건강)
- Bone health (뼈 건강)
- Anemia improvement (빈혈 개선)
- Skin health (피부 건강)

### 3. Product Management
Each side dish includes:
- Nutritional information
- Health benefits
- Scientific backing
- Chef recommendations
- Pricing and shopping cart functionality

## Data Structure

### Key Interfaces
```typescript
interface HealthIndicator {
  name: string;
  value: number;
  unit: string;
  normalRange: string;
  status: 'normal' | 'warning' | 'danger';
}

interface SideDish {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  category: string;
  price: number;
  // ... additional properties
}
```

### Mock Data Location
All sample data is centralized in `src/data/mockData.ts`:
- Sample health checkup results
- 12+ side dish products
- Team member information
- Health categories definitions
- AI analysis simulation steps

## Styling Guidelines

### Color Scheme
- **Primary**: Green palette (#22c55e) - health and nature
- **Health**: Blue palette (#0ea5e9) - medical and trust
- **Korean Typography**: Noto Sans KR font family

### Design Principles
- Clean, modern design inspired by farmkit.kr
- Mobile-first responsive approach
- Accessibility considerations (WCAG compliance)
- Smooth animations and micro-interactions
- Trust-building elements (certifications, statistics)

## Development Patterns

### State Management
- React useState for local component state
- Props drilling for data sharing between components
- No external state management library (Redux/Zustand) used

### Animation Strategy
- CSS keyframes for complex animations
- Tailwind transition utilities for simple hover effects
- Framer Motion style animations (implemented with CSS)

### Responsive Design
- Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- Mobile-first approach
- Flexible grid layouts

## Important Implementation Details

### File Upload Simulation
The AI analysis flow accepts files but uses simulated processing - no actual OCR or AI analysis occurs. The app demonstrates the UX flow with realistic timing and progress indicators.

### Health Data Analysis
Sample health indicators are used to simulate AI analysis results. The recommendation logic matches health conditions to appropriate side dish categories.

### Korean Localization
- All user-facing text is in Korean
- Proper Korean typography with Noto Sans KR
- Cultural considerations in design and content

## Future Development Considerations

### Potential Enhancements
- Real AI integration for health analysis
- User authentication and profiles
- Shopping cart persistence
- Payment integration
- Real product images
- Content management system
- Multi-language support

### Performance Optimizations
- Lazy loading for images
- Code splitting for different sections
- Caching strategies for API calls
- Bundle size optimization

## Troubleshooting

### Common Issues
- **Build fails**: Check Tailwind CSS configuration in tailwind.config.js
- **Styles not loading**: Ensure @tailwind directives are in src/index.css
- **Charts not rendering**: Verify recharts import statements
- **Korean fonts not loading**: Check Google Fonts import in index.css

### Dependencies
If you encounter issues, try:
```bash
npm install --legacy-peer-deps
# or
npm ci
```