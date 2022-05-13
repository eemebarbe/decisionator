import React from "react"
import styled from "styled-components"
import { Button } from "../components"
import { metrics, icons } from "../themes"

const AuthButton = styled(Button)`
    span {
        width: ${metrics.baseUnit * 24}px;
    }
`

const AuthIcon = styled.div`
    width: ${metrics.baseUnit * 3}px;
    height: ${metrics.baseUnit * 6}px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div {
        width: ${metrics.baseUnit * 3}px;
        height: ${metrics.baseUnit * 3}px;
        background-color: ${(props) => (props.background ? props.theme.detailText : null)};
        border-radius: ${metrics.globalBorderRadius / 2}px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: ${(props) => (props.background ? metrics.baseUnit * 2 : metrics.baseUnit * 3)}px;
            height: ${(props) => (props.background ? metrics.baseUnit * 2 : metrics.baseUnit * 3)}px;
            src: ${(props) => props.src};
        }
    }
`

const AuthConstructor = (props) => {
    return (
        <AuthButton {...props} onClick={props.onClick}>
            <AuthIcon {...props}>
                <div {...props}>
                    <img alt="social-icon" src={props.logo} />
                </div>
            </AuthIcon>
            <span>{props.wallet}</span>
        </AuthButton>
    )
}

export const MetaMaskAuth = (props) => {
    return <AuthConstructor {...props} logo={icons.facebook} wallet="MetaMask" onClick={props.onClick} />
}

export const WalletConnectAuth = (props) => {
    return <AuthConstructor background {...props} logo={icons.google} wallet="WalletConnect" onClick={props.onClick} />
}
