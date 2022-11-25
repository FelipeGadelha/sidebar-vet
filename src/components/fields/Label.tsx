import styled from 'styled-components';
import Stack from '../structure/Stack';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: ${({theme}) => theme.space[2]};
`;

export default Label;
