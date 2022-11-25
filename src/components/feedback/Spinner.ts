import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to { transform: rotate(360deg) }
`;

interface SpinnerProps {
  size?: string
  border?: string
}

export const Spinner = styled.div<SpinnerProps>`
  border: ${({theme, border}) => `${border || "4px" } solid ${theme.colors["gray-400"]}`};
  border-left-color: ${({theme}) => theme.colors["gray-500"]};
  border-radius: 50%;
  height: ${({size}) => size || "16px"};
  width: ${({size}) => size || "16px"};
  animation: ${rotate} 0.5s linear infinite;
`;