import React from 'react'
import {Link} from 'react-router-dom'
import TvcHome from './TvcHome'

export default function TvcNavBar() {
  return (
    <nav>
        <Link to='/' >Home</Link> |
        <Link to='/tvc-list-user' >List User</Link> |
        <Link to='/tvc-create-user' >Create User</Link>
    </nav>
  )
}
