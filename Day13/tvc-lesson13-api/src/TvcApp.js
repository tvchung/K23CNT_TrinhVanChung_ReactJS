import React from 'react'
import TvcReadApiLocal from './components/TvcReadApiLocal'
import TvcReadMockAPI from './components/TvcReadMockAPI'
import TvcCreateMockAPI from './components/TvcCreateMockAPI'

export default function TvcApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Trịnh Văn Chung</h1>
        <hr/>
        <TvcReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <TvcReadMockAPI />

        <TvcCreateMockAPI />
    </div>
  )
}
