import React from 'react'
import { PhotoCard } from '../PhotoCard'

export function ListOfPhotoCards ({ items }) {
  return items?.length > 0
    ? items.map(item => <PhotoCard key={item} id={item} />)
    : null
}
