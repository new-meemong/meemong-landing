'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'

const Page = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return <div>Page</div>
}

export default Page
