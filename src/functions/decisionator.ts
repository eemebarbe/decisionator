import { Option, Property } from "../interfaces"

function orderByScore(options: Array<Option>) {
    options.sort((a: Option, b: Option) => {
        return b.finalScore! - a.finalScore!
    })
    return options
}

function calculateScore(options: Array<Option>, properties: Array<Property>) {
    let newOptions = []
    for (let i = 0; i < options.length; i++) {
        let option = options[i]
        let finalScore = 0
        for (let key in option.scores) {
            let matchingProperty = properties.find((x) => x.id === parseInt(key))
            finalScore += option.scores[parseInt(key)] * matchingProperty!.weight
        }
        option.finalScore = finalScore
        newOptions.push(option)
    }
    return orderByScore(newOptions)
}

export default calculateScore
