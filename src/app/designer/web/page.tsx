'use client'
import { Button } from '@/styles/CommonStyles'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

export default function DesignerWeb() {
  const [activeSection, setActiveSection] = useState('헤어모델 매칭')
  const navItems = ['헤어모델 매칭', '구인구직', '스페어', '교육']
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of navItems) {
        const element = sectionRefs.current[section]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (section: string) => {
    const element = sectionRefs.current[section]
    if (element) {
      const navHeight = 120 // Navigation height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Header */}
      <Header>
        <HeaderInner>
          <LogoBox>
            <Image src="/assets/logo/logo-web.svg" alt="logo" width={30} height={30} />
            <span>미몽 MEEMONG</span>
          </LogoBox>
          <Button>
            <span>헤어모델 페이지 가기</span>
            <Image width={9} height={12} src="/assets/chevron/right-chevron.svg" alt="arrow" />
          </Button>
        </HeaderInner>
      </Header>

      {/* 메인 커버 */}
      <MainCover>
        <Image src="/assets/images/cover.png" alt="cover" layout="responsive" width={1920} height={1080} priority />
        <CoverContent>
          <CoverTitle>헤어분야에서 가장 빠르게 성장하고 있는 앱!</CoverTitle>
          <CoverSubtitle>
            <SubTitleText>헤어디자이너의</SubTitleText>
            <SubTitleText>모델 구인부터 커리어를 위한</SubTitleText>
            <SubTitleText>단 하나의 앱, 미몽</SubTitleText>
          </CoverSubtitle>
          <ButtonGroup>
            <LinkButton
              href="https://play.google.com/store/apps/details?id=com.meemong.second&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/images/app-store.svg" alt="app-store" width={200} height={60} />
            </LinkButton>
            <LinkButton
              href="https://apps.apple.com/kr/app/%EB%AF%B8%EB%AA%BD-%EB%8B%B9%EC%8B%A0%EB%8F%84-%ED%97%A4%EC%96%B4%EB%AA%A8%EB%8D%B8/id1572588554?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/images/google-play.svg" alt="google-play" width={200} height={60} />
            </LinkButton>
          </ButtonGroup>
          <ModelPageButton>
            <span>헤어모델 전용 페이지 가기</span>
            <Image width={9} height={12} src="/assets/chevron/right-chevron.svg" alt="arrow" />
          </ModelPageButton>
        </CoverContent>
      </MainCover>

      {/* 데이터 영역 */}
      <DataSection>
        <Date>2024. 02. 24 14:00:13</Date>
        <DataContainer>
          <DataItem>
            <DataKey>헤어모델</DataKey>
            <DataValue>1,000 명</DataValue>
          </DataItem>
          <DataItem>
            <DataKey>헤어디자이너</DataKey>
            <DataValue>1,000 명</DataValue>
          </DataItem>
          <DataItem>
            <DataKey>누적 초상권 계약수</DataKey>
            <DataValue>1,000 건</DataValue>
          </DataItem>
          <DataItem>
            <DataKey>회원수</DataKey>
            <DataValue>1,000 명</DataValue>
          </DataItem>
        </DataContainer>
      </DataSection>

      {/* Navigation */}
      <Navigation>
        {navItems.map((item) => (
          <NavItem key={item} active={activeSection === item} onClick={() => scrollToSection(item)}>
            {item}
          </NavItem>
        ))}
      </Navigation>

      {/* Sections */}
      {navItems.map((item) => (
        <Section
          key={item}
          id={item}
          ref={(el) => {
            sectionRefs.current[item] = el
          }}
        >
          {item === '헤어모델 매칭' ? (
            <HairModelMatchingSection>
              <TextArea>
                <TextAreaInner>
                  <MainTitle>
                    <span>01. 헤어모델 찾기</span>
                    <h2>
                      바쁜 헤어디자이너를 위한
                      <br />
                      빠르고 안전한 모델 찾기
                    </h2>
                  </MainTitle>
                  <FeatureList>
                    <FeatureItem>
                      <IconWrapper>
                        <MultiCircleIcon src="/assets/images/hair-model/multi-circle.svg" alt="Feature1" />
                      </IconWrapper>
                      <FeatureContent>
                        <FeatureTitle>5분만에 원하는 모델 찾기</FeatureTitle>
                        <FeatureDescription>
                          페이, 거리, 성별, 국적부터 원하는 헤어, 얼굴 시술까지
                          <br />
                          내가 필요로 하는 모델들을 서칭해보세요.
                        </FeatureDescription>
                      </FeatureContent>
                    </FeatureItem>
                    <FeatureItem>
                      <IconWrapper>
                        <CircleIcon src="/assets/images/hair-model/circle.svg" alt="Feature2" />
                      </IconWrapper>
                      <FeatureContent>
                        <FeatureTitle>즉시 채팅으로 시술 제안</FeatureTitle>
                        <FeatureDescription>
                          원하는 모델에게 견적서를 보내고
                          <br />
                          채팅을 통해 견적서 내 일시, 페이 등을 조율해보세요.
                        </FeatureDescription>
                      </FeatureContent>
                    </FeatureItem>
                    <FeatureItem>
                      <IconWrapper>
                        <CircleIcon src="/assets/images/hair-model/circle.svg" alt="Feature3" />
                      </IconWrapper>
                      <FeatureContent>
                        <FeatureTitle>앱에서 바로 초상권 계약</FeatureTitle>
                        <FeatureDescription>
                          초상권 계약 내 모델 서명까지 완료시,
                          <br />
                          시술 내역 및 결과물을 포트폴리오에서 모아서 관리할 수 있어요.
                        </FeatureDescription>
                      </FeatureContent>
                    </FeatureItem>
                  </FeatureList>
                </TextAreaInner>
              </TextArea>
              <ImageArea>
                <MobileImage src="/assets/images/hair-model/hairmodel1.png" alt="Hair Model 1" />
                <MobileImage src="/assets/images/hair-model/hairmodel2.png" alt="Hair Model 2" />
                <MobileImage src="/assets/images/hair-model/hairmodel3.png" alt="Hair Model 3" />
              </ImageArea>
            </HairModelMatchingSection>
          ) : (
            `${item} 섹션`
          )}
        </Section>
      ))}
    </>
  )
}

const Header = styled.header`
  background-color: #fff;
  // Remove fixed positioning
`

const HeaderInner = styled.div`
  max-width: 1200px;
  height: 110px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  span {
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    font-weight: bold;
    color: #333;
  }
`

const MainCover = styled.div`
  width: 100%;
  position: relative;
`

const CoverContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CoverTitle = styled.h1`
  font-size: clamp(24px, 2.5vw, 40px);
  margin-bottom: 1rem;
  white-space: nowrap;
`

const CoverSubtitle = styled.span`
  font-size: clamp(36px, 5vw, 72px);
  margin-bottom: 2rem;
  white-space: pre-line;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubTitleText = styled.p`
  font-size: clamp(36px, 5vw, 72px);
  white-space: nowrap;
  line-height: 1.2;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const AppStoreButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const ModelPageButton = styled(Button)`
  background-color: white;
  color: black;
  margin-top: 60px;
`

const LinkButton = styled.a`
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
`

const DataSection = styled.section`
  /* background-color: #fff; */
  padding: 50px 20%;
`

const Date = styled.time`
  color: rgba(0, 0, 0, 0.3);
  font-size: clamp(14px, 1.5vw, 23px);
`

const DataContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  /* gap: 20px; */
  flex-wrap: wrap;
`

const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DataKey = styled.span`
  font-weight: bold;
  font-size: clamp(20px, 2.08vw, 40px);
  margin-bottom: 20px;
  color: #000;
`

const DataValue = styled.span`
  font-size: clamp(20px, 1.67vw, 32px);
  color: #000;
`

const Navigation = styled.nav`
  position: sticky;
  top: 0; // Changed from top: 110px
  background-color: black;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`

const NavItem = styled.a<{ active: boolean }>`
  color: white;
  font-size: 40px;
  margin: 0 20px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-bottom: 1px solid #ccc;
`

const HairModelMatchingSection = styled.div`
  padding: 150px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const TextArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  /* display: flex;
  flex-direction: column;
  align-items: flex-end; */
`

const TextAreaInner = styled.div`
  /* width: 620px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const MainTitle = styled.div`
  margin-bottom: 40px;
  color: #303535;
  font-weight: bold;
  span {
    font-size: clamp(24px, 2vw, 40px);
  }

  h2 {
    font-size: clamp(32px, 2vw, 52px);
    margin-top: 10px;
  }
`

const FeatureList = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 28px; // 아이콘의 중앙에 맞추기 위해 조정
    top: 56px; // 첫 번째 아이콘 아래부터 시작
    bottom: 28px; // 마지막 아이콘 중앙까지
    width: 1px;
    height: 300px;
    background-image: url('/assets/images/hair-model/vertical-line.svg');
  }
`

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 50px;
`

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

const MultiCircleIcon = styled.img`
  width: 56px;
  height: 56px;
`

const CircleIcon = styled.img`
  width: 14px;
  height: 14px;
`

const FeatureContent = styled.div``

const FeatureTitle = styled.h3`
  font-size: clamp(24px, 2.5vw, 32px);
  margin-bottom: 10px;
`

const FeatureDescription = styled.p`
  font-size: clamp(20px, 1.5vw, 24px);
  color: #666;
`

const ImageArea = styled.div`
  flex: 1;
  display: flex;
  right: 0;
  justify-content: flex-end;
  gap: 20px;
`

const MobileImage = styled.img`
  width: 40%;
  &:last-child {
    width: 32.5%;
    max-width: 260px;
  }
  max-width: 320px; // 최대 너비 설정
  height: auto;
  object-fit: contain;

  @media (max-width: 1600px) {
    width: 33%; // 화면이 작아질 때 너비를 조정
    &:last-child {
      width: 26.5%;
      max-width: 212px;
    }
  }

  @media (max-width: 768px) {
    width: 40%; // 모바일 화면에서의 너비

    &:last-child {
      margin-right: -20%; // 마지막 이미지 조정
    }
  }
`
