'use client'

import React from 'react'
import styled from 'styled-components'
import { Container, Button, Title } from '../../../styles/CommonStyles'

const DesignerWebContainer = styled(Container)`
  background-color: #f8f9fa;
`

const DesignerWebTitle = styled(Title)`
  color: #0056b3;
`

export default function DesignerWeb() {
  return (
    <DesignerWebContainer>
      <DesignerWebTitle>디자이너를 위한 웹 서비스</DesignerWebTitle>
      <Button primary>시작하기</Button>
    </DesignerWebContainer>
  )
}
