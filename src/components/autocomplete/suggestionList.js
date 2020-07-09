import React, { useRef } from 'react'
import { SuggestionsList, SuggestionsItem } from './autoCompleteStyles'
import { useScrollToSelectedElement } from './useScrollToSelectedElement'

const SuggestionList = ({
    suggestions = [],
    value,
    handleOptionClick,
    suggestionListIsOpen,
    pointer,
    setPotentialValue,
}) => {
    const ListContainer = useRef()

    const renderSuggestion = (suggestion) => {
        if (!value) return suggestion
        let result = ''

        suggestion.split('').forEach((char) => {
            if (value.toLowerCase().includes(char.toLowerCase()))
                result += `<b style="color:#ee7d7d">${char}</b>`
            else {
                result += char
            }
        })

        return result
    }

    useScrollToSelectedElement(ListContainer, pointer, suggestions)

    const handleMouseEnter = (index) => {
        setPotentialValue(suggestions[index])
    }

    const handleMouseLeave = (index) => {
        setPotentialValue(null)
    }

    return (
        <SuggestionsList
            isActive={suggestionListIsOpen && !!suggestions.length}
            ref={ListContainer}
        >
            {suggestions.map((suggestion, index) => {
                return (
                    <SuggestionsItem
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        focused={pointer === index}
                        onClick={() => {
                            handleOptionClick(suggestions[index])
                        }}
                        key={suggestion}
                        dangerouslySetInnerHTML={{
                            __html: renderSuggestion(suggestion),
                        }}
                    ></SuggestionsItem>
                )
            })}
        </SuggestionsList>
    )
}

export { SuggestionList }
