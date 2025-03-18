// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function TvcCreateMockAPI() {
    // khởi tạo state
    const [tvcFullName,setTvcFullName] = useState('')
    const [tvcAge,setTvcAge] = useState(0)
    const [tvcActive,setTvcActive] = useState(true)

    // api post
    const tvcCreateUserApi = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/tvc_users";

    // khi submit form
    const tvcHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("tvcActive:",tvcActive);
        let tvcNewUser = {tvcFullName,tvcAge,tvcActive};
        console.log(tvcNewUser);

        // ghi dữ liệu vào api
        axios
            .post(tvcCreateUserApi, tvcNewUser)
            .then((tvc_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="tvcFullName">Full Name</label>
                <input type='text' name='tvcFullName' id="tvcFullName" 
                    value={tvcFullName}
                    onChange={(ev)=>setTvcFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="tvcAge">Age</label>
                <input type='number' name='tvcAge' id="tvcAge" 
                    value={tvcAge}
                    onChange={(ev)=>setTvcAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="tvcActive">Active</label>
                <input type='radio' name='tvcActive' id="tvcActive_hd" value={'true'} 
                    onChange={(ev)=>setTvcActive(ev.target.value)} />
                    <label for="tvcActive_hd"> Hoạt động</label>
                <input type='radio' name='tvcActive' id="tvcActive_kh" value={'false'} 
                    onChange={(ev)=>setTvcActive(ev.target.value)}/>
                    <label for="tvcActive_kh"> Khóa</label>
            </div>
            <button onClick={tvcHandleSubmit}>Create</button>
        </form>
    </div>
  )
}
