import React from 'react'
import { Button, ButtonContainer, Container, Image, ImgWrapper } from './styles'
import { BsSuitHeartFill } from 'react-icons/bs'

export function PhotoCard ({
  id,
  likes = 0,
  imageSrc = 'https://via.placeholder.com/250'
}) {
  return (
    <Container>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Image src={imageSrc} alt='Image' />
          <ButtonContainer>
            <Button>
              <BsSuitHeartFill />
            </Button>
            <span>
              {likes} likes!
            </span>
          </ButtonContainer>
        </ImgWrapper>
      </a>
    </Container>
  )
}
