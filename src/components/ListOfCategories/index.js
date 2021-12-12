import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, ListItem } from './styles'
import useScrollListener from '../../hooks/useScrollListener'

import data from '../../../api/db.json'

export function ListOfCategories () {
  const [showFixed, setShowFixed] = useState(false)
  const [categories, setCategories] = useState(data.categories)
  const { scrollY } = useScrollListener()

  useEffect(() => {
    // TODO: Make this an env var
    window.fetch('https://curso-platzi-react-avanzado-api.vercel.app/categories')
      .then(data => data.json())
      .then(data => setCategories(data))
  }, [setCategories])

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
      {renderList()}
      {renderList(showFixed)}
    </>
  )
}
