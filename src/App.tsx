import React, { useState, useEffect, useContext } from "react"
import { Button, ProgressBar, Header, BodyWrapper } from "./components"
import styled, { ThemeProvider } from "styled-components"
import { UserContext } from "./contexts/userContext"
import { colors, metrics } from "./themes"
import GlobalStyle from "./themes/GlobalStyle"
import Properties from "./pages/Properties"
import Options from "./pages/Options"
import Grades from "./pages/Grades"
import Results from "./pages/Results"
import Welcome from "./pages/Welcome"

function App() {
    const [page, setPage] = useState(0)
    const [startQuestionnaire, setStartQuestionnaire] = useState(false)
    const styleMode = window.localStorage.getItem("styleMode")
    const { userState } = useContext(UserContext)

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
        return [<Properties />, <Options />, <Grades />, <Results />]
    }

    const disableNextButton = () => {
        if (page === 0 && userState.properties[0] && userState.properties[0].name) {
            return false
        } else if (page === 1 && userState.options.length > 1) {
            return false
        } else if (page === 2) {
            return false
        }
        return true
    }

    const questionnaireToggle = () => {
        if (startQuestionnaire) {
            return (
                <>
                    <ProgressBar current={page} length={pageList().length} />
                    {pageList()[page]}
                </>
            )
        } else {
            return <Welcome start={() => setStartQuestionnaire(true)} />
        }
    }

    const navClick = (direction: boolean) => {
        setPage(direction ? page + 1 : page - 1)
    }

    const navigation = () => {
        return (
            <Alignment>
                <Navigation>
                    <div>
                        <Button marginRight disabled={!page} onClick={() => navClick(false)}>
                            Previous Step
                        </Button>
                        <Button disabled={disableNextButton()} onClick={() => navClick(true)}>
                            Next Step
                        </Button>
                    </div>
                </Navigation>
            </Alignment>
        )
    }

    return (
        <ThemeProvider theme={styleMode && styleMode === "dark" ? colors.dark : colors.main}>
            <GlobalStyle />
            <Header />
            <BodyWrapper>{questionnaireToggle()}</BodyWrapper>
            {startQuestionnaire && navigation()}
        </ThemeProvider>
    )
}

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
        @media (max-width: 480px) {
            margin-bottom: 0;
            border-radius: 0;
        }
    }
`

export default App
