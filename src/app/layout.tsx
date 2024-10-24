import type { Metadata } from 'next'
import localFont from 'next/font/local'
import StyledComponentsRegistry from '../lib/registry'
import { ResponsiveRouter } from '../components/ResponsiveRouter'
import ClientGlobalStyle from '@/components/ClientGlobalStyle'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <ClientGlobalStyle />
          <ResponsiveRouter>{children}</ResponsiveRouter>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
