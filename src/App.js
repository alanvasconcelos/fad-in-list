import React from 'react'

import Card from './Card'
import FadeIn from './FadeIn'
import './App.css'

function App() {
  return (
    <FadeIn className='container'>
      <Card className='bg-blue'>Card 01</Card>
      <Card className='bg-red'>Card 02</Card>
      <Card className='bg-green'>Card 03</Card>
      <Card className='bg-yellow'>Card 04</Card>
    </FadeIn>
  )
}

export default App
