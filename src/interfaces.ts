export interface Option {
    id: number
    name: string
    scores?: {
        [key: number]: number
    }
    finalScore?: number
}

export interface Property {
    id: number
    weight: number
    name: string
}
