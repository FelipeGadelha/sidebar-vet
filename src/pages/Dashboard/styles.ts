// import styled from 'styled-components'

// export const Container = styled.div`
//   grid-area: main;
//   transition: .2s linear;
//   width: 100%;
//   background-color: #333;
// `;

// export const Title = styled.p`
//   font-size: ${({ theme }) => theme.fontSize['2xl']};
//   background-color: ${({ theme }) => theme.colors.bg};
//   color: ${({ theme }) => theme.colors.text};
// `;
import styled, { css } from 'styled-components'
import Stack from '../../components/structure/Stack';

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
    overflow-y: auto;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: ${theme.space[8]};
    /* box-shadow: rgba(0, 0, 0, 0.15) 0rem 0.4rem 1.5rem 0.2rem inset; */

    ::-webkit-scrollbar {
      width: 0.6rem;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
    }
  `}
`;

export const Content = styled(Stack)`
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Title = styled.p`
  ${({theme}) => css`
    font-size: ${theme.fontSize['2xl']};
    background-color: ${theme.colors.bg};
    color: ${theme.colors.text};
  `}
`;

