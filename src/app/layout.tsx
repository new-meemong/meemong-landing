import type { Metadata } from 'next'
import localFont from 'next/font/local'
import StyledComponentsRegistry from '../lib/registry'
import ClientGlobalStyle from '@/styles/ClientGlobalStyle'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const pretandard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretandard',
  weight: '100 200 300 400 500 600 700 800 900'
})

export const metadata: Metadata = {
  title: '미몽',
  description: '헤어디자이너의 모델 구인부터 모델 지원까지 미용에 관한 모든 것, 미몽',
  icons: {
    icon: '/icons/favicon-purple.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={pretandard.variable}>
        <StyledComponentsRegistry>
          <ClientGlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
