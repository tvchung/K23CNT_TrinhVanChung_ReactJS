import React from 'react'
import { Link } from 'react-router-dom'

export default function TvcNavBar() {
  return (
    <nav>
        <Link to='/'>Trang chủ</Link> | 
        <Link to='/list-user' >Danh sách User</Link> | 
        <Link to='/create-user'>Thêm mới User</Link>
    </nav>
  )
}
