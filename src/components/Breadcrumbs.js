import React from "react"
import styled from "styled-components"
import { metrics } from "../themes"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    height: ${metrics.baseUnit * 8}px;
    width: 100%;
    font-size: ${metrics.H2}px;
    display: flex;
    align-items: center;
    margin-top: ${metrics.baseUnit * 6}px;
    margin-bottom: ${metrics.baseUnit * 6}px;
`

const Link = styled.button`
    background: none;
    height: ${metrics.baseUnit * 2}px;
    font-size: ${metrics.H2}px;
    border: 0;
    padding: 0;
    cursor: pointer;
    outline: 0;
    display: flex;
    align-items: center;
    margin-right: ${metrics.baseUnit}px;
    &:hover {
        color: ${(props) => props.theme.primaryButton};
        text-decoration: underline;
    }
`

const Pointer = styled.span`
    margin-right: ${metrics.baseUnit}px;
`

const Breadcrumbs = (props) => {
    const history = useNavigate()
    const links = () => {
        return props.links.map((thisLink, i) => {
            return (
                <React.Fragment key={i}>
                    <Link onClick={() => history.goBack(thisLink.path)}>
                        <span>{thisLink.label}</span>
                    </Link>
                    <Pointer>&#x2192;</Pointer>
                </React.Fragment>
            )
        })
    }
    return (
        <Container>
            {links()}
            <span>{props.current}</span>
        </Container>
    )
}

export default Breadcrumbs
