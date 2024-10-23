import { css } from 'styled-components'

export const mobile = (styles: TemplateStringsArray | string) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`

export const desktop = (styles: TemplateStringsArray | string) => css`
  @media (min-width: 769px) {
    ${styles}
  }
`
