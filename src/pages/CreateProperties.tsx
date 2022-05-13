import React, { useState } from "react"
import { BodyWrapper, Form, H1, Input, Slider, P, Button } from "../components"

interface Property {
    weight: number
    name: string
}

interface Properties {
    [key: string]: Property
}

function CreateProperties() {
    const [properties, setProperties] = useState<Properties>({})
    const [inputValue, setInputValue] = useState<string>("")
    const [sliderValue, setSliderValue] = useState<number>(5)

    const entries = () => {
        return Object.entries(properties).map(([key, value]) => {
            console.log(value)
            return (
                <P>
                    {value.name} {value.weight}
                </P>
            )
        })
    }

    const addEntry = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setProperties({ ...properties, [inputValue]: { name: inputValue, weight: sliderValue } })
    }

    return (
        <BodyWrapper>
            <H1>Create Properties</H1>
            {entries()}
            <Form>
                <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Slider
                    value={sliderValue}
                    range={[0, 10]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                        setSliderValue(parseInt(e.target.value))
                    }
                />
                <Button onClick={(e: React.SyntheticEvent) => addEntry(e)}>Add property</Button>
            </Form>
        </BodyWrapper>
    )
}

export default CreateProperties
