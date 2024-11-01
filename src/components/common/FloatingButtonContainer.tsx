import React from 'react'
import styled from 'styled-components'

const FloatingButtonContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <FloatingWrapper>{children}</FloatingWrapper>
}

const FloatingWrapper = styled.div`
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
export default FloatingButtonContainer
