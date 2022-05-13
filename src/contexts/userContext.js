import React, { useReducer, createContext } from "react"
const styleMode = window.localStorage.getItem("styleMode")

const initialState = {
    userId: null,
    transactions: [],
    styleMode: styleMode ? styleMode : "main",
    verifying: false,
    redirect: null,
}

export const UserContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "userId":
            return { ...state, userId: action.payload }
        case "transaction":
            return { ...state }
        case "verifying":
            return { ...state, verifying: action.payload }
        case "styleMode":
            return { ...state, styleMode: action.payload }
        case "redirect":
            return { ...state, redirect: action.payload }
        case "signOut":
            return { ...initialState, cart: state.cart }
        case "sales":
            return { ...state, sales: action.payload }
        default:
            return state
    }
}

export const UserProvider = (props) => {
    const [userState, userDispatch] = useReducer(reducer, initialState)
    return <UserContext.Provider value={{ userState, userDispatch }}>{props.children}</UserContext.Provider>
}
