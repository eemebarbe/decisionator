import React, { useReducer, createContext } from "react"
const styleMode = window.localStorage.getItem("styleMode")

const initialState = {
    properties: [],
    options: [],
    styleMode: styleMode ? styleMode : "main",
}

export const UserContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PROPERTY":
            return { ...state, properties: [...state.properties, action.payload] }
        case "UPDATE_PROPERTY":
            let newProps = [...state.properties]
            const propIndex = newProps.findIndex((x) => x.id === action.payload.id)
            newProps[propIndex] = action.payload
            return {
                ...state,
                properties: [...newProps],
            }
        case "DELETE_PROPERTY":
            return { ...state, properties: [...state.properties.filter((x) => x.id !== action.payload)] }
        case "ADD_OPTION":
            return { ...state, options: [...state.options, action.payload] }
        case "UPDATE_OPTION":
            let newOptions = [...state.options]
            const optionIndex = newOptions.findIndex((x) => x.id === action.payload.id)
            newOptions[optionIndex] = action.payload
            return { ...state, options: [...newOptions] }
        case "DELETE_OPTION":
            return { ...state, options: [...state.options.filter((x) => x.id !== action.payload.id)] }
        case "styleMode":
            return { ...state, styleMode: action.payload }
        default:
            return state
    }
}

export const UserProvider = (props) => {
    const [userState, userDispatch] = useReducer(reducer, initialState)
    return <UserContext.Provider value={{ userState, userDispatch }}>{props.children}</UserContext.Provider>
}
