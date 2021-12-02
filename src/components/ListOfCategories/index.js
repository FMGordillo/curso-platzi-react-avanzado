import React from 'react'
import { Category } from '../Category'
import { List, ListItem } from './styles'

export function ListOfCategories () {
  const array = [1, 2, 3, 4, 5, 6, 7]

  return (
    <List>
      {array.map(a => <ListItem key={a}><Category /></ListItem>)}
    </List>
  )
}
