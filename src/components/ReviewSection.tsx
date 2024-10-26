import React from 'react'
import styled from 'styled-components'

interface ReviewCardProps {
  location: string
  designer: string
  review: string
}

const ReviewSection = () => {
  const reviews: ReviewCardProps[] = [
    {
      location: '청담',
      designer: '이** 디자이너 | 5년차',
      review:
        '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.'
    },
    {
      location: '청담',
      designer: '이** 디자이너 | 5년차',
      review:
        '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.'
    },
    {
      location: '청담',
      designer: '이** 디자이너 | 5년차',
      review:
        '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.'
    },
    {
      location: '청담',
      designer: '이** 디자이너 | 5년차',
      review:
        '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.'
    },
    {
      location: '청담',
      designer: '이** 디자이너 | 5년차',
      review:
        '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.'
    },
    {
      location: '청담',
      designer: '이** 디자이너 | 5년차',
      review:
        '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.'
    },
    {
      location: '청담',
      designer: '이** 디자이너 | 5년차',
      review:
        '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.'
    },
    {
      location: '청담',
      designer: '이** 디자이너 | 5년차',
      review:
        '미몽 덕분에 제 포트폴리오 이력이 더 발전할 수 있게 되었어요. 모델을 구하는 것이 정말 어려웠는데, 미몽으로 손쉽게 모델을 찾을 수 있었고, 그 결과물도 너무 만족스러웠어요.'
    }
    // 나머지 7개의 리뷰 데이터를 추가해주세요.
  ]

  return (
    <StyledReviewSection>
      <Title>미몽 실 사용자들의 리뷰</Title>
      <Description>미몽은 헤어디자이너들의 고민과 커리어를 위해 고민합니다.</Description>
      <ReviewGrid>
        {reviews.map((review, index) => (
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
  margin-bottom: 16px;
`

const Description = styled.p`
  color: #8276f5;
  font-size: 18px;
  margin-bottom: 40px;
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

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
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
`

const Location = styled.p`
  font-weight: normal;
`

const Designer = styled.p`
  font-weight: bold;
  color: #000;
  margin-bottom: 12px;
`

const Review = styled.p`
  font-size: 14px;
  line-height: 1.5;
`

export default ReviewSection
