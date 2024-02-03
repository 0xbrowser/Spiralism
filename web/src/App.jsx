import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <>
      <div className='spiralism'>
        <img src={logo} className='logo'></img>
        <div className='head'>
          Spiralism
        </div>
      </div>
      <div className='text'>
        The greatest DApp in the world.
      </div>
    </>
  )
}

export default App
