import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Container = styled.article`
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
`

export const Image = styled.img`
  ${fadeIn()}
  border-radius: 10%;
  box-shadow: 0 10px 14px hsla(0deg, 100%, 100%, 0.2);
  width: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  svg {
    display: inline-block;
  }
`

export const Button = styled.button`
  padding-top: 8px;
`
