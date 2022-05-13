import styled from "styled-components";
import { metrics } from "../themes";

export const PhotoFrame = styled.img`
    cursor: pointer;
    display: inline-block;
    background-color: ${(props) => props.theme.overlayBackground};
    height: ${metrics.baseUnit * 45}px;
    width: ${metrics.baseUnit * 30}px;
    border-radius: ${metrics.globalBorderRadius}px;
    box-shadow: ${(props) =>
        `0 1px ${metrics.baseUnit / 2}px 0 ${props.theme.inactive}`};
    @media (max-width: 480px) {
        height: ${metrics.baseUnit * 45}px;
        width: ${metrics.baseUnit * 30}px;
    }
`;

export const PhotoContainer = styled.div`
    line-height: 0;
    height: ${metrics.baseUnit * 45}px;
    margin-bottom: ${metrics.baseUnit * 6}px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
