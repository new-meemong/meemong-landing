import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/useIsMobile'

const FooterSection = () => {
  const isMobile = useIsMobile()
  return (
    <Footer>
      <CustomerServiceArea>
        <ForCustomer>
          <span>고객센터</span>
          <PhoneNumber>02-3446-2669</PhoneNumber>
          <ContactRow>
            <ContactItem>
              <ContactLabel>가능시간</ContactLabel>
              <ContactValue>
                평일 09:00~18:00 / 점심시간 12:00~13:30
              </ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>대표 메일</ContactLabel>
              <ContactValue
                style={{
                  cursor: 'pointer',
                  color: '#1252F4',
                }}
              >
                hello@meemong.com
              </ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>고객센터</ContactLabel>
              <ContactValue
                style={{
                  cursor: 'pointer',
                  color: '#1252F4',
                }}
              >
                02-3446-2669
              </ContactValue>
            </ContactItem>
          </ContactRow>
          {/* {!isMobile && (
            <Links>
              <LinkButton href="/faq">
                <span>FAQ</span>
                <Image src="/icons/chevron/right-chevron-gray.svg" alt="arrow" width={9} height={12} />
              </LinkButton>
              <LinkButton href="/inquiry">
                <span>1:1문의</span>
                <Image src="/icons/chevron/right-chevron-gray.svg" alt="arrow" width={9} height={12} />
              </LinkButton>
              <LinkButton href="/notice">
                <span>공지사항</span>
                <Image src="/icons/chevron/right-chevron-gray.svg" alt="arrow" width={9} height={12} />
              </LinkButton>
            </Links>
          )} */}
        </ForCustomer>
        {!isMobile && (
          <ServiceGuide>
            {/* <Column>
              <span>미몽</span>
              <Link href="/about">미몽 서비스 소개</Link>
              <Link href="/ad">광고안내</Link>
            </Column> */}
            <Column>
              <span>다운로드</span>
              <Link href="/android">Android</Link>
              <Link href="/ios">iOS</Link>
            </Column>
            {/* <Column>
              <span>고객센터</span>
              <Link href="/notice">공지사항</Link>
              <Link href="/faq">FAQ</Link>
            </Column> */}
          </ServiceGuide>
        )}
      </CustomerServiceArea>
      <CompanyInfoArea>
        {isMobile ? (
          <>
            <CompanyInfo>
              <CompanyDetails>
                <span>미몽컴퍼니</span>
                <Image
                  src="/icons/divider-vertical.svg"
                  alt="divider"
                  width={1}
                  height={11}
                />
                <span className="address">
                  주소 서울특별시 송파쿠 충민로 10, 8층, S16-F74호
                </span>
              </CompanyDetails>
              <CompanyDetails>
                <span className="label">대표이사</span>
                <span>유주호</span>
              </CompanyDetails>
              <CompanyDetails>
                <span className="label">사업자 등록번호</span>
                <span>370-87-02039</span>
                <Link href="">
                  <span style={{ color: '#1252F4' }}>사업자정보확인</span>
                </Link>
              </CompanyDetails>
              <CompanyDetails>
                <span className="label">개인정보관리 책임자</span>
                <span>장혜진</span>
              </CompanyDetails>
              <Copyright>
                COPYRIGHT ©2022 MEEMONG COMPANY ALL RIGHTS RESERVED.
              </Copyright>
            </CompanyInfo>
            <SocialLinks>
              <Link
                href="https://www.instagram.com/meemong_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>
              {/* <Link href="https://blog.naver.com/meemong_official" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/naver-blog.svg" alt="Naver Blog" width={30} height={30} color="red" />
              </Link> */}
            </SocialLinks>
          </>
        ) : (
          // 기존의 데스크톱 레이아웃
          <>
            <CompanyInfo>
              <Links>
                <Link href="/terms">서비스 이용약관</Link>
                <Image
                  src="/icons/divider-vertical.svg"
                  alt="divider"
                  width={1}
                  height={11}
                />
                <Link href="/privacy">개인정보 보호 및 처리방침</Link>
              </Links>
              <CompanyDetails>
                미몽컴퍼니
                <Image
                  src="/icons/divider-vertical.svg"
                  alt="divider"
                  width={1}
                  height={11}
                />
                <span className="label">주소</span>
                <span className="value">
                  서울특별시 송파쿠 충민로 10, 8층, S16-F74호
                </span>
                <Image
                  src="/icons/divider-vertical.svg"
                  alt="divider"
                  width={1}
                  height={11}
                />
                <span className="label">대표이사</span>
                <span>유주호</span>
              </CompanyDetails>
              <CompanyDetails>
                <span className="label">사업자 등록번호</span>
                <span>370-87-02039</span>
                <Link href="">
                  <span style={{ color: '#1252F4' }}>사업자정보확인</span>
                </Link>
                <Image
                  src="/icons/divider-vertical.svg"
                  alt="divider"
                  width={1}
                  height={11}
                />
                <span className="label">개인정보관리 책임자</span>
                <span>장혜진</span>
              </CompanyDetails>
              <Copyright>
                COPYRIGHT ©2022 meemong Company All Rights Reserved.
              </Copyright>
            </CompanyInfo>
            <SocialLinks>
              <Link
                href="https://www.instagram.com/meemong_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
              </Link>
              {/* <Link href="https://blog.naver.com/meemong_official" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/naver-blog.svg" alt="Naver Blog" width={30} height={30} color="red" />
              </Link> */}
            </SocialLinks>
          </>
        )}
      </CompanyInfoArea>
    </Footer>
  )
}

