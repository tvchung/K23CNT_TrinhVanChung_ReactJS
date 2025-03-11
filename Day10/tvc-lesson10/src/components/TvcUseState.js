import React, { useState } from 'react'

export default function TvcUseState() {
    // khởi tạo state 
    const [tvcCount, setTvcCount] = useState(0);

    // khởi tạo state là một mảng 
    const tvcArr = [10,12,20,22];
    const [tvcArray, setTvcArray] = useState(tvcArr);

    // khởi tạo state với mảng object
    const tvcStudents = [
        {tvcId:"SV001",tvcName:"Chung Trịnh", tvcAge:46},
        {tvcId:"SV002",tvcName:"Nguyễn Quang A", tvcAge:146},
    ];
    const [tvcStudentList, setTvcStudentList] = useState(tvcStudents);

    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
    const tvcHandleAddList=()=>{
        setTvcArray([
            ...tvcArray,
            parseInt(Math.random()*100),
        ])
    }

    // Hàm xử lý sự kiện thêm mới sinh viên
    const tvcHandleAddNewStudent = ()=>{
        let tvcStudent = {
            tvcId:"SV003",
            tvcName:"Nguyễn Quang B",
            tvcAge:22
        };
        // Thêm vào state tvcStudentList
        setTvcStudentList([
            ...tvcStudentList,
            tvcStudent
        ])

        console.log("List: ", tvcStudentList);
        
    }
  return (
    <div className='alert alert-danger '>
        <h2>useState Demo</h2>
        <div>
            <h3>Count: {tvcCount}</h3>
            <button onClick={()=>setTvcCount(tvcCount+1)}>Tăng + </button>
            <button onClick={()=>setTvcCount(tvcCount-1)}>Giảm - </button>
        </div>
        <div>
            <h3>Array: {tvcArray.toString()}</h3>
            <button onClick={tvcHandleAddList}>Thêm phần từ</button>
        </div>
        <div>
            <h3>Danh sách sinh viên</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nam</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tvcStudentList.map((tvcStudent,index)=>{
                            return <>
                                <tr>
                                    <td>{tvcStudent.tvcId}</td>
                                    <td>{tvcStudent.tvcName}</td>
                                    <td>{tvcStudent.tvcAge}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
                <tfoot>
                    <button onClick={tvcHandleAddNewStudent}>Thêm mới sinh viên</button>
                </tfoot>
            </table>
        </div>
    </div>
  )
}
