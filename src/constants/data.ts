interface ReviewDataType {
  title: string
  description: string
  review: string
}

interface PlanDataType {
  icon: string
  title: string
  description: string
  details: string[]
  price: string
  disabled: boolean
  priceDescription: string
}

const DESIGNER_REVIEW_DATA: ReviewDataType[] = [
  {
    title: '청담',
    description: '이** 디자이너 | 5년차',
    review:
      '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.',
  },
  {
    title: '성수',
    description: '오** 디자이너 | 7년차',
    review:
      '미몽을 통해 초상권 관리가 훨씬 편리해졌어요. 어플 내에서 간편하게 계약을 체결하고 관리할 수 있어서 제 업무 효율이 많이 높아졌어요.',
  },
  {
    title: '부산',
    description: '조** 디자이너 | 4년차',
    review:
      '미몽 어플은 헤어디자이너에게 필요한 모든 것을 한 곳에서 제공해줘서 정말 편리해요. 모델 섭외부터 포트폴리오 관리, 교육까지 모든 것이 무료로 제공되니 정말 최고의 어플이라고 생각해요.',
  },
  {
    title: '대구',
    description: '새** 디자이너 | 7년차',
    review:
      '지역별로 언제든지 필요한 교육을 받을 수 있는 기능이 너무 좋아요. 현장에서 경쟁력을 유지하기 위해서 필요한 교육을 받을 수 있어서 정말 감사해요.',
  },
  {
    title: '분당',
    description: '송** 디자이너 | 5년차',
    review:
      '급구게시판의 번개매칭 기능을 통해 갑작스럽게 모델이 필요한 상황에서도 빠르게 대응할 수 있어서 너무 좋았어요. 짧은 시간 안에 모델과 매칭되어 일정대로 진행할수 있었어요. 감사합니다.',
  },
  {
    title: '잠실',
    description: '유** 디자이너 | 5년차',
    review:
      '미몽 어플의 소모임 기능을 통해 미용인들을 위한 소통의 장을 마련할 수 있다는 게 너무 좋아요. 미용인들과 정보를 공유하고 소통할 수 있는 공간이 정말 유용해요.',
  },
  {
    title: '대전',
    description: '다** 디자이너 | 6년차',
    review:
      '헤어디자이너와 모델을 매칭해주는 기능이 정말 효율적이에요. 이전에는 모델을 찾는 데에 많은 시간을 투자해야 했는데, 어플을 통해 원하는 조건의 모델을 빠르게 찾을 수 있어서 정말 편리해요.',
  },
  {
    title: '충북',
    description: '장** 디자이너 | 4년차',
    review:
      '포트폴리오 관리 기능이 무료로 제공된다는 게 놀라웠어요. 어플 내에서 간편하게 포트폴리오를 관리하고 만들어진 포트폴리오로 구인구직에도 도움을 줄 수 있다는 점이 정말 좋아요.',
  },
] as const

const DESIGNER_PLAN_DATA: PlanDataType[] = [
  {
    icon: '/icons/gift.png',
    title: '무료 플랜',
    description: '직접 경험해 보세요',
    details: [
      '무제한 무료 매칭',
      '채팅방 유효기간이 60일',
      '계약서 기능 및 관리',
      '포트폴리오 20개까지',
      '채널톡으로 언제, 어디서든 고객 지원',
    ],
    price: '무료',
    priceDescription: '이벤트 종료시점까지',
    disabled: false,
  },
  {
    icon: '/icons/bulb.png',
    title: '월간 구독',
    description: '더 많은 포트폴리오와 매칭이 필요할 때',
    details: [
      '무제한 무료 매칭',
      '채팅방 유효기간이 60일',
      '계약서 기능 및 관리',
      '포트폴리오 20개까지',
      '채널톡으로 언제, 어디서든 고객 지원',
    ],
    price: '추후 공개',
    priceDescription: '',
    disabled: true,
  },
  {
    icon: '/icons/bulb.png',
    title: '연간 구독',
    description: '나만의 퍼스널브랜딩을 위한 최고의 선택',
    details: [
      '무제한 무료 매칭',
      '채팅방 유효기간이 60일',
      '계약서 기능 및 관리',
      '포트폴리오 20개까지',
      '채널톡으로 언제, 어디서든 고객 지원',
    ],
    price: '추후 공개',
    priceDescription: '',
    disabled: true,
  },
] as const

