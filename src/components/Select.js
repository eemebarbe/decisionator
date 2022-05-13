import React from "react"
import styled from "styled-components"
import { inputStyles } from "../themes/GlobalStyle"

const StyledSelect = styled.select`
    font-family: "Work Sans";
    ${inputStyles}
`

const Select = (props) => {
    const renderOptions = () => {
        return props.options.map((x) => {
            return <option value={x.id}>{x.placeholder}</option>
        })
    }

    return (
        <StyledSelect onChange={props.onChange}>
            <option value="">{props.placeholder}</option>
            {renderOptions()}
        </StyledSelect>
    )
}

export default Select
