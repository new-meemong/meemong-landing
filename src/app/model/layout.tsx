import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '미몽 - 누구나 헤어모델,헤어컨설팅/미용 구인구직까지',
  description:
    '유명 헤어 디자이너들에게 누구나 헤어모델이 되어 인생머리를 경험하고 집에서 손쉽게 헤어컨설팅도 받아보세요. 그리고 미용구인구직 정보도 한번에 만나보세요.',
  icons: {
    icon: '/icons/favicon-green.svg',
  },
  openGraph: {
    images: 'https://meemong.com/landing/images/main/thumb.png',
  },
}

export default function ModelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
