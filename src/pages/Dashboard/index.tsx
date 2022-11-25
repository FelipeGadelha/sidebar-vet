import { Spinner } from "../../components/feedback/Spinner"
import { Container, Content, Title } from "./styles"

export function Dashboard() {
  return (
    <Container>
      <Title>Dashboard</Title>
      <Content>
        <Spinner size="2rem"/>
      </Content>
    </Container>
  )
}
export default Dashboard