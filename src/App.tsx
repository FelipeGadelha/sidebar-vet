import { BrowserRouter as Browser, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle, { Grid } from './styles/global';
import Sidebar from './components/surface/Sidebar';
import Header from './components/surface/Header';
import Dashboard from './pages/Dashboard';
import { useBreakpointValue } from './hook/useBreakpointValue';
import { useState } from 'react';
import usePersistedState from './hook/usePersistedState';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { SwitchThemeContextProvider } from './contexts/SwitchThemeContext';
import MyThemeProvider from './contexts/MyThemeProvider';
import Appointments from './pages/Appointments';
import Proprietors from './pages/Proprietors';
import Registers from './pages/Registers';
import Pets from './pages/Pets';

function App() {
  const [showNav, setShowNav] = useState(false);
  const [compact, setCompact] = useState(false);
  
  const toggle = () => {
    setShowNav(!showNav)
    setCompact(!compact)
  }

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)
  
  return (
    <>
      <ToastContainer />
      <SwitchThemeContextProvider>
        <MyThemeProvider>
          <Grid>
            <GlobalStyle />
            <Browser>
              <Sidebar visible={compact} close={toggle}/>
              <Header toggle={ toggle }/>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/proprietors" element={<Proprietors />} />
                <Route path="#" element={<Dashboard />} />
                <Route path="/registers" element={<Registers />} />
                <Route path="/pets" element={<Pets />} />
                <Route path="#" element={<Dashboard />} />
                <Route path="#" element={<Dashboard />} />
                <Route path="#" element={<Dashboard />} />
                <Route path="#" element={<Dashboard />} />
                <Route path="#"element={<Dashboard />} />
              </Routes>
            </Browser>
          </Grid>
        </MyThemeProvider>
      </SwitchThemeContextProvider>
    </>
  )
}

export default App