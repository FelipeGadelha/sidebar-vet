import { Spinner } from "../../components/feedback/Spinner"
import { Container, Content, Title } from "./styles"

export function Profile() {
  return (
    <Container>
      <Title>Perfil</Title>
      <Content>
        <Spinner size="2rem"/>
      </Content>
    </Container>
  )
}
export default Profile