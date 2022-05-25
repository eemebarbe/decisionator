import styled from "styled-components"

interface Props {
    vertical: boolean
    horizontal: boolean
}

const CenteredDiv = styled.div<Props>`
    ${({ vertical, horizontal }) => `
        position: relative;
        z-index: 40;
        display: flex;
        flex-direction: column;
        justify-content: ${horizontal ? "center" : "flex-start"};
        align-items: ${vertical ? "center" : "flex-start"};
        height: 100%;
        text-align: center;
        @media (max-width: 480px) {
            text-align: left;
        }
    `}
`

export default CenteredDiv
