import styled from 'styled-components';
import Stack from '../../structure/Stack';

export const Container = styled(Stack).attrs({as: "form"})`
  row-gap: ${({theme})=> theme.space[3]};
`;
