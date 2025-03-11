import React from 'react'
import TvcUseState from './components/TvcUseState'
import TvcUseStateListObject from './components/TvcUseStateListObject'
import TvcUseEffect1 from './components/TvcUseEffect1'
import TvcCounter from './components/TvcCounter'
import TvcInputFocus from './components/TvcInputFocus'
import TvcAutoCounter from './components/TvcAutoCounter'
import TvcConfirmExit from './components/TvcConfirmExit'
import TvcThemeProvider, { TvcThemedComponent } from './components/TvcThemeProvider'

export default function TvcApp() {
  return (
    <div className='container border mt-3'>
        <h1> React Hook </h1>
      <hr/>
      <TvcUseState />
      <TvcUseStateListObject />

      <TvcUseEffect1 />

      <TvcCounter />

      <TvcInputFocus />

      <TvcAutoCounter />

      <TvcConfirmExit />

      <TvcThemeProvider>
        <TvcThemedComponent />
      </TvcThemeProvider>
    </div>
  )
}
