import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { theme } from '@/constants/theme'
import CommonContent from '../../common/CommonContent'

import { CarouselWrapper } from '@/styles/CommonStyles'
import { IMAGES } from '@/constants/images'

interface NavigationMobileContentsProps {
  navItems: string[]
  sectionRefs: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null
  }>
}

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000
}

const NavigationMobileContents = ({ navItems, sectionRefs }: NavigationMobileContentsProps) => {
  return (
    <>
      {navItems.map((item) => (
        <Section
          key={item}
          ref={(el) => {
            sectionRefs.current[item] = el as HTMLDivElement
          }}
        >
          {item === '헤어모델 매칭' ? (
            <FeatureSection>
              <SectionInner>
                <h2>1. 헤어모델 매칭</h2>
                <h1>바쁜 헤어디자이너를 위한</h1>
                <h1>빠르고 안전한 모델 찾기</h1>
                <CarouselWrapper>
                  <Slider {...carouselSettings}>
                    {IMAGES.DESIGNER.HAIR_MODEL.MOBILE.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`Hair model ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </CarouselWrapper>
              </SectionInner>

              {/* 헤어모델 매칭 섹션 */}
              <FeatureList>
                <FeatureItem>
                  <IconWrapper>
                    <MultiCircleIcon src="/icons/multi-circle.svg" alt="Feature1" />
                  </IconWrapper>
                  <FeatureContent>
                    <FeatureTitle>5분만에 원하는 모델 찾기</FeatureTitle>
                    <FeatureDescription>
                      페이, 거리, 성별, 국적부터 원하는 헤어, 얼굴 시술까지 내가 필요로 하는 모델들을 서칭해보세요.
                    </FeatureDescription>
                  </FeatureContent>
                </FeatureItem>
                <FeatureItem>
                  <IconWrapper>
                    <CircleIcon src="/icons/circle.svg" alt="Feature2" />
                  </IconWrapper>
                  <FeatureContent>
                    <FeatureTitle>즉시 채팅으로 시술 제안</FeatureTitle>
                    <FeatureDescription>
                      원하는 모델에게 견적서를 보내고 채팅을 통해 견적서 내 일시, 페이 등을 조율해보세요.
                    </FeatureDescription>
                  </FeatureContent>
                </FeatureItem>
                <FeatureItem>
                  <IconWrapper>
                    <CircleIcon src="/icons/circle.svg" alt="Feature3" />
                  </IconWrapper>
                  <FeatureContent>
                    <FeatureTitle>앱에서 바로 초상권 계약</FeatureTitle>
                    <FeatureDescription>
                      초상권 계약 내 모델 서명까지 완료시, 시술 내역 및 결과물을 포트폴리오에서 모아서 관리할 수 있어요.
                    </FeatureDescription>
                  </FeatureContent>
                </FeatureItem>
              </FeatureList>

              <SectionInner $backgroundColor={theme.colors.violet}>
                <h2>2. 번개 매칭</h2>
                <h1>급할 때는 번개매칭</h1>
                <h1>번개 매칭으로 바로 찾기</h1>
                <DescriptionBox>
                  <Description>시술하기로한 모델이 갑자기 취소되었나요?</Description>
                  <Description>
                    급하게 모델이 필요한 경우, 더 빠르게 매칭 할 수 있는 모델 급구게시판을 이용해보세요.
                  </Description>
                  <Description>더욱 빠른 매칭을 경험할 수 있어요.</Description>
                </DescriptionBox>
                <CarouselWrapper $dotcolor={theme.colors.white}>
                  <Slider {...carouselSettings}>
                    {IMAGES.DESIGNER.THUNDER_MATCHING.MOBILE.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`Hair model ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </CarouselWrapper>
              </SectionInner>
            </FeatureSection>
          ) : item === '구인구직' ? (
            <FeatureSection>
              <CommonContent
                title1="구인구직은 미몽에서"
                title2="면접 보는 시간도\n아끼세요"
                title2Color={theme.colors.primary}
                description1="미몽 앱 안에서 원하는 매장으로"
                description2="바로바로 이력서를 전송하세요."
                images={IMAGES.DESIGNER.RECRUIT.MOBILE.slice(0, 2)}
                backgroundColor={theme.colors.violet100}
              />
              <CommonContent
                title1="구인구직은 미몽으로"
                title2="내가 원하는 매장만 즉시찾기"
                title2Color={theme.colors.primary}
                description1="미용인의 눈높이에 맞춘"
                description2="상세한 필터 덕분에 \n 원하는 매장을 즉시 찾을 수 있어요!"
                images={IMAGES.DESIGNER.RECRUIT.MOBILE.slice(2, 4)}
                backgroundColor={theme.colors.violet100}
              />
              <CommonContent
                title1="구인구직은 미몽으로"
                title2="내 주변 가까운 \n 매장만 바로찾기"
                title2Color={theme.colors.primary}
                description1="위치 기준으로 근처 매장도"
                description2="빠르게 찾고 지원할 수 있어요!"
                images={IMAGES.DESIGNER.RECRUIT.MOBILE.slice(4, 6)}
              />
              <CommonContent
                title1="구인구직은 미몽으로"
                title2="중요한 면접 일정 \n 알림 받기"
                title2Color={theme.colors.primary}
                description1="바쁜 일정에도 중요한 \n 면접 날짜를 잊지 않도록"
                description2="카카오톡 및 앱 푸시 알림으로 \n 안내해 드려요!"
                images={IMAGES.DESIGNER.RECRUIT.MOBILE.slice(6, 8)}
              />
            </FeatureSection>
          ) : item === '스페어' ? (
            <FeatureSection>
              <CommonContent
                title1="스페어 구인공고도 \n 미몽으로"
                title2="잠깐 필요한 \n 스페어구인도 바로"
                title2Color={theme.colors.primary}
                description1="성수기에 필요한 스페어 구인"
                description2="바로 올리고 바로 구하세요!"
                images={IMAGES.DESIGNER.SPARE.MOBILE}
              />
            </FeatureSection>
          ) : item === '교육' ? (
            <FeatureSection>
              <CommonContent
                title1="디자이너 실력향상"
                title2="새로운 헤어트렌드와 기술 학습"
                title2Color={theme.colors.primary}
                description1="미용 아카데미 '캐미티드'와의"
                description2="제휴 할인 기회를 제공"
                images={IMAGES.DESIGNER.EDUCATION.MOBILE}
              />
            </FeatureSection>
          ) : (
            ''
          )}
        </Section>
      ))}
    </>
  )
}

const Section = styled.div`
  overflow-x: hidden;
`

const FeatureSection = styled.div`
  width: 100%;
`

const SectionInner = styled.div<{ $backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  padding: 40px 24px;
  h1 {
    color: ${theme.colors.text};
    font-size: 1.8rem;
  }

  h2 {
    color: ${theme.colors.text};
    font-size: 1.4rem;
  }
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'inherit'};
`

const FeatureList = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  padding: 0 24px;

  &::before {
    content: '';
    position: absolute;
    left: 52px;
    top: 56px;
    bottom: 28px;
    width: 1px;
    height: 250px;
    background-image: url('/icons/vertical-line.svg');
  }
`

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`

const MultiCircleIcon = styled.img`
  width: 56px;
  height: 56px;
`

const CircleIcon = styled.img`
  width: 14px;
  height: 14px;
`

const FeatureContent = styled.div`
  flex: 1;
`

const FeatureTitle = styled.h3`
  margin-top: 1.1rem;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text};
  font-family: 'Pretendard';
  font-weight: 700;
`

const FeatureDescription = styled.p`
  font-family: 'Pretendard';
  font-size: 1rem;
  color: ${theme.colors.text};
  font-weight: 400;
`

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
`

const Description = styled.p`
  font-family: 'Pretendard';
  font-size: 1rem;
  color: ${theme.colors.text};
  font-weight: 400;
  line-height: 1.7;
`

export default NavigationMobileContents
