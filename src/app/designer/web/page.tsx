'use client'
import CommonContent from '@/components/common/CommonContent'
import { Button } from '@/styles/CommonStyles'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import FavoriteModel from '@/components/FavoriteModelSection'
import FavoriteModelSection from '@/components/FavoriteModelSection'
import ReviewSection from '@/components/ReviewSection'
import PlanSection from '@/components/PlanSection'
import FooterSection from '@/components/common/FooterSection'

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
            <SubTitleText>단 하나 앱, 미몽</SubTitleText>
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

      {/* 네비게이션바 */}
      <Navigation>
        {navItems.map((item) => (
          <NavItem key={item} active={activeSection === item} onClick={() => scrollToSection(item)}>
            {item}
          </NavItem>
        ))}
      </Navigation>

      {/* 네이게이션 컨텐츠 영역 */}
      {navItems.map((item) => (
        <Section
          key={item}
          id={item}
          ref={(el) => {
            sectionRefs.current[item] = el
          }}
        >
          {item === '헤어모델 매칭' ? (
            <ContentSection>
              <MatchingContent style={{ margin: '150px 0' }}>
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
                          <MultiCircleIcon src="/assets/images/hairmodel/parts/multi-circle.svg" alt="Feature1" />
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
                          <CircleIcon src="/assets/images/hairmodel/parts/circle.svg" alt="Feature2" />
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
                          <CircleIcon src="/assets/images/hairmodel/parts/circle.svg" alt="Feature3" />
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
                  <FindHairModelPhoneImage src="/assets/images/hairmodel/find-hairmodel-web1.png" alt="Hair Model 1" />
                  <FindHairModelPhoneImage src="/assets/images/hairmodel/find-hairmodel-web2.png" alt="Hair Model 2" />
                  <FindHairModelPhoneImage src="/assets/images/hairmodel/find-hairmodel-web3.png" alt="Hair Model 3" />
                </ImageArea>
              </MatchingContent>
              <ThunderMatchingContent style={{ padding: '10% 10% 0 10%' }}>
                <TextArea>
                  <TextAreaInner style={{ marginTop: '10%' }}>
                    <MainTitle>
                      <span>02. 번개 매칭</span>
                      <h2>
                        급할 때는 번개매칭
                        <br />
                        번개 매칭으로 바로 찾기
                      </h2>
                    </MainTitle>
                    <TextDescription>시술하기로한 모델이 갑자기 취소되었나요?</TextDescription>
                    <TextDescription>급하게 모델이 필요한 경우,더 빠르게 매칭할 수 있는</TextDescription>
                    <TextDescription>모델 급구게시판을 이용해보세요.</TextDescription>
                    <TextDescription>더욱 빠른 매칭을 경험할 수 있어요.</TextDescription>
                  </TextAreaInner>
                </TextArea>
                <ImageArea>
                  <PhoneImage
                    width="50%"
                    src="/assets/images/hairmodel/thunder-matching-web1.png"
                    alt="Thunder Matching 1"
                  />
                  <PhoneImage
                    width="50%"
                    src="/assets/images/hairmodel/thunder-matching-web2.png"
                    alt="Thunder Matching 2"
                  />
                </ImageArea>
              </ThunderMatchingContent>
            </ContentSection>
          ) : item === '구인구직' ? (
            <ContentSection>
              <CommonContent
                title1="구인구직은 미몽으로"
                title2="면접 보는 시간도 아끼세요"
                description1="미몽 앱 안에서 원하는 매장으로"
                description2="바로바로 이력서를 전송하세요."
                images={['/assets/images/recruit/recruit1.png', '/assets/images/recruit/recruit2.png']}
                title2Color="#8276F5"
                ImageContainerStyle={{
                  marginTop: '50px'
                }}
              />
              <CommonContent
                title1="구인구직은 미몽으로"
                title2="내가 원하는 매장만 즉시 찾기"
                description1="미용인의 눈높에이 맞춘 상세한 필터 덕분에"
                description2="원하는 매장을 즉시 찾을 수 있어요!"
                images={['/assets/images/recruit/recruit3.png', '/assets/images/recruit/recruit4.png']}
                title2Color="#8276F5"
                backgroundColor="#F8F7FF"
              />
              <CommonContent
                title1="구인구직은 미몽으로"
                title2="내 주변 가까운 매장만 바로찾기"
                description1="위치 기준으로 근처 매장도"
                description2="빠르게 찾고 지원할 수 있어요!"
                images={['/assets/images/recruit/recruit5.png', '/assets/images/recruit/recruit6.png']}
                title2Color="#8276F5"
              />
              <CommonContent
                title1="구인구직은 미몽으로"
                title2="중요한 면접 일정 알림 받기"
                description1="바쁜 일정에도 중요한 면접 날짜를 잊지 않도록"
                description2="카카오톡 및 앱 푸시 알림으로 안내해 드려요!"
                images={['/assets/images/recruit/recruit7.png', '/assets/images/recruit/recruit8.png']}
                title2Color="#8276F5"
                backgroundColor="#F8F7FF"
              />
            </ContentSection>
          ) : item === '스페어' ? (
            <ContentSection>
              <CommonContent
                title1="스페어 구인공고도 미몽으로"
                title2="잠깐 필요한 스페어구도 바로"
                description1="성수기에 피룡한 스페어 구인"
                description2="바로 올리고 바로 구하세요!"
                images={['/assets/images/spare/spare1.png', '/assets/images/spare/spare2.png']}
                title2Color="#8276F5"
              />
            </ContentSection>
          ) : item === '교육' ? (
            <ContentSection>
              <CommonContent
                title1="디자이너 실력향상"
                title2="새로운 헤어트렌드와 기술 학습"
                description1="미용 아카데미 '캐미티드'와의 제휴 할인 기회를 제공"
                description2=""
                images={['/assets/images/education/education1.png', '/assets/images/education/education2.png']}
                title2Color="#8276F5"
              />
            </ContentSection>
          ) : (
            ''
          )}
        </Section>
      ))}

      {/* 인기있는모델 섹션 */}
      <FavoriteModelSection
        images={[
          '/assets/images/review/review1.png',
          '/assets/images/review/review2.png',
          '/assets/images/review/review3.png',
          '/assets/images/review/review4.png'
        ]}
        names={['조** 모델', '김** 모델', '이** 모델', '박** 모델']}
      />

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
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
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
`

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MatchingContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`

