import React from 'react'
import BhpUseState from './components/BhpUseState'
import BhpListStudent from './components/BhpListStudent'
import BhpUseEffectDemo from './components/BhpUseEffectDemo'
import BhpExampleContext from './components/BhpExampleContext'

export default function BhpApp() {
  return (
    <div className='container border'>
      <h1>React Hook - Demo [Bùi Hữu Phúc]</h1>
      <hr />


      <BhpUseState />
      <BhpListStudent />
      <BhpUseEffectDemo />
      <BhpExampleContext />
    </div>
  )
}
