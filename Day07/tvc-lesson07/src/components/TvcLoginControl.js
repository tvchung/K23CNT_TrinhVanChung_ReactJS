import React from 'react'
import TvcLoginComp from './TvcLoginComp'
import TvcLogoutComp from './TvcLogoutComp'

export default function TvcLoginControl(props) {
    const tvcElement = props.isLoggedIn ? <TvcLoginComp /> : <TvcLogoutComp />

    // const tvcLogin = ()=>{
    //     if(props.isLoggedIn)
    //         return <TvcLogoutComp />
    //     else 
    //         return <TvcLoginComp />
    // }

  return (
    <div>
      {tvcElement}
    </div>
  )
}
