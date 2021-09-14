import React from 'react'
import styled from 'styled-components'
import { Url } from 'url'
import { fonts } from './GlobalStyle/fonts'
// import IconPlayer from '../svg/Ellipse.svg'
interface PlayerProp {
  label: string
  placeholder: string
  inputType: string
  inputId: string
  inputValue: string
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
  url: string
  alt: string
}

const WrapperPlayers = styled.div`
  ${fonts}
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 39px;
`
const InputStyle = styled.input`
  ${fonts}
  font-family: 'Usuazi Hosomozi', Arial, Helvetica, sans-serif;
  font-size: 48px;
  line-height: 48px;
  color: #000000;
  border: none;
  max-width: 720px;
  width: 100%;
`
export const Player: React.FC<PlayerProp> = ({
  inputType,
  inputId,
  placeholder,
  inputValue,
  onChange,
  url,
  alt,
}) => {
  return (
    <WrapperPlayers>
      <img src={url} alt={alt} />
      <InputStyle
        type={inputType}
        id={inputId}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChange}
      />
    </WrapperPlayers>
  )
}
