import colors from "./colors"
import metrics from "./metrics"

export default (colorScheme) => {
    return { ...colors[colorScheme], metrics }
}

export { colors, metrics }
