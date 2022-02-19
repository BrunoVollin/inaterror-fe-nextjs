import styled from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyles'
import Form from "../src/Form"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <>
    <h1>Bom dia</h1>
    <Form />
  </>
}
