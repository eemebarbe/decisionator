import React from "react"
import styled from "styled-components"
import { metrics } from "../themes"

const WalletId = styled.button`
    color: ${(props) => props.theme.mainText};
    background-color: ${(props) => props.theme.secondLayerBackground};
    pointer-events: ${(props) => (props.samePath ? "none" : "initial")};
    border: 0;
    outline: none;
    padding: 0;
    cursor: pointer;
    outline: 0;
    font-size: ${metrics.smallText}px;
    height: ${metrics.baseUnit * 4}px;
    border-radius: ${metrics.baseUnit * 2}px;
    font-size: ${metrics.baseFontUnit}px;
    margin-right: ${metrics.baseUnit * 3}px;
`

const UserStatus = (props) => {
    return <WalletId>{props.id}</WalletId>
}

export default UserStatus
