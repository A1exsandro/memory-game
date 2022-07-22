import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Grid } from '../../components/Grid'
import { cards } from '../../data/cards'
import { Data } from '../../services/Data'
import './styles.css'

// const handleClick = (id: string) => {
//   console.log(id)
// }

export function App() {
  const [words] = Data();
  console.log(words)

  return (
    <div className="app">
      <Grid cards={cards} />
   </div>
  )
}
