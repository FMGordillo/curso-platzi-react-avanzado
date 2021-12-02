import React from 'react'
import { Category } from '../../components/Category'
import { Main, Header, Nav, Title } from './styles'

function App () {
  return (
    <Main>
      <Header>
        <Nav>
          <ul>
            <li>Home</li>
            <li>Main</li>
            <li>About</li>
          </ul>
        </Nav>
      </Header>
      <Title>Hello</Title>
      <p>Some content</p>
      <Category />
      <Category />
      <Category />
      <Category />
    </Main>
  )
}

export default App
