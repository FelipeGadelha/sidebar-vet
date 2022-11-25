import { ReactNode } from "react";
import Layout from "../../Layout"
import TabNav from "../../navigation/TabNav"
import { Container, Content, Title } from "./styles"

interface ILinkProps {
  href: string,
  title: string
}

interface ISubPageProps {
  links: ILinkProps[],
  titlePage: string,
  children: ReactNode,
}

export function SubPage({ links, titlePage, children }: ISubPageProps) {
  return (
    <Layout>
      <Container>
        {/* <Title>{titlePage}</Title> */}
        <TabNav links={links}/>
        <Content>
          {children}
        </Content>
      </Container>
    </Layout>
  )
}
export default SubPage