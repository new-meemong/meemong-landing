import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface FavoriteModelSectionProps {
  images: string[]
  names: string[]
}

const FavoriteModelSection = ({ images, names }: FavoriteModelSectionProps) => {
  return (
    <StyledFavoriteModel>
      <ContentWrapper>
        <ImageContainer>
          {images.map((src, index) => (
            <ModelWrapper key={index}>
              <ModelImage src={src} alt={`Favorite Model ${index + 1}`} width={200} height={300} />
              <ModelInfo>
                <ModelName>{names[index]}</ModelName>
                <ModelDescription>무료 모델 | 이번달 인기</ModelDescription>
              </ModelInfo>
            </ModelWrapper>
          ))}
        </ImageContainer>
        <PopularText>이번 달 가장 인기 있는 모델 보러가기</PopularText>
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
    </StyledFavoriteModel>
  )
}

export default FavoriteModelSection

const StyledFavoriteModel = styled.div`
  background-color: #8276f5;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`

const ModelWrapper = styled.div`
  position: relative;
  width: 200px;
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
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`

const LinkButton = styled.a`
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`
