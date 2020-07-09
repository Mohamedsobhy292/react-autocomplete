import styled from 'styled-components'

const InputFieldStyle = styled.input`
    background: #fff;
    height: 46px;
    min-width: 350px;
    line-height: 46px;
    padding: 0 16px;
    border-radius: 4px;
    border: 1px solid transparent;
    font-size: 12px;
    outline: none;
    transition: all 0.3s;

    &:focus {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
            rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    }

    color: ${(props) => props.potentialValue && '#bbb'};
`
export { InputFieldStyle }
