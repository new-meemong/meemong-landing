import styled from 'styled-components'

interface CommonContentProps {
  title1: string
  title2: string
  description1: string
  description2: string
  images: string[]
  title2Color?: string
  backgroundColor?: string
  ImageContainerStyle?: React.CSSProperties
}

const CommonContent = ({
  title1,
  title2,
  description1,
  description2,
  images,
  title2Color,
  backgroundColor,
  ImageContainerStyle
}: CommonContentProps) => {
  return (
    <StyledCommonContent title2Color={title2Color} backgroundColor={backgroundColor}>
      <div className="title-container">
        <h1>{title1}</h1>
        <h2>{title2}</h2>
      </div>
      <div className="description">
        <p>{description1}</p>
        <p>{description2}</p>
      </div>
      <div className="image-container" style={ImageContainerStyle}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </StyledCommonContent>
  )
}

const StyledCommonContent = styled.div<{ title2Color?: string; backgroundColor?: string }>`
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 100px 10% 0;
  text-align: center;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  .title-container {
  }

  h1 {
    font-size: clamp(40px, 3vw, 60px);
    color: #303535;
  }

  h2 {
    font-size: clamp(40px, 3vw, 60px);
    color: ${(props) => props.title2Color || '#303535'};
    margin-bottom: 12px;
  }

  .description {
    font-size: clamp(20px, 1.5vw, 24px);
    color: #666;
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
