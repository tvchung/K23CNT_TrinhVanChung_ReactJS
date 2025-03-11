import React, { useState } from 'react'

export default function TvcUseStateListObject() {
    // mockdata
    const listStudent = [
        {tcvId:"SV001",tvcName:"Trịnh Văn Chung", tvcAge:45, tvcClass:"K23CNT1"},
        {tcvId:"SV002",tvcName:"Nguyễn Quang A", tvcAge:22, tvcClass:"K23CNT1"},
        {tcvId:"SV003",tvcName:"Nguyễn Quang B", tvcAge:21, tvcClass:"K23CNT1"},
        {tcvId:"SV004",tvcName:"Nguyễn Quang C", tvcAge:23, tvcClass:"K23CNT1"},
    ];
    // tạo state với hook
    const [tvcStudents, setTvcStudents] = useState(listStudent);
    // render data
    let tvcElement = tvcStudents.map((tvcItem, index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{tvcItem.tcvId}</td>
                <td>{tvcItem.tvcName}</td>
                <td>{tvcItem.tvcAge}</td>
                <td>{tvcItem.tvcClass}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách sinh viên</h2>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>tvcID</th>
                    <th>tvcName</th>
                    <th>tvcAge</th>
                    <th>tvcClass</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {tvcElement}
            </tbody>
        </table>
    </div>
  )
}
