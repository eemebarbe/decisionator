import React, { useReducer, createContext } from "react"
import { Option, Property } from "../interfaces"
const styleMode = window.localStorage.getItem("styleMode")

interface UserState {
    properties: Array<Property>
    options: Array<Option>
    styleMode: string
}

type Actions =
    | { type: "ADD_PROPERTY"; payload: Property }
    | { type: "UPDATE_PROPERTY"; payload: Property }
    | { type: "DELETE_PROPERTY"; payload: Property }
    | { type: "ADD_OPTION"; payload: Option }
    | { type: "UPDATE_OPTION"; payload: Option }
    | { type: "DELETE_OPTION"; payload: Option }
    | { type: "styleMode"; payload: string }

type ContextApi = {
    state: typeof initialState
    dispatch: React.Dispatch<Actions>
}

const initialState = {
    properties: [],
    options: [],
    styleMode: styleMode ? styleMode : "main",
}

export const UserContext = createContext<UserState | null>(initialState)

const reducer = (state: UserState, action: Actions) => {
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
            return { ...state, properties: [...state.properties.filter((x) => x.id !== action.payload.id)] }
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

export const UserProvider = (props: React.PropsWithChildren<{}>) => {
    const [userState, userDispatch] = useReducer(reducer, initialState)
    return <UserContext.Provider value={{ userState, userDispatch }}>{props.children}</UserContext.Provider>
}
