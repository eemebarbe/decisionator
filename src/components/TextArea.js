import styled from "styled-components"

const TextArea = styled.textarea`
    ${({ theme }) => `
        height: ${theme.metrics.baseUnit * 13}px;
        width: 100%;
        box-sizing: border-box;
        padding: ${theme.metrics.baseUnit * 2}px ${theme.metrics.baseUnit * 3}px;
        overflow: auto;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        resize: none;
        margin-bottom: ${theme.metrics.baseUnit * 3}px;
        line-height: 2;
        font-size: ${theme.metrics.regularText}px;
        border: 1px solid ${theme.inactive};
        border-radius: ${theme.metrics.globalBorderRadius}px;
        color: ${theme.mainText};
        background: transparent;
        @media (max-width: 480px) {
            font-size: ${theme.metrics.smallText}px;
        }
    `}
`

export default TextArea
