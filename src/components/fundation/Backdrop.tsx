import styled, {css} from "styled-components";

interface BackdropProps {
  visible: boolean
} 

const Backdrop = styled.div<BackdropProps>`
  ${({theme, visible}) => css`
    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    background-color: rgba(0,0,0, .4);
    transition: opacity .2s cubic-bezier(0.4, 0, 1, 1) !important;
    ${visible && css`
        opacity: 1;
        pointer-events: all;
    `}
    @media(min-width: ${theme.media.tablet}) {
        opacity: 0;
        pointer-events: none;
    }
  `}
`;

export default Backdrop;