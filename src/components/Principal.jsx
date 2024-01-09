import React from 'react'

import Home from './Home'
import Menu from './Menu'
import SimpleSlider from './Carrucel'

export default function Principal() {
  return (
    <div className='mx-auto max-w-[600px]'>
      <SimpleSlider />
      <Home />
      <Menu />
    </div>
  )
}
