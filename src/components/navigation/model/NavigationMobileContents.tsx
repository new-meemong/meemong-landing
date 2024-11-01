import CommonContent from '@/components/common/CommonContent'
import ModelImageRule from '@/components/common/ModelImageRule'
import { IMAGES } from '@/constants/images'
import { carouselSettings } from '@/constants/settings'
import { theme } from '@/constants/theme'
import { CarouselWrapper } from '@/styles/CommonStyles'

import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

interface NavigationMobileContentsProps {
  navItems: string[]
  sectionRefs: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null
  }>
}

const NavigationMobileContents = ({
  navItems,
  sectionRefs,
}: NavigationMobileContentsProps) => {
  return (
    <>
      {navItems.map((item) => (
        <Section
          key={item}
          ref={(el) => {
            sectionRefs.current[item] = el as HTMLDivElement
          }}
        >
          {item === '헤어모델' ? (
            <FeatureSection>
              <SectionInner>
                <h1>디자이너는</h1>
                <h1>포트폴리오 모델을 구하고</h1>
                <h1>모델은 무료 시술을 받는</h1>
                <h1>새로운 방식입니다.</h1>
                <CarouselWrapper>
                  <Slider {...carouselSettings}>
                    {IMAGES.MODEL.HAIR_MODEL.MOBILE.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`Hair model ${index + 1}`} />
                      </div>
                    ))}
                  </Slider>
                </CarouselWrapper>
              </SectionInner>

              <FeatureList>
                <FeatureItem>
                  <IconWrapper>
                    <MultiCircleIcon
                      src="/icons/multi-circle.svg"
                      alt="Feature1"
                    />
                  </IconWrapper>
                  <FeatureContent>
                    <FeatureTitle>내 근처 디자이너를 찾아보세요</FeatureTitle>
                    <FeatureDescription>
                      내 근처, 시술 유형, 무료시술, 약제값 지불 등 원하는 정보에
                      맞춰서 디자이너를 찾아보세요.
                    </FeatureDescription>
                  </FeatureContent>
                </FeatureItem>
                <FeatureItem>
                  <IconWrapper>
                    <CircleIcon src="/icons/circle.svg" alt="Feature2" />
                  </IconWrapper>
                  <FeatureContent>
                    <FeatureTitle>
                      디자이너에게 채팅으로 문의하세요
                    </FeatureTitle>
                    <FeatureDescription>
                      원하는 모델에게 견적서를 보내고 채팅을 통해 견적서 내
                      일시, 페이 등을 조율해보세요.
                    </FeatureDescription>
                  </FeatureContent>
                </FeatureItem>
                <FeatureItem>
                  <IconWrapper>
                    <CircleIcon src="/icons/circle.svg" alt="Feature3" />
                  </IconWrapper>
                  <FeatureContent>
                    <FeatureTitle>안전하게 계약서도 작성하세요</FeatureTitle>
                    <FeatureDescription>
                      안전하고 명확한 약속을 위해 앱에서 바로 시술에 대한
                      계약서를 작성할 수 있어요.
                    </FeatureDescription>
                  </FeatureContent>
                </FeatureItem>
              </FeatureList>
            </FeatureSection>
          ) : item === '모델 지원' ? (
            <FeatureSection>
              <CommonContent
                title1="10분만에 모델 지원"
                title2="전액 무료부터\n 페이주는 디자이너까지"
                description1="추천 디자이너, 내주변 디자이너를\n통해 원하는 디자이너를 찾아보세요.\n원하는 날짜와 시술을 잡을 수 있습니다."
                description2=""
                images={IMAGES.MODEL.APPLY.MOBILE}
                title1Color={theme.colors.gray500}
                title2Color={theme.colors.teal}
              />
            </FeatureSection>
          ) : item === '모델 규칙' ? (
            <FeatureSection>
              <CommonContent
                title1="채팅으로 일정잡고"
                title2="초상권계약까지 한번에"
                description1="디자이너와 간단하게 채팅으로\n일정을 잡고, 초상권 계약을 통해\n안전하게 계약을 진행하세요."
                description2=""
                annotation="*노쇼시 패널티가 있으며,\n추후 서비스 이용이\n불가능할 수 있습니다."
                images={IMAGES.MODEL.APPLY.MOBILE}
                title1Color={theme.colors.gray500}
                title2Color={theme.colors.teal}
              />

              {/* 모델 규칙 컴포넌트 필요 */}
              <ModelImageRule
                title="모델 이미지 규칙\n미몽은 투명하고 신뢰할 수 있는\n 미용 문화 정착을 위해"
                description="AI모델 / 과도한 보정 /\n 얼굴이나 이미지를 확인하기 어려운\n 사진 등올 제한하고 있습니다."
                recommendImages={IMAGES.MODEL.IMAGE_RULE.RECOMMEND}
                restrictImages={IMAGES.MODEL.IMAGE_RULE.RESTRICT}
              />
            </FeatureSection>
          ) : item === '번개매칭' ? (
            <SectionInner
              style={{
                alignItems: 'center',
                backgroundColor: 'rgba(0, 172, 172, 0.20)',
              }}
            >
              <h1>급할 때는 번개매칭</h1>
              <h1>오늘부터 모델 시작하기</h1>

              <span style={{ marginTop: '1rem' }}>
                포트폴리오가 필요한 디자이너들이
              </span>
              <span>번개매칭으로 매 일, 매 시간 모델을 구하고 있어요.</span>
              <span>모델이 처음인가요?</span>
              <span>오늘부터 나도 헤어모델로 시작하세요.</span>

              <CarouselWrapper>
                <Slider {...carouselSettings}>
                  {IMAGES.MODEL.THUNDER_MATCHING.MOBILE.map((image, index) => (
                    <div key={index}>
                      <ImageWrapper>
                        <CarouselImage
                          src={image}
                          alt={`Hair model ${index + 1}`}
                        />
                        {index === 0 && (
                          <TextBox>
                            당장 오늘
                            <br />
                            헤어모델 하실래요?
                          </TextBox>
                        )}
                      </ImageWrapper>
                    </div>
                  ))}
                </Slider>
              </CarouselWrapper>
            </SectionInner>
          ) : item === '미용 알바하기' ? (
            <FeatureSection>
              <CommonContent
                title1="나도 이제는 미용인"
                title2="입문자도 가능한\n미용 알바하기"
                description1="꿈꾸던 헤어디자이너로\n시작하고 싶다면\n미몽에서 미용 알바로 시작해 보세요\n내 주변 매장에서 일할 수 있어요"
                description2=""
                images={IMAGES.MODEL.PART_TIME.MOBILE.slice(0, 2)}
                title1Color={theme.colors.black}
                title2Color={theme.colors.teal}
              />
              <CommonContent
                title1="미용 알바는 미몽으로"
                title2="미용에 관심있다면\n알바로 시작하기"
                description1="미용 분야에 관심이 있으시다면\n지금 바로 주변 매장에서\n알바로 미용을 경험해 보세요"
                description2=""
                images={IMAGES.MODEL.PART_TIME.MOBILE.slice(2, 4)}
                title1Color={theme.colors.black}
                title2Color={theme.colors.teal}
                backgroundColor={theme.colors.teal100}
              />
            </FeatureSection>
          ) : null}
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
  font-size: 1.1rem;
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

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  padding: 1rem;
  box-shadow: 3px 5px 25px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: white;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
  color: #0e0e0e;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export default NavigationMobileContents
