import React from 'react'
import styled from 'styled-components'
import CommonContent from '../../common/CommonContent'
import { theme } from '@/constants/theme'
import { IMAGES } from '@/constants/images'

interface NavigationWebContentsProps {
  navItems: string[]
  sectionRefs: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null
  }>
}

const NavigationWebContents = ({
  navItems,
  sectionRefs,
}: NavigationWebContentsProps) => {
  return (
    <>
      {navItems.map((item) => (
        <Section
          key={item}
          id={item}
          ref={(el) => {
            sectionRefs.current[item] = el as HTMLDivElement
          }}
        >
          {item === '헤어모델 매칭' ? (
            <ContentSection>
              <MatchingContent style={{ padding: '10% 0 0 12%' }}>
                <TextArea>
                  <TextAreaInner style={{ width: '90%', maxWidth: '750px' }}>
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
                          <MultiCircleIcon
                            src="/icons/multi-circle.svg"
                            alt="Feature1"
                          />
                        </IconWrapper>
                        <FeatureContent>
                          <FeatureTitle>5분만에 원하는 모델 찾기</FeatureTitle>
                          <FeatureDescription>
                            페이, 거리, 성별, 국적부터 원하는 헤어, 얼굴
                            시술까지
                            <br />
                            내가 필요로 하는 모델들을 서칭해보세요.
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
                            원하는 모델에게 견적서를 보내고
                            <br />
                            채팅을 통해 견적서 내 일시, 페이 등을 조율해보세요.
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
                            초상권 계약 내 모델 서명까지 완료시,
                            <br />
                            시술 내역 및 결과물을 포트폴리오에서 모아서 관리할
                            수 있어요.
                          </FeatureDescription>
                        </FeatureContent>
                      </FeatureItem>
                    </FeatureList>
                  </TextAreaInner>
                </TextArea>
                <ImageArea>
                  <FindHairModelPhoneImage
                    src={IMAGES.DESIGNER.HAIR_MODEL.WEB[0]}
                    alt="Hair Model 1"
                  />
                  <FindHairModelPhoneImage
                    src={IMAGES.DESIGNER.HAIR_MODEL.WEB[1]}
                    alt="Hair Model 2"
                  />
                  <FindHairModelPhoneImage
                    src={IMAGES.DESIGNER.HAIR_MODEL.WEB[2]}
                    alt="Hair Model 3"
                  />
                </ImageArea>
              </MatchingContent>
              <ThunderMatchingContent style={{ padding: '10% 10% 0 10%' }}>
                <TextArea>
                  <TextAreaInner style={{ width: '80%', maxWidth: '600px' }}>
                    <MainTitle>
                      <span>02. 번개 매칭</span>
                      <h2>
                        급할 때는 번개매칭
                        <br />
                        번개 매칭으로 바로 찾기
                      </h2>
                    </MainTitle>
                    <TextDescription>
                      시술하기로한 모델이 갑자기 취소되었나요?
                    </TextDescription>
                    <TextDescription>
                      급하게 모델이 필요한 경우,더 빠르게 매칭할 수 있는
                    </TextDescription>
                    <TextDescription>
                      모델 급구게시판을 이용해보세요.
                    </TextDescription>
                    <TextDescription>
                      더욱 빠른 매칭을 경험할 수 있어요.
                    </TextDescription>
                  </TextAreaInner>
                </TextArea>
                <ImageArea>
                  <ImageWrapper width="50%">
                    <PhoneImage
                      width="100%"
                      src={IMAGES.DESIGNER.THUNDER_MATCHING.WEB[0]}
                      alt="Thunder Matching 1"
                    />
                    <TextBox>
                      급한 모델이
                      <br />
                      필요하신가요?
                    </TextBox>
                  </ImageWrapper>

                  <PhoneImage
                    width="50%"
                    src={IMAGES.DESIGNER.THUNDER_MATCHING.WEB[1]}
                    alt="Thunder Matching 2"
                  />
                </ImageArea>
              </ThunderMatchingContent>
            </ContentSection>
          ) : item === '구인구직' ? (
            <ContentSection>
              <CommonContent
                title1="구인구직은 미몽에서"
                title2="면접 보는 시간도\n아끼세요"
                description1="미몽 앱 안에서 원하는 매장으로"
                description2="바로바로 이력서를 전송하세요."
                images={IMAGES.DESIGNER.RECRUIT.WEB.slice(0, 2)}
                title2Color={theme.colors.primary}
                ImageContainerStyle={{
                  marginTop: '50px',
                }}
              />
              <CommonContent
                title1="구인구직은 미몽에서"
                title2="내가 원하는 매장만 즉시 찾기"
                description1="미용인의 눈높이에 맞춘 상세한 필터 덕분에"
                description2="원하는 매장을 즉시 찾을 수 있어요!"
                images={IMAGES.DESIGNER.RECRUIT.WEB.slice(2, 4)}
                title2Color={theme.colors.primary}
                backgroundColor="#F8F7FF"
              />
              <CommonContent
                title1="구인구직은 미몽에서"
                title2="내 주변 가까운 매장만 바로찾기"
                description1="위치 기준으로 근처 매장도"
                description2="빠르게 찾고 지원할 수 있어요!"
                images={IMAGES.DESIGNER.RECRUIT.WEB.slice(4, 6)}
                title2Color={theme.colors.primary}
              />
              <CommonContent
                title1="구인구직은 미몽에서"
                title2="중요한 면접 일정 알림 받기"
                description1="바쁜 일정에도 중요한 면접 날짜를 잊지 않도록"
                description2="카카오톡 및 앱 푸시 알림으로 안내해 드려요!"
                images={IMAGES.DESIGNER.RECRUIT.WEB.slice(6, 8)}
                title2Color={theme.colors.primary}
                backgroundColor="#F8F7FF"
              />
            </ContentSection>
          ) : item === '스페어' ? (
            <ContentSection>
              <CommonContent
                title1="스페어 구인공고도 미몽에서"
                title2="잠깐 필요한 스페어구인도 바로"
                description1="성수기에 피한 스페어 구인"
                description2="바로 올리고 바로 구하세요!"
                images={IMAGES.DESIGNER.SPARE.WEB.slice(0, 2)}
                title2Color={theme.colors.primary}
              />
            </ContentSection>
          ) : item === '교육' ? (
            <ContentSection>
              <CommonContent
                title1="디자이너 실력향상"
                title2="새로운 헤어트렌드와 기술 학습"
                description1="미용 아카데미 '캐미티드'와의 제휴 할인 기회를 제공"
                description2=""
                images={IMAGES.DESIGNER.EDUCATION.WEB.slice(0, 2)}
                title2Color={theme.colors.primary}
              />
            </ContentSection>
          ) : (
            ''
          )}
        </Section>
      ))}
    </>
  )
}

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
`

const TextArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-left: 5%;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    padding-left: 0;
  }
`

const TextAreaInner = styled.div<{ padding?: string }>`
  padding: ${(props) => (props.padding ? props.padding : '0px 30px')};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  max-width: 600px;
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
    left: 28px;
    top: 56px;
    bottom: 28px;
    width: 1px;
    height: 300px;
    background-image: url('/icons/vertical-line.svg');
  }
`

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;

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
    justify-content: center;
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
  max-width: 320px;
  height: auto;
  object-fit: contain;

  @media (max-width: 1024px) {
    max-width: 260px;
    &:last-child {
      max-width: 210px;
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

// ImageWrapper 컴포넌트 추가
const ImageWrapper = styled.div<{ width?: string }>`
  position: relative;
  width: ${(props) => (props.width ? props.width : '100%')};
`

// TextBox 컴포넌트 추가
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
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  font-weight: 700;
  line-height: 1.3;
  color: #0e0e0e;
`

export default NavigationWebContents
