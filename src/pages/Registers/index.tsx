import { Spinner } from "../../components/feedback/Spinner"
import { Container, Content, Title } from "./styles"

export function Registers() {
  return (
    <Container>
      <Title>Registros</Title>
      <Content>
        <Spinner size="2rem"/>
      </Content>
    </Container>
  )
}
export default Registers