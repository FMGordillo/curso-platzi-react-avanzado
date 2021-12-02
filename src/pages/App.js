import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  display: flex;
`

const Nav = styled.nav`
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 4px;
  }
  ul > li:not(:last-child)::after {
    content: " |"
  }
`

const Title = styled.h1``

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
    </Main>
  )
}

export default App
