import styled, { css } from 'styled-components';
// import Flex from '../structure/Flex';

export const Input = styled.input`
  ${({theme}) => css`
    padding: ${theme.space[2]};
    /* border-radius: 0.375rem; */
    border-radius: ${theme.space[1]};
    border: none;
    outline: none;
    color: ${theme.colors.text};
    background: ${theme.colors.bg};
    /* box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.25); */
    &:focus {
      outline: 2px solid ${theme.colors['green-600']};
    }
  `}
`;
