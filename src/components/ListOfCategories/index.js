import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import useScrollListener from '../../hooks/useScrollListener'
import { Category } from '../Category'
import { List, ListItem } from './styles'

function useCategoriesData () {
  const { isLoading, data } = useQuery('categories')
  return {
    isLoading,
    data
  }
}

export function ListOfCategories () {
  const { isLoading, data } = useCategoriesData()
  const { scrollY } = useScrollListener()

  const showFixed = useMemo(() => scrollY > 210)

  const renderList = (showFixed = null) => (
    <List fixed={showFixed !== null} hidden={showFixed !== null && showFixed === false}>
      {data.map(
        category => (
          <ListItem key={category.id}>
            <Category
              emoji={category.emoji}
              cover={category.cover}
              path={category.path}
            />
          </ListItem>
        )
      )}
    </List>
  )

  return (
    <>
      {!isLoading && renderList()}
      {!isLoading && renderList(showFixed)}
    </>
  )
}
