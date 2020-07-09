import React, { useState } from 'react'
import { InputField } from '../InputFIeld'
import { SuggestionList } from './suggestionList'

import { AutoCompleteContainer } from './autoCompleteStyles'
import { filterSuggestions } from './helpers'

const AutoComplete = () => {
    const [inputValue, setInputValue] = useState('')
    const [suggestionListIsOpen, setSuggestionListIsOpen] = useState(false)
    const [pointer, setPointer] = useState(0)
    const filteredSuggestions = filterSuggestions(inputValue)
    const [potentialValue, setPotentialValue] = useState(null)

    const onChange = (e) => {
        setInputValue(e.target.value)
        if (e.target.value) {
            setSuggestionListIsOpen(true)
            setPointer(0)
        } else {
            setSuggestionListIsOpen(false)
        }
    }

    const handleArrowDown = () => {
        if (pointer >= filteredSuggestions.length - 1) return
        setPointer(pointer + 1)
    }

    const handleArrowUp = () => {
        if (pointer > 0) {
            setPointer(pointer - 1)
        }
    }

    const handleTyping = (e) => {
        if (!suggestionListIsOpen || !filteredSuggestions.length) return false

        if (e.keyCode === 40) handleArrowDown()

        if (e.keyCode === 38) handleArrowUp()

        if (e.keyCode === 13) setValue(filteredSuggestions[pointer])
    }

    const setValue = (value) => {
        setInputValue(value)
        setSuggestionListIsOpen(false)
        setPotentialValue(false)
    }

    return (
        <AutoCompleteContainer>
            <InputField
                potentialValue={!!potentialValue}
                value={potentialValue || inputValue}
                onChange={onChange}
                onKeyDown={handleTyping}
            />

            <SuggestionList
                setPotentialValue={setPotentialValue}
                pointer={pointer}
                handleOptionClick={setValue}
                suggestions={filteredSuggestions}
                value={inputValue}
                suggestionListIsOpen={suggestionListIsOpen}
            />
        </AutoCompleteContainer>
    )
}

export { AutoComplete }
