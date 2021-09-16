import React from 'react'
import styled from 'styled-components'
import { fonts } from './GlobalStyle/fonts'

const ButtonWapper = styled.div`
  ${fonts}
  margin: auto;
  width: 0;
  button {
    font-family: 'Usuazi Hosomozi', Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 72px;
    border: 0;
    background-color: white;
    text-align: center;
  }
`
export interface ButtonProp {
  label: string
  disable?: boolean
}

export const Button: React.FC<ButtonProp> = ({ label, disable }) => {
  return (
    <ButtonWapper>
      <button disabled={disable}>{label}</button>
    </ButtonWapper>
  )
}
