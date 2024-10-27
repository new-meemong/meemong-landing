'use client'

import { Button } from '@/styles/CommonStyles'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import CountDataSection from '@/components/CountDataSection'
import { useIsMobile } from '@/hooks/useIsMobile'
import NavigationContentsWeb from '@/components/navigation/NavigationWebContents'
import NavigationWebContents from '@/components/navigation/NavigationWebContents'
import NavigationMobileContents from '@/components/navigation/NavigationMobileContents'
import FavoriteModelSection from '@/components/PopularModelSection'
import PopularModelSection from '@/components/PopularModelSection'
import { PopularModelImages } from '@/common/images'
import ReviewSection from '@/components/ReviewSection'
import PlanSection from '@/components/PlanSection'
import FooterSection from '@/components/common/FooterSection'

export default function DesignerWeb() {
  const [activeSection, setActiveSection] = useState('헤어모델 매칭')
  const navItems = ['헤어모델 매칭', '구인구직', '스페어', '교육']
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const isMobile = useIsMobile()

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
            <Image style={{ marginTop: 5 }} src="/assets/logo/logo-web.svg" alt="logo" width={30} height={30} />
            <span>미몽 MEEMONG</span>
          </LogoBox>
          <Button>
            <span>헤어모델 페이지 가기</span>
            <Image width={9} height={12} src={'/assets/chevron/right-chevron.svg'} alt="arrow" />
          </Button>
        </HeaderInner>
      </Header>

      {/* 메인 커버 */}
      <MainCover>
        {isMobile ? (
          <MobileCoverImage src="/assets/images/cover-m.png" alt="cover-m" />
        ) : (
          <Image
            src={'/assets/images/cover.png'}
            alt="cover"
            layout="responsive"
            width={1920}
            height={1080}
            style={{ objectFit: 'cover' }}
            priority
          />
        )}
        <CoverContent>
          <CoverTitle>헤어분야에서 가장 빠르게 성장하고 있는 앱!</CoverTitle>
          <CoverSubtitle>
            <SubTitleText>헤어디자이너의</SubTitleText>
            <SubTitleText>모델 구인부터 커리어를 위한</SubTitleText>
            <SubTitleText>단 하나 앱, 미몽</SubTitleText>
          </CoverSubtitle>
          <ButtonGroup>
            <LinkButton
              href="https://play.google.com/store/apps/details?id=com.meemong.second&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/app-store.svg"
                alt="app-store"
                width={isMobile ? 120 : 200}
                height={isMobile ? 38 : 60}
              />
            </LinkButton>
            <LinkButton
              href="https://apps.apple.com/kr/app/%EB%AF%B8%EB%AA%BD-%EB%8B%B9%EC%8B%A0%EB%8F%84-%ED%97%A4%EC%96%B4%EB%AA%A8%EB%8D%B8/id1572588554?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/google-play.svg"
                alt="google-play"
                width={isMobile ? 120 : 200}
                height={isMobile ? 38 : 60}
              />
            </LinkButton>
          </ButtonGroup>
          <ModelPageButton>
            <span>헤어모델 전용 페이지 가기</span>
            <Image width={9} height={12} src="/assets/chevron/right-chevron.svg" alt="arrow" />
          </ModelPageButton>
        </CoverContent>
      </MainCover>

      {/* 데이터 영역 */}
      <CountDataSection />

      {/* 네비게이션바 */}
      <Navigation>
        {navItems.map((item) => (
          <NavItem key={item} $active={activeSection === item} onClick={() => scrollToSection(item)}>
            {item}
          </NavItem>
        ))}
      </Navigation>

      {/* 네이게이션 컨텐츠 영역 */}
      {isMobile ? (
        <NavigationMobileContents navItems={navItems} sectionRefs={sectionRefs} />
      ) : (
        <NavigationWebContents navItems={navItems} sectionRefs={sectionRefs} />
      )}

      {/* 인기있는모델 섹션 */}
      <PopularModelSection images={PopularModelImages} names={['조** 모델', '김** 모델', '이** ', '박** 모델']} />

      {/* 리뷰 섹션 */}
      <ReviewSection />

      {/* 플랜안내 섹션 */}
      <PlanSection />

      {/* Footer 섹션 */}
      <FooterSection />
    </>
  )
}

const Header = styled.header`
  background-color: #fff;
`

const HeaderInner = styled.div`
  max-width: 1200px;
  height: 110px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 60px;
  }
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

  @media (max-width: 768px) {
    gap: 3px;
  }
`

const MainCover = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`

const MobileCoverImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const CoverContent = styled.div`
  position: absolute;
  top: 50%;
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

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
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

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const ModelPageButton = styled(Button)`
  font-size: 1.2rem;
  width: 396px;
  height: 60px;
  background-color: white;
  color: black;
  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 263px;
    height: 44px;
  }
`

const LinkButton = styled.a`
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 128px;
    height: 38px;
  }

  &:hover {
    transform: scale(1.05);
  }
`

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 10px 0;

  @media (max-width: 768px) {
    height: 150px;
    flex-wrap: wrap;
  }
`

const NavItem = styled.a<{ $active: boolean }>`
  color: white;
  font-size: 2rem;
  padding: 1rem 1rem;
  margin: 10px 20px;
  cursor: pointer;
  font-weight: ${(props) => (props.$active ? '900' : '500')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin: 5px 10px;
    padding: 0;
    flex-basis: 40%; // This will make two items per row
    text-align: center;
  }
`
