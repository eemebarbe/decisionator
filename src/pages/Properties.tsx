import React, { useState, useContext } from "react"
import styled from "styled-components"
import { metrics } from "../themes"
import { Form, H1, H2, Input, Slider, Button, Card, P } from "../components"
import { UserContext } from "../contexts/userContext"

interface Property {
    weight: number
    name: string
}

function CreateProperties() {
    const { userState, userDispatch } = useContext(UserContext)
    const [inputValue, setInputValue] = useState<string>("")
    const [sliderValue, setSliderValue] = useState<number>(0)

    const entries = () => {
        return userState.properties.map((x: Property) => {
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
        userDispatch({ type: "DELETE_PROPERTY", payload: name })
    }

    const addEntry = (e: React.SyntheticEvent) => {
        e.preventDefault()
        inputValue &&
            sliderValue &&
            userDispatch({
                type: "ADD_PROPERTY",
                payload: { weight: sliderValue, name: inputValue },
            })
        setInputValue("")
        setSliderValue(0)
    }

    return (
        <>
            <H1>Create Properties</H1>
            <P>
                Properties are a way of quantifying the overall value of each of your options. When coming up with
                properties, think about things that you want more of in your life, or things that you want to improve. A
                few examples are "fulfillment", "career opportunities", or "romantic prospects". Try not to create too
                many properties, and make sure to combine any properties that seem too similar into one property.
            </P>
            <Card>
                <Form>
                    <Alignment>
                        <Input
                            value={inputValue}
                            placeholder="Name of property"
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </Alignment>
                    <Alignment>
                        <H2>How important is this property to you, relative to other properties?</H2>{" "}
                        <H2>{sliderValue}/10</H2>
                    </Alignment>
                    <Slider
                        value={sliderValue}
                        range={[0, 10]}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                            setSliderValue(parseFloat(e.target.value))
                        }
                    />
                    <Button onClick={(e: React.SyntheticEvent) => addEntry(e)}>Add property</Button>
                </Form>
            </Card>
            <Entries>{entries()}</Entries>
        </>
    )
}

const Entry = styled.li`
    margin-bottom: ${metrics.baseUnit * 3}px;
    list-style-type: none;
    margin: 0;
    padding: ${metrics.baseUnit * 3}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${metrics.baseUnit * 12}px;
    border: 1px solid ${(props) => props.theme.inactive};
    border-radius: ${metrics.globalBorderRadius}px;
    font-size: ${metrics.regularText}px;
`

const Entries = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: ${metrics.baseUnit * 3}px;
`

const Alignment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default CreateProperties
