// Mock data for the Sikyak (식약동원) application

export interface HealthIndicator {
  name: string;
  value: number;
  unit: string;
  normalRange: string;
  status: 'normal' | 'warning' | 'danger';
}

export interface SideDish {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  category: string;
  price: number;
  image: string;
  ingredients: string[];
  nutritionFacts: {
    calories: number;
    protein: number;
    fat: number;
    carbs: number;
  };
  chefRecommended: boolean;
}

export interface HealthCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  targetSymptoms: string[];
}

export interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

// Sample health indicators from health checkup
export const sampleHealthData: HealthIndicator[] = [
  {
    name: '혈압',
    value: 135,
    unit: 'mmHg',
    normalRange: '120/80 이하',
    status: 'warning'
  },
  {
    name: '혈당',
    value: 110,
    unit: 'mg/dL',
    normalRange: '70-100',
    status: 'warning'
  },
  {
    name: '총콜레스테롤',
    value: 220,
    unit: 'mg/dL',
    normalRange: '200 이하',
    status: 'danger'
  },
  {
    name: 'HDL 콜레스테롤',
    value: 45,
    unit: 'mg/dL',
    normalRange: '40 이상',
    status: 'normal'
  },
  {
    name: 'LDL 콜레스테롤',
    value: 145,
    unit: 'mg/dL',
    normalRange: '130 이하',
    status: 'warning'
  },
  {
    name: '중성지방',
    value: 180,
    unit: 'mg/dL',
    normalRange: '150 이하',
    status: 'warning'
  }
];

// Health categories
export const healthCategories: HealthCategory[] = [
  {
    id: 'stress',
    name: '스트레스 해소',
    description: '현대인의 만성 스트레스를 완화하는 천연 식재료',
    icon: '🧘‍♀️',
    color: 'bg-purple-500',
    targetSymptoms: ['불면증', '피로감', '집중력 저하', '두통']
  },
  {
    id: 'immunity',
    name: '면역력 강화',
    description: '자연 면역력을 높여주는 전통 발효 반찬',
    icon: '🛡️',
    color: 'bg-green-500',
    targetSymptoms: ['감기', '알레르기', '만성 피로', '염증']
  },
  {
    id: 'diabetes',
    name: '당뇨 관리',
    description: '혈당 조절에 도움이 되는 저GI 식품',
    icon: '🩺',
    color: 'bg-blue-500',
    targetSymptoms: ['혈당 상승', '인슐린 저항성', '당뇨 합병증']
  },
  {
    id: 'cholesterol',
    name: '콜레스테롤 개선',
    description: '혈중 콜레스테롤 수치를 개선하는 식물성 반찬',
    icon: '❤️',
    color: 'bg-red-500',
    targetSymptoms: ['고콜레스테롤', '동맥경화', '심혈관 질환']
  },
  {
    id: 'hypertension',
    name: '고혈압 관리',
    description: '나트륨을 줄이고 칼륨이 풍부한 건강 반찬',
    icon: '💗',
    color: 'bg-pink-500',
    targetSymptoms: ['고혈압', '부종', '심장 부담']
  },
  {
    id: 'digestion',
    name: '소화개선',
    description: '장 건강을 위한 프로바이오틱스 발효 식품',
    icon: '🌱',
    color: 'bg-emerald-500',
    targetSymptoms: ['소화불량', '변비', '장염', '복부팽만']
  },
  {
    id: 'liver',
    name: '간 건강',
    description: '간 기능 회복과 해독을 돕는 천연 식재료',
    icon: '🫀',
    color: 'bg-amber-500',
    targetSymptoms: ['간 기능 저하', '피로감', '해독 필요']
  },
  {
    id: 'bone',
    name: '뼈 건강',
    description: '칼슘과 비타민D가 풍부한 뼈 강화 반찬',
    icon: '🦴',
    color: 'bg-gray-500',
    targetSymptoms: ['골다공증', '관절염', '근력 저하']
  },
  {
    id: 'anemia',
    name: '빈혈 개선',
    description: '철분과 엽산이 풍부한 조혈 촉진 반찬',
    icon: '🩸',
    color: 'bg-rose-500',
    targetSymptoms: ['철결핍성 빈혈', '어지럼증', '피로감']
  },
  {
    id: 'skin',
    name: '피부 건강',
    description: '항산화 성분이 풍부한 피부 미용 반찬',
    icon: '✨',
    color: 'bg-violet-500',
    targetSymptoms: ['피부 노화', '염증', '색소 침착', '건조함']
  }
];

