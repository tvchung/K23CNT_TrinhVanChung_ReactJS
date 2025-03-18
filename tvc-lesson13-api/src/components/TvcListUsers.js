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
        console.log("id:",tvcId);

        navigate(`/edit-user/${tvcId}`);
    }
    const tvcHandleDelete = async (tvcId)=>{
        await tvcAxiosUsers.delete("/tvc_users/"+tvcId);

        let tvcListUserDelete = tvcListUser.filter(x=>x.id !=tvcId);
        setTvcListUser(tvcListUserDelete);
    }
    const tvcElementUser = tvcListUser.map((tvc_user)=>{
        return <tr key={tvc_user.id}>
            <td>{tvc_user.id}</td>
            <td>{tvc_user.tvc_name}</td>
            <td>{tvc_user.tvc_email}</td>
            <td>{tvc_user.tvc_phone}</td>
            <td>{tvc_user.tvc_active?'Hoạt động':'Khóa'}</td>
            <td>
                <button onClick={()=>tvcHandleUpdate(tvc_user.id)}>Update</button>
                <button onClick={()=>tvcHandleDelete(tvc_user.id)}>Delete</button>
            </td>
        </tr>
    })

  return (
    <div>
        <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
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
