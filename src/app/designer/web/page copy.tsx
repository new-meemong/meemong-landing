'use client'
import React from 'react'
import styled from 'styled-components'
import { Container, Button, Title } from '@/styles/CommonStyles'

const Header = styled.header`
  background-color: #ffffff;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeroSection = styled.section`
  background-color: #f8f9fa;
  padding: 100px 0;
  text-align: center;
`

const FeaturesSection = styled.section`
  padding: 80px 0;
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
`

const FeatureCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const TestimonialsSection = styled.section`
  background-color: #f1f3f5;
  padding: 80px 0;
`

const ContactSection = styled.section`
  padding: 80px 0;
`

const Footer = styled.footer`
  background-color: #343a40;
  color: #ffffff;
  padding: 40px 0;
  text-align: center;
`

export default function DesignerWeb() {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <LogoBox>
              <img src="/logo.png" alt="Logo" />
              <div>디자이너 웹</div>
            </LogoBox>
            <div>
              {/* <Button>로그인</Button> */}
              {/* <Button primary>시작하기</Button> */}
            </div>
          </Nav>
        </Container>
      </Header>

      {/* <HeroSection>
        <Container>
          <Title>디자이너를 위한 웹 서비스</Title>
          <p>창의적인 작업을 더욱 효율적으로</p>
          <Button primary>무료로 시작하기</Button>
        </Container>
      </HeroSection> */}

      {/* <FeaturesSection>
        <Container>
          <Title>주요 기능</Title>
          <FeatureGrid>
            <FeatureCard>
              <h3>협업 도구</h3>
              <p>팀원들과 실시간으로 협업하세요</p>
            </FeatureCard>
            <FeatureCard>
              <h3>디자인 템플릿</h3>
              <p>다양한 템플릿으로 작업 시간을 단축하세요</p>
            </FeatureCard>
            <FeatureCard>
              <h3>클라우드 저장소</h3>
              <p>작업물을 안전하게 보관하고 공유하세요</p>
            </FeatureCard>
          </FeatureGrid>
        </Container>
      </FeaturesSection> */}

      {/* <TestimonialsSection>
        <Container>
          <Title>고객 후기</Title>
        </Container>
      </TestimonialsSection> */}

      {/* <ContactSection>
        <Container>
          <Title>문의하기</Title>
          <p>궁금한 점이 있으신가요? 언제든 연락주세요!</p>
          <Button primary>문의하기</Button>
        </Container>
      </ContactSection> */}

      {/* <Footer>
        <Container>
          <p>&copy; 2023 디자이너 웹 서비스. All rights reserved.</p>
        </Container>
      </Footer> */}
    </>
  )
}
