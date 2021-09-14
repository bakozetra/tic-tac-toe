import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fonts } from './GlobalStyle/fonts'
import { Paths } from './helpers/routerHelper'

const ButtonWapper = styled.div`
  ${fonts}
  margin: auto;
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
  onClick: () => void
}

export const Button: React.FC<ButtonProp> = ({ label, onClick }) => {
  return (
    <ButtonWapper>
      <Link to={Paths.LOGIN} data-testid={label}>
        <button onClick={onClick}>{label}</button>
      </Link>
    </ButtonWapper>
  )
}
