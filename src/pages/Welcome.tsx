import React from "react"
import { H1, H2, P, Button } from "../components"

interface WelcomeProps {
    start: () => void
}

function Welcome(props: WelcomeProps) {
    return (
        <>
            <H1>Decisionator</H1>
            <H2>Just a random project to get me familiar with Typescript, tbh.</H2>
            <Button marginBottom onClick={() => props.start()}>
                Make a decision
            </Button>
            <P>
                It's difficult to quantify all of the factors that go into why you should do this thing instead of that
                thing. And when you really think about it, it's pretty concerning how informal our decision making tends
                to be. Shouldn't we be as technical as possible when it comes to making life-defining choices?
            </P>
            <P>
                You can use this tool to make any tough decision that you're having trouble with. Which career path to
                take, which city to move to, how to allocate your money. It's a simple formula, but it helps you to
                perform a calculation that's somewhat difficult to do in your head.
            </P>
        </>
    )
}

export default Welcome
