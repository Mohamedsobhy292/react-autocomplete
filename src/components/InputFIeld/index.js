import React from 'react'
import { InputFieldStyle } from './InputFieldStyles'

const InputField = ({ value, onChange, potentialValue, ...props }) => {
    return (
        <InputFieldStyle
            data-testid="input-field"
            potentialValue={potentialValue}
            type="text"
            value={value}
            onChange={onChange}
            {...props}
        />
    )
}

export { InputField }
