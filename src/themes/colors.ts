const main = {
    inactive: "rgb(211, 211, 211)",
    primaryButton: "rgb(255,0,127)",
    mainText: "rgb(0, 0, 0)",
    detailText: "rgb(255, 255, 255)",
    secondaryColor: "rgb(207, 102, 121)",
    background: "rgb(255, 255, 255)",
    overlayBackground: "rgb(211, 211, 211)",
    secondLayerBackground: "rgb(255, 255, 255)",
    highlight: "rgb(255,215,0)",
    overlayDetail: "rgb(169,169,169)",
    shadow: "rgb(211, 211, 211)",
}

const dark = {
    inactive: "rgb(80, 80, 80)",
    primaryButton: "rgb(255,0,127)",
    mainText: "rgb(255, 255, 255)",
    detailText: "rgb(255, 255, 255)",
    secondaryColor: "rgb(207, 102, 121)",
    background: "rgb(18,18,18)",
    overlayBackground: "rgb(60, 60, 60)",
    secondLayerBackground: "rgb(40, 40, 40)",
    highlight: "rgb(255,215,0)",
    overlayDetail: "rgb(68,68,68)",
    shadow: "rgb(0, 0, 0)",
}

interface Colors {
    [key: string]: {
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
}

const colors: Colors = {
    main,
    dark,
}

export default colors
