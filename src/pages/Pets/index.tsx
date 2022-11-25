import { Spinner } from "../../components/feedback/Spinner"
import TabNav from "../../components/navigation/TabNav"
import { Container, Content } from "./styles"

export function Pets() {
  const pages = [
    { href: "/proprietors", title: "Proprietários" },
    { href: "/proprietors/pets", title: "Pets" }
  ]
  return (
    <Container>
      {/* <Title>Pets</Title> */}
      <TabNav links={pages}/>
      <Content>
        <Spinner size="2rem"/>
      </Content>
    </Container>
  )
}
export default Pets