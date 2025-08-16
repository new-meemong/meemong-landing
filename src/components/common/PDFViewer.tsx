'use client'

import styled, { keyframes } from 'styled-components'
import { useEffect, useState } from 'react'

import { useIsMobile } from '@/hooks/useIsMobile'

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

// 스타일드 컴포넌트 정의
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Container = styled.div`
  width: 100%;
`

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 384px;
  background-color: #f3f4f6;
  border-radius: 8px;
`

const LoadingContent = styled.div`
  text-align: center;
`

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 2px solid transparent;
  border-bottom: 2px solid #7c3aed;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto 16px;
`

const LoadingText = styled.p`
  color: #4b5563;
`

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 384px;
  background-color: #fef2f2;
  border-radius: 8px;
  border: 1px solid #fecaca;
`

const ErrorContent = styled.div`
  text-align: center;
`

const ErrorIcon = styled.div`
  color: #dc2626;
  margin-bottom: 16px;

  svg {
    width: 64px;
    height: 64px;
    margin: 0 auto;
  }
`

const ErrorTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #991b1b;
  margin-bottom: 8px;
`

const ErrorDescription = styled.p`
  color: #dc2626;
  margin-bottom: 16px;
`

const RetryButton = styled.button`
  background-color: #dc2626;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #b91c1c;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #7c3aed;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6d28d9;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const MobileContainer = styled.div`
  padding: 32px;
  text-align: center;
  background-color: white;
`

const MobileContent = styled.div`
  margin-bottom: 24px;
`

const PDFIcon = styled.div`
  svg {
    width: 80px;
    height: 80px;
    margin: 0 auto 16px;
    color: #dc2626;
  }
`

const MobileTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 8px;
`

const MobileDescription = styled.p`
  color: #4b5563;
  margin-bottom: 24px;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const PrimaryButton = styled.button`
  width: 100%;
  background-color: #7c3aed;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #6d28d9;
  }
`

const SecondaryButton = styled.a`
  display: block;
  width: 100%;
  background-color: #4b5563;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  box-sizing: border-box;
  transition: background-color 0.2s;

  &:hover {
    background-color: #374151;
  }
`

const PDFFrame = styled.iframe`
  border: none;
  width: 100%;
  min-height: 100vh;
  height: auto;
`

const FallbackText = styled.p`
  padding: 16px;
  text-align: center;
  color: #4b5563;

  a {
    color: #7c3aed;
    text-decoration: underline;

    &:hover {
      color: #6d28d9;
    }
  }
`

/**
 * PDF 뷰어 컴포넌트
 * 브라우저 내장 PDF 뷰어를 사용하여 PDF 파일을 표시합니다.
 * 모바일과 데스크톱에서 반응형으로 동작합니다.
 */
export default function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    // PDF 파일 존재 여부 확인
    const checkPDFExists = async () => {
      try {
        const response = await fetch(pdfUrl, { method: 'HEAD' })
        if (!response.ok) {
          throw new Error('PDF 파일을 찾을 수 없습니다.')
        }
        setIsLoading(false)
      } catch (error) {
        console.error('PDF 로딩 오류:', error)
        setHasError(true)
        setIsLoading(false)
      }
    }

    checkPDFExists()
  }, [pdfUrl])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingContent>
          <Spinner />
          <LoadingText>PDF를 로딩 중입니다...</LoadingText>
        </LoadingContent>
      </LoadingContainer>
    )
  }

  if (hasError) {
    return (
      <ErrorContainer>
        <ErrorContent>
          <ErrorIcon>
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </ErrorIcon>
          <ErrorTitle>PDF를 불러올 수 없습니다</ErrorTitle>
          <ErrorDescription>
            파일이 존재하지 않거나 접근할 수 없습니다.
          </ErrorDescription>
          <RetryButton onClick={() => window.location.reload()}>
            다시 시도
          </RetryButton>
        </ErrorContent>
      </ErrorContainer>
    )
  }

  return (
    <Container>
      {/* PDF 뷰어 */}
      <div>
        {isMobile ? (
          // 모바일에서는 다운로드 링크와 간단한 뷰어 제공
          <MobileContainer>
            <MobileContent>
              <PDFIcon>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </PDFIcon>
              <MobileTitle>PDF 문서</MobileTitle>
              <MobileDescription>
                모바일에서는 PDF를 다운로드하여 확인하실 수 있습니다.
              </MobileDescription>
            </MobileContent>

            <ButtonGroup>
              <PrimaryButton onClick={handleDownload}>
                PDF 다운로드
              </PrimaryButton>

              <SecondaryButton
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                새 탭에서 열기
              </SecondaryButton>
            </ButtonGroup>
          </MobileContainer>
        ) : (
          // 데스크톱에서는 iframe을 사용한 PDF 뷰어
          <PDFFrame
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&page=1&view=FitV&zoom=page-width`}
            title={title}
            loading="lazy"
          >
            <FallbackText>
              브라우저에서 PDF를 지원하지 않습니다.{' '}
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                여기를 클릭하여 다운로드하세요.
              </a>
            </FallbackText>
          </PDFFrame>
        )}
      </div>
    </Container>
  )
}
