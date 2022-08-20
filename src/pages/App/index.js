import React from 'react'
import { useQuery } from 'react-query'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards'
import { Main, Logo } from './styles'

function App () {
  const { isLoading, data } = useQuery('categories')
  return (
    <Main>
      <Logo />
      <ListOfCategories categories={data} isLoading={isLoading} />
      <ListOfPhotoCards items={[1, 2, 3]} />
    </Main>
  )
}

export default App
