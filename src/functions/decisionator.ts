interface Option {
    name: string
    grades: {
        [key: string]: number
    }
    finalScore: number
}

interface OptionProperties {
    [key: string]: number
}

function orderByScore(options: Array<Option>) {
    options.sort((a, b) => {
        return b.finalScore - a.finalScore
    })
    return options
}

function calculateScore(options: Array<Option>, optionProperties: OptionProperties) {
    let newOptions = []
    for (let i = 0; i < options.length; i++) {
        let option = options[i]
        let finalScore = 0
        for (let key in option.grades) {
            finalScore += option.grades[key] * optionProperties[key]
        }
        option.finalScore = finalScore
        newOptions.push(option)
    }
    return orderByScore(newOptions)
}

export default calculateScore
