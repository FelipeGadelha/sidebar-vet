import styled, { css } from 'styled-components';

interface ButtonProps {
  template?: | "outline" | "link",
}

const handleColorType = color => {
  switch (color) {
    case "primary":
      return "color: #03a9f3; background: #000;";
    case "danger":
      return "color: #fff; background: #f56342;";
    default:
      return "color: #000; background: #eee;";
  }
};

const ButtonBase = css`
  display: inline-block;
  border: 0;
  font-weight: normal;
  /* text-align: center; */
  text-decoration: none;
  font-size: ${({theme}) => theme.fontSize['md']};
  padding: ${({theme}) => `${theme.space[2]} ${theme.space[3]}`};
  border-radius: ${({theme}) => theme.space[1]};
  `

const Button = styled.button<ButtonProps>`
  ${ButtonBase}
  background: ${({theme}) => theme.colors['green-600']};
  color: ${({theme}) => theme.colors['gray-100']};
  outline: 1px solid ${({theme}) => theme.colors['green-600']};
  transition: 0.2s;
  &:hover {
    background: ${({theme}) => theme.colors['green-700']};
  }
  &:focus {
    outline: 2px solid ${({theme}) => theme.colors['green-800']};
  }
  ${({template, theme}) => template === 'outline' && css`
    background: inherit;
    color: ${theme.colors['green-600']};
    outline: 1px solid ${theme.colors['green-600']};
    &:hover {
      color: ${theme.colors['green-600']};
      background: ${theme.colors['gray-300']};
    }
    &:focus {
      outline: 2px solid ${theme.colors['green-600']};
    }
  `|| 
  template === 'link' && css`
    background: inherit;
    color: ${theme.colors.text};
    padding: 0;
    outline: 0;
    &:hover {
      color: ${theme.colors['green-600']};
      background: inherit;
    }
    &:focus {
      outline: 2px solid ${theme.colors['green-600']};
      color: ${theme.colors['green-600']};
    }
  `}

`;
export default Button;