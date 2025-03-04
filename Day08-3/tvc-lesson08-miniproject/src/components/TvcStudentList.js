import React, { Component } from "react";
import TvcStudent from "./TvcStudent";

class TvcStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    tvcHandleView = (tvcStudent)=>{
        // Chuyển dữ liệu lên TvcApp
        this.props.onTvcHandleView(tvcStudent);
    }


  render() {
    // lấy dữ liệu trong props từ TvcApp chuyển xuống
    let {renderTvcStudents} = this.props;
    console.log("List:",renderTvcStudents);
    
    // chuyển dữ liệu vào TvcStudent để hiển thị
    let tvcElementStudent = renderTvcStudents.map((tvcItem,index)=>{
        return <TvcStudent key={index} renderTvcStudent={tvcItem} onTvcHandleView={this.tvcHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {tvcElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TvcStudentList;
