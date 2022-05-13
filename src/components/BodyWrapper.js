import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { metrics } from "../themes"

const BodyOuter = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    &.fade-appear,
    &.fade-enter {
        opacity: 0;
        z-index: 1;
        transform: translateX(${(props) => (props.action === "PUSH" ? "24px" : "-24px")});
        @media (max-width: 480px) {
            transform: translateX(0px);
        }
    }
    &.fade-appear-active,
    &.fade-enter.fade-enter-active {
        opacity: 1;
        transform: translateX(0px);
        transition: opacity 400ms linear 400ms, transform 400ms ease-out 400ms;
    }

    &.fade-exit {
        opacity: 1;
        transform: translateX(0px);
    }
    &.fade-exit.fade-exit-active {
        opacity: 0;
        transform: translateX(${(props) => (props.action === "PUSH" ? "-24px" : "24px")});
        transition: opacity 400ms linear, transform 400ms ease-in;
        @media (max-width: 480px) {
            transform: translateX(0px);
        }
    }
`

const BodyWrapper = styled.div`
    margin-left: ${metrics.bodyPadding}px;
    margin-right: ${(props) => metrics.bodyPadding - props.scrollbarWidth}px;
    padding-top: ${metrics.headerHeight}px;
    width: ${metrics.bodyWidth}px;
    @media (max-width: 480px) {
        width: 100%;
        padding-top: 0px;
    }
`

const BodyInner = styled.div`
    padding-bottom: ${metrics.headerHeight}px;
    @media (max-width: 480px) {
        padding-bottom: ${metrics.headerHeight}px;
    }
`

const Wrapper = (props) => {
    const history = useNavigate()
    const scrollRef = useRef()
    const [scrollbarWidth, setScrollbarWidth] = useState(0)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = 0
        }
        const scrollDiv = document.createElement("div")
        scrollDiv.setAttribute("style", "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;")
        document.getElementsByTagName("body")[0].appendChild(scrollDiv)
        document.body.appendChild(scrollDiv)
        const calculatedWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        setScrollbarWidth(calculatedWidth)
    }, [])

    return (
        <BodyOuter action={history.action} ref={scrollRef}>
            <BodyWrapper scrollbarWidth={scrollbarWidth}>
                <BodyInner>{props.children}</BodyInner>
            </BodyWrapper>
        </BodyOuter>
    )
}

export default Wrapper
