import React from 'react'

export default function TvcRenderList() {
    const tvcNames = ["Hùng","Dũng","Sang","Trọng"];

    // Hiển thị giá trị của mảng
    const tvcElementName = tvcNames.map((item)=>{
        return <li>{item}</li>
    })
  return (
    <div>
      <h2>Danh sách các anh hùng thời đại</h2>
      {tvcElementName}
    </div>
  )
}
