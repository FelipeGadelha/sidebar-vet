import styled, { css } from 'styled-components';

interface TextProps {
  color?: string,
  size?: string
}

const Text = styled.p<TextProps>`
  ${({theme, color, size}) => css`
    color: ${color || theme.colors.text};
    font-size: ${size || theme.fontSize.md};
  `}
`;

export default Text
