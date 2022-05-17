import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { H1, H2, P, Card, GraphBar } from "../components"
import { UserContext } from "../contexts/userContext"
import { Option, Property } from "../interfaces"
import { metrics } from "../themes"

function Results() {
    const { userState, userDispatch } = useContext(UserContext)

    useEffect(() => {
        userState.options.forEach((option: Option) => {
            let finalScore = 0
            Object.entries<number>(option.scores as {}).forEach((grade) => {
                const [key, value] = grade
                const matchingProperty = userState.properties.find((x: Property) => x.id === parseInt(key))
                finalScore = finalScore + value * matchingProperty!.weight
            })
            userDispatch({
                type: "UPDATE_OPTION",
                payload: { ...option, finalScore },
            })
        })
    }, [])

    const orderByScore = (options: Array<Option>) => {
        options.sort((a: Option, b: Option) => {
            return b.finalScore! - a.finalScore!
        })
        return options
    }

    const entries = () => {
        const ordered = orderByScore(userState.options)
        return ordered.map((option: Option) => {
            return (
                <Card key={option.id}>
                    <>
                        <Alignment>
                            <H2>{option.name}</H2>
                            <H2>{Math.round(option.finalScore! * 100) / 100}</H2>
                        </Alignment>
                        {graphBars(option)}
                    </>
                </Card>
            )
        })
    }

    const graphBars = (option: Option) => {
        return Object.entries<number>(option.scores as {}).map((grade, i) => {
            const [key, value] = grade
            const property = userState.properties.find((x) => x.id === parseInt(key))
            const weightedScore = Math.round(value * property!.weight * 100) / 100
            const last = Object.entries<number>(option.scores as {}).length - 1 === i
            return (
                <>
                    <Alignment>
                        <P>{property!.name}</P>
                        <P>{Math.round(weightedScore * 100) / 100}</P>
                    </Alignment>
                    <GraphBar marginBottom={!last} current={weightedScore} length={100} />
                </>
            )
        })
    }

    return (
        <>
            <H1>Results</H1>
            <P>Here are your options, ordered by score.</P>
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
