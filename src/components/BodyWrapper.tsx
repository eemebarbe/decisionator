import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"

interface Props {
    scroll: Boolean
    children: JSX.Element
    resetTrigger: Function
}

const Wrapper = (props: Props) => {
    const [scrollbarWidth, setScrollbarWidth] = useState(0)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollDiv = document.createElement("div")
        scrollDiv.setAttribute("style", "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;")
        document.getElementsByTagName("body")[0].appendChild(scrollDiv)
        document.body.appendChild(scrollDiv)
        const calculatedWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        setScrollbarWidth(calculatedWidth)
    }, [])

    useEffect(() => {
        if (props.scroll && scrollRef.current) {
            scrollRef.current.scrollTop = 0
            props.resetTrigger()
        }
    }, [props.scroll])

    return (
        <BodyOuter ref={scrollRef}>
            <BodyWrapper scrollbarWidth={scrollbarWidth}>
                <BodyInner>{props.children}</BodyInner>
            </BodyWrapper>
        </BodyOuter>
    )
}

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

interface WrapperProps {
    scrollbarWidth: number
}

const BodyWrapper = styled.div<WrapperProps>`
    ${({ theme, scrollbarWidth }) => `
        margin-left: ${theme.metrics.bodyPadding}px;
        margin-right: ${theme.metrics.bodyPadding - scrollbarWidth}px;
        padding-top: ${theme.metrics.headerHeight}px;
        width: ${theme.metrics.bodyWidth}px;
        @media (max-width: 480px) {
            width: 100%;
            padding-top: ${theme.metrics.baseUnit * 6}px;
        }
    `}
`

const BodyInner = styled.div`
    ${({ theme }) => `
        padding-bottom: ${theme.metrics.headerHeight * 2}px;
        @media (max-width: 480px) {
            padding-bottom: ${theme.metrics.headerHeight * 1.5}px;
        }
    `}
`

export default Wrapper
