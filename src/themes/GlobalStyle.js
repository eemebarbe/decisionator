import { metrics } from "../themes"
import { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after { 
    box-sizing: border-box;
  }
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-size: ${metrics.baseUnit}px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.mainText};
    @media (max-width: 480px){ 
      font-size: ${metrics.baseUnit}px;
    }
  }
  body {
    input, textarea, button {
      font-family: inherit;
    }
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
    margin: 0;
    padding: 0;
    -webkit-font-smooth: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
    overflow: hidden;
    list-style-position: inside;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    input:-webkit-autofill, 
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.background} inset;
      box-shadow: 0 0 0px 1000px ${(props) => props.theme.background} inset;
      -webkit-text-fill-color: ${(props) => props.theme.mainText} !important;
      background-color: ${(props) => props.theme.background} !important;
    }
  }
  #root {
      height: 100%;
  }`

export const inputStyles = css`
    background-color: ${(props) => props.theme.overlayBackground};
    color: ${(props) => props.theme.mainText};
    border: none;
    border-radius: 0;
    border-radius: ${metrics.globalBorderRadius}px;
    outline: none;
    margin: none;
    margin-bottom: ${metrics.baseUnit * 3}px;
    padding: 0;
    padding-left: ${metrics.baseUnit * 2}px;
    height: ${metrics.baseUnit * 6}px;
    width: ${metrics.baseUnit * 30}px;
    font-size: ${metrics.regularText}px;
    &::placeholder {
        color: ${(props) => props.theme.inactive};
    }
    &:focus {
        background-color: ${(props) => props.theme.inactive};
    }
    box-sizing: border-box;
    width: 100%;
`
export default GlobalStyle
