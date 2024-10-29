# 미몽 랜딩페이지

## 프로젝터 src 폴더 구조

![폴더 구조](https://github.com/user-attachments/assets/37224720-305a-46f9-960f-ff82aadcc2db)

### router path는 다음과 같습니다.

- /designer: 디자이너 페이지

- /model: 모델 페이지

### font

- 피그마를 참고하여 Pretendard를 사용했습니다.

### break-point

- 1920px 이하에서도 깨지지 않도록 최대한 반응형으로 작업했습니다.

- 768px을 기준으로 그 이하에서 모바일 화면 작업했습니다.

### 이미지 및 데이터

- 도메인(디자이너, 모델)별로 나누어 public/images 폴더에 저장했습니다.
- /constants/images.ts에서 이미지를 정리하여 사용했습니다.
- /constants/data.ts에서 정적 데이터를 정의해서 사용했습니다.

### API

- /hooks/apis 폴더에 api 요청 훅을 구성해 사용했습니다.

### 컴포넌트

- /components 폴더에 컴포넌트를 구성했습니다.
- /common, /sections에 있는 컴포넌트들은 공통으로 사용되는 컴포넌트들입니다.
- /navigation 링크로 스크롤 이동하는 화면에서 사용하는 컴포넌트입니다.
  - 디테일한 부분들이 달라 디자이너, 모델별 웹/앱 컴포넌트를 따로 구성했습니다.

### styled-components

- styled-components는 CSS in JS여서 SSR 사용이 어렵습니다.
- Next.js에서 styled-components를 쓸 수 있도록 /lib/registry.ts를 추가했습니다.
