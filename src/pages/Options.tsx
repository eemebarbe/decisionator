import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { Form, H1, P, Input, Button, Card } from "../components"
import { UserContext } from "../contexts/userContext"
import { Option, Property } from "../interfaces"

function Options() {
    const { userState, userDispatch } = useContext(UserContext)

    useEffect(() => {
        !userState.options.length && createNewOption()
    }, [])

    const createNewOption = () => {
        let scoreConstructor = {} as Option["scores"]
        userState.properties.forEach((x: Property) => (scoreConstructor![x.id] = 0))
        userDispatch({ type: "ADD_OPTION", payload: { id: Date.now(), name: "", scores: scoreConstructor } })
    }

    const entries = () => {
        return userState.options.map((option: Option) => {
            return (
                <Card key={option.id}>
                    <Form>
                        <Alignment>
                            <Input
                                value={option.name}
                                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                                    userDispatch({
                                        type: "UPDATE_OPTION",
                                        payload: { ...option, name: (e.target as HTMLInputElement).value },
                                    })
                                }
                                placeholder="Name of option"
                            />
                            <Button
                                marginLeft
                                disabled={userState.options.length <= 1}
                                small
                                onClick={(e: React.SyntheticEvent) =>
                                    userDispatch({ type: "DELETE_OPTION", payload: option })
                                }
                            >
                                Delete
                            </Button>
                        </Alignment>
                    </Form>
                </Card>
            )
        })
    }

    const addEntry = (e: React.SyntheticEvent) => {
        e.preventDefault()
        createNewOption()
    }

    return (
        <>
            <Alignment>
                <H1>Create Options</H1>
                <Button disabled={!userState.options.length} onClick={(e: React.SyntheticEvent) => addEntry(e)}>
                    Add option
                </Button>
            </Alignment>
            <P>List at least two options that you're choosing between.</P>
            {entries()}
        </>
    )
}

const Alignment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default Options
