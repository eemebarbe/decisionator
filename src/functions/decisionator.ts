import { Option, Property } from "../interfaces"

function orderByScore(options: Array<Option>) {
    options.sort((a, b) => {
        return b.finalScore - a.finalScore
    })
    return options
}

function calculateScore(options: Array<Option>, properties: Array<Property>) {
    let newOptions = []
    for (let i = 0; i < options.length; i++) {
        let option = options[i]
        let finalScore = 0
        for (let key in option.scores) {
            finalScore += option.scores[key] * properties[key]
        }
        option.finalScore = finalScore
        newOptions.push(option)
    }
    return orderByScore(newOptions)
}

export default calculateScore
