import React from 'react'
import { useQuery } from 'react-query'
import { ListOfCategories } from '../../components/ListOfCategories'
import { PhotoCard } from '../../components/PhotoCard'
import { Main, Logo } from './styles'

function App () {
  const { isLoading, data } = useQuery('categories')
  return (
    <Main>
      <Logo />
      <ListOfCategories categories={data} isLoading={isLoading} />
      <PhotoCard id='1' />
      <PhotoCard id='2' />
      <PhotoCard id='3' />
    </Main>
  )
}

export default App
