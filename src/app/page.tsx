'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Main() {
  const router = useRouter()
  const isMobile = useIsMobile()

  return (
    <Container>
      <Header>
        <LogoBox>
          <Image src="/icons/logo-web.svg" alt="logo" width={20} height={20} />
          <span>미몽 MEEMONG</span>
        </LogoBox>
      </Header>

      <MainContent>
        <DesignerSection onClick={() => router.push('/designer')}>
          <ContentWrapper>
            <Title>
              헤어모델 매칭,
              <br />
              미용 구인구직까지
            </Title>
            <Description>
              헤어디자이너의 모델 구인부터
              <br />
              커리어를 위한 단 하나의 앱, 미몽
            </Description>
            <GoButton>
              <span>GO</span>
              <img
                src="/icons/chevron/right-chevron-white.svg"
                alt="arrow-right"
              />
            </GoButton>
          </ContentWrapper>
          <Overlay className="overlay">
            <OverlayButton>
              헤어디자이너 전용페이지로 이동하기
              <img
                src="/icons/chevron/right-chevron-white.svg"
                alt="arrow-right"
              />
            </OverlayButton>
          </Overlay>
        </DesignerSection>

        <ModelSection onClick={() => router.push('/model')}>
          <ContentWrapper>
            <Title>
              누구나 헤어모델,
              <br />
              인생머리하자
            </Title>
            <Description>
              평범한 일반인도 손쉽게 헤어모델이 되어
              <br />
              헤어디자이너와 함께 만든 인생사진까지!
            </Description>
            <GoButton>
              <span>GO</span>
              <img
                src="/icons/chevron/right-chevron-white.svg"
                alt="arrow-right"
              />
            </GoButton>
          </ContentWrapper>
          <Overlay className="overlay model">
            <OverlayButton className="model">
              모델 전용페이지로 이동하기
              <img
                src="/icons/chevron/right-chevron-white.svg"
                alt="arrow-right"
              />
            </OverlayButton>
          </Overlay>
        </ModelSection>
      </MainContent>

      <Footer>
        <FooterContent>
          <FooterText>스토어에서 다운 받아 보세요!</FooterText>
          <StoreButtons>
            <StoreButton
              href="https://play.google.com/store/apps/details?id=com.meemong.second"
              target="_blank"
            >
              <Image
                src="/icons/google-play.svg"
                alt="Google Play"
                width={120}
                height={36}
              />
            </StoreButton>
            <StoreButton
              href="https://apps.apple.com/kr/app/미-당신도-헤어모델/id1572588554"
              target="_blank"
            >
              <Image
                src="/icons/app-store.svg"
                alt="App Store"
                width={120}
                height={36}
              />
            </StoreButton>
          </StoreButtons>
        </FooterContent>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  background: white;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 10%;

  @media (max-width: 768px) {
    height: auto;
    padding: 0.7rem 5%;
  }
`

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  span {
    margin-bottom: 2px;
    font-size: 0.9rem;
    font-weight: 700;
  }
`

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
  width: 100%;
  opacity: 1;
  transition: opacity 0.3s ease;
`

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 3rem;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`

const Description = styled.p`
  font-size: 2.2rem;
  margin-bottom: 3rem;
  white-space: pre-line;
  font-weight: 700;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`

const Section = styled.section`
  flex: 1;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 50vh;
  }

  &:hover {
    .overlay {
      visibility: visible;
      opacity: 1;
    }

    ${ContentWrapper} {
      opacity: 0.3;
      transition: opacity 0.3s ease;
    }
  }
`

const DesignerSection = styled(Section)`
  background-image: url('/images/main/main-cover-designer-web.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-image: url('/images/main/main-cover-designer-mobile.png');
    padding: 20% 5%;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      181deg,
      rgba(93, 84, 183, 0.95) 25%,
      rgba(217, 217, 217, 0.5) 146%,
      rgba(130, 118, 245, 0.85) 146%
    );
    z-index: 0;
  }
`

const ModelSection = styled(Section)`
  background-image: url('/images/main/main-cover-model-web.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-image: url('/images/main/main-cover-model-mobile.png');
    order: -1;
    padding: 20% 5%;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      181deg,
      rgba(0, 145, 145, 0.95) 0.7%,
      rgba(217, 217, 217, 0) 146%,
      rgba(255, 255, 255, 0.85) 146%
    );
    z-index: 0;
  }
`

const GoButton = styled.button`
  background: none;
  border: 3px solid #fff;
  border-radius: 40px;
  color: white;
  font-size: 1.7rem;
  cursor: pointer;
  padding: 1rem 0.5rem;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
  gap: 0.2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem 0.5rem;
    min-width: 100px;
    border-width: 3px;
  }

  img {
    margin-left: 0.5rem;
    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.81);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 2;
`

const OverlayButton = styled.button`
  background: none;
  border: 10px solid
    ${(props) => (props.className === 'model' ? '#CEE' : '#d1ccff')};
  color: ${(props) => (props.className === 'model' ? '#CEE' : '#d1ccff')};
  padding: 1.5rem;
  border-radius: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem;
    border-width: 5px;
  }

  &:hover {
    background: white;
    color: black;

    img {
      filter: brightness(0);
    }
  }

  img {
    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }
`

const Footer = styled.footer`
  background: black;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background: white;
  }
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 15px;
  }
`

const FooterText = styled.p`
  color: white;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`

const StoreButtons = styled.div`
  display: flex;
  gap: 15px;
`

const StoreButton = styled.a`
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }
`
