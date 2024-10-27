import React, { Fragment } from 'react'
import { useIsMobile } from '@/hooks/useIsMobile'
import { theme } from '@/common/theme'
import Slider from 'react-slick'
import styled from 'styled-components'
import { CarouselWrapper } from '@/styles/CommonStyles'

interface CommonContentProps {
  title1: string
  title2: string
  description1: string
  description2: string
  images: string[]
  title2Color?: string
  backgroundColor?: string
  ImageContainerStyle?: React.CSSProperties
  carouselDotColor?: string
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000
}

const CommonContent = ({
  title1,
  title2,
  description1,
  description2,
  images,
  title2Color,
  backgroundColor,
  ImageContainerStyle,
  carouselDotColor
}: CommonContentProps) => {
  const isMobile = useIsMobile()
  return (
    <StyledCommonContent $title2Color={title2Color} $backgroundColor={backgroundColor}>
      <div className="title-container">
        <h1>
          {title1.split('\\n').map((line, index) => (
            <Fragment key={`title1-${index}`}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h1>
        <h2>
          {title2.split('\\n').map((line, index) => (
            <Fragment key={`title2-${index}`}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </h2>
      </div>
      <div className="description">
        <p>
          {description1.split('\\n').map((line, index) => (
            <Fragment key={`desc1-${index}`}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
        <p>
          {description2.split('\\n').map((line, index) => (
            <Fragment key={`desc2-${index}`}>
              {index > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
      </div>
      {isMobile ? (
        <CarouselWrapper $dotcolor={carouselDotColor || theme.colors.gray}>
          <Slider {...settings}>
            {images?.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Hair model ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </CarouselWrapper>
      ) : (
        <div className="image-container" style={ImageContainerStyle}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} />
          ))}
        </div>
      )}
    </StyledCommonContent>
  )
}

const StyledCommonContent = styled.div<{ $title2Color?: string; $backgroundColor?: string }>`
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 100px 10% 0;
  text-align: center;
  background-color: ${(props) => props.$backgroundColor || 'transparent'};

  @media (max-width: 768px) {
    padding: 50px 0;
  }

  .title-container {
    @media (max-width: 768px) {
      padding: 0 10%;
    }
  }

  h1 {
    font-size: clamp(40px, 3vw, 60px);
    color: #303535;

    @media (max-width: 768px) {
      font-size: 2rem;
      letter-spacing: -0.4px;
      margin-bottom: 1rem;
      font-weight: 900;
    }
  }

  h2 {
    font-size: clamp(40px, 3vw, 60px);
    color: ${(props) => props.$title2Color || '#303535'};
    margin-bottom: 12px;

    @media (max-width: 768px) {
      font-size: 2.2rem;
      font-weight: 900;
      letter-spacing: -0.4px;
    }
  }

  .description {
    font-size: clamp(20px, 1.5vw, 24px);
    color: #666;

    p {
      margin: 0;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      margin: 1rem 0;
      font-size: 1.4rem;
      color: ${theme.colors.gray200};
      font-weight: 400;
      line-height: 1.4;

      p {
        margin-bottom: 0.5rem;
      }
    }
  }

  .image-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 70%;
    max-width: 1200px;

    img {
      width: 45%;
      max-width: 500px;
      height: auto;
      object-fit: contain;
    }
  }

  @media (max-width: 768px) {
    .image-container {
      flex-direction: column;
      align-items: center;

      img {
        width: 80%;
        max-width: 300px;
      }
    }
  }
`

export default CommonContent
