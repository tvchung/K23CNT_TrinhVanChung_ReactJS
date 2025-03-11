import React from 'react'
import TvcUseState from './components/TvcUseState'
import TvcUseEffect from './components/TvcUseEffect'

export default function TvcApp() {
  return (
    <div className='container border my-2'>
        <h1>Demo React hook</h1>
        <TvcUseState />
        <TvcUseEffect />
    </div>
  )
}
