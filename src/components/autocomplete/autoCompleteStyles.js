import styled from 'styled-components'

export const AutoCompleteContainer = styled.div`
    position: relative;
`

export const SuggestionsList = styled.ul`
    position: absolute;
    top: 55px;
    width: 100%;
    list-style: none;
    background: #fff;
    overflow-y: auto;
    border-radius: 4px;
    padding: ${(props) => (props.isActive ? '10px' : '0 10px')};
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
        rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
    max-height: ${(props) => (props.isActive ? '200px' : 0)};
    visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
`

export const SuggestionsItem = styled.li`
    padding: 6px 10px;
    transition: all 0.3s;
    margin-bottom: 6px;
    cursor: pointer;
    border-radius: 4px;
    background: ${(props) => (props.focused ? '#E0E0E0' : 'transparent')};
    cursor: pointer;
    &:hover {
        background: #e1e1e1;
    }
`
