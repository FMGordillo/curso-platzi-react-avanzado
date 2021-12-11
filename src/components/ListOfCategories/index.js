import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, ListItem } from './styles'

import data from '../../../api/db.json'

export function ListOfCategories () {
  const [categories, setCategories] = useState(data.categories)

  useEffect(() => {
    // TODO: Make this an env var
    window.fetch('https://curso-platzi-react-avanzado-api.vercel.app/categories')
      .then(data => data.json())
      .then(data => setCategories(data))
  }, [setCategories])

  return (
    <List>
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
}
