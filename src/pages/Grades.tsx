import React, { useContext } from "react"
import styled from "styled-components"
import { Form, H1, Slider, Card, H2, P } from "../components"
import { UserContext } from "../contexts/userContext"
import { Property, Option } from "../interfaces"

function Grades() {
    const { userState, userDispatch } = useContext(UserContext)

    const optionGrader = () => {
        return userState.options.map((option: Option) => {
            return (
                <Card key={option.id}>
                    <H2>{option.name}</H2>
                    {renderSliders(option)}
                </Card>
            )
        })
    }

    const renderSliders = (option: Option) => {
        return userState.properties.map((property: Property, i) => {
            const optionScore = option.scores ? option.scores[property.id] : 0
            const last = userState.properties.length - 1 === i
            return (
                <div key={property.id}>
                    <Alignment>
                        <P>{property.name}</P>
                        <P>{optionScore}/10</P>
                    </Alignment>
                    <Slider
                        marginBottom={!last}
                        value={optionScore}
                        range={[0, 10]}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                            userDispatch({
                                type: "UPDATE_OPTION",
                                payload: {
                                    ...option,
                                    scores: { ...option.scores, [property.id]: e.target.valueAsNumber },
                                },
                            })
                        }
                    />
                </div>
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

export default Grades
