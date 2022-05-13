import styled from "styled-components";
import { metrics } from "../themes";

const Message = styled.div`
    position: relative;
    z-index: 42;
    font-size: ${metrics.H2}px;
    color: ${(props) => props.theme.overlayDetail};
    padding: ${metrics.bodyPadding}px;
`;

export default Message;
