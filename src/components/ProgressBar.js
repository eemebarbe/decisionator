import React from "react"
import styled from "styled-components"
import GraphBar from "./GraphBar"
import { metrics } from "../themes"

const Container = styled.div`
    p {
        font-size: ${metrics.smallText}px;
        height: ${metrics.baseUnit * 2}px;
        margin-top: ${metrics.baseUnit * 3}px;
        margin-bottom: ${metrics.baseUnit * 2}px;
    }
`

const ProgressBar = (props) => {
    return (
        <Container>
            <p>
                {props.current + 1}/{props.length}
            </p>
            <GraphBar {...props} />
        </Container>
    )
}

export default ProgressBar
