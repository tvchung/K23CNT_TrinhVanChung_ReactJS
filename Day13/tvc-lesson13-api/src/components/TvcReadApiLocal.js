import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TvcReadApiLocal() {
    // khởi tạo state
    const [tvcListUser, setTvcListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho tvcListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((tvcResponse)=>{
                setTvcListUser(tvcResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    tvcListUser.map((tvcItem, index)=>{
                        return (
                            <tr>
                                <td>{tvcItem.fullName}</td>
                                <td>{tvcItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
