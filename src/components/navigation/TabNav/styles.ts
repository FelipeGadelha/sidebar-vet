import styled, { css } from "styled-components";
import Text from "../../fundation/Text";
import Box from "../../structure/Box";
import Flex from "../../structure/Flex";

export const Container = styled(Box).attrs({as: "nav"})`
  ${({theme}) => css`
    /* height: 5rem; */
    background: ${theme.colors.panel};
    border-radius: ${theme.space[2]} ${theme.space[2]} 0 0; 
    border-bottom: ${theme.space.px} solid ${theme.colors["gray-700"]};
  `}
`;

export const Content = styled(Flex)`
  ${({theme}) => css`
    /* max-width: 1120px; */
    /* height: 5rem; */
    margin: 0 auto;
    padding: 0 ${theme.space[1]};
    align-items: flex-start;
  `}
`;

const linkBase = ({theme}) => css`
  color: ${theme.colors['gray-500']};
`;

interface Props {
  active: boolean
}
export const SText = styled(Text).attrs({as: "a"})<Props>`
  ${linkBase}
  ${({theme, active}) => css`
    overflow: hidden;
    font-weight: medium;
    padding: ${theme.space[6]} ${theme.space[5]};
    color: ${active ? theme.colors['green-400']: ''}; 
    transition: 0.2s;
    cursor: pointer;
    /* padding-right: ${theme.space[5]};
    padding-left: ${theme.space[5]}; */
    /* :not(:first-child) {
      padding-left: ${theme.space[5]};
      /* border-left: ${theme.space.px} solid ${theme.colors["gray-700"]}; */
    } */
    :hover { 
      color: ${theme.colors['green-400']};
    }
  `}
`;