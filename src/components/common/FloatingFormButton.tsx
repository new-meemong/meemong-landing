import { FloatingButton } from '@/styles/CommonStyles'
import React from 'react'

const FloatingFormButton = ({ link }: { link: string }) => {
  return (
    <FloatingButton
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      $color="#fff"
      $backgroundColor="linear-gradient(180deg, #5C4CEF 0%, #363259 100%)"
      style={{ boxShadow: '0px 4px 10px 0px rgba(255, 255, 255, 0.25)' }}
    >
      <b>창업솔루션</b>
      <span>신청하러가기</span>
    </FloatingButton>
  )
}

export default FloatingFormButton
