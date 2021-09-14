import React from 'react'
import styled from 'styled-components'
import { fonts } from './GlobalStyle/fonts'

export interface HeaderProp {
  title: string
}

const HeaderStyled = styled.header`
  ${fonts}
  h1 {
    font-family: 'Usuazi Hosomozi', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 72px;
    line-height: 72px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;
    text-align: center;
  }
`

export const Header: React.FC<HeaderProp> = ({ title }) => {
  return (
    <HeaderStyled>
      <h1>{title}</h1>
    </HeaderStyled>
  )
}
