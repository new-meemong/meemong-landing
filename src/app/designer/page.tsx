'use client'

import { DESIGNER_PLAN_DATA, DESIGNER_REVIEW_DATA } from '@/constants/data'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import { Button } from '@/styles/CommonStyles'
import CountDataSection from '@/components/sections/CountDataSection'
import FloatingButtonContainer from '@/components/common/FloatingButtonContainer'
import FloatingFormButton from '@/components/common/FloatingFormButton'
import FloatingKaKaoButton from '@/components/common/FloatingKaKaoButton'
import FooterSection from '@/components/common/FooterSection'
import { IMAGES } from '@/constants/images'
import Image from 'next/image'
import Loading from '@/components/common/Loading'
import NavigationMobileContents from '@/components/navigation/designer/NavigationMobileContents'
import NavigationWebContents from '@/components/navigation/designer/NavigationWebContents'
import PlanSection from '@/components/sections/PlanSection'
import PopularModelSection from '@/components/sections/PopularModelSection'
import ReviewSection from '@/components/sections/ReviewSection'
import styled from 'styled-components'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useRouter } from 'next/navigation'

export default function Designer() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('헤어모델 매칭')
  const navItems = useMemo(
    () => ['헤어모델 매칭', '구인구직', '스페어', '교육'],
    []
  )
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of navItems) {
        const element = sectionRefs.current[section]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
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
      const navHeight = isMobile ? 56 : 85
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const onClickModelPage = () => {
    router.push('/model')
  }

  if (isMobile === null) {
    return <Loading />
  }

  return (
    <>
      {/* 헤더 */}
      <Header>
        <HeaderInner>
          <LogoBox>
            <Image
              style={{ marginTop: 5 }}
              src="/icons/logo-web.svg"
              alt="logo"
              width={30}
              height={30}
            />
            <span>미몽 MEEMONG</span>
          </LogoBox>
          <Button onClick={onClickModelPage}>
            <span>헤어모델 페이지 가기</span>
            <Image
              width={9}
              height={12}
              src={'/icons/chevron/right-chevron.svg'}
              alt="arrow"
            />
          </Button>
        </HeaderInner>
      </Header>

      {/* 메인 커버 */}
      <MainCover>
        {isMobile ? (
          <MobileCoverImage src={IMAGES.DESIGNER.COVER.MOBILE} alt="cover-m" />
        ) : (
          <Image
            src={IMAGES.DESIGNER.COVER.WEB}
            alt="cover"
            width={1920}
            height={1080}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
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
              href="https://apps.apple.com/kr/app/%EB%AF%B8%EB%AA%BD-%EB%8B%B9%EC%8B%A0%EB%8F%84-%ED%97%A4%EC%96%B4%EB%AA%A8%EB%8D%B8/id1572588554?l=en-GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/app-store.svg"
                alt="app-store"
                width={isMobile ? 120 : 200}
                height={isMobile ? 38 : 60}
              />
            </LinkButton>
            <LinkButton
              href="https://play.google.com/store/apps/details?id=com.meemong.second&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/google-play.svg"
                alt="google-play"
                width={isMobile ? 120 : 200}
                height={isMobile ? 38 : 60}
              />
            </LinkButton>
          </ButtonGroup>
          <ModelPageButton onClick={onClickModelPage}>
            <span>헤어모델 전용 페이지 가기</span>
            <Image
              width={9}
              height={12}
              src="/icons/chevron/right-chevron.svg"
              alt="arrow"
            />
          </ModelPageButton>
        </CoverContent>
      </MainCover>

      {/* API 데이터 영역 */}
      <CountDataSection />

      {/* 네비게이션바 */}
      <Navigation>
        {navItems.map((item) => (
          <NavItem
            key={item}
            $active={activeSection === item}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </NavItem>
        ))}
      </Navigation>

      {/* 네이게이션 컨텐츠 영역 */}
      {isMobile ? (
        <NavigationMobileContents
          navItems={navItems}
          sectionRefs={sectionRefs}
        />
      ) : (
        <NavigationWebContents navItems={navItems} sectionRefs={sectionRefs} />
      )}

      {/* 인기있는모델 섹션 */}
      <PopularModelSection
        names={['조** 모델', '김** 모델', '이** ', '박** 모델']}
        descriptions={[
          '무료 모델 | 이번달 인기',
          '무료 모델 | 이번달 인기',
          '무료 모델 | 이번달 인기',
          '무료 모델 | 이번달 인기',
        ]}
        images={IMAGES.DESIGNER.POPULAR_MODEL}
      />

      {/* 리뷰 섹션 */}
      <ReviewSection reviewData={DESIGNER_REVIEW_DATA} />

      {/* 플랜안내 섹션 */}
      <PlanSection
        planData={DESIGNER_PLAN_DATA}
        description="헤어디자이너라면 지금 무료로 시작하세요."
        isDesigner={true}
      />

      {/* Footer 섹션 */}
      <FooterSection />

      {/* 플로팅 버튼 영역 */}
      <FloatingButtonContainer>
        <FloatingKaKaoButton link="https://pf.kakao.com/_NtWKG" />
        <FloatingFormButton link="https://www.meemong-open.com/" />
      </FloatingButtonContainer>
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

  @media (max-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`

const MobileCoverImage = styled.img`
  width: 100%;
  height: auto; // 자동 높이로 변경
  display: block; // 추가

  @media (max-width: 768px) {
    margin-top: -60%; // 상단 여백 조정 (필요에 따라 값 조절)
  }
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
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    top: 47%; // 컨텐츠 위치 조정 (필요에 따라 값 조절)
  }
`

const CoverTitle = styled.h1`
  font-size: clamp(24px, 2.5vw, 40px);
  margin-bottom: 1rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
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
    font-size: 1.8rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const ModelPageButton = styled(Button)`
  font-size: clamp(24px, 2vw, 33px);
  width: 396px;
  height: 60px;
  background-color: white;
  color: black;
  margin-top: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 263px;
    height: 44px;
    font-size: 1.2rem;
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

  @media (max-width: 768px) {
    height: 56px;
    padding: 0 1.5rem;
    justify-content: space-between;
  }
`

const NavItem = styled.a<{ $active: boolean }>`
  color: white;
  font-size: 1.7rem;
  padding: 1rem 1rem;
  margin: 10px 20px;
  cursor: pointer;
  font-weight: ${(props) => (props.$active ? '900' : '500')};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 5px 10px;
    padding: 0;
    text-align: center;
  }
`
