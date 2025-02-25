import React from 'react'

export default function TvcFuncCompEventProps(tvcProps) {
    // hàm xử lý sự kiện
    const tvcHanldeButtonClick1 = ()=>{
        alert("Dữ liệu từ props:" + tvcProps.tvcRenderName);
        console.log("Xin chao:",tvcProps.tvcRenderName);
    }

    const tvcHanldeButtonClick2 = (param)=>{
        // Lấy dữ liệu từ props
        alert("Dữ liệu từ props (Button 2 click):" + tvcProps.tvcRenderName);
        // Dữ liệu từ tham số
        console.log('====================================');
        console.log("Hi:",param);
        console.log('====================================');
    }
  return (
    <div className="alert alert-info">
        <button className='btn btn-primary mx-1'
            onClick={tvcHanldeButtonClick1}>Button 1</button>

        <button className='btn btn-success mx-1'
            onClick={()=>tvcHanldeButtonClick2("Button 2")}>Button 2</button>
    </div>
  )
}
