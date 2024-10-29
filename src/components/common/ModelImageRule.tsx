import { theme } from '@/constants/theme'
import React, { Fragment } from 'react'
import styled from 'styled-components'

interface ModelImageRuleProps {
  title: string
  description: string
  recommendImages: string[]
  restrictImages: string[]
}

const ModelImageRule = ({ title, description, recommendImages, restrictImages }: ModelImageRuleProps) => {
  return (
    <Container>
      <Title>
        {title.split('\\n').map((line, index) => (
          <Fragment key={`title-${index}`}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </Title>
      <Description>
        {description.split('\\n').map((line, index) => (
          <Fragment key={`description-${index}`}>
            {index > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </Description>

      <ContentWrapper>
        <Section>
          <SectionTitle>추천하는 모델의 사진</SectionTitle>
          <SectionDescription>앞, 뒤, 옆머리 각각 최소 한 장 이상 등록해주세요.</SectionDescription>
          <ImageGrid>
            {recommendImages.map((image, index) => (
              <ImageWrapper key={index}>
                <Image width={163} height={163} src={image} alt={`Recommended image ${index + 1}`} />
              </ImageWrapper>
            ))}
          </ImageGrid>
        </Section>

        <Section>
          <SectionTitle>승인 불가능한 사진</SectionTitle>
          <SectionDescription>머리를 가리는 사진은 승인이 불가능합니다.</SectionDescription>
          <ImageGrid>
            {restrictImages.map((image, index) => (
              <RestrictedImageWrapper key={index}>
                <RestrictedImage width={163} height={163} src={image} alt={`Restricted image ${index + 1}`} />
                <Overlay />
              </RestrictedImageWrapper>
            ))}
          </ImageGrid>
        </Section>
      </ContentWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 4rem;
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin: 2rem auto;
  }
`

const Title = styled.h2`
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;
  color: ${theme.colors.gray500};
  font-weight: 800;
  line-height: 1.5;
`

const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: #666;
  margin-bottom: 40px;
  text-align: center;
  color: ${theme.colors.teal};
  font-weight: 900;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: clamp(1.5rem, 2vw, 2rem);
  }
`

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
  }
`

const Section = styled.div`
  /* width: 80%; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SectionTitle = styled.h3`
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const SectionDescription = styled.p`
  font-size: clamp(0.875rem, 1vw, 0.9rem);
  color: #222;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
`

const ImageWrapper = styled.div`
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const RestrictedImageWrapper = styled(ImageWrapper)`
  position: relative;
`

const RestrictedImage = styled(Image)`
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(211, 211, 211, 0.5);
  border-radius: 8px;
`

export default ModelImageRule
