import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
`

export const Nav = styled.nav`
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

export const Title = styled.h1``
