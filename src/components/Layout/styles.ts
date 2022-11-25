import styled, { css } from "styled-components";

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
