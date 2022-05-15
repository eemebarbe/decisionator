import styled from "styled-components"
import { metrics } from "../themes"

const HeaderWithRouter = (props) => {
    const url = "github.com/eemebarbe/decisionator"
    return (
        <Header {...props}>
            <HeaderInner>
                <CompanyLogo onClick={() => window.open("https://www." + url, "_blank")}>{url}</CompanyLogo>
            </HeaderInner>
        </Header>
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

export default HeaderWithRouter
