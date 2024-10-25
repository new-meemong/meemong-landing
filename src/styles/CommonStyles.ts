import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 36px;
  padding: 10px 20px;
  font-family: var(--font-geist-sans);
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  line-height: 1;
  &:hover {
    background-color: #f0f0f0;
  }
`

// export const Button = styled.button<{ primary?: boolean }>`
//   background-color: ${(props) => (props.primary ? '#007bff' : '#6c757d')};
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`
