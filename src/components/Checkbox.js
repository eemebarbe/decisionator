import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const CheckboxWrapper = styled.div`
    display: flex;
    height: ${metrics.baseUnit * 3}px;
    font-size: ${metrics.smallText}px;
    align-items: center;
    margin-bottom: ${metrics.baseUnit * 1}px;
`;

const Button = styled.span`
    height: ${metrics.baseUnit * 2}px;
    width: ${metrics.baseUnit * 2}px;
    background-color: ${(props) => props.theme.inactive};
    border-radius: ${metrics.baseUnit / 4}px;
`;

const Input = styled.input`
    background-color: transparent;
    color: ${(props) => props.theme.mainText};
    border: none;
    border-radius: 0;
    outline: none;
    margin: 0;
    padding: 0;
    appearance: none;
    font-size: ${metrics.regularText}px;
    &::placeholder {
        color: ${(props) => props.theme.inactive};
    }
    &:focus {
        border-bottom: 1px solid ${(props) => props.theme.mainText};
    }
    &:checked ~ ${Button} {
        background-color: ${(props) => props.theme.primaryButton};
    }
`;

const Label = styled.label`
    margin: none;
    margin-right: ${metrics.baseUnit * 2}px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: ${metrics.regularText}px;
`;

const Checkbox = (props) => {
    return (
        <CheckboxWrapper>
            <Label>
                <Input
                    onChange={props.onChange}
                    type="checkbox"
                    name={props.name}
                />
                <Button />
            </Label>
            <span>{props.label}</span>
        </CheckboxWrapper>
    );
};

export default Checkbox;
