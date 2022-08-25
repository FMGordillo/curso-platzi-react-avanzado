import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonContainer, Container, Image, ImgWrapper } from './styles'
import { BsSuitHeartFill } from 'react-icons/bs'

export function PhotoCard ({
  id,
  likes = 0,
  imageSrc = 'https://via.placeholder.com/250'
}) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer'))
      .then(() => {
        const observer = new window.IntersectionObserver(function onObserve (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
      })
  }, [ref, setShow])

  return (
    <Container ref={ref}>
      {show && (
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
      )}
    </Container>
  )
}
