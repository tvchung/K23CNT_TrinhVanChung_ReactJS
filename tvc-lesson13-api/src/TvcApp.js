import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import TvcListUsers from './components/TvcListUsers'
import TvcNavBar from './components/TvcNavBar'
import TvcHome from './components/TvcHome'
import TvcCreateUser from './components/TvcCreateUser'
import TvcEditUser from './components/TvcEditUser'

export default function TvcApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1>Trịnh Văn Chung - Mini Project</h1>
      <Router >
          <TvcNavBar />
          <hr/>
          <Routes>
            <Route path='/' element={<TvcHome></TvcHome>} />
            <Route path='/list-user' element={<TvcListUsers />} />
            <Route path='/create-user' element={<TvcCreateUser />} />
            <Route path='/edit-user/:id' element={<TvcEditUser />} />
          </Routes>
      </Router>
        
    </div>
  )
}
