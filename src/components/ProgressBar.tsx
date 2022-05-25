import React from "react"
import styled from "styled-components"
import GraphBar from "./GraphBar"

interface Props {
    current: number
    length: number
}

const ProgressBar = (props: Props) => {
    return (
        <Container>
            <p>
                {props.current + 1}/{props.length}
            </p>
            <GraphBar {...props} />
        </Container>
    )
}

const Container = styled.div`
    ${({ theme }) => `
        p {
            font-size: ${theme.metrics.smallText}px;
            height: ${theme.metrics.baseUnit * 2}px;
            margin-top: ${theme.metrics.baseUnit * 3}px;
            margin-bottom: ${theme.metrics.baseUnit * 2}px;
        }
    `}
`

export default ProgressBar
