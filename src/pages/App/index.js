import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
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
      <ListOfCategories />
    </Main>
  )
}

export default App
