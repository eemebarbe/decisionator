import styled from "styled-components"

const P = styled.div`
    ${({ theme }) => `
        margin-bottom: ${theme.metrics.baseUnit * 3}px;
        line-height: 2;
        font-size: ${theme.metrics.regularText}px;
        @media (max-width: 480px) {
            font-size: ${theme.metrics.smallText}px;
        }
    `}
`

export default P
