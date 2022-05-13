import styled from "styled-components";
import { metrics } from "../themes";

const H1 = styled.h1`
    font-size: ${metrics.H1}px;
    line-height: 2;
    font-weight: 700;
    margin: ${metrics.baseUnit * 4}px 0px;
    position: relative;
    @media (max-width: 480px) {
        font-size: ${metrics.H1Mobile}px;
    }
`;

export default H1;
