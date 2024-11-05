import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import ClientGlobalStyle from '@/styles/ClientGlobalStyle'
import type { Metadata } from 'next'
import StyledComponentsRegistry from '../lib/registry'

export const metadata: Metadata = {
  title: '미몽',
  description:
    '헤어디자이너의 모델 구인부터 모델 지원까지 미용에 관한 모든 것, 미몽',
  icons: {
    icon: '/icons/favicon-purple.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <ClientGlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
