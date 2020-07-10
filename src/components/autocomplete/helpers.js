export const fuzzuyMatch = (search, option) => {
    if (!search) return false
    search = search.toLowerCase().replace(/\s/g)
    option = option.toLowerCase().replace(/\s/g)

    let lastFoundChar = -1

    for (let i = 0; i < search.length; i++) {
        const currentChar = search[i]
        lastFoundChar = option.indexOf(currentChar, lastFoundChar + 1)
        if (lastFoundChar === -1) return false
    }
    return true
}

export const filterSuggestions = (suggestions, inputValue) => {
    return suggestions.filter((suggestion) => {
        return fuzzuyMatch(inputValue, suggestion)
    })
}
