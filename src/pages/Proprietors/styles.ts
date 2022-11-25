import styled, { css } from 'styled-components'
import Stack from '../../components/structure/Stack';
import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi'

// export const Container = styled.div`
//   grid-area: main;
//   transition: .2s linear;
//   width: 100%;
//   background-color: #333;
// `;
// export const Container = styled(Stack).attrs({as: "main"})`
//   ${({theme}) => css`
//     overflow-y: auto;
//     height: 100%;
//     width: 100%;
//     ::-webkit-scrollbar {
//       width: 0.6rem;
//     }
//     ::-webkit-scrollbar-track {
//       box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
//     }
//     ::-webkit-scrollbar-thumb {
//       box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.3);
//     }
//   `}
// `;

// export const Container = styled(Stack).attrs({as: "main"})`
//   /* background: #FBFAFB; */
//   ${({theme}) => css`
//     background: ${theme.colors.panel};
//     border-radius: ${theme.space[2]};
//     align-items: center;
//     justify-content: center;
//     /* border-radius: ${theme.space[10]}; */
//     grid-area: main;
//     overflow-y: auto;
//     height: 100%;
//     width: 100%;
//     /* margin: 0 auto; */
//     margin: 0 ${theme.space[8]} ${theme.space[8]} 0;
//     /* box-shadow: rgba(0, 0, 0, 0.15) 0rem 0.4rem 1.5rem 0.2rem inset; */
//     > h1 {
//       width: 100%;
//       margin-top: 1rem;
//     }
//   `}
// `;

export const Actions = styled(Stack)`
  /* width: 50%; */
  ${({theme}) => css`
    padding: ${theme.space[8]} ${theme.space[10]};
    flex-direction: row;
    justify-content: space-between;
    /* background: ${theme.colors['gray-200']}; */
  `}
`;

export const Content = styled(Stack)`
 ${({theme}) => css`
    /* flex: 1; */
    height: 100%;
    width: 100%;
    padding: 0 ${theme.space[10]};
    margin: 0 auto;
  `}
`;

export const Title = styled.h1`
  ${({theme}) => css`
    /* font-size: ${theme.fontSize['2xl']}; */
    /* height: ${theme.space[10]}; */
    color: ${theme.colors.text};
    /* margin: ${theme.space[4]}; ${theme.space[8]}; */
  `}
`;

const Icon = css`
    display: inline-flex;
    padding: 0.2rem;
    border-radius: 0.3rem;
    font-size: 1.8rem;
    transition: .1s ease-in;
`;

export const EditIcon = styled(BiEdit)`
  ${Icon}
  ${({theme}) => css`
    border: 0.1rem solid ${theme.colors['green-400']};
    //background: ${p => p.theme.colors};
    color: ${theme.colors['green-400']};
    transition: .1s ease-in;
    &:hover{
      background:${theme.colors['green-400']};
      border: 0.1rem solid ${theme.colors['green-400']};
      color: ${theme.colors.bg};
    }
  `}
`;

export const DeleteIcon = styled(BsTrash)`
  ${Icon}
  ${({theme}) => css`
    border: 0.1rem solid ${theme.colors['red-500']};
    //background: ${p => p.theme.colors};
    color: ${theme.colors['red-500']};
    transition: .1s ease-in;
    &:hover{
      background: ${theme.colors['red-500']};
      border: 0.1rem solid ${theme.colors['red-500']};
      color: ${theme.colors.bg};
    }
  `}
`;

export const NullContent = styled(Stack)`
  ${({theme}) => css`
    width: 100%; 
    height: 100%; 
    color: ${theme.colors.text};
    align-items: center;
    justify-content: center;
  `}
`;