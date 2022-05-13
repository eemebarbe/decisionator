import React, { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Overlay, Hamburger, MenuOverlay } from "."
import { UserContext } from "../contexts/userContext"
import styled from "styled-components"
import { metrics } from "../themes"

const HeaderWithRouter = (props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { userState } = useContext(UserContext)
    const userId = userState.userId
    const history = useNavigate()
    const location = useLocation()

    const pushTo = (path) => {
        location.pathname !== path && history(path)
    }

    const toggleMenu = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    const menuButtonState = () => {
        return menuOpen ? null : <Hamburger notifications={userState.newMessages} onClick={toggleMenu} />
    }

    const menu = () => {
        return (
            <Overlay>
                <MenuOverlay setMenuOpen={() => setMenuOpen(false)} />
            </Overlay>
        )
    }

    return (
        <>
            {menuOpen && menu()}
            <Header {...props}>
                <HeaderInner>
                    <CompanyLogo onClick={() => (userId ? pushTo("/") : pushTo("/"))}>Deadline</CompanyLogo>
                    <div>
                        {userId && <WalletId>{userId}</WalletId>}
                        {userId && menuButtonState()}
                    </div>
                </HeaderInner>
            </Header>
        </>
    )
}

const Header = styled.div`
    transform: translateY(${(props) => "-" + props.scrollTop}px);
    z-index: 8;
    position: absolute;
    background-color: ${(props) => props.theme.secondLayerBackground};
    width: 100%;
    height: ${metrics.headerHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${(props) => `0 1px ${metrics.baseUnit / 2}px 0 ${props.theme.shadow}`};
    @media (max-width: 480px) {
        display: none;
    }
`

const HeaderInner = styled.div`
    margin: 0px ${metrics.bodyPadding}px;
    width: ${metrics.bodyWidth}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const CompanyLogo = styled.button`
    color: ${(props) => props.theme.mainText};
    background-color: ${(props) => props.theme.secondLayerBackground};
    pointer-events: ${(props) => (props.samePath ? "none" : "initial")};
    border: 0;
    outline: none;
    padding: 0;
    cursor: pointer;
    outline: 0;
    font-size: ${metrics.smallText}px;
`
const WalletId = styled(CompanyLogo)`
    background-color: ${(props) => props.theme.secondaryColor};
    height: ${metrics.baseUnit * 4}px;
    border-radius: ${metrics.baseUnit * 2}px;
    padding: 0px ${metrics.baseUnit * 2}px;
    font-size: ${metrics.baseFontUnit}px;
    margin-right: ${metrics.baseUnit * 3}px;
`

export default HeaderWithRouter
