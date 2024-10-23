'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isMobile } from '../utils/deviceDetection'

export default function Home() {
  const router = useRouter()
  console.log(isMobile())

  useEffect(() => {
    if (isMobile()) {
      router.push('/designer/mobile')
    } else {
      router.push('/designer/web')
    }
  }, [router])

  return null // 또는 로딩 인디케이터
}
