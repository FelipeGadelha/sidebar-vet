import styled from 'styled-components';
import Flex from './Flex';

interface StackProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

// const Stack = styled(Flex).attrs({ as: "form"})<StackProps>`
const Stack = styled(Flex)<StackProps>`
  flex-direction: ${({direction})  => (direction ? direction : 'column')};
`;
export default Stack
