import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function TvcCreateUser() {
  
  let tvcuser = {
    id:'',
    tvc_name:"",
    tvc_email:"",
    tvc_phone:"",
    tvc_active:false
  }

  const [tvc_user, setTvcUser] = useState(tvcuser)
  const tvcApiUrl = "https://67d8eaf600348dd3e2a8b4ba.mockapi.io/tvc_users"
  
  const navigate = useNavigate();

  const tvcHandleSubmit = (event)=>{
    event.preventDefault();
    console.log(tvc_user);
    axios
      .post(tvcApiUrl, tvc_user)
      .then((response) => {
        navigate('/list-user')
      })
      .catch((error) => console.log('Lỗi khi thêm user.'));

  }

  const tvcHandleBack=(event)=>{
    event.preventDefault();
    navigate('/list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Thêm mới thông tin User</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="tvc_name" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="tvc_name"
              name="tvc_name"
              value={tvc_user.tvc_name}
              onChange={(ev)=>setTvcUser({...tvc_user,tvc_name:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="tvc_email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id="tvc_email"
              name="tvc_email"
              value={tvc_user.tvc_email}
              onChange={(ev)=>setTvcUser({...tvc_user,tvc_email:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="tvc_phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-6">
            <input
              type="tel"
              className="form-control"
              id="tvc_phone"
              name="tvc_phone"
              value={tvc_user.tvc_phone}
              onChange={(ev)=>setTvcUser({...tvc_user,tvc_phone:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="tvc_active" className="col-sm-2 col-form-label">
            Active
          </label>
          <div className="col-sm-6">
            <input
              type="radio"
              id="tvc_active_true"
              name="tvc_active"
              value={'true'}
              onChange={(ev)=>setTvcUser({...tvc_user,tvc_active:ev.target.value})} 
            /> <label htmlFor="tvc_active_true" className="mx-2 text-success">Hoạt động</label>
            <input
              type="radio"
              id="tvc_active_false"
              name="tvc_active"
              value={'false'}
              onChange={(ev)=>setTvcUser({...tvc_user,tvc_active:ev.target.value})} 
            /> <label htmlFor="tvc_active_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button className="mx-1" onClick={tvcHandleSubmit}>Create</button>
            <button className="px-3" onClick={tvcHandleBack}>Back</button>
          </div>
        </div>
      </form>
    </div>
  );
}
