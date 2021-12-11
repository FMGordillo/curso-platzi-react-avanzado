import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { PhotoCard } from '../../components/PhotoCard'
import { Main, Title } from './styles'

function App () {
  return (
    <Main>
      <Title>LOGO</Title>
      <ListOfCategories />
      <PhotoCard id='1' />
    </Main>
  )
}

export default App
