import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { Form, H1, H2, P, Input, Button, Card } from "../components"
import { UserContext } from "../contexts/userContext"
import { Option, Property } from "../interfaces"

function Results() {
    const { userState, userDispatch } = useContext(UserContext)

    useEffect(() => {
        userState.options.forEach((option: Option) => {
            let finalScore = 0
            Object.entries(option.scores).forEach((grade) => {
                const [key, value] = grade
                const matchingProperty = userState.properties.find((x: Property) => x.id === parseInt(key))
                finalScore = finalScore + value * matchingProperty.weight
            })
            userDispatch({
                type: "UPDATE_OPTION",
                payload: { ...option, finalScore },
            })
        })
    }, [])

    const entries = () => {
        return userState.options.map((option: Option) => {
            return (
                <Card>
                    <Alignment>
                        <H2>{option.name}</H2>
                        <H2>{option.finalScore}</H2>
                    </Alignment>
                </Card>
            )
        })
    }

    return (
        <>
            <H1>Results</H1>
            <P>List every option that you're choosing between.</P>
            {entries()}
        </>
    )
}

const Alignment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default Results
