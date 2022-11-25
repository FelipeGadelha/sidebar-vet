import * as RSeparator from '@radix-ui/react-separator';
import styled, { css } from 'styled-components';

export const Separator = styled(RSeparator.Root)`
  ${({theme}) => css`
    background-color: ${theme.colors['gray-600']};
    height: 100%;
    width: ${theme.space.px};
  `}
`