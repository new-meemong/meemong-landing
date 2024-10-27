import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: var(--font-pretandard) !important;
    font-size: 16px;
    background-color: #fff;
  }
`

export default GlobalStyles
