import React from 'react'
import { Category } from '../Category'
import { List, ListItem } from './styles'

import data from '../../../api/db.json'

export function ListOfCategories () {
  const { categories } = data || {}

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
