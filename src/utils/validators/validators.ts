export const required = (value: any) => {
    if(value) {
        return undefined
    }
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if(value.length > maxLength) {
        return `The maximum length cannot be more than ${maxLength} characters`
    }
    return undefined
}

export const maxLength30 = (value: string) => {
    if(value.length > 30) {
        return "The maximum length cannot be more than 30 characters"
    }
    return undefined
}

export const maxLength50 = (value: string) => {
    if(value.length > 30) {
        return "The maximum length cannot be more than 50 characters"
    }
    return undefined
}