// Side dish products
export const sideDishes: SideDish[] = [
  {
    id: 'kimchi-stress',
    name: '마음편한 발효김치',
    description: '스트레스 완화에 도움이 되는 GABA 성분이 풍부한 특별 발효 김치',
    benefits: ['스트레스 호르몬 감소', '세로토닌 생성 촉진', '장-뇌 축 개선'],
    category: 'stress',
    price: 18000,
    image: '/images/kimchi-stress.jpg',
    ingredients: ['배추', '마늘', '생강', '천일염', '유산균'],
    nutritionFacts: { calories: 23, protein: 2.1, fat: 0.3, carbs: 3.8 },
    chefRecommended: true
  },
  {
    id: 'mushroom-immunity',
    name: '면역력 버섯전골',
    description: '7가지 약용버섯으로 만든 면역력 강화 전골',
    benefits: ['면역세포 활성화', '항염 효과', '항산화 작용'],
    category: 'immunity',
    price: 25000,
    image: '/images/mushroom-immunity.jpg',
    ingredients: ['표고버섯', '새송이버섯', '팽이버섯', '느타리버섯', '영지버섯'],
    nutritionFacts: { calories: 45, protein: 4.2, fat: 0.8, carbs: 6.5 },
    chefRecommended: true
  },
  {
    id: 'bitter-melon',
    name: '혈당조절 여주볶음',
    description: '천연 인슐린 성분이 함유된 여주로 만든 혈당 관리 반찬',
    benefits: ['혈당 상승 억제', '인슐린 감수성 개선', '당뇨 합병증 예방'],
    category: 'diabetes',
    price: 16000,
    image: '/images/bitter-melon.jpg',
    ingredients: ['여주', '양파', '마늘', '올리브오일', '소금'],
    nutritionFacts: { calories: 17, protein: 1.5, fat: 0.2, carbs: 3.2 },
    chefRecommended: false
  },
  {
    id: 'kelp-cholesterol',
    name: '콜레스테롤 케어 미역무침',
    description: '베타글루칸이 풍부한 미역으로 콜레스테롤 수치 개선',
    benefits: ['LDL 콜레스테롤 감소', 'HDL 콜레스테롤 증가', '혈관 건강 개선'],
    category: 'cholesterol',
    price: 14000,
    image: '/images/kelp-cholesterol.jpg',
    ingredients: ['미역', '참기름', '마늘', '식초', '참깨'],
    nutritionFacts: { calories: 12, protein: 1.8, fat: 0.3, carbs: 1.5 },
    chefRecommended: false
  },
  {
    id: 'celery-bp',
    name: '혈압관리 셀러리볶음',
    description: '칼륨이 풍부한 셀러리로 나트륨 배출을 도와 혈압 조절',
    benefits: ['나트륨 배출', '혈관 확장', '혈압 안정화'],
    category: 'hypertension',
    price: 15000,
    image: '/images/celery-bp.jpg',
    ingredients: ['셀러리', '당근', '양파', '올리브오일', '허브솔트'],
    nutritionFacts: { calories: 16, protein: 0.7, fat: 0.2, carbs: 3.0 },
    chefRecommended: false
  },
  {
    id: 'fermented-cabbage',
    name: '장건강 발효양배추',
    description: '유산균이 살아있는 독일식 사우어크라우트로 장 건강 개선',
    benefits: ['유익균 증식', '장벽 강화', '소화 개선'],
    category: 'digestion',
    price: 17000,
    image: '/images/fermented-cabbage.jpg',
    ingredients: ['양배추', '천일염', '캐러웨이시드', '유산균'],
    nutritionFacts: { calories: 19, protein: 0.9, fat: 0.1, carbs: 4.3 },
    chefRecommended: true
  },
  {
    id: 'turmeric-liver',
    name: '간해독 강황무침',
    description: '커큐민 성분이 풍부한 강황으로 간 기능 회복 지원',
    benefits: ['간 해독', '염증 감소', '항산화 작용'],
    category: 'liver',
    price: 19000,
    image: '/images/turmeric-liver.jpg',
    ingredients: ['강황', '무', '당근', '생강', '꿀'],
    nutritionFacts: { calories: 25, protein: 1.2, fat: 0.3, carbs: 5.8 },
    chefRecommended: true
  },
  {
    id: 'sesame-bone',
    name: '뼈튼튼 깨무침',
    description: '칼슘이 풍부한 검은깨로 만든 뼈 건강 반찬',
    benefits: ['칼슘 보충', '뼈 밀도 개선', '관절 건강'],
    category: 'bone',
    price: 13000,
    image: '/images/sesame-bone.jpg',
    ingredients: ['검은깨', '시금치', '멸치액젓', '마늘', '참기름'],
    nutritionFacts: { calories: 160, protein: 5.2, fat: 14.1, carbs: 5.8 },
    chefRecommended: false
  },
  {
    id: 'spinach-iron',
    name: '철분충전 시금치나물',
    description: '철분과 엽산이 풍부한 시금치로 빈혈 개선',
    benefits: ['철분 보충', '조혈 작용', '엽산 공급'],
    category: 'anemia',
    price: 12000,
    image: '/images/spinach-iron.jpg',
    ingredients: ['시금치', '참기름', '마늘', '소금', '깨소금'],
    nutritionFacts: { calories: 23, protein: 2.9, fat: 0.4, carbs: 3.6 },
    chefRecommended: false
  },
  {
    id: 'carrot-skin',
    name: '피부미인 당근무침',
    description: '베타카로틴이 풍부한 당근으로 피부 건강 개선',
    benefits: ['항산화 작용', '피부 재생', '콜라겐 생성'],
    category: 'skin',
    price: 11000,
    image: '/images/carrot-skin.jpg',
    ingredients: ['당근', '올리브오일', '레몬즙', '파슬리', '소금'],
    nutritionFacts: { calories: 18, protein: 0.5, fat: 0.2, carbs: 4.1 },
    chefRecommended: false
  },
  // Aquaponics Salad Products
  {
    id: 'aqua-salad-stress',
    name: '힐링 아쿠아포닉스 샐러드',
    description: '스트레스 완화에 도움이 되는 아쿠아포닉스 재배 채소로 만든 프리미엄 샐러드',
    benefits: ['스트레스 완화', '정신 안정', '수면 개선'],
    category: 'stress',
    price: 28000,
    image: '/images/aqua-salad-stress.jpg',
    ingredients: ['아쿠아포닉스 로메인', '바질', '캐모마일', '라벤더', '올리브오일'],
    nutritionFacts: { calories: 85, protein: 3.2, fat: 5.5, carbs: 6.8 },
    chefRecommended: true
  },
  {
    id: 'aqua-salad-immunity',
    name: '면역력 UP 아쿠아포닉스 샐러드',
    description: '무농약 아쿠아포닉스 시스템에서 재배한 채소로 면역력을 강화하는 샐러드',
    benefits: ['면역력 증진', '항산화 효과', '피로 회복'],
    category: 'immunity',
    price: 32000,
    image: '/images/aqua-salad-immunity.jpg',
    ingredients: ['아쿠아포닉스 케일', '브로콜리', '파프리카', '견과류', '레몬드레싱'],
    nutritionFacts: { calories: 125, protein: 5.8, fat: 8.2, carbs: 9.5 },
    chefRecommended: true
  },
  {
    id: 'aqua-salad-diabetes',
    name: '혈당관리 아쿠아포닉스 샐러드',
    description: '저GI 아쿠아포닉스 채소로 혈당 조절을 돕는 당뇨 관리 샐러드',
    benefits: ['혈당 조절', '포만감 유지', '인슐린 감수성 개선'],
    category: 'diabetes',
    price: 30000,
    image: '/images/aqua-salad-diabetes.jpg',
    ingredients: ['아쿠아포닉스 시금치', '아보카도', '토마토', '오이', '발사믹드레싱'],
    nutritionFacts: { calories: 95, protein: 4.2, fat: 6.8, carbs: 5.2 },
    chefRecommended: true
  },
  // Additional products for variety
  {
    id: 'ginseng-energy',
    name: '활력충전 인삼정과',
    description: '6년근 홍삼으로 만든 에너지 보충 정과',
    benefits: ['피로 회복', '체력 증진', '면역력 강화'],
    category: 'immunity',
    price: 35000,
    image: '/images/ginseng-energy.jpg',
    ingredients: ['6년근 홍삼', '꿀', '대추', '생강'],
    nutritionFacts: { calories: 45, protein: 1.2, fat: 0.1, carbs: 11.2 },
    chefRecommended: true
  },
  {
    id: 'omega-fish',
    name: '오메가3 고등어조림',
    description: 'DHA/EPA가 풍부한 고등어로 두뇌 건강 증진',
    benefits: ['두뇌 활성화', '혈관 건강', '염증 완화'],
    category: 'cholesterol',
    price: 22000,
    image: '/images/omega-fish.jpg',
    ingredients: ['고등어', '무', '간장', '설탕', '생강'],
    nutritionFacts: { calories: 185, protein: 18.5, fat: 11.2, carbs: 2.3 },
    chefRecommended: true
  }
];

