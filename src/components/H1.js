import styled from "styled-components"

const H1 = styled.h1`
    ${({ theme }) => `
        font-size: ${theme.metrics.H1}px;
        line-height: 2;
        font-weight: 700;
        margin: ${theme.metrics.baseUnit * 4}px 0px;
        position: relative;
        @media (max-width: 480px) {
            font-size: ${theme.metrics.H1Mobile}px;
        }
    `}
`

export default H1
