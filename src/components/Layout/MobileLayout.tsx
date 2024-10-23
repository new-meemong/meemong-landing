import React from 'react'
import styled from 'styled-components'

const MobileContainer = styled.div`
  max-width: 100%;
  padding: 10px;
`

const MobileLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <MobileContainer>{children}</MobileContainer>
}

export default MobileLayout
