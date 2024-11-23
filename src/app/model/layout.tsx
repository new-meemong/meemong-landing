import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '미몽 - 누구나 헤어모델, 미용 구인구직까지',
  description:
    '일반인도 손쉽게 헤어모델이 되어 인생머리를 경험하고 미용인과 헤어모델을 위한 구인구직 정보를 한번에 만나보세요. 그리고 창업솔루션까지',
  icons: {
    icon: '/icons/favicon-green.svg',
  },
  openGraph: {
    images: '/images/main/thumb.png',
  },
}

export default function ModelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
