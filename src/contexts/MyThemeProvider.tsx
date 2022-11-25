import { ReactNode, useContext, useEffect } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import SwitchThemeContext from './SwitchThemeContext';

type MyThemeProviderProps = { 
  children: ReactNode 
}

function MyThemeProvider({ children }: MyThemeProviderProps) {
  const context = useContext(SwitchThemeContext);
  let theme: DefaultTheme
  theme = context.theme === 'light' ?  light : dark
  // useEffect(() => {
  //   theme = context.theme === 'light' ?  light : dark

  // }, [context.toggleTheme])
  // return <ThemeProvider theme={theme || dark}>{children}</ThemeProvider>;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MyThemeProvider;