import CommonContent from '@/components/common/CommonContent'
import { IMAGES } from '@/constants/images'
import { theme } from '@/constants/theme'
import React from 'react'
import styled from 'styled-components'

interface NavigationWebContentsProps {
  navItems: string[]
  sectionRefs: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null
  }>
}

const NavigationWebContents = ({ navItems, sectionRefs }: NavigationWebContentsProps) => {
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
            <ContentSection>
              <MatchingContent style={{ margin: '150px 0' }}>
                <TextArea>
                  <TextAreaInner>
                    <MainTitle>
                      <h2>
                        디자이너는 포트폴리오 모델을 구하고
                        <br />
                        모델은 무료 시술을 받는
                        <br />
                        새로운 방식입니다.
                      </h2>
                    </MainTitle>
                    <FeatureList>
                      <FeatureItem>
                        <IconWrapper>
                          <MultiCircleIcon src="/icons/multi-circle.svg" alt="Feature1" />
                        </IconWrapper>
                        <FeatureContent>
                          <FeatureTitle>내 근처 디자이너를 찾아보세요</FeatureTitle>
                          <FeatureDescription>
                            내ㅐ 근처, 시술 유형, 무료시술, 약제값, 지불 등
                            <br />
                            원하는 정보에 맞춰서 디자이너를 찾아보세요.
                          </FeatureDescription>
                        </FeatureContent>
                      </FeatureItem>
                      <FeatureItem>
                        <IconWrapper>
                          <CircleIcon src="/icons/circle.svg" alt="Feature2" />
                        </IconWrapper>
                        <FeatureContent>
                          <FeatureTitle>디자이너에게 채팅으로 문의하세요</FeatureTitle>
                          <FeatureDescription>
                            원하는 디자이너에게 채팅을 무료로 보내고
                            <br />
                            상담을 통해 일시와 비용을 조율해 보세요.
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
                            안전하고 명확한 약속을 위해 앱에서 바로
                            <br />
                            시술에 대한 계약서를 작성할 수 있어요.
                          </FeatureDescription>
                        </FeatureContent>
                      </FeatureItem>
                    </FeatureList>
                  </TextAreaInner>
                </TextArea>
                <ImageArea>
                  <FindHairModelPhoneImage src={IMAGES.MODEL.HAIR_MODEL.WEB[0]} alt="Hair Model 1" />
                  <FindHairModelPhoneImage src={IMAGES.MODEL.HAIR_MODEL.WEB[1]} alt="Hair Model 2" />
                  <FindHairModelPhoneImage src={IMAGES.MODEL.HAIR_MODEL.WEB[2]} alt="Hair Model 3" />
                </ImageArea>
              </MatchingContent>
              {/* <ThunderMatchingContent style={{ padding: '10% 10% 0 10%' }}>
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
                  <PhoneImage width="50%" src={IMAGES.MODEL.THUNDER_MATCHING.WEB[0]} alt="Thunder Matching 1" />
                  <PhoneImage width="50%" src={IMAGES.MODEL.THUNDER_MATCHING.WEB[1]} alt="Thunder Matching 2" />
                </ImageArea>
              </ThunderMatchingContent> */}
            </ContentSection>
          ) : item === '모델 지원' ? (
            <ContentSection>
              <CommonContent
                title1="10분만에 모델 지원하기"
                title2="전액 무료부터 모델비 주는 디자이너까지"
                description1="추천 디자이너, 내 주변 디자이너를 통해서 원하는 디자이너를 찾아보세요."
                description2="원하는 날짜와 시술을 잡을 수 있습니다."
                images={IMAGES.MODEL.APPLY.WEB}
                title2Color={theme.colors.teal}
              />
            </ContentSection>
          ) : item === '모델 규칙' ? (
            <ContentSection>
              <CommonContent
                title1="채팅으로 일정잡고"
                title2="초상권계약까지 한번에"
                description1="디자이너와 간단하게 채팅으로 일정을 잡고"
                description2="초상권계약을 통해 안전하게 계약을 진행하세요."
                images={IMAGES.MODEL.RULE.WEB}
                title1Color={theme.colors.gray500}
                title2Color={theme.colors.teal}
                annotation="*노쇼시 패널티가 있으며 추후 서비스 이용이 불가능할 수 있습니다."
              />
            </ContentSection>
          ) : item === '번개매칭' ? (
            <ContentSection>
              <ThunderMatchingContent style={{ padding: '10% 10% 0 10%' }}>
                <TextArea>
                  <TextAreaInner>
                    <MainTitle>
                      {/* <span>02. 번개 매칭</span> */}
                      <h2>
                        급할 때는 번개매칭
                        <br />
                        오늘 당장 모델 시작하기
                      </h2>
                    </MainTitle>
                    <TextDescription>포트폴리오가 필요한 디자이너들이</TextDescription>
                    <TextDescription>번개매칭으로 매 일, 매 시간 모델을 구하고 있어요.</TextDescription>
                    <TextDescription>모델이 처음인가요?</TextDescription>
                    <TextDescription>오늘 당장 헤어모델을 시작하세요.</TextDescription>
                  </TextAreaInner>
                </TextArea>
                <ImageArea>
                  <PhoneImage width="50%" src={IMAGES.MODEL.THUNDER_MATCHING.WEB[0]} alt="Thunder Matching 1" />
                  <PhoneImage width="50%" src={IMAGES.MODEL.THUNDER_MATCHING.WEB[1]} alt="Thunder Matching 2" />
                </ImageArea>
              </ThunderMatchingContent>
            </ContentSection>
          ) : item === '미용 알바하기' ? (
            <ContentSection>
              <CommonContent
                title1="나도 이제는 미용인"
                title2="입문자도 가능한 미용 알바하기"
                description1="꿈꾸던 헤어디자이너로 시작하고 싶다면"
                description2="미몽에서 미용 알바로 시작해 보세요\n내 주변 매장에서 일할 수 있어요"
                images={IMAGES.MODEL.PART_TIME.WEB.slice(0, 2)}
                title2Color={theme.colors.teal}
              />
              <CommonContent
                title1="미용 알바는 미몽으로"
                title2="미용에 관심있다면 알바로 시작하기"
                description1="미용 분야에 관심이 있으시다면"
                description2="지금 바로 주변에서\n알바로 미용을 경험해 보세요"
                images={IMAGES.MODEL.PART_TIME.WEB.slice(2, 4)}
                title2Color={theme.colors.teal}
                backgroundColor={theme.colors.teal100}
              />
            </ContentSection>
          ) : null}
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
  gap: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`

const ThunderMatchingContent = styled(MatchingContent)`
  background-color: ${theme.colors.teal100};
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
    font-size: clamp(32px, 2vw, 52px);
    margin-top: 10px;
    line-height: 1.5;
    white-space: nowrap;
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

export default NavigationWebContents
