import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import Text from '../../fundation/Text';

interface Props {
  active: boolean
}

export const Container = styled(Link)<Props>`
  ${({theme, active}) => css`
    display: flex; 
    align-items: center;  
    padding: ${theme.space[2]} ${theme.space[4]};
    > ${Text}, ${Icon} { 
      color: ${active ? theme.colors['green-400']: ''}; 
    }
    :hover {
      cursor: pointer;
      > ${Text}, ${Icon}{
        transition: 0.2s;
        color: ${theme.colors['green-400']};
      }
    }
    :focus {
      /* outline: none; */
      /* > ${Text}, ${Icon}{
        color: ${theme.colors['green-400']};
      } */
    }
  `}
`;

const linkBase = ({theme}) => css`
  color: ${theme.colors['gray-500']};
`;

export const Icon = styled.div`
  ${linkBase}
  ${({theme}) => css`
    width: ${theme.fontSize['4xl']};
    min-width: ${theme.fontSize['4xl']};
  `}
`;

export const SText = styled(Text)`
  ${linkBase}
  ${({theme}) => css`
    overflow: hidden;
    margin-left: ${theme.space[4]}; 
    font-weight: medium;
  `}
`;