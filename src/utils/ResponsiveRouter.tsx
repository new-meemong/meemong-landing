'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useWindowSize } from '../hooks/useWindowSize'

const MOBILE_BREAKPOINT = 768

export function ResponsiveRouter({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { width } = useWindowSize()

  useEffect(() => {
    if (typeof width !== 'undefined') {
      const isMobile = width <= MOBILE_BREAKPOINT
      const currentPathType = pathname.includes('/mobile') ? 'mobile' : 'web'

      if (isMobile && currentPathType !== 'mobile') {
        router.push(pathname.replace('/web', '/mobile'))
      } else if (!isMobile && currentPathType !== 'web') {
        router.push(pathname.replace('/mobile', '/web'))
      }
    }
  }, [width, pathname, router])

  return <>{children}</>
}
