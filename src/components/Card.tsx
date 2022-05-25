import styled from "styled-components"

const Card = styled.div`
    ${({ theme }) => `
        background-color: ${theme.secondLayerBackground};
        border-radius: ${theme.metrics.globalBorderRadius}px;
        padding: ${theme.metrics.baseUnit * 3}px;
        margin-bottom: ${theme.metrics.baseUnit * 3}px;
        font-size: ${theme.metrics.smallText}px;
        box-shadow: ${`0 1px ${theme.metrics.baseUnit / 2}px 0 ${theme.shadow}`};
        line-height: 2;
        display: flex;
        flex-direction: column;
        label {
            margin-right: ${theme.metrics.baseUnit * 2}px;
        }
    `}
`

export default Card
