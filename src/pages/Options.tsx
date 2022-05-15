import React, { useState, useContext } from "react"
import styled from "styled-components"
import { metrics } from "../themes"
import { Form, H1, P, Input, Button, Card } from "../components"
import { UserContext } from "../contexts/userContext"

interface Option {
    name: string
    grades?: {
        [key: string]: number
    }
    finalScore?: number
}

function Options() {
    const { userState, userDispatch } = useContext(UserContext)
    const [inputValue, setInputValue] = useState<string>("")

    const entries = () => {
        return userState.options.map((x) => {
            return (
                <Entry>
                    <span>{x.name}</span>
                    <Button small onClick={(e: React.SyntheticEvent) => deleteProperty(e, x.name)}>
                        Delete
                    </Button>
                </Entry>
            )
        })
    }

    const deleteProperty = (e: React.SyntheticEvent, name: string) => {
        e.preventDefault()
        userDispatch({ type: "DELETE_OPTION", payload: name })
    }

    const addEntry = (e: React.SyntheticEvent) => {
        e.preventDefault()
        inputValue &&
            userDispatch({
                type: "ADD_OPTION",
                payload: { name: inputValue },
            })
    }

    return (
        <>
            <H1>Create Options</H1>
            <P>List every option that you're choosing between.</P>
            <Card>
                <Form>
                    <Alignment>
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Name of option"
                        />
                        <Button disabled={!inputValue} onClick={(e: React.SyntheticEvent) => addEntry(e)}>
                            Add option
                        </Button>
                    </Alignment>
                </Form>
            </Card>
            <Entries>{entries()}</Entries>
        </>
    )
}

const Alignment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

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

const Entries = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-bottom: ${metrics.baseUnit * 3}px;
`

export default Options
