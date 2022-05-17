import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { Form, H1, H2, Input, Slider, Button, Card, P } from "../components"
import { UserContext } from "../contexts/userContext"
import { Property } from "../interfaces"

function CreateProperties() {
    const { userState, userDispatch } = useContext(UserContext)

    useEffect(() => {
        !userState.properties.length && createNewProperty()
    }, [])

    const createNewProperty = () => {
        const id = Date.now()
        userDispatch({ type: "ADD_PROPERTY", payload: { id: id, weight: 0, name: "" } })
        userState.options.forEach((x) => (x.scores![id] = 0))
    }

    const propertyForm = (property: Property) => {
        return (
            <Card key={property.id}>
                <Form>
                    <Alignment>
                        <Input
                            value={property.name}
                            marginBottom
                            placeholder="Name of property"
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                userDispatch({
                                    type: "UPDATE_PROPERTY",
                                    payload: { ...property, name: (e.target as HTMLInputElement).value },
                                })
                            }
                        />
                        <Button
                            disabled={userState.properties.length <= 1}
                            marginBottom
                            marginLeft
                            small
                            onClick={(e: React.SyntheticEvent) => deleteProperty(e, property)}
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

    const deleteProperty = (e: React.SyntheticEvent, property: Property) => {
        e.preventDefault()
        userDispatch({ type: "DELETE_PROPERTY", payload: property })
        userState.options.forEach((x) => delete x.scores![property.id])
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
