import { Link } from "react-router-dom";
import { Container, Content, SText } from "./styles";

interface ILinkProps {
  href: string,
  title: string
}

interface ITabProps {
  links: ILinkProps[]
}

export function TabNav({ links }: ITabProps) {
  const asPath = location.pathname
  return (
    <Container>
      <Content>
        {links.map(l =>           
          <Link key={l.title} to={l.href}>
            <SText active={asPath === l.href ? true : false}>
              {l.title}
            </SText>
          </Link>
        )}
      </Content>
    </Container>
  );
}
  
  export default TabNav;