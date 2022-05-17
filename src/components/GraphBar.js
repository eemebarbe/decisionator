import React from "react"
import styled from "styled-components"
import { metrics } from "../themes"

const Bar = styled.div`
    position: absolute;
    height: ${metrics.baseUnit}px;
    width: 100%;
    background-color: ${(props) => props.theme.inactive};
    border-radius: ${metrics.globalBorderRadius}px;
`

const Steps = styled(Bar)`
    background-color: ${(props) => props.theme.primaryButton};
    width: ${(props) => 100 * ((props.current + 1) / props.length)}%;
`

const Container = styled.div`
    position: relative;
    height: ${metrics.baseUnit}px;
    margin-bottom: ${(props) => (props.marginBottom ? `${metrics.baseUnit * 3}px` : `${metrics.baseUnit}px`)};
`

const GraphBar = (props) => {
    return (
        <Container {...props}>
            <Bar />
            <Steps {...props} />
        </Container>
    )
}

export default GraphBar
