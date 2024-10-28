'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useIsMobile } from '@/hooks/useIsMobile'
import Loading from '@/components/common/Loading'

export default function Home() {
  const router = useRouter()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile === null) return // 초기 로딩 상태에서는 리다이렉트하지 않음

    if (isMobile) {
      router.push('/designer/mobile')
    } else {
      router.push('/designer/web')
    }
  }, [router, isMobile])

  return <Loading />
}
