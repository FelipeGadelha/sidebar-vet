import { Link } from "react-router-dom";
import styled, { css, DefaultTheme } from "styled-components";
import { useBreakpointValue } from "../../../hook/useBreakpointValue";
import Avatar from "../../avatar";
import { Separator } from "../../fundation/Separator";
import Text from "../../fundation/Text";
import Box from "../../structure/Box";
import Flex from "../../structure/Flex";

const Container = styled(Flex)`
  ${({theme}) => css`
    align-items: center;
    justify-content: end;
    margin: ${theme.space[2]};
  `}
`;

const childText = ({theme}) => css`
  font-size: ${theme.fontSize.sm};
  margin-right: ${theme.space[2]};
`;

const ProfileStyled = styled(Box)`
  ${({theme}) => css`
    text-align: right;
    > :first-child${Text} {
      ${childText}
    }
    > :last-child${Text} {
      ${childText}
      color: ${theme.colors['gray-300']};
    }
  `}
`;

export function Profile() {
  const isWideVersion  = useBreakpointValue("tablet")
  return (
    <Link to="/profile">
      <Container>
        {isWideVersion &&
          <>
            <Separator style={{'flex': 1}}/>
            <ProfileStyled>
              <Text>Felipe Gadelha</Text>
              <Text>felipegadelha90@gmail.com</Text>
            </ProfileStyled>
          </>
        }
        <Avatar/>
      </Container>
    </Link>
  )

}