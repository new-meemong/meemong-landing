import React from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

const Loading = () => {
  return (
    <LoadingContainer>
      <LogoWrapper>
        <StyledImage src="/icons/logo-web.svg" alt="Meemong Logo" width={60} height={60} />
      </LogoWrapper>
    </LoadingContainer>
  )
}

export default Loading

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`

const StyledImage = styled(Image)`
  transform-origin: center center;
  animation: ${rotate} 1s linear infinite;
`
