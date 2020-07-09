import React from 'react'
import { InputFieldStyle } from './InputFieldStyles'

const InputField = ({ value, onChange, ...props }) => {
    return (
        <InputFieldStyle
            type="text"
            value={value}
            onChange={onChange}
            {...props}
        />
    )
}

export { InputField }
