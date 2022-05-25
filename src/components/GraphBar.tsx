import React from "react"
import styled from "styled-components"

interface Props {
    marginBottom?: boolean
    current: number
    length: number
}

const GraphBar = (props: Props) => {
    return (
        <Container {...props}>
            <Bar />
            <Steps {...props} />
        </Container>
    )
}

const Bar = styled.div`
    ${({ theme }) => `
        position: absolute;
        height: ${theme.metrics.baseUnit}px;
        width: 100%;
        background-color: ${theme.inactive};
        border-radius: ${theme.metrics.globalBorderRadius}px;
    `}
`

interface StepsProps {
    current: number
    length: number
}

const Steps = styled(Bar)<StepsProps>`
    ${({ current, length, theme }) => `
        background-color: ${theme.primaryButton};
        width: ${100 * ((current + 1) / length)}%;
    `}
`

interface ContainerProps {
    marginBottom?: boolean
}

const Container = styled.div<ContainerProps>`
    ${({ marginBottom, theme }) => `
        position: relative;
        height: ${theme.metrics.baseUnit}px;
        margin-bottom: ${marginBottom ? `${theme.metrics.baseUnit * 3}px` : `${theme.metrics.baseUnit}px`};
    `}
`

export default GraphBar
