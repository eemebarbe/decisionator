import React from "react"
import styled from "styled-components"

const Button = styled.span`
    ${({ theme }) => `
      position: absolute;
      top: 0;
      left: 0;
      height: ${theme.metrics.baseUnit * 2}px;
      width: ${theme.metrics.baseUnit * 2}px;
      background-color: ${theme.inactive};
      border-radius: 50%;
    `}
`

const Input = styled.input`
    ${({ theme }) => `
      background-color: transparent;
      color: ${theme.mainText};
      border: none;
      border-radius: 0;
      border-bottom: 1px solid ${theme.inactive};
      outline: none;
      margin: 0;
      padding: 0;
      height: ${theme.metrics.baseUnit * 3}px;
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
      box-sizing: content-box;
  `}
`

const Label = styled.label`
    ${({ theme }) => `
        display: flex;
        position: relative;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        height: ${theme.metrics.baseUnit * 3}px;
        margin-bottom: ${theme.metrics.baseUnit}px;
        font-size: ${theme.metrics.regularText}px;
    `}
`

const Name = styled.span`
    ${({ theme }) => `
      margin-left: ${theme.metrics.baseUnit * 3}px;
    `}
`

const Radio = (props) => {
    const options = props.options.map((thisOption) => {
        return (
            <Label>
                <Input onChange={props.onChange} type="radio" name="radio" value={thisOption.id} />
                <Button>
                    <span />
                </Button>
                <Name>{thisOption.placeholder}</Name>
            </Label>
        )
    })

    return <>{options}</>
}

export default Radio
