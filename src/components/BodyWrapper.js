import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
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
    padding-bottom: ${metrics.headerHeight * 2}px;
    @media (max-width: 480px) {
        padding-bottom: ${metrics.headerHeight * 1.5}px;
    }
`

const Wrapper = (props) => {
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
        <BodyOuter ref={scrollRef}>
            <BodyWrapper scrollbarWidth={scrollbarWidth}>
                <BodyInner>{props.children}</BodyInner>
            </BodyWrapper>
        </BodyOuter>
    )
}

export default Wrapper
