import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { font-size: 75%; }

  html, body {
    background: ${({theme}) => theme.colors.bg};
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: ${({theme}) => theme.media['mobile-s']}) {
    html { font-size: 75%; }
  }

  @media (min-width: ${({theme}) => theme.media['mobile-m']}) {
    html { font-size: 87.5%; }
  }

  @media (min-width: ${({theme}) => theme.media.laptop}) {
    html { font-size: 100%; }
    /* html { font-size: 93.75%; } */
  }

  @media (min-width: ${({theme}) => theme.media.desktop}) {
    html { font-size: 125%; }
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

`

export const Grid = styled.div`
  ${({theme}) => css`
    display: grid;
    min-height: 100vh;
    /* grid-template-columns: auto auto auto auto auto; */
    /* grid-auto-rows: minmax(6rem, max-content) auto; */
    grid-template-columns: minmax(0px, max-content) auto;
    grid-template-areas: "sideMenu header header header header"
                          "sideMenu main main main main"
                          "sideMenu main main main main"
                          "sideMenu main main main main";
    grid-template-rows: 12vh 30vh 30vh 28vh;
    /* grid:
      "sideMenu header" min-content
      "sideMenu main" 1fr / min-content 1fr; */
    
    @media (min-width: ${({theme}) => theme.media['mobile-s']}) {
      /* grid-template-columns: minmax(8rem, max-content) auto;;
      grid-auto-rows: minmax(6rem, max-content) auto;
      grid-template-areas: "sideMenu header header header header"
                            "sideMenu main main main main"
                            "sideMenu main main main main"
                            "sideMenu main main main main"; */
    }
  `
  }
`;
export default GlobalStyle