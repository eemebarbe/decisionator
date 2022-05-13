import React, { useState } from "react"
import styled from "styled-components"
import { metrics } from "../themes"
import { Input } from "../components"

const SuggestionInput = (props) => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [dontBlur, setDontBlur] = useState(false)

    const suggestionList = () => {
        const onClickTag = (tag) => {
            props.onSelectSuggestion(tag)
            setShowDropDown(false)
        }
        return props.suggestions.map((thisSuggestion, i) => {
            return (
                <li key={i} onClick={() => onClickTag(thisSuggestion)}>
                    {thisSuggestion.placeholder}
                </li>
            )
        })
    }

    return (
        <>
            <DropDownInput
                onFocus={() => setShowDropDown(true)}
                onBlur={() => !dontBlur && setShowDropDown(false)}
                autoComplete="off"
                {...props}
            />
            <DropDown
                onMouseEnter={() => setDontBlur(true)}
                onMouseLeave={() => setDontBlur(false)}
                showDropDown={showDropDown}
            >
                <Header>Suggestions:</Header>
                <ul>{suggestionList()}</ul>
            </DropDown>
        </>
    )
}

const DropDownInput = styled(Input)`
    margin: 0;
`

const DropDown = styled.div`
    border-radius: ${metrics.globalBorderRadius}px;
    visibility: ${(props) => (props.showDropDown ? "visible" : "hidden")};
    background: ${(props) => props.theme.background};
    position: absolute;
    border: 1px solid ${(props) => props.theme.inactive};
    box-sizing: border-box;
    margin-top: ${metrics.baseUnit * 20}px;
    padding: ${metrics.baseUnit * 2}px;
    ul {
        display: inline-flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        margin-right: ${metrics.baseUnit}px;
        li {
            align-items: center;
            font-size: ${metrics.smallText}px;
            background: ${(props) => props.theme.primaryButton};
            border-radius: 2px;
            color: ${(props) => props.theme.detailText};
            height: ${metrics.baseUnit * 4}px;
            padding: 0px ${metrics.baseUnit}px;
            margin-right: ${metrics.baseUnit}px;
            display: flex;
            list-style: none;
            cursor: pointer;
        }
    }
`

const Header = styled.div`
    margin-bottom: ${metrics.baseUnit * 2}px;
    font-size: ${metrics.smallText}px;
    display: flex;
    align-items: center;
`

export default SuggestionInput
