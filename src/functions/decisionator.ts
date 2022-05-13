interface Option {
    name: string
    scores: {
        [key:string]: number
    }
    finalScore: number
}

interface OptionProperties {
    [key:string]: number
}

function orderByScore(options:Array<Option>) {
    options.sort((a, b) => {
        return b.finalScore - a.finalScore
    })
    return options
}

function calculateScore(options:Array<Option>, optionProperties:OptionProperties) {
    let newOptions = []
    for (let i = 0; i < options.length; i++) {
        let option = options[i]
        let finalScore = 0
        for (let key in option.scores) {
            finalScore += option.scores[key] * optionProperties[key]
        }
        option.finalScore = finalScore
        newOptions.push(option)
    }
    return orderByScore(newOptions)
}

export default calculateScore

