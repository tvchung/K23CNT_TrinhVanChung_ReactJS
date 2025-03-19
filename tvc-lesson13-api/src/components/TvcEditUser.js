import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function TvcEditUser() {
  // api
  const tvcApiUrl = "https://67d8eaf600348dd3e2a8b4ba.mockapi.io/tvc-miniproject/tvc_users/";
  // lấy biến id trên url;
  const {id} = useParams(); // <Route path='/edit-user/:id' element={<TvcEditUser />} />; navigate(`/edit-user/${tvcId}`);
  // Khởi tạo state cho componnet
  const [tvc_editUser, setTvcEditUser] = useState({
    tvc_name:'', tvc_email:'', tvc_phone:'', tvc_active:false
  })
  // đọc dữ liệu từ api và set cho state: tvc_editUser
  useEffect(()=> {
    axios
      .get(tvcApiUrl+`${id}`)
      .then((tvc_response) => {
        const editUser = tvc_response.data;
        setTvcEditUser(editUser);
      })
      .catch((error) => {
        console.error('Lỗi khi tải công việc:', error);
      });
  },[id])
 
  // Hàm xử lý khi người dùng thay đổi trạng thái Active (radio button)
  const tvcHandleRadioChange = (ev) => {
    setTvcEditUser({
      ...tvc_editUser,
      tvc_active: ev.target.value, // Cập nhật trạng thái tvc_active theo giá trị của radio button
    });
  };
  // tạo navigate từ react router dom để điều hướng khi cập nhật thành công hoặc back
  const navigate = useNavigate();

  // Khi người dùng nhấn nút submit (cập nhật dữ liệu) => lấy dữ liệu từ form, post vào api
  // Hàm cập nhật những thay đổi trên form vào api
  const tvcHandleSubmit = (event)=>{
    event.preventDefault()
    axios
      .put(tvcApiUrl+`${id}`, tvc_editUser)
      .then((tvc_response) => {
        alert('Cập nhật thành công!');
        navigate('/list-user'); // Sau khi lưu, chuyển về trang danh sách
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật công việc:', error);
      });
  }

  // khi click vào nút back
  const tvcHandleBack=(event)=>{
    event.preventDefault();
    navigate('/list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Sửa thông tin User</h2>
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
              value={tvc_editUser.tvc_name}
              onChange={(ev)=>setTvcEditUser({...tvc_editUser,tvc_name:ev.target.value})} 
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
              value={tvc_editUser.tvc_email}
              onChange={(ev)=>setTvcEditUser({...tvc_editUser,tvc_email:ev.target.value})} 
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
              value={tvc_editUser.tvc_phone}
              onChange={(ev)=>setTvcEditUser({...tvc_editUser,tvc_phone:ev.target.value})} 
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
              checked={tvc_editUser.tvc_active == 'true' || tvc_editUser.tvc_active===true} // Kiểm tra nếu giá trị là "true"
              onChange={tvcHandleRadioChange} 
              /> <label htmlFor="tvc_active_true" className="mx-2 text-success">Hoạt động</label>
            <input
              type="radio"
              id="tvc_active_false"
              name="tvc_active"
              value={'false'}
              checked={tvc_editUser.tvc_active === 'false' || tvc_editUser.tvc_active===false} // Kiểm tra nếu giá trị là "false"
              onChange={tvcHandleRadioChange} 
              /> <label htmlFor="tvc_active_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button className="mx-1" onClick={tvcHandleSubmit}>Update</button>
            <button className="px-3" onClick={tvcHandleBack}>Back</button>
          </div>
        </div>
      </form>
    </div>
  )
}
