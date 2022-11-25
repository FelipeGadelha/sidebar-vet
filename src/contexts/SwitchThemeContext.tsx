// import Cookies, { CookiesStatic } from 'js-cookie';
import { createContext, ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ISwitchThemeContext {
  theme: string,
  toggleTheme: () => void,
}

type SwitchThemeContextProps = { 
  theme?: string, 
  children: ReactNode 
}

export const restoreTheme = (): string => {
  let theme: string = null;
  try {
    const storedData = window.localStorage.getItem('theme')
    // const storedData = Cookies.get('theme')
    if(storedData) theme = storedData
  } catch (err) {
    console.error("ERRROU: ", err)
  }
  return theme
}

export const storeTheme = (theme: string) => {
  // Cookies.set('theme', theme)
  window.localStorage.setItem('theme', theme)
}

const initialValue = {
  theme: light.title,
  toggleTheme: () => {},
}

const SwitchThemeContext = createContext<ISwitchThemeContext>(initialValue);

export const SwitchThemeContextProvider = ({ theme, children }: SwitchThemeContextProps) => {
  const [currentTheme, setCurrentTheme] = useState(theme || initialValue.theme)
  const toggleTheme = () => {
    const mergedTheme = currentTheme === 'light' ? dark.title : light.title
    setCurrentTheme(mergedTheme);
    storeTheme(mergedTheme);
  };
  useEffect(()=> {
    // const restoredTheme = props.cookies
    const restoredTheme = restoreTheme()
    if(restoredTheme) setCurrentTheme(restoredTheme)
  }, [])

  return (
    <SwitchThemeContext.Provider value={{ 
      theme: currentTheme, 
      toggleTheme: toggleTheme  
      }
    }>
      { children }
    </SwitchThemeContext.Provider>
  )
}
export const SwitchThemeConsumer = SwitchThemeContext.Consumer;

export default SwitchThemeContext;