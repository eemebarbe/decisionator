import React from "react"
import styled from "styled-components"

const Bar = styled.div`
    ${({ theme }) => `
        position: absolute;
        height: ${theme.metrics.baseUnit}px;
        width: 100%;
        background-color: ${theme.inactive};
        border-radius: ${theme.metrics.globalBorderRadius}px;
    `}
`

const Steps = styled(Bar)`
    ${({ current, length, theme }) => `
        background-color: ${theme.primaryButton};
        width: ${100 * ((current + 1) / length)}%;
    `}
`

const Container = styled.div`
    ${({ marginBottom, theme }) => `
        position: relative;
        height: ${theme.metrics.baseUnit}px;
        margin-bottom: ${marginBottom ? `${theme.metrics.baseUnit * 3}px` : `${theme.metrics.baseUnit}px`};
    `}
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
