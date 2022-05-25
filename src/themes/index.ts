import colors from "./colors"
import metrics from "./metrics"

export default (colorScheme: string) => {
    return { ...colors[colorScheme], metrics }
}

export { colors, metrics }
