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
            return { ...state, properties: [...state.properties, action.payload] }
        case "DELETE_PROPERTY":
            return { ...state, properties: [...state.properties.filter((x) => x.name !== action.payload)] }
        case "ADD_OPTION":
            return { ...state, options: [...state.options, action.payload] }
        case "UPDATE_OPTION":
            return { ...state, options: [...state.options, action.payload] }
        case "DELETE_OPTION":
            return { ...state, options: [...state.options.filter((x) => x.name !== action.payload)] }
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
