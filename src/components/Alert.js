import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const AlertContainer = styled.div`
  font-size: ${metrics.smallText}px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  position: relative;
  background-color: ${props => props.theme.secondaryColor};
  text-align: left;
  width: ${metrics.baseUnit * 2}px;
  height: ${metrics.baseUnit * 2}px;
  border-radius: ${metrics.baseUnit * 2}px;
  margin-right: ${metrics.baseUnit}px;
`;

const Alert = props => {
  const messages = () => {
    return props.messages.map((thisMessage, i) => {
      return (
        <React.Fragment key={i}>
          <Icon />
          <div>{thisMessage}</div>
        </React.Fragment>
      );
    });
  };

  return <AlertContainer>{messages()}</AlertContainer>;
};

export default Alert;
