import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import TvcNavNar from './components/TvcNavNar'
import TvcHome from './components/TvcHome'
import TvcAbout from './components/TvcAbout'
import TvcContact from './components/TvcContact'
import TvcListUser from './components/TvcListUser'
import TvcFormUser from './components/TvcFormUser'
export default function TvcApp() {

  const listUsers  = [
    {id:"SV001", tvcFullName:"Trịnh Văn Chung", tvcUserName:"ChungChung", tvcPass:"123456a@"},
    {id:"SV002", tvcFullName:"Trịnh Quan Quang", tvcUserName:"QuanTrinh", tvcPass:"123456a@"},
    {id:"SV003", tvcFullName:"Nguyễn Quang A", tvcUserName:"QuangA", tvcPass:"123456a@"},
  ]

  const[tvcUsers, setTvcUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const tvcHandleAdd = (tvcParam)=>{
    console.log("tvcHandleAdd:", tvcParam);
    
    setTvcUsers(prev =>{ 
      return [
        ...prev,
        tvcParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Trịnh Văn Chung - K23CNT2]</h1>
        <hr/>
        <Router>
            <TvcNavNar />
            <Routes>
                <Route path='/' element = {<TvcHome />} />
                <Route path='/about' element = {<TvcAbout />} />
                <Route path='/contact' element = {<TvcContact />} />
                <Route path='/list-user' element = {<TvcListUser  renderTvcUsers={tvcUsers}/>} />
                <Route path='/create-user' element = {<TvcFormUser  onTvcAddNew={tvcHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}
