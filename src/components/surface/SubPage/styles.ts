import styled, { css } from 'styled-components'
import Stack from '../../structure/Stack';

// export const Container = styled.div`
//   grid-area: main;
//   transition: .2s linear;
//   width: 100%;
//   background-color: #333;
// `;


export const Container = styled(Stack).attrs({as: "main"})`
  /* background: #FBFAFB; */
  ${({theme}) => css`
    background: ${theme.colors.bg};
    grid-area: main;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0 ${theme.space[6]} ${theme.space[6]} 0;
    /* box-shadow: rgba(0, 0, 0, 0.15) 0rem 0.4rem 1.5rem 0.2rem inset; */
    ::-webkit-scrollbar {
      width: 0.6rem;
    }
    ::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3); */
      box-shadow: inset 0 0 0.6rem ${theme.colors['green-400']};
    }
    ::-webkit-scrollbar-thumb {
      /* box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3); */
      box-shadow: inset 0 0 0.6rem ${theme.colors['green-400']};
    }
  `}
`;

export const Content = styled(Stack)`
 ${({theme}) => css`
    flex: 1;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    margin: 0 auto;
    background: ${theme.colors.panel};
    border-radius: 0 0 ${theme.space[2]} ${theme.space[2]};
    ::-webkit-scrollbar {
      width: 0.6rem;
    }
    ::-webkit-scrollbar-track {
      /* box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3); */
      box-shadow: inset 0 0 0.6rem ${theme.colors.panel};
    }
    ::-webkit-scrollbar-thumb {
      /* box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3); */
      box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.5);
    }
  `}
`;

export const Title = styled.h1`
  ${({theme}) => css`
    /* font-size: ${theme.fontSize['2xl']}; */
    /* height: ${theme.space[10]}; */
    color: ${theme.colors.text};
    margin: ${theme.space[4]}; ${theme.space[8]};
  `}
`;