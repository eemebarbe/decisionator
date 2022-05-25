const metrics = {
    baseUnit: 8,
    baseFontUnit: 12,
    globalBorderRadius: 8,
    get bodyWidth() {
        return this.baseUnit * 128
    },
    get bodyPadding() {
        return this.baseUnit * 3
    },
    get mobileMenuHeight() {
        return this.baseUnit * 4
    },
    get headerHeight() {
        return this.baseUnit * 9
    },
    get smallText() {
        return this.baseFontUnit * 1.25
    },
    get regularText() {
        return this.baseFontUnit * 1.5
    },
    get H1() {
        return this.baseFontUnit * 4
    },
    get H2() {
        return this.baseFontUnit * 2
    },
    get H1Mobile() {
        return this.baseFontUnit * 2.5
    },
    animationLength: 400,
}

export default metrics
