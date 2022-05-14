import React, { useState } from "react"
import styled from "styled-components"
import { metrics } from "../themes"
import { BodyWrapper, Form, H1, Input, Slider, Button } from "../components"
import { useLocation, useNavigate } from "react-router-dom"

interface Property {
    weight: number
    name: string
}

function CreateProperties() {
    const [properties, setProperties] = useState<Array<Property>>([])
    const [inputValue, setInputValue] = useState<string>("")
    const [sliderValue, setSliderValue] = useState<number>(5)
    const history = useNavigate()

    const entries = () => {
        return properties.map((x: Property) => {
            return (
                <Entry>
                    <span>{x.name}</span>
                    <span>{x.weight}</span>
                    <Button small onClick={(e: React.SyntheticEvent) => deleteProperty(e, x.name)}>
                        Delete
                    </Button>
                </Entry>
            )
        })
    }

    const deleteProperty = (e: React.SyntheticEvent, name: string) => {
        e.preventDefault()
        let newProperties = [...properties]
        setProperties(newProperties.filter((x) => x.name !== name))
    }

    const addEntry = (e: React.SyntheticEvent) => {
        e.preventDefault()
        inputValue && sliderValue && setProperties({ ...properties, [inputValue]: { weight: sliderValue } })
    }

    return (
        <BodyWrapper>
            <H1>Create Properties</H1>
            <Button onClick={() => history("/options")}>Next Step</Button>
            <Form>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Slider
                    value={sliderValue}
                    range={[0, 10]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                        setSliderValue(parseFloat(e.target.value))
                    }
                />
                <Button marginBottom onClick={(e: React.SyntheticEvent) => addEntry(e)}>
                    Add property
                </Button>
                {entries()}
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

export default CreateProperties
