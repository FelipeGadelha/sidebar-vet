import styled, { css } from 'styled-components'
import { TbMenu2, TbBell, TbSun, TbMoon } from 'react-icons/tb'

export const Container = styled.header`
  ${({theme}) => css`
    background: ${theme.colors.bg};
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.space[4]} ${theme.space[4]}; //OPT
    /* height: ${({theme}) => theme.space[20] + theme.space[1]}; */
    cursor: pointer;
    /* background-color: aqua; */
  `}
`;

const IconBase = ({theme}) => css`
  font-size: ${theme.fontSize.xl};
  color: ${theme.colors['gray-100']};
  cursor: pointer;
  :hover{
    color: ${theme.colors.white};
  }
`;

export const MenuIcon = styled(TbMenu2)`
  ${IconBase}
  ${({theme}) => css`
    opacity: 1;
    pointer-events: all;
    @media (min-width: ${theme.media.laptop}) {
      pointer-events: none;
      opacity: 0;
    }
  `}
` ;

export const BellIcon = styled(TbBell)`
  ${IconBase}
`;

export const ThemeSunIcon = styled(TbSun)`
  ${IconBase}
`;
export const ThemeMoonIcon = styled(TbMoon)`
  ${IconBase}
`;