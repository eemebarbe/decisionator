import React from "react"
import styled from "styled-components"
import { metrics } from "../themes"
import { Spinner } from "../components"

const Button = styled.button`
    height: ${metrics.baseUnit * 6}px;
    width: ${(props) => (props.small ? metrics.baseUnit * 18 : metrics.baseUnit * 30)}px;
    background-color: ${(props) => (props.disabled ? props.theme.inactive : props.theme.primaryButton)};
    pointer-events: ${(props) => (props.disabled || props.loading ? "none" : "auto")};
    color: ${(props) => props.theme.detailText};
    border: 0;
    padding: 0;
    border-radius: ${metrics.globalBorderRadius}px;
    margin-left: ${(props) => (props.marginLeft ? `${metrics.baseUnit * 3}px` : 0)};
    margin-right: ${(props) => (props.marginRight ? `${metrics.baseUnit * 3}px` : 0)};
    margin-bottom: ${(props) => (props.marginBottom ? `${metrics.baseUnit * 3}px` : 0)};
    margin-top: ${(props) => (props.marginTop ? `${metrics.baseUnit * 3}px` : 0)};
    font-size: ${metrics.smallText}px;
    cursor: pointer;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 480px) {
        width: 100%;
    }
`

const ButtonWithLoadState = (props) => {
    const loadState = () => {
        if (props.loading) {
            return <Spinner />
        } else {
            return props.children
        }
    }
    return (
        <Button disabled={props.disabled} loading={props.loading} {...props}>
            {loadState()}
        </Button>
    )
}

export default ButtonWithLoadState
