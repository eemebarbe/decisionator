import React from "react"
import styled from "styled-components"
import { metrics } from "../themes"

const StyledSlider = styled.input`
    height: ${metrics.baseUnit * 4}px;
    display: flex;
    align-items: center;
    margin-bottom: ${metrics.baseUnit}px;
    height: ${metrics.baseUnit}px;
    appearance: none;
    width: 100%;
    border-radius: ${metrics.globalBorderRadius}px;
    background: ${(props) => props.theme.inactive};
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &::-webkit-slider-thumb {
        appearance: none;
        width: ${metrics.baseUnit * 3}px;
        height: ${metrics.baseUnit * 3}px;
        border-radius: ${metrics.baseUnit * 3}px;
        background: ${(props) => props.theme.primaryButton};
        cursor: pointer;
    }
`

const Slider = (props) => {
    return (
        <StyledSlider
            type="range"
            min={props.range[0]}
            max={props.range[1]}
            step="0.1"
            onChange={props.onChange}
            value={props.value}
        />
    )
}

export default Slider
