import styled from 'styled-components'
// @ts-ignore
import LogoSvg from '../../images/Logo.svg'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`

export const Logo = styled(LogoSvg)`
  width: 220px;
  margin-left: -20px;
  margin-top: -10px;  
`
