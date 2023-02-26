import React from 'react'

import { Button, ExampleComponent } from 'fishui'
import 'fishui/dist/index.css'

const App = () => {
  return (
    <>
      
      <ExampleComponent text='Create React Library Example 😄' />
      <Button type='primary' text='Primary Button' />
      <Button type='secondary' text='Secondary Button' />
      <Button type='danger' text='Danger Button' />
      <Button type='warn' text='Warning Button' />

      
    </>
  )
}

export default App
