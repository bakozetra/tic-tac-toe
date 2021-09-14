import React from 'react'
import styled from 'styled-components'
import { fonts } from './GlobalStyle/fonts'

export interface TimeLimit {
  time: number
  secondTime: string
}
const StyleTime = styled.div`
  ${fonts}
  p,
  span {
    font-family: 'Usuazi Hosomozi', Arial, Helvetica, sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
  }
`

export const Time: React.FC<TimeLimit> = ({ time, secondTime }) => {
  return (
    <StyleTime>
      <p>
        {secondTime}
        <span>{time}S</span>
      </p>
    </StyleTime>
  )
}
