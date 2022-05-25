import React from "react"
import styled from "styled-components"

const BadgeContainer = styled.div`
    position: relative;
`

const Badge = styled.div`
    ${({ theme, notifications }) => `
        background-color: ${theme.secondaryColor};
        height: ${theme.metrics.baseUnit}px;
        width: ${theme.metrics.baseUnit}px;
        position: absolute;
        top: -${theme.metrics.baseUnit / 2}px;
        right: -${theme.metrics.baseUnit / 2}px;
        border-radius: ${theme.metrics.baseUnit}px;
        z-index: 40;
        color: ${theme.detailText};
        visibility: ${notifications > 0 ? "visible" : "hidden"};
    `}
`

const BadgeInContainer = (props) => {
    return (
        <BadgeContainer>
            <Badge notifications={props.notifications} />
            {props.children}
        </BadgeContainer>
    )
}

export default BadgeInContainer
