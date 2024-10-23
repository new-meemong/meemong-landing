'use client'

import React from 'react'
import styled from 'styled-components'
import { Container, Button, Title } from '../../../styles/CommonStyles'
import { mobile, desktop } from '../../../styles/MediaQueries'

const ModelWebContainer = styled(Container)`
  ${mobile`
    padding: 10px;
  `}
  ${desktop`
    padding: 20px;
  `}
`

const ModelWebTitle = styled(Title)`
  ${mobile`
    font-size: 1.5rem;
  `}
`

export default function ModelWeb() {
  return (
    <ModelWebContainer>
      <ModelWebTitle>모델을 위한 웹 서비스</ModelWebTitle>
      <Button>프로필 등록하기</Button>
    </ModelWebContainer>
  )
}
