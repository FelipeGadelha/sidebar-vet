import React, { useContext } from 'react'
import { TbBell, TbMoon, TbSun } from 'react-icons/tb'
import styled, { css, useTheme } from 'styled-components'
import Flex from '../../structure/Flex'
import SwitchThemeContext from '../../../contexts/SwitchThemeContext'

const Container = styled(Flex)`
  ${({theme}) => css`
    flex: 1;
    justify-content: end;
    margin: ${theme.space[2]};
    column-gap: 1rem;
  `}
`;

const IconBase = ({theme}) => css`
  font-size: ${theme.fontSize.xl};
  color: ${theme.colors['gray-400']};
  cursor: pointer;
  :hover{
    color: ${theme.colors.white};
  }
`;

export const BellIcon = styled(TbBell)`
  ${IconBase}
`;

export const ThemeSunIcon = styled(TbSun)`
  ${IconBase}
`;
export const ThemeMoonIcon = styled(TbMoon)`
  ${IconBase}
`;

export function NotificationsNav() {
  const {theme, toggleTheme} = useContext(SwitchThemeContext)
  const isDatk = theme === 'dark'
  return (
    <Container>
      <BellIcon />
      { isDatk 
        ? <ThemeSunIcon onClick={ toggleTheme }/> 
        : <ThemeMoonIcon onClick={ toggleTheme }/>
      }
    </Container>
  );
}

export default NotificationsNav;