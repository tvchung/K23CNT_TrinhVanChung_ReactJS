import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function TvcListUser() {
    // state
    const [tvcListUser, setTvcListUser] = useState([])
    const tvcApi = "https://67e0ab397635238f9aae06f4.mockapi.io/tvc-k23cnt1-230001212/tvc_users"

    useEffect(()=>{
        axios.get(tvcApi)
        .then(tvc_response => {
            // Xử lý dữ liệu trả về từ API
            console.log(tvc_response.data); // Dữ liệu từ API
            setTvcListUser(tvc_response.data)
        })
        .catch(error => {
            // Xử lý lỗi
            console.error('Có lỗi xảy ra:', error);
        });
    },[])
   
    

    const tvcHandleDelete = async (tvcId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await axios.delete(tvcApi+"/"+tvcId);

            let tvcListUserDelete = tvcListUser.filter(x=>x.id !=tvcId);
            setTvcListUser(tvcListUserDelete);
        }
    }
    const navigate = useNavigate();
    const tvcHandleUpdate = (tvcId) =>{
        navigate(`/tvc-edit-user/${tvcId}`);
    }
  return (
    <div>
        <h2>Danh sách user</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* // hiển thị danh sách user */}
                {
                    tvcListUser.map((tvcUserItem,index)=>{
                        return (
                            <tr>
                                <td>{tvcUserItem.id}</td>
                                <td>{tvcUserItem.tvc_name}</td>
                                <td>{tvcUserItem.tvc_email}</td>
                                <td>{tvcUserItem.tvc_phone}</td>
                                <td>
                                    {tvcUserItem.tvc_active?
                                    <span className='badge text-bg-success'>Hoạt động</span>
                                    :<span className='badge text-bg-danger'>Tạm khóa</span>}
                                </td>
                                <td>
                                    <button onClick={()=>tvcHandleUpdate(tvcUserItem.id)}>Edit</button>
                                    <button onClick={(ev)=> tvcHandleDelete(tvcUserItem.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
