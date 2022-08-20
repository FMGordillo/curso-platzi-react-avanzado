import styled, { css } from 'styled-components'

export const List = styled.ul`
  padding: 0 14px;
  list-style: none;
  overflow-x: auto;
  display: flex;
  gap: 8px;
  max-width: 560px;
  
  @media(min-width: 500px) {
    & {
      justify-content: center;
    }
  }
  
  ${({ fixed }) =>
    fixed
      ? css`
      background: hsl(0deg, 0%, 50%);
      border-radius: 60px;
      box-shadow: 0 0 20px hsla(0deg, 0%, 0%, 0.3);
      left: 0;
      right: 0;
      transform: translateY(0%) scale(.7);
      margin: 0 auto;
      padding: 5px 28px;
      position: fixed;
      z-index: 1;
      transition: all 0.3s;
    `
    : ''}
  
  ${({ hidden }) => hidden
  ? css`
      transform: translateY(-100%) scale(.7);
    `
  : ''}
`

export const ListItem = styled.li`
  display: flex;
  flex: 0 0 auto;
  max-width: 400px;
`
