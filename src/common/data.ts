interface ReviewDataProps {
  location: string
  designer: string
  review: string
}

const reviewData: ReviewDataProps[] = [
  {
    location: '청담',
    designer: '이** 디자이너 | 5년차',
    review:
      '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.'
  },
  {
    location: '성수',
    designer: '성수 오** 디자이너 | 7년차',
    review:
      '미몽을 통해 초상권 관리가 훨씬 편리해졌어요. 어플 내에서 간편하게 계약을 체결하고 관리할 수 있어서 제 업무 효율이 많이 높아졌어요.'
  },
  {
    location: '부산',
    designer: '조** 디자이너 | 4년차',
    review:
      '미몽 어플은 헤어디자이너에게 필요한 모든 것을 한 곳에서 제공해줘서 정말 편리해요. 모델 섭외부터 포트폴리오 관리, 교육까지 모든 것이 무료로 제공되니 정말 최고의 어플이라고 생각해요.'
  },
  {
    location: '대구',
    designer: '새** 디자이너 | 7년차',
    review:
      '지역별로 언제든지 필요한 교육을 받을 수 있는 기능이 너무 좋아요. 현장에서 경쟁력을 유지하기 위해서 필요한 교육을 받을 수 있어서 정말 감사해요.'
  },
  {
    location: '분당',
    designer: '송** 디자이너 | 5년차',
    review:
      '급구게시판의 번개매칭 기능을 통해 갑작스럽게 모델이 필요한 상황에서도 빠르게 대응할 수 있어서 너무 좋았어요. 짧은 시간 안에 모델과 매칭되어 일정대로 진행할수 있었어요. 감사합니다.'
  },
  {
    location: '잠실',
    designer: '유** 디자이너 | 5년차',
    review:
      '미몽 어플의 소모임 기능을 통해 미용인들을 위한 소통의 장을 마련할 수 있다는 게 너무 좋아요. 미용인들과 정보를 공유하고 소통할 수 있는 공간이 정말 유용해요.'
  },
  {
    location: '대전',
    designer: '다** 디자이너 | 6년차',
    review:
      '헤어디자이너와 모델을 매칭해주는 기능이 정말 효율적이에요. 이전에는 모델을 찾는 데에 많은 시간을 투자해야 했는데, 어플을 통해 원하는 조건의 모델을 빠르게 찾을 수 있어서 정말 편리해요.'
  },
  {
    location: '충북',
    designer: '장** 디자이너 | 4년차',
    review:
      '포트폴리오 관리 기능이 무료로 제공된다는 게 놀라웠어요. 어플 내에서 간편하게 포트폴리오를 관리하고 만들어진 포트폴리오로 구인구직에도 도움을 줄 수 있다는 점이 정말 좋아요.'
  }
] as const

interface PlanDataProps {
  icon: string
  title: string
  description: string
  details: string[]
  price: string
  disabled: boolean
  priceDescription: string
}

const planData: PlanDataProps[] = [
  {
    icon: '/assets/images/plan/gift.png',
    title: '무료 플랜',
    description: '직접 경험해 보세요',
    details: [
      '무제한 무료 매칭',
      '채팅방 유효기간이 60일',
      '계약서 기능 및 관리',
      '포트폴리오 20개까지',
      '채널톡으로 언제, 어디서든 고객 지원'
    ],
    price: '무료',
    priceDescription: '이벤트 종료시점까지',
    disabled: false
  },
  {
    icon: '/assets/images/plan/bulb.png',
    title: '월간 구독',
    description: '더 많은 포트폴리오와 매칭이 필요할 때',
    details: [
      '무제한 무료 매칭',
      '채팅방 유효기간이 60일',
      '계약서 기능 및 관리',
      '포트폴리오 20개까지',
      '채널톡으로 언제, 어디서든 고객 지원'
    ],
    price: '추후 공개',
    priceDescription: '',
    disabled: true
  },
  {
    icon: '/assets/images/plan/bulb.png',
    title: '연간 구독',
    description: '나만의 퍼스널브랜딩을 위한 최고의 선택',
    details: [
      '무제한 무료 매칭',
      '채팅방 유효기간이 60일',
      '계약서 기능 및 관리',
      '포트폴리오 20개까지',
      '채널톡으로 언제, 어디서든 고객 지원'
    ],
    price: '추후 공개',
    priceDescription: '',
    disabled: true
  }
]

export { reviewData, planData }
