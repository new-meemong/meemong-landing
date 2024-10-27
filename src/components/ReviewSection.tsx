import { reviewData } from '@/common/data'
import { useIsMobile } from '@/hooks/useIsMobile'
import React from 'react'
import styled from 'styled-components'

const ReviewSection = () => {
  const isMobile = useIsMobile()
  return (
    <StyledReviewSection>
      <Title>미몽 실 사용자들의 리뷰</Title>
      {isMobile ? (
        <>
          <Description>미몽은 헤어디자이너들의</Description>
          <Description>고민과 커리어를 위해 고민합니다.</Description>
        </>
      ) : (
        <Description>미몽은 헤어디자이너들의 고민과 커리어를 위해 고민합니다.</Description>
      )}
      <ReviewGrid>
        {isMobile
          ? reviewData.slice(0, 4).map((review, index) => (
              <ReviewCard key={index}>
                <Location>{review.location}</Location>
                <Designer>{review.designer}</Designer>
                <Review>{review.review}</Review>
              </ReviewCard>
            ))
          : reviewData.map((review, index) => (
              <ReviewCard key={index}>
                <Location>{review.location}</Location>
                <Designer>{review.designer}</Designer>
                <Review>{review.review}</Review>
              </ReviewCard>
            ))}
      </ReviewGrid>
    </StyledReviewSection>
  )
}

const StyledReviewSection = styled.section`
  text-align: center;
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  color: #8276f5;
  font-size: 32px;
  margin-bottom: 1.2rem;
`

const Description = styled.p`
  color: #8276f5;
  font-size: 18px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin: 0;
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }
`

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`

const ReviewCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    padding: 2rem;
    width: 342px;
    height: auto;
  }
`

const Location = styled.p`
  font-weight: normal;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Designer = styled.p`
  font-weight: bold;
  color: #000;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    margin-top: 0.2rem;
    font-size: 1.5rem;
  }
`

const Review = styled.p`
  font-size: 14px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export default ReviewSection
