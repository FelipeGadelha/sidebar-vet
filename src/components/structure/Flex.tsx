import styled from 'styled-components';

interface FlexProps {
  align?: string
  justify?: string
}

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({align})=> align || 'stretch'};
  justify-content: ${({justify})=> justify || 'stretch'};
`

export default Flex
