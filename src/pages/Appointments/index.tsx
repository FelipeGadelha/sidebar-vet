import Layout from "../../components/Layout"
// import FullCalendar from "@fullcalendar/react"
// import dayGridPlugin from "@fullcalendar/daygrid"
// import timeGridPlugin from "@fullcalendar/timegrid"
// import interactionPlugin from "@fullcalendar/interaction"
import { Container, Content, Title } from "./styles"

export function Appointments() {
  return (
    <Container>
      <Title>Consultas</Title>
      <Content>
        {/* <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        /> */}
      </Content>
    </Container>
  )
}
export default Appointments