import styled from "styled-components"
import { metrics } from "../themes"

const Card = styled.div`
    background-color: ${(props) => props.theme.secondLayerBackground};
    border-radius: ${metrics.globalBorderRadius}px;
    padding: ${metrics.baseUnit * 3}px;
    margin-bottom: ${metrics.baseUnit * 3}px;
    font-size: ${metrics.smallText}px;
    box-shadow: ${(props) => `0 1px ${metrics.baseUnit / 2}px 0 ${props.theme.shadow}`};
    line-height: 2;
    display: flex;
    flex-direction: column;
    label {
        margin-right: ${metrics.baseUnit * 2}px;
    }
`

export default Card