const MODEL_REVIEW_DATA: ReviewDataType[] = [
  {
    title: '대구',
    description: '서*영 | 컷트',
    review:
      '대구지역에 거주하다보니 원하는 지역이나 헤어샵 브랜드의 선택권이 넓지 않았습니다. 미몽은 가까운 지역을 기반으로 미용사 리스트를 보여주는데 비수도권 지역에도 이렇게 많은 미용사 분들이 활동하고 계실 줄 몰랐습니다. 용돈 아낄 수 있는 좋은 앱을 출시해 주셔서 감사합니다.',
  },
  {
    title: '성남',
    description: '조*나 | 시크릿투톤',
    review:
      '누구나 헤어 모델이 될 수 있다는 인스타 광고에서 미몽을 알게되어 헤어 모델에 도전하게 되었는데, 비싼 시술을 무료로 받을 뿐 아니라 돈주는 디자이너분께 제안을 받아 5만원 페이까지 받고 모델이 되었습니다. 무료시술도 받고 용돈까지 벌고 말도 안되는 혜자 개꿀팁 유용앱입니다!',
  },
  {
    title: '신림',
    description: '김*예 | 드라이',
    review:
      '친구의 추천으로 이용하게 되었습니다. 생각보다 간단한 절차로 금방 미용사분과 매칭이 되니 너무나 신기했습니다. 드라이까지 세상 열심히 정성 다해 해주시고 sns홍보용으로 쓸 사진을 찍으시고 보정까지 만족스럽게 해주셨어요. 머리 하러 가서 사진까지 건진 느낌!',
  },
  {
    title: '의정부',
    description: '최*은 | 펌',
    review:
      '개인 정보에 민감한 요즘 시술 후 내 초상권이 남용되면 어쩌나 하는 걱정이 있었어요. 초상권 계약을 통해서 안전한 범위 내에서 정해진 기간동안 쓰이도록 법적으로 보장을 받으니 미몽을 통하면 안전하다는 생각이 들어 신뢰가 가는 앱입니다.',
  },
  {
    title: '노원',
    description: '이*수 | 컷트',
    review:
      '프리랜서 모델일을 하는 남성입니다. 뷰티업계 특성상 남자 모델 선호도가 낮을줄 알았는데 이 앱에서는 요즘 트렌드에 따라 남자 모델을 구하시는 디자이너분들이 정말 많습니다. 매달 컷트해야 하는 남성분들 지금 당장 다운로드 추천드려요!',
  },
  {
    title: '홍대',
    description: '신*윤 | 펌',
    review:
      '혹시나 시술 결과가 만족스럽지 않으면 무료 시술을 받고 클레임을 걸 수도 없고, 무료라고 대충 해주시면 어쩌지..? 하는 저만의 우려가 있었지만 내돈내산 시술보다 오히려 더 예쁘게 나온 거 있죠? 헤어 디자이너 분들 포트폴리오에 올리실 사진 작업 용이기 때문에 평소보다 더 영혼을 다 해 작업해주시는 느낌!',
  },
  {
    title: '성수',
    description: '김*민 | 염색',
    review:
      '정말 누구나 헤어 모델이 될 수 있습니다. 앱을 알기 전까지는 일반인인 제가 모델이라는 걸 할 수 있을 거라고는 생각하지 못했습니다. 경력 많고 비주얼이 화려하지 않고 지극히 평범한 대학생인 저에게도 미용사 분들로부터 모델 제안이 오더라구요.',
  },
  {
    title: '인천',
    description: '성*희 | 클리닉',
    review:
      '수시로 매직펌과 클리닉을 필수로 받지 않으면 금방 미스코리아 사자머리가 되어버리는 저주받은 악성 곱슬이었어요. 이제는 미몽 앱을 알게 되어 클리닉 무��� 시술 모델로 비용을 아끼며 꾸준히 관리 중입니다. 저에게는 정말 구원자 같은 앱이에요.',
  },
] as const

const MODEL_PLAN_DATA: PlanDataType[] = [
  {
    icon: '/icons/gift.png',
    title: '무료 플랜',
    description: '직접 경험해 보세요',
    details: [
      '무제한 무료 매칭',
      '채팅방 유효기간이 60일까지',
      '초상권 계약서 작성 및 관리',
      '채널톡으로 언제, 어디서든 고객 지원',
    ],
    price: '무료',
    priceDescription: '이벤트 종료시점까지',
    disabled: false,
  },
  {
    icon: '/icons/bulb.png',
    title: '월간 구독',
    description: '더 많은 포트폴리오와 매칭이 필요할 때',
    details: [
      '무제한 무료 매칭',
      '채팅방 유효기간이 무제한',
      '계약서 기능 및 관리',
      '포트폴리오 100개 이상 추가 가능',
      '급구게시판 무제한 이용',
    ],
    price: '추후 공개',
    priceDescription: '',
    disabled: true,
  },
  {
    icon: '/icons/bulb.png',
    title: '연간 구독',
    description: '나만의 퍼스널브랜딩을 위한 최고의 선택',
    details: [
      '무제한 무료 매칭',
      '채팅방 유효기간이 60일',
      '계약서 기능 및 관리',
      '포트폴리오 20개까지',
      '채널톡으로 언제, 어디서든 고객 지원',
    ],
    price: '추후 공개',
    priceDescription: '',
    disabled: true,
  },
] as const

export type { ReviewDataType, PlanDataType }

export {
  DESIGNER_REVIEW_DATA,
  DESIGNER_PLAN_DATA,
  MODEL_REVIEW_DATA,
  MODEL_PLAN_DATA,
}
