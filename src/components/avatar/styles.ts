import { Root as RRoot, Image as RImage, Fallback as RFallback } from '@radix-ui/react-avatar';
import styled from 'styled-components';

export const Root = styled(RRoot)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: ${({theme}) => theme.space[16]};
  height: ${({theme}) => theme.space[16]};
  border-radius: 100%;
  border: ${({theme}) => `${theme.space[1]} solid ${theme.colors['green-500']}`};
`;

export const Image = styled(RImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const Fallback = styled(RFallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #333;
  font-size: 15;
  line-height: 1;
  font-weight: 600;
`;
