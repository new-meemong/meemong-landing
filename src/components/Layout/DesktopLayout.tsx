import React from 'react'
import styled from 'styled-components'

const DesktopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const DesktopLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <DesktopContainer>{children}</DesktopContainer>
}

export default DesktopLayout
