import React, { useState } from 'react'
import { SelectStars } from '../styles/components'

export default function Stars() {
  const [stars, setStarts] = useState(5)
  return (
    <SelectStars selected={stars}>
      <span onClick={() => setStarts(1)}> ★ </span>
      <span onClick={() => setStarts(2)}> ★ </span>
      <span onClick={() => setStarts(3)}> ★ </span>
      <span onClick={() => setStarts(4)}> ★ </span>
      <span onClick={() => setStarts(5)}> ★ </span>
    </SelectStars>
  )
}
