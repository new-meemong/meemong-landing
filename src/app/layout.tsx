import type { Metadata } from 'next'
import localFont from 'next/font/local'
import StyledComponentsRegistry from '../lib/registry'
import ClientGlobalStyle from '@/styles/ClientGlobalStyle'
import ClientThemeProvider from '@/components/ClientThemeProvider'

const pretandard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretandard',
  weight: '100 200 300 400 500 600 700 800 900'
})

export const metadata: Metadata = {
  title: '미몽',
  description: '헤어디자이너의 모델 구인부터 커리어를 위한 단 하나의 앱, 미몽',
  icons: {
    icon: '/assets/logo/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={pretandard.variable}>
        <StyledComponentsRegistry>
          <ClientThemeProvider>
            <ClientGlobalStyle />
            {children}
          </ClientThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
