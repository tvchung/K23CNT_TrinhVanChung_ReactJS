import React, { useState } from 'react'

export default function TvcFormUser({onTvcAddNew}) {

    const [id, setTvcId] = useState('')
    const [tvcFullName, setTvcFullName] = useState('')
    const [tvcUserName, setTvcUserName] = useState('')
    const [tvcPass, setTvcPass] = useState('')

   

    const tvcHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,tvcFullName,tvcUserName, tvcPass)
        
        onTvcAddNew({id,tvcFullName,tvcUserName, tvcPass})
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setTvcId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='tvcFullName' value={tvcFullName} onChange={(ev)=>setTvcFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='tvcUserName' value={tvcUserName} onChange={(ev)=>setTvcUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='tvcPass' value={tvcPass} onChange={(ev)=>setTvcPass(ev.target.value)} /> </p>

            <p>
                <button name='tvcSave' onClick={tvcHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
