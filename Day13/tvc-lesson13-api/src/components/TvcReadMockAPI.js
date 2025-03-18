import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TvcReadMockAPI() {
    // khởi tạo state 
    const [tvcListUser, setTvcListUser] = useState([])
    // api
    const tvcApiOnline = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/tvc_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(tvcApiOnline)
            .then((tvc_response)=>{
                setTvcListUser(tvc_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const tvcElementUser = tvcListUser.map((tvc_item, index)=>{
        return(
            <tr>
                <td>{tvc_item.tvcId}</td>
                <td>{tvc_item.tvcFullName}</td>
                <td>{tvc_item.tvcAge}</td>
                <td>{tvc_item.tvcActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   tvcElementUser
                }
            </tbody>
        </table>
    </div>
  )
}
