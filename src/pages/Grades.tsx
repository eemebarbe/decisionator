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
    const [inputValue, setInputValue] = useState<string>("")
    const history = useNavigate()

    const deleteProperty = (e: React.SyntheticEvent, name: string) => {
        e.preventDefault()
        let newOptions = [...options]
        setOptions(newOptions.filter((x) => x.name !== name))
    }

    const addEntry = (e: React.SyntheticEvent) => {
        e.preventDefault()
        inputValue && setOptions([...options, { name: inputValue }])
    }

    return (
        <BodyWrapper>
            <H1>Create Options</H1>
            <Button onClick={() => history(-1)}>Previous Step</Button>
            <Button onClick={() => history("/grades")}>Next Step</Button>
            <Form>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Button marginBottom onClick={(e: React.SyntheticEvent) => addEntry(e)}>
                    Add option
                </Button>
            </Form>
        </BodyWrapper>
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
