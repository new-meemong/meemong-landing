'use client'

import React from 'react'
import styled from 'styled-components'
import { Button, Title } from '../../../styles/CommonStyles'
import MobileLayout from '../../../components/Layout/MobileLayout'

const DesignerMobileTitle = styled(Title)`
  font-size: 1.5rem;
  color: #0056b3;
`

const DesignerMobileButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`

export default function DesignerMobile() {
  return (
    <MobileLayout>
      <DesignerMobileTitle>디자이너 모바일 앱</DesignerMobileTitle>
      <DesignerMobileButton primary>시작하기</DesignerMobileButton>
    </MobileLayout>
  )
}