// Team members
export const teamMembers: TeamMember[] = [
  {
    name: '백석남 총주방장',
    position: '특급호텔 총주방장 출신',
    description: '20년 경력의 특급호텔 총주방장 출신으로, 건강과 맛을 동시에 추구하는 전문 셰프입니다. 전통 한식과 현대 영양학을 결합한 건강 반찬 레시피를 개발하고 있습니다.',
    image: '/images/chef-baek.jpg'
  },
  {
    name: '박지현 영양학 박사',
    position: '임상영양학 전문가',
    description: '연세대학교 의과대학 영양학과 박사로 20년간 질병별 맞춤 영양 처방을 연구해왔습니다.',
    image: '/images/dr-park.jpg'
  },
  {
    name: '이승민 AI 개발자',
    position: 'Medical AI 전문가',
    description: 'MIT에서 Medical AI를 전공하고 삼성의료원에서 AI 진단 시스템을 개발한 경험이 있습니다.',
    image: '/images/dev-lee.jpg'
  },
  {
    name: '최미란 한의사',
    position: '동의보감 연구가',
    description: '경희대학교 한의과대학 출신으로 전통 의학과 현대 영양학을 결합한 식이요법을 연구합니다.',
    image: '/images/oriental-choi.jpg'
  }
];

// AI analysis simulation data
export const aiAnalysisSteps = [
  {
    step: 1,
    title: '건강검진 데이터 분석',
    description: 'AI가 업로드된 건강검진 결과를 분석하여 주요 건강 지표를 추출합니다.',
    duration: 3000
  },
  {
    step: 2,
    title: '개인 건강 상태 평가',
    description: '6,844,615개의 의료 데이터베이스와 비교하여 개인의 건강 상태를 평가합니다.',
    duration: 4000
  },
  {
    step: 3,
    title: '맞춤 반찬 추천',
    description: '개인의 건강 상태에 최적화된 반찬을 추천하고 예상 효과를 계산합니다.',
    duration: 2000
  }
];