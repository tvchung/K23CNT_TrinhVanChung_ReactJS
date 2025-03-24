import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function TvcCreateUser() {
    const tvcUser = {
        id:0,
        'tvc_name':'',
        'tvc_email':'',
        'tvc_phone':'',
        'tvc_active':true
    }

    const [tvc_user, setTvc_User] = useState(tvcUser);
    const tvcApi = "https://67e0ab397635238f9aae06f4.mockapi.io/tvc-k23cnt1-230001212/tvc_users"
    const navigate = useNavigate();

    const tvcHandlSubmit = (ev)=>{
        ev.preventDefault();
        console.log(tvc_user);
        axios
            .post(tvcApi, tvc_user)
            .then(() => {
                navigate('/tvc-list-user')
            })
            .catch((error) => console.log('Lỗi khi thêm user.'));

    }
  return (
    <div>
      <h2>Thêm mới user</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="tvc_name" className="col-sm-2 col-form-label">FullName</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="tvc_name"
                name="tvc_name"
                value={tvc_user.tvc_name} 
                onChange={(ev)=>setTvc_User({...tvc_user,tvc_name:ev.target.value})} 
                />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="tvc_email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="tvc_email" 
             name="tvc_email"
             value={tvc_user.tvc_email} 
             onChange={(ev)=>setTvc_User({...tvc_user,tvc_email:ev.target.value})} 

             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="tvc_phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="tvc_phone" 
             name="tvc_phone"
             value={tvc_user.tvc_phone} 
             onChange={(ev)=>setTvc_User({...tvc_user,tvc_phone:ev.target.value})} 
             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="tvc_active" className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input type="radio" id="tvc_active_true"  className="mx-3"   
                onChange={(ev)=>setTvc_User({...tvc_user,tvc_active:ev.target.value})}
                value={true}
                name="tvc_active"  /> 
            <label htmlFor="tvc_active_true">Hoạt động</label>
            <input type="radio" id="tvc_active_false"  className="mx-3"
                onChange={(ev)=>setTvc_User({...tvc_user,tvc_active:ev.target.value})}
                value={false} 
                name="tvc_active" /> 
            <label htmlFor="tvc_active_false">Tạm khóa</label>
          </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-primary mx-2 px-3" name="btnTvcCreate" 
                    onClick={tvcHandlSubmit}
                    >Create</button>
                <button className="btn btn-secondary mx-2 px-3" name="btnTvcBack">Back</button>
            </div>
        </div>
      </form>
    </div>
  );
}
