import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toast } from "./components"
import styled, { ThemeProvider } from "styled-components"
import { colors } from "./themes"
import GlobalStyle from "./themes/GlobalStyle"
import Properties from "./pages/Properties"
import Options from "./pages/Options"

function App() {
    const styleMode = window.localStorage.getItem("styleMode")

    useEffect(() => {
        if (!styleMode) {
            let newStyle = "main"
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                newStyle = "dark"
            }
            window.localStorage.setItem("styleMode", newStyle)
        }
    }, [])

    return (
        <ThemeProvider theme={styleMode && styleMode === "dark" ? colors.dark : colors.main}>
            <GlobalStyle />
            <AppWrapper>
                <BrowserRouter>
                    <Toast />
                    <Routes>
                        <Route path="/" element={<Properties />} />
                        <Route path="/options" element={<Options />} />
                    </Routes>
                </BrowserRouter>
            </AppWrapper>
        </ThemeProvider>
    )
}

const AppWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
`

export default App
