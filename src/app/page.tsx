'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Loading from '@/components/common/Loading'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/designer')
  }, [router])

  return <Loading />
}
