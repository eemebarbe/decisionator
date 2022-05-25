import React from "react"
import styled from "styled-components"

interface Props {
    range: Array<number>
    value: number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    marginBottom?: boolean
}

const Slider = (props: Props) => {
    return (
        <StyledSlider
            {...props}
            type="range"
            min={props.range[0]}
            max={props.range[1]}
            step="0.1"
            onChange={props.onChange}
            value={props.value}
        />
    )
}

const StyledSlider = styled.input<Props>`
    ${({ theme, marginBottom }) => `
        height: ${theme.metrics.baseUnit * 4}px;
        display: flex;
        align-items: center;
        margin: 0;
        margin-bottom: ${marginBottom ? `${theme.metrics.baseUnit * 3}px` : `${theme.metrics.baseUnit}px`};
        height: ${theme.metrics.baseUnit}px;
        appearance: none;
        width: 100%;
        border-radius: ${theme.metrics.globalBorderRadius}px;
        background: ${theme.inactive};
        outline: none;
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
        &::-webkit-slider-thumb {
            appearance: none;
            width: ${theme.metrics.baseUnit * 3}px;
            height: ${theme.metrics.baseUnit * 3}px;
            border-radius: ${theme.metrics.baseUnit * 3}px;
            background: ${theme.primaryButton};
            cursor: pointer;
        }
    `}
`

export default Slider
