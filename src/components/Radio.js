import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const Button = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: ${metrics.baseUnit * 2}px;
  width: ${metrics.baseUnit * 2}px;
  background-color: ${props => props.theme.inactive};
  border-radius: 50%;
`;

const Input = styled.input`
  background-color: transparent;
  color: ${props => props.theme.mainText};
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${props => props.theme.inactive};
  outline: none;
  margin: 0;
  padding: 0;
  height: ${metrics.baseUnit * 3}px;
  appearance: none;
  font-size: ${metrics.regularText}px;
  &::placeholder {
    color: ${props => props.theme.inactive};
  }
  &:focus {
    border-bottom: 1px solid ${props => props.theme.mainText};
  }
  &:checked ~ ${Button} {
    background-color: ${props => props.theme.primaryButton};
  }
  box-sizing: content-box;
`;

const Label = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: ${metrics.baseUnit * 3}px;
  margin-bottom: ${metrics.baseUnit}px;
  font-size: ${metrics.regularText}px;
`;

const Name = styled.span`
  margin-left: ${metrics.baseUnit * 3}px;
`;

const Radio = props => {
  const options = props.options.map(thisOption => {
    return (
      <Label>
        <Input onChange={props.onChange} type="radio" name="radio" value={thisOption.id} />
        <Button>
          <span />
        </Button>
        <Name>{thisOption.placeholder}</Name>
      </Label>
    );
  });

  return <>{options}</>;
};

export default Radio;
