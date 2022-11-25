import styled, { css } from "styled-components";
import { GoSearch } from 'react-icons/go';

interface ISearch {
  width: string
}

export const Search = styled.div<ISearch>`
 ${({theme, width}) => css`
    width: ${width};
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 0rem 0.4rem 2rem rgba(0, 0, 0, 0.25); */
    border-radius: ${theme.space[1]};
    overflow: hidden;
    padding: ${theme.space[2]}; //0.8rem;
    /* margin-right: 2rem; */
    color: #000;
  `}
`;

export const SInput = styled.input.attrs({
  type: 'text',
})`
  width: 90%;
  outline: none;
  border: none;
  color: #000;
`;

export const Icon = styled(GoSearch)`
  cursor: pointer;
  width: 10%;
  /* height: 100%; */
  color: #000000;
  /* border-radius: 50%; */
`;