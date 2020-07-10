import React from 'react'
import { AutoComplete } from './components/autocomplete'
import { GlobalStyle } from './globalStyles'
import styled from 'styled-components'
import { suggestions } from './suggestions'

const AppContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const PageTitle = styled.h2`
    color: #fff;
    display: block;
    margin-bottom: 25px;
    opacity: 0.6;
`

function App() {
    return (
        <AppContainer>
            <GlobalStyle />
            <PageTitle>Autocomplete component</PageTitle>
            <AutoComplete options={suggestions} />
        </AppContainer>
    )
}

export default App
