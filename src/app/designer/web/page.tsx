'use client'
import { Button } from '@/styles/CommonStyles'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
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
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
`

const MainCover = styled.div`
  width: 100%;
  margin-top: 110px; /* 헤더 높이만큼 마진 추가 */
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
  font-size: 2.5rem;
  margin-bottom: 1rem;
  white-space: nowrap;
`

const CoverSubtitle = styled.p`
  font-size: 72px;
  margin-bottom: 2rem;
  white-space: pre-line;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubTitleText = styled.p`
  font-size: 72px;
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

export default function DesignerWeb() {
  return (
    <>
      {/* 헤더 */}
      <Header>
        <HeaderInner>
          <LogoBox>
            <Image src="/assets/logo/logo-web.svg" alt="logo" width={30} height={30} />
            <span style={{ fontSize: '24px' }}>미몽 MEEMONG</span>
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
            <Image src="/assets/images/app-store.svg" alt="app-store" width={200} height={60} />
            <Image src="/assets/images/google-play.svg" alt="google-play" width={200} height={60} />
          </ButtonGroup>
          <ModelPageButton>
            <span>헤어모델 전용 페이지 가기</span>
            <Image width={9} height={12} src="/assets/chevron/right-chevron.svg" alt="arrow" />
          </ModelPageButton>
        </CoverContent>
      </MainCover>
    </>
  )
}
