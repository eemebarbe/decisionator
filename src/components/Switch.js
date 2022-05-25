import React from "react"
import styled from "styled-components"

const Switched = styled.label`
    ${({ theme }) => `
      position: relative;
      display: inline-block;
      width: ${theme.metrics.baseUnit * 8}px;
      height: ${theme.metrics.baseUnit * 4}px;
      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${theme.overlayDetail};
        transition: 0.4s;
        border-radius: ${theme.metrics.baseUnit * 3}px;
        &:before {
          position: absolute;
          content: "";
          height: ${theme.metrics.baseUnit * 3}px;
          width: ${theme.metrics.baseUnit * 3}px;
          left: ${theme.metrics.baseUnit / 2}px;
          bottom: ${theme.metrics.baseUnit / 2}px;
          background-color: ${theme.detailText};
          transition: 0.4s;
          border-radius: 50%;
        }
      }
      input:checked + span {
        background-color: ${theme.overlayDetail};
      }

      input:checked + span:before {
        transform: translateX(${theme.metrics.baseUnit * 4}px);
      }
  `}
`

const Switch = (props) => {
    return (
        <Switched>
            <input type="checkbox" onChange={props.onChange} checked={props.checked} />
            <span />
        </Switched>
    )
}

export default Switch
