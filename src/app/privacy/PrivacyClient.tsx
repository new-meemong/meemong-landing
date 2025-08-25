'use client'

import styled from 'styled-components'

// 스타일드 컴포넌트 정의
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: white;
  padding: 0;
  margin: 0;
`

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.6;
  color: #333;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  color: #1f2937;
  border-bottom: 3px solid #7c3aed;
  padding-bottom: 20px;
`

const Section = styled.section`
  margin-bottom: 40px;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #374151;
  border-left: 4px solid #7c3aed;
  padding-left: 16px;
`

const Paragraph = styled.p`
  margin-bottom: 16px;
  font-size: 1rem;
`

const List = styled.ul`
  margin-bottom: 16px;
  padding-left: 20px;
`

const ListItem = styled.li`
  margin-bottom: 8px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  border: 1px solid #e5e7eb;
`

const TableHeader = styled.th`
  background-color: #f3f4f6;
  padding: 12px;
  text-align: left;
  border: 1px solid #e5e7eb;
  font-weight: 600;
`

const TableCell = styled.td`
  padding: 12px;
  border: 1px solid #e5e7eb;
`

const Highlight = styled.span`
  background-color: #fef3c7;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 500;
`

const ContactInfo = styled.div`
  background-color: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #7c3aed;
  margin: 20px 0;
`

const BoldText = styled.strong`
  font-weight: 600;
`

const DateInfo = styled.div`
  text-align: right;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
`

/**
 * 개인정보처리방침 클라이언트 컴포넌트
 * 개인정보처리방침 내용을 웹페이지로 직접 표시합니다.
 */
