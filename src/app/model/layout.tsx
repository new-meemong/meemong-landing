import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '미몽',
  description: '누구나 헤어모델이 되고 무료로 헤어시술을 받는 모델 매칭 앱, 미몽',
  icons: {
    icon: '/icons/favicon-green.svg'
  }
}

export default function ModelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
