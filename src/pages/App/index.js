import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { PhotoCard } from '../../components/PhotoCard'
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
      <PhotoCard />
    </Main>
  )
}

export default App
