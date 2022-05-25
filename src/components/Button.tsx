import React from "react"
import styled from "styled-components"

interface Props {
    disabled?: boolean
    children: string
    marginLeft?: boolean
    marginRight?: boolean
    marginTop?: boolean
    marginBottom?: boolean
    small?: boolean
    square?: boolean
    onClick: (e: React.SyntheticEvent) => void
}

const ButtonWithLoadState = (props: Props) => {
    return <Button {...props}>{props.children}</Button>
}

const Button = styled.button<Props>`
    ${({ theme, disabled, marginLeft, marginRight, marginBottom, marginTop, small, square }) => `
        height: ${theme.metrics.baseUnit * 6}px;
        width: ${small ? theme.metrics.baseUnit * 18 : theme.metrics.baseUnit * 30}px;
        background-color: ${disabled ? theme.inactive : theme.primaryButton};
        pointer-events: "auto";
        color: ${theme.detailText};
        border: 0;
        padding: 0;
        border-radius: ${theme.metrics.globalBorderRadius}px;
        margin-left: ${marginLeft ? `${theme.metrics.baseUnit * 3}px` : 0};
        margin-right: ${marginRight ? `${theme.metrics.baseUnit * 3}px` : 0};
        margin-bottom: ${marginBottom ? `${theme.metrics.baseUnit * 3}px` : 0};
        margin-top: ${marginTop ? `${theme.metrics.baseUnit * 3}px` : 0};
        font-size: ${theme.metrics.smallText}px;
        cursor: pointer;
        outline: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: 480px) {
            width: ${square ? `${theme.metrics.baseUnit * 6}px` : `100%`};
            font-size: ${square ? `${theme.metrics.regularText}px` : `${theme.metrics.smallText}px`};
        }
    `}
`

export default ButtonWithLoadState
