import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 기본 폰트 설정 */
  html, body {
    font-family: var(--font-geist-sans);
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
  }
`

export default GlobalStyle
