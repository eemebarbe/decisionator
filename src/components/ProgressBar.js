import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const Bar = styled.div`
  position: absolute;
  height: ${metrics.baseUnit}px;
  width: 100%;
  background-color: ${props => props.theme.inactive};
  margin-top: ${metrics.baseUnit}px;
  border-radius: ${metrics.globalBorderRadius}px;
`;

const Steps = styled(Bar)`
  background-color: ${props => props.theme.primaryButton};
  width: ${props => 100 * (props.current / props.length)}%;
`;

const Container = styled.div`
  margin-top: ${metrics.baseUnit * 3}px;
  position: relative;
  span {
    font-size: ${metrics.smallText}px;
  }
`;

const ProgressBar = props => {
  return (
    <Container>
      <span>
        {props.current}/{props.length}
      </span>
      <>
        <Bar />
        <Steps {...props} />
      </>
    </Container>
  );
};

export default ProgressBar;
