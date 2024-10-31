import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import { theme } from '@/constants/theme'
import { PlanDataType } from '@/constants/data'

interface PlanSectionProps {
  planData: PlanDataType[]
  isDesigner?: boolean
}

const PlanSection = ({ planData, isDesigner = true }: PlanSectionProps) => {
  const isMobile = useIsMobile()
  return (
    <StyledPlanSection>
      <CoinIcon src="/icons/coin.png" alt="Coin Icon" width={80} height={80} />
      <Description $isDesigner={isDesigner}>
        미몽은 지금 앱 스토어에서 설치 가능합니다.
      </Description>

      {isMobile ? (
        <>
          <Title $isDesigner={isDesigner}>헤어디자이너라면 지금</Title>
          <Title $isDesigner={isDesigner}>무료로 시작하세요.</Title>
        </>
      ) : (
        <Title $isDesigner={isDesigner}>
          헤어디자이너라면 지금 무료로 시작하세요.
        </Title>
      )}
      <PlanCardContainer>
        {planData?.map((plan, index) => (
          <PlanCard
            key={index}
            disabled={plan.disabled}
            $isDesigner={isDesigner}
          >
            <PlanCardInner>
              <CardIcon
                src={plan.icon}
                alt={`${plan.title} Icon`}
                width={40}
                height={40}
              />
              <CardTitle $isDesigner={isDesigner}>{plan.title}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <DetailList>
                {plan.details.map((detail, detailIndex) => (
                  <DetailItem key={detailIndex}>{detail}</DetailItem>
                ))}
              </DetailList>
            </PlanCardInner>
            <CardPrice>
              <span
                className="price"
                style={plan.disabled ? { color: theme.colors.gray300 } : {}}
              >
                {plan.price}
              </span>
              {plan.priceDescription && (
                <span className="price-description">{`(${plan.priceDescription})`}</span>
              )}
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

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`

const Description = styled.p<{ $isDesigner?: boolean }>`
  font-size: clamp(22px, 1.5vw, 30px);
  color: ${({ $isDesigner }) =>
    $isDesigner ? theme.colors.primary : theme.colors.teal};
  margin-bottom: 10px;
  font-weight: 700;

  @media (max-width: 768px) {
    padding: 0 1rem;
    font-size: 1.2rem;
  }
`

const Title = styled.h2<{ $isDesigner?: boolean }>`
  font-size: clamp(40px, 2.5vw, 60px);
  color: ${({ $isDesigner }) =>
    $isDesigner ? theme.colors.primary : theme.colors.teal};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    font-weight: 900;
    line-height: 1.5;
    padding: 0 2rem;
    margin: 0;
  }
`

const PlanCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding-bottom: 150px;

  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
`

const PlanCard = styled.div<{ disabled: boolean; $isDesigner?: boolean }>`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 300px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  transition: opacity 0.3s ease;
  border: 5px solid
    ${({ $isDesigner }) =>
      $isDesigner ? theme.colors.primary : theme.colors.teal};
`

const PlanCardInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  border-bottom: 2px solid #dedbdb;
  height: 280px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const CardIcon = styled(Image)`
  width: 32px;
  height: 32px;
  margin-bottom: 15px;
`

const CardTitle = styled.h3<{ $isDesigner?: boolean }>`
  font-size: 30px;
  font-weight: bold;
  color: ${({ $isDesigner }) =>
    $isDesigner ? theme.colors.primary : theme.colors.teal};
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
  white-space: nowrap;
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
