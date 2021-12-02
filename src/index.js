import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Header = styled.h1`
  color: red;
`

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header>Hello</Header>
      <p>This is an example</p>
    </div>
  </React.StrictMode>, document.getElementById('root'))
