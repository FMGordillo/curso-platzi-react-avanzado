import React from 'react'
import { Anchor, Figure, Img } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export function Category ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) {
  return (
    <Anchor href={path}>
      <Figure>
        <Img src={cover} alt='Cover image' />
        <figcaption>
          <i role='img'>{emoji}</i>
        </figcaption>
      </Figure>
    </Anchor>
  )
}