const ThunderMatchingContent = styled(MatchingContent)`
  background-color: #d1ccff;
  padding-top: 200px;
`

const TextArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`

const TextAreaInner = styled.div<{ padding?: string }>`
  padding: ${(props) => (props.padding ? props.padding : '0px 30px')};
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
    font-size: clamp(40px, 2vw, 52px);
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
    bottom: 28px; // 마지막 이콘 중앙까지
    width: 1px;
    height: 300px;
    background-image: url('/assets/images/hair-model/vertical-line.svg');
  }
`

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  // 화면에 따라 margin-bottom 조정

  @media (max-width: 1280px) {
    margin-bottom: 20px;
  }
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
  font-size: clamp(24px, 2vw, 32px);
  margin-top: 10px;
  margin-bottom: 10px;
`

const FeatureDescription = styled.p`
  font-size: clamp(20px, 1.5vw, 24px);
  color: #666;
`

const ImageArea = styled.div<{ padding?: string }>`
  flex: 1;
  display: flex;
  right: 0;
  justify-content: flex-end;
  gap: 20px;
  padding: ${(props) => (props.padding ? props.padding : '0')};

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: flex-end;
    gap: 15px;
    margin-top: 50px;
  }
`

const FindHairModelPhoneImage = styled.img`
  width: 35%;
  &:last-child {
    width: 28.5%;
    max-width: 260px;
  }
  max-width: 320px; // 최대 너비 설정
  height: auto;
  object-fit: contain;

  @media (max-width: 1024px) {
    max-width: 260px;
    &:last-child {
      max-width: 210px;
    }
  }

  @media (max-width: 768px) {
    width: 40%; // 모바일 화면에서의 너비

    &:last-child {
      margin-right: -20%; // 마지막 이미지 조정
    }
  }
`

const PhoneImage = styled.img`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

const TextDescription = styled.p`
  font-size: clamp(20px, 1.5vw, 24px);
  color: #666;
`
