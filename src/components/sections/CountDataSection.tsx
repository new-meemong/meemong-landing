'use client'

import useContractCount from '@/hooks/apis/useContractCount'
import useCountUp from '@/hooks/useCountUp'
import useUserCount from '@/hooks/apis/useUserCount'
import React from 'react'
import styled from 'styled-components'
import { SkeletonText } from '../common/Skeleton'
import dynamic from 'next/dynamic'
import { useIsMobile } from '@/hooks/useIsMobile'

const DynamicDateDisplay = dynamic(() => import('../common/DateDisplay'), {
  ssr: false,
})

// 메인 컴포넌트
const CountDataSection = () => {
  const {
    contractCount,
    isLoading: isContractCountLoading,
    error: contractCountError,
  } = useContractCount()
  const {
    userCount,
    isLoading: isUserCountLoading,
    error: userCountError,
  } = useUserCount()

  const animatedModelCount = useCountUp(userCount?.modelCount || 0, 1500)
  const animatedDesignerCount = useCountUp(userCount?.designerCount || 0, 2000)
  const animatedContractCount = useCountUp(contractCount || 0, 2500)
  const animatedTotalUserCount = useCountUp(
    (userCount?.designerCount || 0) + (userCount?.modelCount || 0),
    3000
  )

  const isMobile = useIsMobile()

  return (
    <DataSection>
      <DynamicDateDisplay />
      <DataContainer>
        <DataItem>
          <DataKey>헤어모델</DataKey>
          {isUserCountLoading ? (
            <SkeletonText />
          ) : userCountError ? (
            <DataValue>-</DataValue>
          ) : userCount ? (
            <DataValue>{animatedModelCount.toLocaleString()} 명</DataValue>
          ) : (
            <DataValue>-</DataValue>
          )}
        </DataItem>
        <DataItem>
          <DataKey>헤어디자이너</DataKey>
          {isUserCountLoading ? (
            <SkeletonText />
          ) : userCountError ? (
            <DataValue>-</DataValue>
          ) : userCount ? (
            <DataValue>{animatedDesignerCount.toLocaleString()} 명</DataValue>
          ) : (
            <DataValue>-</DataValue>
          )}
        </DataItem>
        <DataItem>
          <DataKey>{isMobile ? '누적 초상권' : '누적 초상권 계약수'}</DataKey>
          {isContractCountLoading ? (
            <SkeletonText />
          ) : contractCountError ? (
            <DataValue>-</DataValue>
          ) : contractCount ? (
            <DataValue>{animatedContractCount.toLocaleString()} 건</DataValue>
          ) : (
            <DataValue>-</DataValue>
          )}
        </DataItem>
        <DataItem>
          <DataKey>회원수</DataKey>
          {isUserCountLoading ? (
            <SkeletonText />
          ) : userCountError ? (
            <DataValue>-</DataValue>
          ) : userCount ? (
            <DataValue>{animatedTotalUserCount.toLocaleString()} 명</DataValue>
          ) : (
            <DataValue>-</DataValue>
          )}
        </DataItem>
      </DataContainer>
    </DataSection>
  )
}

const DataSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 20%;

  @media (max-width: 768px) {
    padding: 2rem 5%;
    margin-bottom: 1.5rem;
  }
`

const DataContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
  flex-wrap: wrap;
`

const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

const DataKey = styled.span`
  font-weight: bold;
  font-size: clamp(20px, 2.08vw, 40px);
  margin-bottom: 20px;
  color: #000;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`

const DataValue = styled.span`
  font-size: clamp(20px, 1.67vw, 32px);
  color: #000;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.5em;
    font-weight: 400;
  }
`

export default CountDataSection
