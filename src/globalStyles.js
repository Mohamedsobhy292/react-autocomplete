import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *   {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body {
      font-family: 'Roboto', sans-serif;
    background: linear-gradient(141deg, rgba(238,125,125,1) 0%, rgba(238,148,125,1) 35%, rgba(238,125,125,1) 100%);
    color: #2b2d42;
  }


  ::-webkit-scrollbar {
  width: 10px;
}
  ::-webkit-scrollbar-track {
    background: #f0f0f0;
}
  ::-webkit-scrollbar-thumb {
  background-color: #ee7d7d;
  outline: 1px solid #ee7d7d;
}
`
export { GlobalStyle }
