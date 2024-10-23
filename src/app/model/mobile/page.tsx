'use client'

import React from 'react'
import styled from 'styled-components'
import { Button, Title } from '../../../styles/CommonStyles'
import MobileLayout from '../../../components/Layout/MobileLayout'

const ModelMobileTitle = styled(Title)`
  font-size: 1.5rem;
  color: #28a745;
`

const ModelMobileButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`

export default function ModelMobile() {
  return (
    <MobileLayout>
      <ModelMobileTitle>모델 모바일 앱</ModelMobileTitle>
      <ModelMobileButton>프로필 등록하기</ModelMobileButton>
    </MobileLayout>
  )
}
