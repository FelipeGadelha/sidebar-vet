import { AnchorHTMLAttributes, ElementType } from "react";
import { Container, Icon, SText } from "./styles";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>  {
  icon?: ElementType;
  children: string;
  href: string;
  shouldMatchExactHref?: boolean;
}

export function NavLink({icon , children, shouldMatchExactHref = false, href, ...rest}: NavLinkProps) {
  const asPath = location.pathname
  
  console.log(asPath)
  
  let isActive = false;

  if(shouldMatchExactHref 
    && (asPath === href)){
    isActive = true;
  }

  if(!shouldMatchExactHref 
    && (asPath.startsWith(String(href)))){
    isActive = true;
  }
  
  return (
    <Container to={href} active={isActive} {...rest}>
      {icon && <Icon as={icon} fontSize="24"/>}
      <SText>{children}</SText>
    </Container>
  )
}