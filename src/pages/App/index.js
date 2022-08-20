import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards'
import { Main, Logo } from './styles'

function App () {
  return (
    <Main>
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards items={[1, 2, 3]} />
    </Main>
  )
}

export default App
