import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { PhotoCard } from '../../components/PhotoCard'
import { Main, Logo } from './styles'

function App () {
  return (
    <Main>
      <Logo />
      <ListOfCategories />
      <PhotoCard id='1' />
      <PhotoCard id='2' />
      <PhotoCard id='3' />
    </Main>
  )
}

export default App
