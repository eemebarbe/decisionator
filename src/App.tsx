import React, { useState, useEffect, useContext } from "react"
import { Button, ProgressBar, Header, BodyWrapper } from "./components"
import styled, { ThemeProvider } from "styled-components"
import { UserContext } from "./contexts/userContext"
import { colors, metrics } from "./themes"
import GlobalStyle from "./themes/GlobalStyle"
import Properties from "./pages/Properties"
import Options from "./pages/Options"
import Grades from "./pages/Grades"

function App() {
    const [page, setPage] = useState(0)
    const styleMode = window.localStorage.getItem("styleMode")
    const { userState, userDispatch } = useContext(UserContext)

    useEffect(() => {
        if (!styleMode) {
            let newStyle = "main"
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                newStyle = "dark"
            }
            window.localStorage.setItem("styleMode", newStyle)
        }
    }, [])

    const pageList = () => {
        return [<Properties />, <Options />, <Grades />]
    }

    const disableNextButton = () => {
        console.log(userState.properties)
        if (page === 0 && userState.properties.length) {
            console.log()
            return false
        } else if (page === 1 && userState.options.length) {
            return false
        }
        return true
    }

    return (
        <ThemeProvider theme={styleMode && styleMode === "dark" ? colors.dark : colors.main}>
            <GlobalStyle />
            <AppWrapper>
                <Header />
                <BodyWrapper>
                    <ProgressBar current={page} length={pageList().length} />
                    {pageList()[page]}
                </BodyWrapper>
                <Alignment>
                    <Navigation>
                        <div>
                            <Button disabled={!page} onClick={() => setPage(page - 1)}>
                                Previous Step
                            </Button>
                            <Button disabled={disableNextButton()} onClick={() => setPage(page + 1)}>
                                Next Step
                            </Button>
                        </div>
                    </Navigation>
                </Alignment>
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

const Alignment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Navigation = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        box-shadow: ${(props) => `0 1px ${metrics.baseUnit / 2}px 0 ${props.theme.shadow}`};
        width: ${metrics.bodyWidth}px;
        background-color: ${(props) => props.theme.secondLayerBackground};
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: ${metrics.baseUnit * 12}px;
        border-radius: ${metrics.globalBorderRadius}px;
        margin-bottom: ${metrics.baseUnit * 3}px;
        padding: ${metrics.baseUnit * 3}px;
    }
`

export default App
