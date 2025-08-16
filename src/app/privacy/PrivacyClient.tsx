'use client'

import PDFViewer from '@/components/common/PDFViewer'
import styled from 'styled-components'

// 스타일드 컴포넌트 정의
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  padding: 0;
  margin: 0;
`

const PDFContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

/**
 * 개인정보처리방침 클라이언트 컴포넌트
 * Styled Components와 PDF 뷰어를 포함합니다.
 */
export default function PrivacyClient() {
  return (
    <PageContainer>
      <PDFContainer>
        <PDFViewer
          pdfUrl="/documents/privacy-policy.pdf"
          title="개인정보처리방침"
        />
      </PDFContainer>
    </PageContainer>
  )
}
