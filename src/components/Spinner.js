import React from "react"
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const SpinnerTemplate = styled.div`
    ${({ theme, large }) => `
        border-radius: 50%;
        width: ${large ? theme.metrics.baseUnit * 12 : theme.metrics.baseUnit * 2}px;
        height: ${large ? theme.metrics.baseUnit * 12 : theme.metrics.baseUnit * 2}px;
        position: absolute;
    `}
`

const Circle = styled(SpinnerTemplate)`
    ${({ theme, secondary }) => `
        border: 3px solid
            ${(secondary && theme.inactive) || theme.detailText};
        opacity: 0.33;
        visibility: visible;
    `}
`

const Highlight = styled(SpinnerTemplate)`
    ${({ theme, secondary }) => `
        border: 3px solid rgba(0, 0, 0, 0);
        border-top: 3px solid ${(secondary && theme.inactive) || theme.detailText};
        animation: ${rotate} 1s infinite ease-in-out;
    `}
`

const Spinner = (props) => {
    return (
        <>
            <Circle {...props} />
            <Highlight {...props} />
        </>
    )
}

export default Spinner
