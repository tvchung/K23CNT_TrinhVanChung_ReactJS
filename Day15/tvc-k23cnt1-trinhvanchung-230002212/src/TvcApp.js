import React from 'react'
import { BrowserRouter as TvcRouter, Route, Routes } from 'react-router-dom'
import TvcNavBar from './components/TvcNavBar'
import TvcHome from './components/TvcHome'
import TvcEditUser from './components/TvcEditUser'
import TvcCreateUser from './components/TvcCreateUser'
import TvcListUser from './components/TvcListUser'
export default function TvcApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT1 - Trịnh Văn Chung - 230001212</h1>
      <hr/>
      <TvcRouter>
          <TvcNavBar />
          <hr/>
          <Routes>
              <Route path='/' element={<TvcHome/>} />
              <Route path='/tvc-list-user' element={<TvcListUser/>} />
              <Route path='/tvc-create-user' element={<TvcCreateUser/>} />
              <Route path='/tvc-edit-user/:id' element={<TvcEditUser/>} />
          </Routes>
      </TvcRouter>
    </div>
  )
}