export default FooterSection

const Footer = styled.footer`
  background-color: #eaeded;
  padding: 40px 20%;

  @media (max-width: 768px) {
    padding: 40px 1.2rem;
  }
`

const CustomerServiceArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`

const ForCustomer = styled.div`
  flex: 1;
  span {
    font-size: 16px;
  }
`

const PhoneNumber = styled.h2`
  font-size: 32px;
  margin: 10px 0;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const ContactRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
`

const ContactLabel = styled.span`
  font-size: 14px;
  color: #303030;
  opacity: 0.4;
  width: 80px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem !important;
  }
`

const ContactValue = styled.span`
  font-size: 14px;
  color: #303030;
  opacity: 0.8;
  margin-left: 10px;

  @media (max-width: 768px) {
    white-space: nowrap;
    margin-left: 0;
    font-size: 0.8rem !important;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px 0;

  a {
    margin-right: 5px;
    color: #303030;
    font-weight: 400;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.5rem;
    a {
      margin-right: 0;
    }
  }
`

const LinkButton = styled.a`
  span {
    font-size: 13px;
  }
  cursor: pointer;
  width: 79px;
  height: 32px;
  border-radius: 4px;
  background-color: #eee;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  /* padding: 0 10px; */
  &:hover {
    background-color: #ddd;
  }
`

const ServiceGuide = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 20%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 10px;
    font-size: 16px;
  }

  a {
    color: #303030;
    opacity: 0.8;
    text-decoration: none;
    margin-bottom: 5px;
    font-size: 13px;

    &:hover {
      text-decoration: underline;
    }
  }
`

const CompanyInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid #ddd;
  padding-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CompanyInfo = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const CompanyDetails = styled.p`
  color: #303030;
  opacity: 0.8;
  font-size: 14px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    color: #666;
    text-decoration: underline;
    text-decoration-color: #1252f4;
  }

  .label {
    font-size: 13px;
    color: #303030;
    opacity: 0.4;
    font-weight: 600;
  }

  .value {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    flex-wrap: wrap;

    .address {
      font-weight: 700;
    }
    .label {
      color: #303030;
      opacity: 0.4;
      font-weight: 400;
      font-size: 0.7rem;
    }
  }
`

const Copyright = styled.p`
  color: #303030;
  font-size: 13px;
  font-weight: 400;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`
