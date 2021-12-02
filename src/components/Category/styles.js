import styled from 'styled-components'

export const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: hsl(0deg, 50%, 50%);
  }
  &:active {
    text-decoration: underline;
  }
`
export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > figcaption > i {
    font-style: normal;
  }
`

export const Img = styled.img`
  border: 1px solid hsl(0deg, 0%, 90%);
  box-shadow: 0px 10px 14px hsla(0deg, 0%, 100%, 0.2);
  border-radius: 50%;
  width: 75px;
  height: 75px;
  object-fit: cover;
`
