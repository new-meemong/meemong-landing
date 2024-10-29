'use client'

import { Button } from '@/styles/CommonStyles'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import CountDataSection from '@/components/sections/CountDataSection'
import { useIsMobile } from '@/hooks/useIsMobile'
import NavigationWebContents from '@/components/navigation/model/NavigationWebContents'
import NavigationMobileContents from '@/components/navigation/model/NavigationMobileContents'
import PopularModelSection from '@/components/sections/PopularModelSection'
import ReviewSection from '@/components/sections/ReviewSection'
import PlanSection from '@/components/sections/PlanSection'
import FooterSection from '@/components/common/FooterSection'
import FloatingButtons from '@/components/common/FloatingButtons'
import { IMAGES } from '@/constants/images'
import Loading from '@/components/common/Loading'
import { useRouter } from 'next/navigation'
import { theme } from '@/constants/theme'
import { MODEL_PLAN_DATA, MODEL_REVIEW_DATA } from '@/constants/data'

export default function Designer() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('헤어모델')
  const navItems = ['헤어모델', '모델 지원', '모델 규칙', '번개매칭', '미용 알바하기']
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
      const navHeight = 120
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const onClickDesignerPage = () => {
    router.push('/designer')
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
            <Image style={{ marginTop: 5 }} src="/icons/logo-web.svg" alt="logo" width={30} height={30} />
            <span>미몽 MEEMONG</span>
          </LogoBox>
          <Button onClick={onClickDesignerPage}>
            <span>헤어디자이너 페이지 가기</span>
            <Image width={9} height={12} src={'/icons/chevron/right-chevron.svg'} alt="arrow" />
          </Button>
        </HeaderInner>
      </Header>

      {/* 메인 커버 */}
      <MainCover>
        {isMobile ? (
          <MobileCoverImage src={IMAGES.MODEL.COVER.MOBILE} alt="cover-mobile" />
        ) : (
          <Image
            src={IMAGES.MODEL.COVER.WEB}
            alt="cover"
            width={1920}
            height={1080}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
            priority
          />
        )}
        <CoverContent>
          <CoverTitle>헤어분야에서 가장 빠르게 성장하고 있는 앱!</CoverTitle>
          <CoverSubtitle>
            <SubTitleText>누구나 헤어모델이 되고</SubTitleText>
            <SubTitleText>무료로 헤어시술을 받는</SubTitleText>
            <SubTitleText>모델 매칭 앱, 미몽</SubTitleText>
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
          {!isMobile && (
            <DesignerPageButton onClick={onClickDesignerPage}>
              <p>
                <Image width={32} height={32} src="/icons/bulb.png" alt="bulb" />
                <span>모델이 아니라, 헤어디자이너이신가요?</span>
              </p>
              <div>
                <span>헤어디자이너 전용 페이지 이동하기</span>
                <Image width={9} height={16} src="/icons/chevron/right-chevron-white.svg" alt="arrow" />
              </div>
            </DesignerPageButton>
          )}
        </CoverContent>
      </MainCover>
      {isMobile && (
        <MobileDesignerPageButtonWrapper>
          <MobileDesignerPageButtonText>
            <Image width={33} height={38} src="/icons/bulb.png" alt="bulb" />
            <span>모델이 아니라, 헤어디자이너이신가요?</span>
          </MobileDesignerPageButtonText>
          <MobileDesignerPageButton onClick={onClickDesignerPage}>
            <p>
              <span>헤어디자이너</span>
              <span>전용페이지로 이동하기</span>
            </p>
            <Image width={16} height={40} src="/icons/chevron/right-chevron-long-white.svg" alt="arrow" />
          </MobileDesignerPageButton>
        </MobileDesignerPageButtonWrapper>
      )}

      {/* API 데이터 영역 */}
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
      <PopularModelSection
        names={['강남 아X 디자이너', '분당 송X 디자이너', '잠실 규X 디자이너', '청담 이X 디자이너']}
        images={IMAGES.MODEL.POPULAR_DESIGNER}
        descriptions={['파마 | 클리닉', '컷트 | 염색', '매직 | 드라이', '염색 | 탈색']}
        backgroundColor={theme.colors.team200}
        isDesigner={false}
      />

      {/* 리뷰 섹션 */}
      <ReviewSection reviewData={MODEL_REVIEW_DATA} color={theme.colors.team300} />

      {/* 플랜안내 섹션 */}
      <PlanSection planData={MODEL_PLAN_DATA} isDesigner={false} />

      {/* Footer 섹션 */}
      <FooterSection />

      {/* 플로팅 버튼 영역 */}
      <FloatingButtons />
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
  line-height: 0;

  @media (max-width: 768px) {
    height: auto;
    display: flex;
  }
`

const MobileCoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const CoverSubtitle = styled.span`
  font-size: clamp(36px, 5vw, 72px);
  white-space: pre-line;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
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

const DesignerPageButton = styled.button`
  width: 591px;
  height: 132px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: clamp(24px, 2vw, 33px);
  background-color: ${theme.colors.black};
  color: black;
  margin-top: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  gap: 1.3rem;
  border: 1.5px solid ${theme.colors.gray400};
  cursor: pointer;

  p {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      color: ${theme.colors.white};
      font-size: 1.1rem;
      font-weight: 400;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      margin-bottom: 5px;
    }
  }

  span {
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 700;
  }
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`

const MobileDesignerPageButtonWrapper = styled.div`
  // button을 div로 변경
  width: 100%;
  height: 292px;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px;
  justify-content: center;
  gap: 1.2rem;
`

const MobileDesignerPageButtonText = styled.p`
  width: 100%;
  border: none;
  background-color: transparent;
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  span {
    font-size: 1.1rem;
    font-weight: 900;
  }
`

const MobileDesignerPageButton = styled.button`
  color: ${theme.colors.white};
  font-size: 1.5rem;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 800;
  border: 1px solid ${theme.colors.white};
  gap: 1rem;
  padding: 1rem 0.6rem;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
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
    height: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 10px;
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
    text-align: center;

    &:nth-child(1) {
      grid-row: 1;
      grid-column: 1 / -1;
    }
  }
`
