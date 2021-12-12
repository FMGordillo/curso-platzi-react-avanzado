import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, ListItem } from './styles'
import useScrollListener from '../../hooks/useScrollListener'

// import data from '../../../api/db.json'

export function ListOfCategories ({ categories, isLoading }) {
  const [showFixed, setShowFixed] = useState(false)
  const { scrollY } = useScrollListener()

  useEffect(() => {
    setShowFixed(scrollY > 210)
  }, [scrollY, setShowFixed])

  const renderList = (showFixed = null) => (
    <List className={showFixed === null ? '' : showFixed === false ? 'fixed hidden' : 'fixed'}>
      {categories.map(
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
