import React, { Component } from 'react';

class TvcRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcStudents:[
                {tcvId:"SV001",tvcName:"Trịnh Văn Chung", tvcAge:45, tvcClass:"K23CNT1"},
                {tcvId:"SV002",tvcName:"Nguyễn Quang A", tvcAge:22, tvcClass:"K23CNT1"},
                {tcvId:"SV003",tvcName:"Nguyễn Quang B", tvcAge:21, tvcClass:"K23CNT1"},
                {tcvId:"SV004",tvcName:"Nguyễn Quang C", tvcAge:23, tvcClass:"K23CNT1"},
            ],
        }
    }
    
    render() {
        // render data
        const tvcElement = this.state.tvcStudents.map((tvcItem, index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{tvcItem.tcvId}</td>
                    <td>{tvcItem.tvcName}</td>
                    <td>{tvcItem.tvcAge}</td>
                    <td>{tvcItem.tvcClass}</td>
                    <td>
                        <button className='btn btn-primary mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2>Danh sách sinh viên</h2>
                </div>
                <div className='card-body'>
                    <table className='table table-bordered'>
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
            </div>
        );
    }
}

export default TvcRenderListStudent;