export default function PrivacyClient() {
  return (
    <PageContainer>
      <ContentContainer>
        <Title>개인정보처리방침</Title>

        <Section>
          <SectionTitle>제1조 (총칙)</SectionTitle>

          <Paragraph>
            <BoldText>가. 목적</BoldText>
          </Paragraph>
          <List>
            <ListItem>
              1) (주)미몽(이하 &quot;회사&quot;)은 이용자의 &apos;동의를
              기반으로 개인정보를 수집·이용 및 제공&apos;하고 있으며, 이용자의
              권리(개인정보 자기결정권)를 적극적으로 보장합니다.
            </ListItem>
            <ListItem>
              2) 회사는 정보통신서비스 제공자가 준수하여야 하는 대한민국의 관계
              법령 및 개인정보보호 규정, 가이드라인을 준수하고 있으며, 본
              개인정보처리방침은 &quot;미몽&quot; 사용 서비스(이하
              &apos;서비스&apos;)에 적용됩니다.
            </ListItem>
          </List>

          <Paragraph>
            <BoldText>나. 개인정보의 수집·이용</BoldText>
          </Paragraph>
          <List>
            <ListItem>
              1) 회사는 회원의 개인정보를 필요한 시점에 따라 최소한으로
              수집하고, 수집한 정보는 사전 고지한 범위 내에서만 사용하며 사전
              동의 없이 목적과 범위를 초과하여 이용하거나 외부에 공개하지
              않습니다.
            </ListItem>
            <ListItem>
              2) 다만, 법령의 규정에 의거하거나 수사기관 및 행정기관이 수사 또는
              조사의 목적으로 법령에 정해진 절차와 방법에 따라 요청한 경우에는
              내부 절차를 거쳐 최소한의 정보가 동의 없이 제공될 수 있습니다.
            </ListItem>
          </List>

          <Paragraph>
            <BoldText>다. 개인정보처리방침의 효력 및 변경</BoldText>
          </Paragraph>
          <List>
            <ListItem>
              1) 회사의 &apos;개인정보처리방침&apos;은 관련 법률 및 지침의 변경
              또는 내부 운영 방침의 변경 등으로 인하여 개정될 수 있습니다.
            </ListItem>
            <ListItem>
              2) &apos;개인정보처리방침&apos;이 변경될 경우 변경사항은
              제12조에서 명시한 고지의 의무에 따라 공지사항 또는 이메일 등의
              기타의 방법을 통해 공지해드립니다.
            </ListItem>
            <ListItem>
              3) 변경사항은 홈페이지를 방문하여 확인하실 수 있으며, 변경 내용에
              의문이 있으신 경우에는 언제라도 고객센터를 통해 문의하실 수
              있습니다.
            </ListItem>
            <ListItem>
              4) 개인정보처리방침과 이용약관의 개인정보 관련 항목 중, 이용약관의
              내용이 우선하여 적용됩니다.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>제2조 (개인정보의 수집∙이용 및 보유)</SectionTitle>

          <Paragraph>
            <BoldText>가. 개인정보의 수집 방법</BoldText>
          </Paragraph>
          <Paragraph>
            회사는 다음과 같은 방법으로 개인정보를 수집할 수 있습니다.
          </Paragraph>
          <List>
            <ListItem>
              1) 회원가입 및 서비스 이용과정에서 이용자가 개인정보 수집에 대해
              동의하고 직접 정보를 입력하는 경우
            </ListItem>
            <ListItem>
              2) 제휴 서비스 또는 단체 등으로부터 개인정보를 제공받은 경우
            </ListItem>
            <ListItem>
              3) 홈페이지, 모바일 애플리케이션, 모바일 웹페이지, 서면, 팩스,
              전화, 고객센터 상담 등
            </ListItem>
            <ListItem>4) 온·오프라인에서 진행되는 이벤트/행사 등 참여</ListItem>
            <ListItem>5) 생성 정보 수집 툴을 통한 자동 수집</ListItem>
          </List>

          <Paragraph>
            <BoldText>나. 개인정보의 수집·이용 목적</BoldText>
          </Paragraph>
          <Paragraph>
            회사는 개인정보를 다음의 목적을 위해 수집∙이용합니다.{' '}
            <Highlight>
              수집한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용
              목적이 변경될 시에는 사전동의를 구하겠습니다.
            </Highlight>
          </Paragraph>
          <List>
            <ListItem>
              1) 플랫폼 회원가입 및 서비스 이용 관리
              <br />
              회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
              회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스
              부정이용 방지, 만 14세 미만 아동 개인정보 수집 시 법정대리인 동의
              여부 확인, 만 19세 미만의 전문가 전환 신청 시 법정대리인 동의 여부
              확인, 서비스 이용 관련 각종 고지·통지, 고충처리, 분쟁 조정을 위한
              기록 보존 등
            </ListItem>
            <ListItem>
              2) 민원사무 처리
              <br />
              민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지,
              처리결과 통보 등
            </ListItem>
            <ListItem>
              3) 재화 또는 서비스 제공
              <br />
              물품 배송, 서비스 제공, 청구서 발송, 콘텐츠 제공, 맞춤 서비스
              제공, 본인인증, 연령 인증, 요금 결제·정산, 채권추심 등
            </ListItem>
            <ListItem>
              4) 마케팅 및 광고에의 활용
              <br />
              신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보
              제공 및 참여 기회 제공, 인구통계학적 특성에 따른 서비스 제공 및
              광고 게재, 서비스의 유효성 확인, 접속 빈도 파악 또는 회원의 서비스
              이용에 대한 통계 등
            </ListItem>
            <ListItem>
              5) 초상권사용동의를 작성한 모델의 경우
              <br />
              해당 저작권을 보유한 디자이너의 요청에 따른 경우
            </ListItem>
          </List>

          <Paragraph>
            <BoldText>다. 개인정보의 수집 항목 및 보유</BoldText>
          </Paragraph>
          <Paragraph>
            1) 회사는 텍스트, 이미지, 음성 등의 개인정보를 수집 및 이용할 수
            있으며, 필수정보(해당 서비스의 본질적 기능을 수행하기 위한 정보),
            선택정보(특화 서비스를 제공하기 위해 추가 수집하는 정보로, 입력하지
            않아도 서비스 이용 제한 없음) 내에서 최소한의 개인정보만을
            수집합니다. 회사가 수집하는 정보 및 보유기간에 대한 상세한 내용은
            아래 표와 같습니다.
          </Paragraph>

          <Paragraph>
            <BoldText>[공통]</BoldText>
          </Paragraph>
          <Table>
            <thead>
              <tr>
                <TableHeader>분류</TableHeader>
                <TableHeader>수집·이용항목</TableHeader>
                <TableHeader>수집·이용목적</TableHeader>
                <TableHeader>보유·이용 기간</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell></TableCell>
                <TableCell>
                  -쿠키, 서비스 이용기록(방문일시, IP, 불량 이용 기록 등),
                  기기정보(고유기기식별값, OS버전)
                  <br />
                  -IP주소, 쿠키, 접속일시, 모바일 기기정보(UDID, 광고식별자 등),
                  메시지 ID, 안심번호 서비스 이용 기록(음성 녹취), 기타 서비스
                  이용 기록
                </TableCell>
                <TableCell>
                  - 서비스 이용 기록 통계 분석 등 품질 관리
                  <br />
                  - 소비자보호를 위한 법적 의무 준수
                  <br />
                  - 부정이용 확인∙방지관리
                  <br />
                  - 회원 간 분쟁 조정
                  <br />- 상품(경품) 발송을 위한 발송정보 확인
                </TableCell>
                <TableCell>
                  -회원 탈퇴 또는 동의 철회 시 삭제 원칙
                  <br />
                  - 서비스 이용기록은 3개월간 보관(통신비밀보호법)
                  <br />- 안심번호 서비스 이용기록(음성 녹취 파일)은 1개월간
                  보관
                </TableCell>
              </tr>
            </tbody>
          </Table>

          <Paragraph>
            <BoldText>[모델용]</BoldText>
          </Paragraph>
          <Table>
            <thead>
              <tr>
                <TableHeader>분류</TableHeader>
                <TableHeader>수집·이용항목</TableHeader>
                <TableHeader>수집·이용목적</TableHeader>
                <TableHeader>보유·이용 기간</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>필수정보</TableCell>
                <TableCell>
                  성명, 이메일, 프로필정보(닉네임, 프로필사진 등)
                </TableCell>
                <TableCell>
                  -회원 식별 및 가입의사 확인, 본인확인, 부정이용 방지
                  <br />
                  -서비스의 원활한 운영에 지장을 주는 행위(계정 도용 및 부정.
                  이용 행위 등 포함)에 대한 방지 및 제재
                  <br />
                  -유료 서비스 구매 및 이용 시 요금 정산
                  <br />- 공지사항 전달
                </TableCell>
                <TableCell>
                  -회원탈퇴 또는 동의 철회 시 삭제 원칙
                  <br />
                  -부정이용 방지를 위한 정보(ID, 불량 이용 기록)는 탈퇴DB에서
                  6개월 후 삭제
                  <br />
                  -불만 또는 분쟁처리에 관한 기록은 3년간 보관(전자상거래
                  등에서의 소비자보호에 관한 법률)
                </TableCell>
              </tr>
              <tr>
                <TableCell></TableCell>
                <TableCell>예약자 이름, 예약자 휴대폰 번호</TableCell>
                <TableCell>시술예약</TableCell>
                <TableCell></TableCell>
              </tr>
              <tr>
                <TableCell></TableCell>
                <TableCell>
                  당첨자 이름, 주소, 연락처, 이메일, (제세공과금 처리 시)
                  주민등록번호
                </TableCell>
                <TableCell>
                  이벤트 당첨자 대상 경품지급 및 제세공과금 처리
                </TableCell>
                <TableCell>
                  경품지급 및 제세공과금 처리완료 시
                  <br />※ 소득세법 제164조(지급명세서의 제출)
                </TableCell>
              </tr>
              <tr>
                <TableCell></TableCell>
                <TableCell>
                  휴대폰번호, 현금영수증 카드번호, 사업자번호
                </TableCell>
                <TableCell>현금영수증 발행 및 관리</TableCell>
                <TableCell>
                  5년간 보관
                  <br />※ 소득세법 제162조의3(현금영수증가맹점 가입·발급의무 등)
                </TableCell>
              </tr>
              <tr>
                <TableCell>선택정보</TableCell>
                <TableCell>이메일, 휴대폰 번호</TableCell>
                <TableCell>고객문의사항 또는 불만 처리</TableCell>
                <TableCell>고객문의 처리 시</TableCell>
              </tr>
              <tr>
                <TableCell></TableCell>
                <TableCell>
                  예약번호, 카카오톡 계정, 예약자 이름, 예약자 휴대폰 번호
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </tr>
              <tr>
                <TableCell></TableCell>
                <TableCell>
                  성별, 생년월일, 서비스 이용내역, 서비스 내 결제내역
                </TableCell>
                <TableCell>
                  -이벤트/행사 참여 확인 및 정보전달, 마케팅 및 광고 등에 활용
                  <br />
                  -컨텐츠 추천 및 통계, 매장/디자이너 평가 등
                </TableCell>
                <TableCell>회원탈퇴 또는 동의 철회 시</TableCell>
              </tr>
            </tbody>
          </Table>

          <Paragraph>
            <BoldText>[디자이너용]</BoldText>
          </Paragraph>
          <Table>
            <thead>
              <tr>
                <TableHeader>분류</TableHeader>
                <TableHeader>수집·이용항목</TableHeader>
                <TableHeader>수집·이용목적</TableHeader>
                <TableHeader>보유·이용 기간</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>필수정보</TableCell>
                <TableCell>
                  성명, 이메일, 프로필정보(닉네임, 프로필사진, 졸업증명서,
                  재직증명서 등)
                  <br />
                  ※단, 프로필 관련 선택 정보는 선택정보로 관리
                </TableCell>
                <TableCell>
                  -회원 식별 및 가입의사 확인, 본인확인, 부정이용 방지
                  <br />
                  -서비스의 원활한 운영에 지장을 주는 행위(계정 도용 및 부정.
                  이용 행위 등 포함)에 대한 방지 및 제재
                  <br />- 공지사항 전달
                </TableCell>
                <TableCell>
                  -회원탈퇴 또는 동의 철회 시
                  <br />
                  -부정이용 방지를 위한 정보(ID, 불량 이용 기록)는 탈퇴DB에서
                  6개월 후 삭제
                  <br />
                  -불만 또는 분쟁처리에 관한 기록은 3년간 보관(전자상거래
                  등에서의 소비자보호에 관한 법률)
                </TableCell>
              </tr>
              <tr>
                <TableCell></TableCell>
                <TableCell>
                  대표자 이름, 대표자 생년월일, 사업자등록번호, 계좌번호,
                  예금주, 관리자 이름, 관리자 휴대폰번호, 통장사본,
                  사업자등록증, 영업신고증, 미용사면허증(이름, 생년월일, 사진)
                </TableCell>
                <TableCell>
                  -서비스 이용계약
                  <br />
                  -유료 서비스 구매 및 이용 시 요금 정산
                  <br />
                  -이벤트/행사 참여 확인 및 정보전달, 마케팅 및 광고 등에 활용
                  <br />
                  -공지사항 전달
                </TableCell>
                <TableCell>서비스 이용 종료 시</TableCell>
              </tr>
              <tr>
                <TableCell></TableCell>
                <TableCell>
                  상호명, 문의자 이름, 전화번호, 휴대폰 번호
                </TableCell>
                <TableCell>서비스 이용 상담신청 및 마케팅에 활용</TableCell>
                <TableCell>
                  계약상담 종료 시 (마케팅 수신동의한 경우에는 동의철회 시까지)
                </TableCell>
              </tr>
              <tr>
                <TableCell></TableCell>
                <TableCell>
                  대표자 이름, 대표자 생년월일, 대표자 휴대폰번호,
                  고유식별정보(주민등록번호, 운전면허증 일련번호,
                  외국인등록번호), 신분증(주민등록증, 운전면허증, 외국인등록증),
                  국적, 성별
                </TableCell>
                <TableCell>
                  -서비스 이용계약을 위한 고객거래확인
                  <br />
                  -회원 식별 및 가입의사 확인, 본인확인, 부정이용 방지
                  <br />
                  -관계법령: 「특정 금융거래정보의 보고 및 이용 등에 관한 법률」
                  제5조의2
                </TableCell>
                <TableCell>서비스 이용 종료 시</TableCell>
              </tr>
              <tr>
                <TableCell>기타</TableCell>
                <TableCell>
                  업태, 종목, 전자세금계산서 발급용 이메일, 사업장 혹은 담당자
                  연락처
                </TableCell>
                <TableCell>세금계산서 등 발행</TableCell>
                <TableCell>
                  -서비스 이용 종료 시
                  <br />
                  -과세신고 등 완료 후
                </TableCell>
              </tr>
            </tbody>
          </Table>

          <Paragraph>
            2) 수집한 개인정보는 법령에 따른 개인정보 이용·보유기간 또는
            정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 이용·보유기간
            내에서 처리 및 보관합니다. (전항의 각 <BoldText>[표]</BoldText>에도
            불구, 법령에서 정한 기간이 있다면 해당 기간동안 보관합니다)
          </Paragraph>

          <Paragraph>
            3) 회사는 전자상거래 등에서의 소비자보호에 관한 법률, 국세기본법,
            전자금융거래법 등 관련 법령에 따라 주민등록번호 및 은행 계좌번호의
            수집∙보관이 불가피한 경우에는 회원에게 사전 고지하여 정보를 수집할
            수 있습니다.
          </Paragraph>

          <Paragraph>
            4) 회사는 회원의 기본적 인권을 침해할 우려가 있는 민감한 정보(인종
            및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향, 범죄기록, 건강
            상태 등)는 회원의 동의 또는 법령의 규정에 의한 경우 이외에는
            수집하지 않습니다.
          </Paragraph>

          <Paragraph>
            5) 회사는 만 14세 이상인 경우에 회원가입을 가능하도록 하며
            개인정보의 수집·이용에 법정대리인의 동의가 필요한 만 14세 미만
            아동의 개인정보는 원칙적으로 수집하지 않습니다. 단, 법정대리인의
            동의를 얻은 경우에는 만 14세 미만 회원의 개인정보를 수집·이용할 수
            있으며, 이 경우 법정대리인의 이름, 생년월일, 휴대폰 번호, 이메일
            주소, 본인확인 값(CI, DI)을 추가로 수집할 수 있습니다.
          </Paragraph>

          <Paragraph>
            6) 회사는 웹상에 공개 목적이나 대상의 제한 없이 합법적으로 공개된
            정보 및 회원의 서비스 이용 기록(로그)과 메타데이터와 같은 정보를
            수집하여 회원에게 보다 좋은 서비스를 제공할 수 있도록 분석 및
            활용하고 있습니다. 단 이렇게 수집된 정보는 제3자에게 제공하거나
            공유하지 않습니다.
          </Paragraph>

          <Paragraph>
            7) 회사가 제공하는 서비스 이용과정에서 회원 본인이 자발적으로 공개한
            개인정보 및 게시물과 관련한 권리와 책임은 작성자 본인에게 있습니다.
            자발적으로 공개된 정보는 보호받기 어려우며 타인에 의해 무단으로
            수집되거나 처리될 수 있으며, 이로 인해 발생한 손실이나 문제는
            전적으로 본인에게 있음을 유념하시기 바라며, 서비스 이용과정에서
            개인에 관한 정보는 공개되지 않도록 심혈을 기울여 주시기 바랍니다.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>제3조 (개인정보 수집 동의 거부)</SectionTitle>
          <Paragraph>
            회원은 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며,
            동의를 거부할 경우의 별도의 불이익은 없으나, 필수 동의 사항에 동의를
            거부할 경우에는 서비스 이용이 불가능하거나 서비스 이용 목적에 따른
            서비스 제공에 제한이 따를 수 있으며, 선택 동의 사항에의 동의 거부 시
            선택 동의항목을 이용하여야 제공받을 수 있는 서비스의 경우에는 전부
            또는 일부 이용이 제한될 수 있습니다.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>제4조 (개인정보의 제3자 제공)</SectionTitle>
          <Paragraph>
            회사는 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조
            및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공하며, 그 밖에
            이용자의 별도 동의가 있거나 법령에 규정된 경우를 제외하고는
            제3자에게 제공하지 않습니다.
          </Paragraph>

          <Paragraph>
            <BoldText>[개인정보 제3자 제공 현황]</BoldText>
          </Paragraph>
          <Table>
            <thead>
              <tr>
                <TableHeader>제공목적</TableHeader>
                <TableHeader>제공받는 자</TableHeader>
                <TableHeader>제공 항목</TableHeader>
                <TableHeader>제공받는 자의 보유·이용 기간</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>고객센터 운영 및 고객상담</TableCell>
                <TableCell>주식회사 미몽컴퍼니</TableCell>
                <TableCell>
                  1. 이메일, 닉네임
                  <br />
                  2. 채팅로그
                </TableCell>
                <TableCell>서비스 제공목적 달성 후 파기</TableCell>
              </tr>
            </tbody>
          </Table>
        </Section>

        <Section>
          <SectionTitle>제5조 (개인정보의 처리 위탁)</SectionTitle>
          <Paragraph>
            <BoldText>
              가. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보
              처리 업무를 위탁하고 있습니다.
            </BoldText>
          </Paragraph>
          <Table>
            <thead>
              <tr>
                <TableHeader>수탁자</TableHeader>
                <TableHeader>위탁 업무의 내용</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </tr>
              <tr>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </tr>
            </tbody>
          </Table>

          <Paragraph>
            <BoldText>
              나. 회사는 위탁계약 체결 시 개인정보 보호법 제25조에 따라 위탁업무
              수행 목적 외 개인정보 처리 금지, 기술적․관리적 보호 조치, 재위탁
              제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을
              계약서 등 문서에 명시하고 있습니다. 위와 같이 위탁 처리하는 정보는
              원활한 서비스를 제공하기 위하여 필요한 최소한의 정보에 국한됩니다.
            </BoldText>
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>제6조 (개인정보 파기절차 및 방법)</SectionTitle>
          <Paragraph>
            회원의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면
            지체 없이 파기합니다.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>
            제7조 (회원 및 법정대리인의 권리·의무 행사방법)
          </SectionTitle>

          <Paragraph>
            <BoldText>가. 회원의 권리</BoldText>
          </Paragraph>
          <Paragraph>
            회원은 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
          </Paragraph>
          <List>
            <ListItem>
              1) 정보주체는 언제든지 자신의 개인정보를 조회하고 수정할 수
              있습니다.
            </ListItem>
            <ListItem>
              2) 정보주체는 언제든지 개인정보 열람, 정정, 삭제, 처리정지 등을
              요청할 수 있습니다.
            </ListItem>
            <ListItem>
              3) 정보주체는 회원 탈퇴 절차를 통하여 개인정보 제공에 대한 동의를
              철회할 수 있습니다.
            </ListItem>
            <ListItem>
              4) 제2,3항에 따른 권리 행사는 개인정보 보호법 시행령 제41조제1항에
              따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 요청하실 수 있으며
              회사는 요청자가 본인인지를 확인하고 지체 없이 조치하겠습니다.
            </ListItem>
            <ListItem>
              5) 회원이 개인정보에 대한 열람·정정·삭제·처리정지를 요청한 경우,
              회사는 본 조 제6항의 경우를 제외하고 요청을 완료할 때까지 당해
              개인정보를 이용하거나 제공하지 않습니다. 다만, 이전의 개인정보가
              이미 제공된 경우에는 처리 결과를 제3자에게 통지하여 정정할 수
              있습니다.
            </ListItem>
            <ListItem>
              6) 회사는 제1,2항의 요청이 개인정보보호법 제35조 4항, 제27조 2항에
              해당하는 경우 해당 요청을 거절할 수 있습니다.
            </ListItem>
          </List>

          <List>
            <ListItem>
              - 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
              불가피한 경우
            </ListItem>
            <ListItem>
              - 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그
              밖의 이익을 부당하게 침해할 우려가 있는 경우
            </ListItem>
            <ListItem>
              - 공공기관이 개인정보를 처리하지 아니하면 다른 법률에서 정하는
              소관 업무를 수행할 수 없는 경우
            </ListItem>
            <ListItem>
              - 개인정보를 처리하지 아니하면 정보주체와 약정한 서비스를 제공하지
              못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 그 계약의 해지
              의사를 명확하게 밝히지 아니한 경우 등
            </ListItem>
          </List>

          <Paragraph>
            7) 제1,2,3항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을
            받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법
            시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
          </Paragraph>

          <Paragraph>
            <BoldText>나. 법정 대리인의 권리</BoldText>
          </Paragraph>
          <List>
            <ListItem>
              1) 회사는 아동의 개인정보를 보호하기 위하여, 만 14세 미만의 아동의
              경우 신규 회원 가입을 제한하고 있습니다. 단, 법정대리인의 동의를
              얻은 경우 해당 아동의 개인정보 수집·이용이 가능하며, 법정대리인에
              대하여 아래와 같은 권리를 보장합니다.
            </ListItem>
            <ListItem>
              2) 법정대리인은 14세 미만 아동의 개인정보에 대해 열람, 정정, 삭제,
              처리정지 등을 요청할 수 있으며, 수집·이용 또는 제공에 대한 동의를
              철회할 수 있습니다.
            </ListItem>
            <ListItem>
              3) 제2항에 따른 권리 행사를 위해 개인정보 보호법 시행규칙 별지
              제11호 서식에 따른 위임장을 제출하셔야 하며, 회사는 요청자가
              진정한 법정대리인인지를 확인하고 지체 없이 조치하겠습니다.
            </ListItem>
          </List>

          <Paragraph>
            <BoldText>다. 개인정보의 철회 및 거부권 행사, 탈퇴 방법</BoldText>
          </Paragraph>
          <Paragraph>
            개인정보의 열람 및 정정 범위, 동의 철회, 광고성 정보 전송에 대한
            동의 거부권 행사, 회원 탈퇴 방법은 아래와 같습니다.
          </Paragraph>

          <Paragraph>
            <BoldText>1) 개인정보의 열람 및 정정 범위</BoldText>
          </Paragraph>
          <List>
            <ListItem>- 회사가 보유하고 있는 회원의 개인정보</ListItem>
            <ListItem>- 회사가 이용하거나 제3자에 제공한 개인정보</ListItem>
            <ListItem>- 개인정보의 수집, 이용, 제공 등의 동의 현황</ListItem>
          </List>

          <Table>
            <thead>
              <tr>
                <TableHeader>홈페이지(WEB / APP)</TableHeader>
                <TableHeader>www.meemong.com</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>고객센터</TableCell>
                <TableCell>02-3446-2669</TableCell>
              </tr>
            </tbody>
          </Table>

          <Paragraph>
            <BoldText>
              2) 개인정보의 열람·정정 및 동의 철회, 광고성 정보 전송에 대한 동의
              거부권 행사 방법
            </BoldText>
          </Paragraph>
          <Paragraph>
            개인정보의 열람·정정 및 동의 철회, 광고성 정보 전송에 대한 동의
            거부권 행사는 위의 1) 항목과 동일한 방법으로 진행됩니다.
          </Paragraph>

          <Paragraph>
            <BoldText>3) 회원 탈퇴</BoldText>
          </Paragraph>
          <Paragraph>회원 탈퇴는 아래의 방법으로 진행됩니다.</Paragraph>

          <Table>
            <thead>
              <tr>
                <TableHeader>홈페이지(WEB / APP)</TableHeader>
                <TableHeader>www.meemong.com</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>고객센터</TableCell>
                <TableCell>02-3446-2669</TableCell>
              </tr>
            </tbody>
          </Table>

          <Paragraph>
            개인정보 주체는 위의 수단 외에, 행정안전부의 &apos;개인정보보호
            종합지원 포털&apos; 웹사이트(www.privacy.go.kr)를 통하여서도
            개인정보 열람 청구를 하실 수 있습니다.
          </Paragraph>

          <Paragraph>
            <BoldText>라. 회원(또는 법정대리인)의 의무</BoldText>
          </Paragraph>
          <Paragraph>
            회원(또는 법정대리인)는 개인정보주체로서 개인정보를 보호받을 권리와
            함께 스스로를 보호할 의무가 있습니다.
          </Paragraph>
          <List>
            <ListItem>
              1) 회원은 개인정보를 항상 최신의 상태로 유지해야 합니다.
            </ListItem>
            <ListItem>
              2) 회원은 ID, 비밀번호, 접근매체 등 개인정보가 유출되지 않도록
              주의해야 하며 제3자에게 개인정보 및 계정 정보를 양도하거나 대여할
              수 없습니다.
            </ListItem>
            <ListItem>
              3) 회원은 회사의 개인정보보호정책에 따라 보안을 위한 비밀번호의
              주기적 변경에 협조해야 합니다.
            </ListItem>
            <ListItem>
              4) 회원은 &quot;정보통신망 이용촉진 및 정보보호 등에 관한
              법률&quot;, &quot;개인정보 보호법&quot;, &quot;주민등록법&quot; 등
              기타 개인정보에 관한 법률을 준수하여야 합니다.
            </ListItem>
            <ListItem>
              5) 타인의 개인정보를 도용하여 회원가입하거나 주민등록번호 등을
              도용하여 물품 거래를 시도·실행한 경우에는 회원자격 상실과 함께
              주민등록법에 의거하여 처벌될 수 있습니다.
            </ListItem>
            <ListItem>
              6) 본 조의 의무를 다하지 않아 문제가 발생한 경우, 모든 책임은
              회원에게 있으며 회사는 책임지지 않습니다.
            </ListItem>
          </List>

          <List>
            <ListItem>
              - 회원 본인이 ID, 비밀번호, 접근매체 등의 양도·대여·분실을 하는
              경우
            </ListItem>
            <ListItem>
              - 로그인 상태에서의 이석 등으로 제3자가 회원의 정보를 이용할 수
              있게 된 경우
            </ListItem>
          </List>

          <Paragraph>
            7) 또한 회원 본인의 부주의나 관계법령에 의한 보안조치로 차단할 수
            없는 방법이나 기술을 사용한 해킹 등 이는 회사가 상당한 주의를
            기울였음에도 불구하고 통제할 수 없는 상황에서 발생한 문제에 대해서는
            회사는 책임지지 않습니다.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>
            제8조 (개인정보의 기술적·관리적 보호 조치)
          </SectionTitle>

          <Paragraph>
            <BoldText>가. 기술적 조치</BoldText>
          </Paragraph>
          <List>
            <ListItem>
              1) 회원의 개인정보는 비밀번호에 의해 보호되며, 파일 및 전송
              데이터를 암호화하거나 파일 잠금 기능(Lock)을 사용하여 중요한
              데이터는 별도의 보안 기능을 통해 보호합니다.
            </ListItem>
            <ListItem>
              2) 회원의 비밀번호는 일 방향 암호화하여 저장 및 관리되고 있으며,
              개인정보의 확인 및 변경은 비밀번호를 알고 있는 본인에 의해서만
              가능합니다.
            </ListItem>
            <ListItem>
              3) 회사는 백신 프로그램을 이용하여 컴퓨터 바이러스에 의한 피해를
              방지하기 위한 조치를 취하고 있습니다. 백신 프로그램은 주기적으로
              업데이트되며 갑작스러운 바이러스가 출현할 경우 백신이 나오는 즉시
              이를 제공함으로써 개인정보가 침해되는 것을 방지하고 있습니다.
            </ListItem>
            <ListItem>
              4) 회사는 암호 알고리즘을 이용하여 네트워크 상의 개인정보를
              안전하게 전송할 수 있는 보안장치(SSL 등)를 채택하고 있습니다.
            </ListItem>
            <ListItem>
              5) 회사는 해킹 등 외부 침입에 대비하여 각 서버마다 침입차단시스템
              및 취약점 분석 시스템 등을 이용하여 보안에 만전을 기하고 있습니다.
            </ListItem>
          </List>

          <Paragraph>
            <BoldText>나. 관리적 조치</BoldText>
          </Paragraph>
          <List>
            <ListItem>
              1) 회사는 회원의 개인정보에 대한 접근 권한을 최소한의 인원으로
              제한하고 있습니다. 그 최소한의 인원에 해당하는 자는 다음과
              같습니다.
            </ListItem>
          </List>

          <List>
            <ListItem>
              - 회원를 직접 상대로 하여 마케팅 업무를 수행하는 자
            </ListItem>
            <ListItem>
              - 개인정보보호책임자 및 담당자 등 개인정보 보호업무를 수행하는 자
            </ListItem>
            <ListItem>- 기타 업무 상 개인정보의 취급이 불가피한 자</ListItem>
          </List>

          <List>
            <ListItem>
              2) 개인정보를 취급하는 직원을 대상으로 새로운 보안 기술 습득 및
              개인정보 보호 의무 등에 관해 정기적인 사내 교육 및 외부 위탁교육을
              실시하고 있습니다.
            </ListItem>
            <ListItem>
              3) 입사 시 보안서약서를 통하여 사람에 의한 정보 유출을 사전에
              방지하고 개인정보보호 관련 규정에 대한 이행사항 및 직원의 준수
              여부를 감사하기 위한 내부 절차를 마련하고 있습니다.
            </ListItem>
            <ListItem>
              4) 개인정보 관련 취급자의 업무 인수인계는 보안이 유지된 상태에서
              철저하게 이뤄지고 있으며 입사 및 퇴사 후 개인정보 사고에 대한
              책임을 명확히 하고 있습니다.
            </ListItem>
            <ListItem>
              5) 회사는 회원 개인의 실수나 회사의 귀책사유 없이 발생하는
              개인정보관련 문제에 대해서는 책임을 지지 않습니다. 회원 개개인이
              본인의 개인정보를 보호하기 위해서 자신의 아이디와 비밀번호를
              적절하게 관리하며 이에 대한 책임을 져야 합니다.
            </ListItem>
            <ListItem>
              6) 그 외 내부 관리자의 실수나 기술 관리 상의 사고로 인해
              개인정보의 상실, 유출, 변조, 훼손이 유발될 경우 회사는 즉각 사실을
              알리고 적절한 대책과 보상을 강구할 것입니다.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>제9조 (개인정보 보호책임자)</SectionTitle>
          <Paragraph>
            회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
            처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와
            같이 개인정보 보호책임자를 지정하고 있습니다. 개인정보를 보호하는 데
            있어 회원에게 고지한 사항들에 반하여 사고가 발생할 시에 원칙적으로
            개인정보보호책임자가 책임을 지나, 기술적인 보완조치를 했음에도
            불구하고, 해킹 등 기본적인 네트워크 상의 위험성에 의해 발생하는
            예기치 못한 사고로 인한 정보의 훼손 및 방문자가 작성한 게시물에 의한
            각종 분쟁에 관해서는 책임을 지지 않습니다.
          </Paragraph>

          <ContactInfo>
            <Paragraph>
              <BoldText>[개인정보 보호책임자]</BoldText>
            </Paragraph>
            <Paragraph>책임자 : 유주혁</Paragraph>
            <Paragraph>직위 : 팀장</Paragraph>
            <Paragraph>연락처 : 010-8951-1780</Paragraph>
          </ContactInfo>

          <ContactInfo>
            <Paragraph>
              <BoldText>[개인정보 민원처리 담당부서]</BoldText>
            </Paragraph>
            <Paragraph>부서 : 경영지원</Paragraph>
            <Paragraph>연락처 : 010-8951-1780</Paragraph>
          </ContactInfo>
        </Section>

        <Section>
          <SectionTitle>제10조 (권익 침해에 대한 구제방법)</SectionTitle>
          <Table>
            <thead>
              <tr>
                <TableHeader>기관</TableHeader>
                <TableHeader>연락처</TableHeader>
                <TableHeader>홈페이지</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>개인정보침해 신고센터</TableCell>
                <TableCell>(국번없이) 118</TableCell>
                <TableCell>https://privacy.kisa.or.kr/</TableCell>
              </tr>
              <tr>
                <TableCell>개인정보 분쟁조정위원회</TableCell>
                <TableCell>(국번없이) 1833-6972</TableCell>
                <TableCell>https://www.kopico.go.kr/</TableCell>
              </tr>
              <tr>
                <TableCell>대검찰청 사이버범죄수사단</TableCell>
                <TableCell>(국번없이) 1301</TableCell>
                <TableCell>http://www.spo.go.kr/</TableCell>
              </tr>
              <tr>
                <TableCell>경찰청 사이버안전지킴이</TableCell>
                <TableCell>(국번없이) 182</TableCell>
                <TableCell>https://www.police.go.kr/</TableCell>
              </tr>
            </tbody>
          </Table>
          <Paragraph>
            회사의 자체적인 개인정보 불만 처리, 피해 구제 결과에 만족하지
            못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>제11조 (고지의 의무)</SectionTitle>
          <Paragraph>
            <BoldText>
              가. 본 방침은 정부나 회사의 정책이 변경됨에 따라 내용의 추가 및
              삭제, 수정이 있을 수 있으며, 이 경우 시행 7일 전에 홈페이지 또는
              이메일 등을 통해 사전 공지하고 사전 공지가 곤란한 경우 지체 없이
              공지합니다.
            </BoldText>
          </Paragraph>
          <Paragraph>
            <BoldText>
              나. 회원는 개인정보의 수집, 이용, 제공, 위탁 등과 관련한 위의
              사항에 대하여 원하지 않는 경우 동의를 거부할 수 있습니다. 다만,
              회원이 동의를 거부하는 경우 서비스의 전부 또는 일부를 이용할 수
              없음을 알려드립니다.
            </BoldText>
          </Paragraph>
          <Paragraph>
            <BoldText>
              다. 회사가 변경 내용의 고지를 통해 안내한 변경 적용일까지 회원이
              명시적으로 거부 의사를 표시하지 않는 경우, 변경 내용에 동의한
              것으로 간주합니다.
            </BoldText>
          </Paragraph>
          <Paragraph>
            <BoldText>
              라. 또한 당사는 개인정보의 수집 및 활용, 제3자 제공 등 정보통신망
              이용촉진 및 정보보호 등에 관한 법률 등 관련 법령에 따라 회원의
              별도 동의가 필요한 사항과 관련된 내용이 추가, 변경되는 경우에는
              관련 법령에 따른 회원의 별도 동의를 받습니다.
            </BoldText>
          </Paragraph>
        </Section>

        <DateInfo>
          <Paragraph>
            <BoldText>공고일자 : 2025. 06. 30.</BoldText>
          </Paragraph>
          <Paragraph>
            <BoldText>시행일자 : 2025. 07. 01.</BoldText>
          </Paragraph>
        </DateInfo>
      </ContentContainer>
    </PageContainer>
  )
}
