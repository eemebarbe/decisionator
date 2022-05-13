import styled from "styled-components";
import { metrics } from "../themes";

const TextArea = styled.textarea`
    height: ${metrics.baseUnit * 13}px;
    width: 100%;
    box-sizing: border-box;
    padding: ${metrics.baseUnit * 2}px ${metrics.baseUnit * 3}px;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    margin-bottom: ${metrics.baseUnit * 3}px;
    line-height: 2;
    font-size: ${metrics.regularText}px;
    border: 1px solid ${(props) => props.theme.inactive};
    border-radius: ${metrics.globalBorderRadius}px;
    color: ${(props) => props.theme.mainText};
    background: transparent;
    @media (max-width: 480px) {
        font-size: ${metrics.smallText}px;
    }
`;

export default TextArea;
