import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const FloatingButtons = () => {
  return (
    <FloatingButtonContainer>
      <FloatingButton
        href="https://pf.kakao.com/_NtWKG"
        target="_blank"
        rel="noopener noreferrer"
        $color="#32161E"
        $backgroundColor="#FFE500"
        style={{
          border: '1.5px solid #fff',
          boxShadow: '4px 4px 10px 0px rgba(253, 216, 53, 0.50)',
        }}
      >
        <Image src="/icons/kakao.png" alt="kakao" width={60} height={60} />
        <span>1:1 문의하기</span>
      </FloatingButton>
      <FloatingButton
        href="https://forms.gle/fQTP7sHMZFUT6c198"
        target="_blank"
        rel="noopener noreferrer"
        $color="#fff"
        $backgroundColor="linear-gradient(180deg, #5C4CEF 0%, #363259 100%)"
        style={{ boxShadow: '0px 4px 10px 0px rgba(255, 255, 255, 0.25)' }}
      >
        <b>창업솔루션</b>
        <span>신청하러가기</span>
      </FloatingButton>
    </FloatingButtonContainer>
  )
}

const FloatingButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    gap: 0.5rem;
  }
`

const FloatingButton = styled.a<{ $color: string; $backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: ${(props) => props.$backgroundColor};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  gap: 0.2rem;
  /* box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.25); */

  // 링크 스타일 제거
  text-decoration: none;
  color: ${(props) => props.$color};
  font-weight: 700;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 0.5rem;
    gap: 0;

    img {
      width: 30px;
      height: 30px;
    }
  }
`
export default FloatingButtons
