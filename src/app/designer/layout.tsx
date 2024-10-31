import { Metadata } from 'next'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const metadata: Metadata = {
  title: '미몽',
  description: '헤어디자이너의 모델 구인부터 커리어를 위한 단 하나의 앱, 미몽',
  icons: {
    icon: '/icons/favicon-purple.svg',
  },
}

export default function DesignerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
