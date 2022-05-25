import { createGlobalStyle, css } from "styled-components"

interface ThemeProps {
    metrics: {
        baseUnit: number
        baseFontUnit: number
        globalBorderRadius: number
        bodyWidth: () => void
        bodyPadding: () => void
        mobileMenuHeight: () => void
        headerHeight: () => void
        smallText: () => void
        regularText: () => void
        H1: () => void
        H2: () => void
        H1Mobile: () => void
        animationLength: number
    }
    inactive: string
    primaryButton: string
    mainText: string
    detailText: string
    secondaryColor: string
    background: string
    overlayBackground: string
    secondLayerBackground: string
    highlight: string
    overlayDetail: string
    shadow: string
}

export const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
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

export interface InputProps {
    marginBottom?: boolean
    marginLeft?: boolean
    marginRight?: boolean
    marginTop?: boolean
    square?: boolean
    value?: string
    placeholder?: string
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

export const inputStyles = css<InputProps>`
    ${({ theme, marginBottom, marginLeft, marginRight, marginTop, square }) => `
      background-color: ${theme.overlayBackground};
      color: ${theme.mainText};
      border: none;
      border-radius: 0;
      border-radius: ${theme.metrics.globalBorderRadius}px;
      outline: none;
      margin: none;
      margin-left: ${marginLeft ? `${theme.metrics.baseUnit * 3}px` : 0};
      margin-right: ${marginRight ? `${theme.metrics.baseUnit * 3}px` : 0};
      margin-bottom: ${marginBottom ? `${theme.metrics.baseUnit * 3}px` : 0};
      margin-top: ${marginTop ? `${theme.metrics.baseUnit * 3}px` : 0};
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
          font-size: ${square ? `${theme.metrics.regularText}px` : `${theme.metrics.smallText}px`};
      }
    `}
`
export default GlobalStyle
