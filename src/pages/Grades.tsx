import React, { useState } from "react"
import styled from "styled-components"
import { metrics } from "../themes"
import { BodyWrapper, Form, H1, Input, Slider, Button } from "../components"
import { useLocation, useNavigate } from "react-router-dom"

interface Option {
    name: string
    scores?: {
        [key: string]: number
    }
    finalScore?: number
}

function Grades() {
    const [options, setOptions] = useState<Array<Option>>([])

    const optionGrader = () => {
        options.map((x) => {})
    }

    return (
        <>
            <H1>Grade Your Options</H1>
            <Form></Form>
        </>
    )
}

const Entry = styled.li`
    list-style-type: none;
    margin: 0;
    padding: ${metrics.baseUnit * 2}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${metrics.baseUnit * 12}px;
    border: 1px solid ${(props) => props.theme.inactive};
    border-radius: ${metrics.baseUnit / 2}px;
    font-size: ${metrics.regularText}px;
`

export default Grades
