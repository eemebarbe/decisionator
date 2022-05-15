import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { Form, H1, Slider, Card, H2, P } from "../components"
import { metrics } from "../themes"
import { UserContext } from "../contexts/userContext"

interface Option {
    id: number
    name: string
    scores?: {
        [key: number]: number
    }
    finalScore?: number
}

interface Property {
    id: number
    weight: number
    name: string
}

function Grades() {
    const { userState, userDispatch } = useContext(UserContext)

    useEffect(() => {
        let scoreConstructor = {}
        userState.properties.forEach((x) => (scoreConstructor[x.id] = 0))
        userState.options.map((option: Option) =>
            userDispatch({
                type: "UPDATE_OPTION",
                payload: { ...option, scores: scoreConstructor },
            })
        )
    }, [])

    const optionGrader = () => {
        return userState.options.map((option: Option) => {
            return (
                <Card>
                    <H2>{option.name}</H2>
                    {renderSliders(option)}
                </Card>
            )
        })
    }

    const renderSliders = (option: Option) => {
        return userState.properties.map((property: Property) => {
            const optionScore = option.scores ? option.scores[property.id] : 0
            return (
                <SliderContainer>
                    <Alignment>
                        <P>{property.name}</P>
                        <P>{optionScore}/10</P>
                    </Alignment>
                    <Slider
                        marginBottom
                        value={optionScore}
                        range={[0, 10]}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                            userDispatch({
                                type: "UPDATE_OPTION",
                                payload: { ...option, scores: { ...option.scores, [property.id]: e.target.value } },
                            })
                        }
                    />
                </SliderContainer>
            )
        })
    }

    return (
        <>
            <H1>Grade Your Options</H1>
            <P>Determine how well each one of your options optimizes for each of your chosen parameters.</P>
            <Form>{optionGrader()}</Form>
        </>
    )
}

const Alignment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SliderContainer = styled.div`
    margin-bottom: ${metrics.baseUnit * 3}px;
`

export default Grades
