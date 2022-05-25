import React from "react"
import styled from "styled-components"

const CheckboxWrapper = styled.div`
    ${({ theme }) => `
        display: flex;
        height: ${theme.metrics.baseUnit * 3}px;
        font-size: ${theme.metrics.smallText}px;
        align-items: center;
        margin-bottom: ${theme.metrics.baseUnit * 1}px;
    `}
`

const Button = styled.span`
    ${({ theme }) => `
        height: ${theme.metrics.baseUnit * 2}px;
        width: ${theme.metrics.baseUnit * 2}px;
        background-color: ${theme.inactive};
        border-radius: ${theme.metrics.baseUnit / 4}px;
    `}
`

const Input = styled.input`
    ${({ theme }) => `
        background-color: transparent;
        color: ${theme.mainText};
        border: none;
        border-radius: 0;
        outline: none;
        margin: 0;
        padding: 0;
        appearance: none;
        font-size: ${theme.metrics.regularText}px;
        &::placeholder {
            color: ${theme.inactive};
        }
        &:focus {
            border-bottom: 1px solid ${theme.mainText};
        }
        &:checked ~ ${Button} {
            background-color: ${theme.primaryButton};
        }
    `}
`

const Label = styled.label`
    ${({ theme }) => `
        margin: none;
        margin-right: ${theme.metrics.baseUnit * 2}px;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size: ${theme.metrics.regularText}px;
    `}
`

const Checkbox = (props) => {
    return (
        <CheckboxWrapper>
            <Label>
                <Input onChange={props.onChange} type="checkbox" name={props.name} />
                <Button />
            </Label>
            <span>{props.label}</span>
        </CheckboxWrapper>
    )
}

export default Checkbox
