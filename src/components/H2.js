import styled from "styled-components"

const H2 = styled.h2`
    ${({ theme }) => `
        font-size: ${theme.metrics.H2}px;
        line-height: 1.5;
        margin: 0;
        margin-bottom: ${theme.metrics.baseUnit * 3}px;
        position: relative;
        @media (max-width: 480px) {
            font-size: ${theme.metrics.regularText}px;
        }
    `}
`

export default H2
