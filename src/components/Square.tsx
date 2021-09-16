import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  /* background: 'lightblue';
  border: '2px solid darkblue'; */
  font-size: '30px';
  font-weight: '800';
  cursor: 'pointer';
  outline: 'none';
  border: '4px solid darkblue';
  border-radius: '10px';
  width: '250px';
  height: '250px';
  margin: '0 auto';
  display: 'grid';
  grid-template: 'repeat(3, 1fr) / repeat(3, 1fr)';
`

interface SquareProps {
  value: string
  index: number
  handleClick(index: number): void
}
export const Square: React.FC<SquareProps> = ({
  value,
  handleClick,
  index,
}) => <ButtonStyle onClick={() => handleClick(index)}>{value}</ButtonStyle>
