import { FloatingButton } from '@/styles/CommonStyles'
import Image from 'next/image'
import React from 'react'

const FloatingKaKaoButton = ({ link }: { link: string }) => {
  return (
    <FloatingButton
      href={link}
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
  )
}

export default FloatingKaKaoButton
