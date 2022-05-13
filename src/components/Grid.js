import styled from "styled-components";
import { metrics } from "../themes";

export const Grid = styled.div`
    display: grid;
    grid-gap: ${metrics.baseUnit * 8}px;
    height: ${(props) => (props.height ? `${props.height}px` : "100%")};
    grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
    grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
`;

export const Item = styled.div`
    grid-column-start: ${(props) => (props.column ? props.column[0] : "auto")};
    grid-column-end: ${(props) => (props.column ? props.column[1] : "auto")};
    grid-row-start: ${(props) => (props.row ? props.row[0] : "auto")};
    grid-row-end: ${(props) => (props.row ? props.row[1] : "auto")};
`;
