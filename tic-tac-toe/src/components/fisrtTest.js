import React from 'react'
import { Square } from './Square'

// interface test1 {
//   squares: any
//   onClick: () => void
// }

export const Board = ({ squares, onClick }) => (
  <div>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={onClick(i)} />
    ))}
  </div>
)
