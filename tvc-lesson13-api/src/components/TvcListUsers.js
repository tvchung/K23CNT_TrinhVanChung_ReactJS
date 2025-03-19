import React from 'react'

import tvcAxiosUsers from '../api/tvc_api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TvcListUsers() {
    const navigate = useNavigate();
    const [tvcListUser, setTvcListUser] = useState([]);
    const tvcGetAllUser = async()=>{
        //Goi API lay du lieu
        const tvc_resp = await tvcAxiosUsers.get("/tvc_users");
        setTvcListUser(tvc_resp.data);
    }
    
    // Gọi API và lấy dữ liệu cho biến state (tvcListUser)
    useEffect(()=>{
        tvcGetAllUser()
    },[])

    const tvcHandleUpdate = (tvcId)=>{
        navigate(`/edit-user/${tvcId}`);
    }
    const tvcHandleDelete = async (tvcId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await tvcAxiosUsers.delete("/tvc_users/"+tvcId);

            let tvcListUserDelete = tvcListUser.filter(x=>x.id !=tvcId);
            setTvcListUser(tvcListUserDelete);
        }
    }
    // tạo hiển thị active
    const tvcActiveElement = (flag)=>{
        if(flag===true || flag =="true")
            return <span class='badge text-bg-success'>Hoạt động </span>
        else
            return <span class='badge text-bg-danger'>Khóa </span>
    }
    // duyệt dữ liệu từ state và hiển thị
    const tvcElementUser = tvcListUser.map((tvc_user)=>{
        return <tr key={tvc_user.id}>
            <td className='text-center'>{tvc_user.id}</td>
            <td>{tvc_user.tvc_name}</td>
            <td>{tvc_user.tvc_email}</td>
            <td>{tvc_user.tvc_phone}</td>
            <td>
                {
                    tvcActiveElement(tvc_user.tvc_active)
                }
            </td>
            <td className='text-center'>
                <button onClick={()=>tvcHandleUpdate(tvc_user.id)} className='mx-1 px-3'>Edit</button>
                <button onClick={()=>tvcHandleDelete(tvc_user.id)} className='mx-1'>Delete</button>
            </td>
        </tr>
    })

  return (
    <div>
        <table className='table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tvcElementUser}
                </tbody>
            </table>
    </div>
  )
}
