import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface PlanCardProps {
  icon: string
  title: string
  description: string
  details: string[]
  price: string
  disabled: boolean
  priceDescription: string
}

const PlanSection: React.FC = () => {
  const plans: PlanCardProps[] = [
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
    // 나머지 두 개의 플랜 데이터를 추가해주세요.
  ]

  return (
    <StyledPlanSection>
      <CoinIcon src="/assets/images/plan/coin.png" alt="Coin Icon" width={80} height={80} />
      <Description>미몽은 지금 앱 스토어에서 설치 가능합니다.</Description>
      <Title>헤어디자이너라면 지금 무료로 시작하세요.</Title>
      <PlanCardContainer>
        {plans.map((plan, index) => (
          <PlanCard key={index} disabled={plan.disabled}>
            <PlanCardInner>
              <CardIcon src={plan.icon} alt={`${plan.title} Icon`} width={40} height={40} />
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <DetailList>
                {plan.details.map((detail, detailIndex) => (
                  <DetailItem key={detailIndex}>{detail}</DetailItem>
                ))}
              </DetailList>
            </PlanCardInner>
            <CardPrice>
              <span className="price">{plan.price}</span>
              {plan.priceDescription && <span className="price-description">{`(${plan.priceDescription})`}</span>}
            </CardPrice>
          </PlanCard>
        ))}
      </PlanCardContainer>
    </StyledPlanSection>
  )
}

export default PlanSection

const StyledPlanSection = styled.section`
  text-align: center;
  margin: 0 auto;
  background-color: #000;
`

const CoinIcon = styled(Image)`
  width: 48px;
  height: 48px;
  margin-top: 150px;
  margin-bottom: 20px;
`

const Description = styled.p`
  font-size: clamp(22px, 1.5vw, 30px);
  color: #8276f5;
  margin-bottom: 10px;
  font-weight: 700;
`

const Title = styled.h2`
  font-size: clamp(40px, 2.5vw, 60px);
  color: #8276f5;
  margin-bottom: 40px;
`

const PlanCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 150px;
`

const PlanCard = styled.div<{ disabled: boolean }>`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 300px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: opacity 0.3s ease;
`

const PlanCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 2px solid #dedbdb;
`

const CardIcon = styled(Image)`
  width: 32px;
  height: auto;
  margin-bottom: 15px;
`

const CardTitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  color: #8276f5;
  line-height: 1.2;
`

const CardDescription = styled.p`
  font-size: 16px;
  text-align: start;
  white-space: nowrap;
  color: #717c8a;
  margin-bottom: 20px;
  font-weight: bold;
`

const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  padding: 0;
`

const DetailItem = styled.li`
  font-size: 16px;
  color: #717c8a;
  &:before {
    content: '• ';
  }
`

const CardPrice = styled.div`
  padding: 20px;
  display: flex;
  gap: 5px;
  justify-content: flex-end;
  align-items: flex-end;
  line-height: 1;
  .price {
    font-size: 24px;
    font-weight: bold;
  }
  .price-description {
    font-size: 16px;
    color: #000;
    margin-bottom: 2px;
  }
`
