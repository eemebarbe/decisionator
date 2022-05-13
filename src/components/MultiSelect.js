import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";
import { Checkbox } from "../components";

const Wrapper = styled.span`
margin-bottom: ${metrics.baseUnit * 3}px;
`;

const MultiSelect = props => {
  const options = props.options.map(thisOption => {
    return (
        <Checkbox onChange={props.onChange} name={thisOption.id} type="checkbox" label={thisOption.placeholder} />
    );
  });

  return <Wrapper>{options}</Wrapper>;
};

export default MultiSelect;

