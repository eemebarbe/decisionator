import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { Form, H1, H2, Input, Slider, Button, Card, P } from "../components"
import { UserContext } from "../contexts/userContext"

interface Property {
    id: number
    weight: number
    name: string
}

function CreateProperties() {
    const { userState, userDispatch } = useContext(UserContext)

    useEffect(() => {
        !userState.properties.length && createNewProperty()
    }, [])

    const createNewProperty = () => {
        userDispatch({ type: "ADD_PROPERTY", payload: { id: Date.now(), weight: 0 } })
    }

    const propertyForm = (property: Property) => {
        return (
            <Card>
                <Form>
                    <Alignment>
                        <Input
                            value={property.name}
                            placeholder="Name of property"
                            onChange={(e) =>
                                userDispatch({
                                    type: "UPDATE_PROPERTY",
                                    payload: { ...property, name: e.target.value },
                                })
                            }
                        />
                        <Button
                            disabled={userState.properties.length <= 1}
                            marginBottom
                            marginLeft
                            small
                            onClick={(e: React.SyntheticEvent) => deleteProperty(e, property.name)}
                        >
                            Delete
                        </Button>
                    </Alignment>
                    <Alignment>
                        <H2>How important is this property to you, relative to other properties?</H2>
                        <H2>{property.weight}/10</H2>
                    </Alignment>
                    <Slider
                        value={property.weight}
                        range={[0, 10]}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                            userDispatch({
                                type: "UPDATE_PROPERTY",
                                payload: { ...property, weight: parseFloat(e.target.value) },
                            })
                        }
                    />
                </Form>
            </Card>
        )
    }

    const entries = () => {
        return userState.properties.map((x: Property) => {
            return propertyForm(x)
        })
    }

    const deleteProperty = (e: React.SyntheticEvent, name: string) => {
        e.preventDefault()
        userDispatch({ type: "DELETE_PROPERTY", payload: name })
    }

    return (
        <>
            <Alignment>
                <H1>Create Properties</H1>
                <Button disabled={!userState.properties.length} onClick={createNewProperty}>
                    Add property
                </Button>
            </Alignment>
            <P>
                Properties are a way of quantifying the overall value of each of your options. When coming up with
                properties, think about things that you want more of in your life, or things that you want to improve. A
                few examples are "fulfillment", "career opportunities", or "romantic prospects". Try not to create too
                many properties, and make sure to combine any properties that seem too similar into one property.
            </P>
            {entries()}
        </>
    )
}

const Alignment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default CreateProperties
