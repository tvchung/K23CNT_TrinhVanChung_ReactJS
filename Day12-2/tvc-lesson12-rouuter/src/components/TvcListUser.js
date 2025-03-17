import React from 'react'

export default function TvcListUser({renderTvcUsers}) {

    const tvcElements = renderTvcUsers.map((tvcItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{tvcItem.id}</td>
                    <td>{tvcItem.tvcFullName}</td>
                    <td>{tvcItem.tvcUserName}</td>
                    <td>{tvcItem.tvcPass}</td>
                </tr>
            </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {tvcElements}
            </tbody>
        </table>
    </div>
  )
}
