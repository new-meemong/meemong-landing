import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useIsMobile } from '@/hooks/useIsMobile'
import { CarouselWrapper } from '@/styles/CommonStyles'
import Slider from 'react-slick'
import { theme } from '@/common/theme'

interface PopularModelSectionProps {
  images: string[]
  names: string[]
}

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000
}

const PopularModelSection = ({ images, names }: PopularModelSectionProps) => {
  const isMobile = useIsMobile()

  return (
    <StyledPopularModel>
      <ContentWrapper>
        <ImageContainer>
          {isMobile ? (
            <CarouselWrapper $dotcolor={theme.colors.white}>
              <Slider {...carouselSettings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <ModelWrapper>
                      <ModelImage src={image} alt={`Favorite Model ${index + 1}`} width={260} height={390} />
                      <ModelInfo>
                        <ModelName>{names[index]}</ModelName>
                        <ModelDescription>무료 모델 | 이번달 인기</ModelDescription>
                      </ModelInfo>
                    </ModelWrapper>
                  </div>
                ))}
              </Slider>
            </CarouselWrapper>
          ) : (
            images.map((src, index) => (
              <ModelWrapper key={index}>
                <ModelImage src={src} alt={`Favorite Model ${index + 1}`} width={200} height={300} />
                <ModelInfo>
                  <ModelName>{names[index]}</ModelName>
                  <ModelDescription>무료 모델 | 이번달 인기</ModelDescription>
                </ModelInfo>
              </ModelWrapper>
            ))
          )}
        </ImageContainer>
        {isMobile ? (
          <>
            <PopularText>이번 달 가장 </PopularText>
            <PopularText>인기 있는 모델 보러가기</PopularText>
          </>
        ) : (
          <PopularText>이번 달 가장 인기 있는 모델 보러가기</PopularText>
        )}
        <ButtonGroup>
          <LinkButton
            href="https://play.google.com/store/apps/details?id=com.meemong.second"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/assets/images/google-play.svg" alt="Google Play" width={200} height={60} />
          </LinkButton>
          <LinkButton
            href="https://apps.apple.com/kr/app/미몽-당신도-헤어모델/id1572588554"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/assets/images/app-store.svg" alt="App Store" width={200} height={60} />
          </LinkButton>
        </ButtonGroup>
      </ContentWrapper>
    </StyledPopularModel>
  )
}

export default PopularModelSection

const StyledPopularModel = styled.div`
  background-color: #8276f5;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const ModelWrapper = styled.div`
  position: relative;
  width: 200px;

  @media (max-width: 768px) {
    width: 260px;
  }
`

const ModelImage = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`

const ModelInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  margin-bottom: 10px;
`

const ModelName = styled.p`
  color: #fff;
  font-size: 14px;
  line-height: 1.2;
`

const ModelDescription = styled.p`
  color: #ccc;
  font-size: 16px;
  font-weight: bold;
`

const PopularText = styled.p`
  font-size: clamp(32px, 2vw, 50px);
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 0.8rem;
    font-size: 1.5rem;
    margin-bottom: 0;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`

const LinkButton = styled.a`
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 60px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
