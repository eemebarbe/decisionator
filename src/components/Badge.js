import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const BadgeContainer = styled.div`
    position: relative;
`;

const Badge = styled.div`
    background-color: ${(props) => props.theme.secondaryColor};
    height: ${metrics.baseUnit}px;
    width: ${metrics.baseUnit}px;
    position: absolute;
    top: -${metrics.baseUnit / 2}px;
    right: -${metrics.baseUnit / 2}px;
    border-radius: ${metrics.baseUnit}px;
    z-index: 40;
    color: ${(props) => props.theme.detailText};
    visibility: ${(props) => (props.notifications > 0 ? "visible" : "hidden")};
`;

const BadgeInContainer = (props) => {
    return (
        <BadgeContainer>
            <Badge notifications={props.notifications} />
            {props.children}
        </BadgeContainer>
    );
};

export default BadgeInContainer;
