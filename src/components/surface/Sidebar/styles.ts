import styled, { css } from "styled-components";
import Box from "../../structure/Box";
import Flex from "../../structure/Flex";
import Stack from "../../structure/Stack";

interface CompactProps {
  compact: boolean
}

export const Container = styled(Stack).attrs({as: "aside"})<CompactProps>`
  ${({theme, compact}) => css`
    grid-area: sideMenu;
    z-index: 2000;
    background-color: ${theme.colors.bg};
    /* margin-left: 10px; */
    width: ${compact 
      ? theme.layout["sidebar-compact-width"]
      : theme.layout["sidebar-width"]};
    /* height: 0; */
    /* position: sticky;
    top: 0; */
    /* z-index: 1000; */
    transition-property: width, transform;// !important;
    transition-duration: 0.2s;// !important;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1) !important;
    overflow: hidden;
  
  `}
  
  /* &::before {
    content: "";
    background-color: rgba(#ccc, 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  } */
  /* @media (min-width: ${({theme})=> theme.media.laptop}) {
    position: fixed;
    width: 256px;
    transform: translate3d(${(p) => true ? 0 : "calc(256px - 256px*2)"}, 0, 0);
    transition: transform 0.2s
      ${(p) =>
        true
          ? "cubic-bezier(0.4, 0, 1, 1)"
          : "cubic-bezier(0, 0, 0.2, 1)"} !important;
  } */
  
`;
/* grid-area: sideMenu; */
/* height: 100vh;
transition: .2s linear;
background-color: brown; */
/* width: ${(p) => (p.compact ? "70px" : "256px")}; */

export const Content = styled.div`
  align-items: stretch;
  > ${Flex} {
    width: 100%;
    height: 8rem;
  }
`;