import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => `
  *, *:before, *:after { 
    box-sizing: border-box;
  }
  html {
    font-size: ${theme.metrics.baseUnit}px;
    background-color: ${theme.background};
    color: ${theme.mainText};
    @media (max-width: 480px){ 
      font-size: ${theme.metrics.baseUnit}px;
    }
  }
  body {
    input, textarea, button {
      font-family: inherit;
    }
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smooth: antialiased;
    -moz-osx-font-smoothing: grayscale;
    list-style-position: inside;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    input:-webkit-autofill, 
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px ${theme.background} inset;
      box-shadow: 0 0 0px 1000px ${theme.background} inset;
      -webkit-text-fill-color: ${theme.mainText} !important;
      background-color: ${theme.background} !important;
    }
  }
  #root {
      height: 100%;
  }
  `}`

export const inputStyles = css`
    ${({ theme }) => `
    background-color: ${theme.overlayBackground};
    color: ${theme.mainText};
    border: none;
    border-radius: 0;
    border-radius: ${theme.metrics.globalBorderRadius}px;
    outline: none;
    margin: none;
    margin-left: ${(props) => (props.marginLeft ? `${theme.metrics.baseUnit * 3}px` : 0)};
    margin-right: ${(props) => (props.marginRight ? `${theme.metrics.baseUnit * 3}px` : 0)};
    margin-bottom: ${(props) => (props.marginBottom ? `${theme.metrics.baseUnit * 3}px` : 0)};
    margin-top: ${(props) => (props.marginTop ? `${theme.metrics.baseUnit * 3}px` : 0)};
    padding: 0;
    padding-left: ${theme.metrics.baseUnit * 2}px;
    height: ${theme.metrics.baseUnit * 6}px;
    width: 100%;
    font-size: ${theme.metrics.regularText}px;
    &::placeholder {
        color: ${theme.inactive};
    }
    &:focus {
        background-color: ${theme.inactive};
    }
    box-sizing: border-box;
    @media (max-width: 480px) {
        display: flex;
        width: auto;
        flex-grow: 1;
        font-size: ${(props) => (props.square ? `${theme.metrics.regularText}px` : `${theme.metrics.smallText}px`)};
    }
    `}
`
export default GlobalStyle
