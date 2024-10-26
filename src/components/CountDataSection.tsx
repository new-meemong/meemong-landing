import useContractCount from '@/hooks/useContractCount'
import useCountUp from '@/hooks/useCountUp'
import useUserCount from '@/hooks/useUserCount'
import React from 'react'
import styled from 'styled-components'
import { SkeletonText } from './Skeleton'

const CountDataSection = () => {
  const { contractCount, isLoading: isContractCountLoading, error: contractCountError } = useContractCount()
  const { userCount, isLoading: isUserCountLoading, error: userCountError } = useUserCount()

  const animatedModelCount = useCountUp(userCount?.activeUsers.Model || 0, 1500)
  const animatedDesignerCount = useCountUp(userCount?.activeUsers.Designer || 0, 2000)
  const animatedContractCount = useCountUp(contractCount || 0, 2500)
  const animatedTotalUserCount = useCountUp((userCount?.designerCount || 0) + (userCount?.modelCount || 0), 3000)

  return (
    <DataSection>
      <Date>2024. 02. 24 14:00:13</Date>
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
          <DataKey>누적 초상권 계약수</DataKey>
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
`

const Date = styled.time`
  color: rgba(0, 0, 0, 0.3);
  margin-left: 3%;
  font-size: clamp(14px, 1.5vw, 20px);
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
`

const DataValue = styled.span`
  font-size: clamp(20px, 1.67vw, 32px);
  color: #000;
  white-space: nowrap;
`

export default CountDataSection
