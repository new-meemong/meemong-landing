import { Metadata } from 'next'
import PrivacyClient from './PrivacyClient'

export const metadata: Metadata = {
  title: '개인정보처리방침 - 미몽',
  description: '미몽의 개인정보처리방침을 확인하세요.',
  icons: {
    icon: '/icons/favicon-purple.svg',
  },
}

/**
 * 개인정보처리방침 페이지 (Server Component)
 * PDF 파일을 웹에서 직접 확인할 수 있습니다.
 */
export default function PrivacyPage() {
  return <PrivacyClient />
}
