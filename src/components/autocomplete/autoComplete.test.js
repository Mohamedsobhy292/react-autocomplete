import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { AutoComplete } from './index'

const options = [
    'Apple',
    'Apricot',
    'Avocado',
    'Banana',
    'Buddhas hand',
    'Crab',
]

describe('<AutoComplete />', () => {
    test('render correctly with suggestion list hidden', () => {
        render(<AutoComplete options={options} />)

        const input = screen.getByTestId('input-field')
        const suggestionList = screen.getByTestId('suggestion-list')

        expect(input).toBeInTheDocument()
        expect(suggestionList).not.toBeVisible()
    })

    test('opens list when there input value', () => {
        render(<AutoComplete options={options} />)

        const input = screen.getByTestId('input-field')
        const suggestionList = screen.getByTestId('suggestion-list')

        fireEvent.change(input, { target: { value: 'ap' } })

        expect(suggestionList).toBeVisible()
        expect(suggestionList.children.length).toBe(2)
    })

    test('set input value when click on option', () => {
        render(<AutoComplete options={options} />)

        const input = screen.getByTestId('input-field')
        const suggestionList = screen.getByTestId('suggestion-list')

        fireEvent.change(input, { target: { value: 'ap' } })
        fireEvent.click(suggestionList.children[0])

        expect(suggestionList).not.toBeVisible()
        expect(input.value).toBe(suggestionList.children[0].textContent)
    })

    test('close list when field value not matching any option', () => {
        render(<AutoComplete options={options} />)

        const input = screen.getByTestId('input-field')
        const suggestionList = screen.getByTestId('suggestion-list')

        fireEvent.change(input, { target: { value: 'msz' } })

        expect(suggestionList).not.toBeVisible()
    })

    test('add value to input when hover over and remove it on mouseleave', () => {
        render(<AutoComplete options={options} />)
        const initialValue = 'ap'
        const input = screen.getByTestId('input-field')
        const suggestionList = screen.getByTestId('suggestion-list')

        fireEvent.change(input, { target: { value: initialValue } })
        const firstOption = suggestionList.children[0]
        fireEvent.mouseEnter(firstOption)

        expect(input.value).toBe(firstOption.textContent)
        fireEvent.mouseLeave(firstOption)

        expect(input.value).toBe(initialValue)
    })
})
