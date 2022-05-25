import styled from "styled-components"

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
    ${({ theme, scrollTop }) => `
    transform: translateY(${"-" + scrollTop}px);
    z-index: 8;
    position: fixed;
    top: 0;
    background-color: ${theme.secondLayerBackground};
    width: 100%;
    height: ${theme.metrics.headerHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${`0 1px ${theme.metrics.baseUnit / 2}px 0 ${theme.shadow}`};
    @media (max-width: 480px) {
        height: ${theme.metrics.baseUnit * 6}px;
    }
    `}
`

const HeaderInner = styled.div`
    ${({ theme }) => `
        margin: 0px ${theme.metrics.bodyPadding}px;
        width: ${theme.metrics.bodyWidth}px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `}
`

const CompanyLogo = styled.button`
    ${({ theme, samePath }) => `
        color: ${theme.mainText};
        background-color: ${theme.secondLayerBackground};
        pointer-events: ${samePath ? "none" : "initial"};
        border: 0;
        outline: none;
        padding: 0;
        cursor: pointer;
        outline: 0;
        font-size: ${theme.metrics.smallText}px;
    `}
`

export default HeaderWithRouter
