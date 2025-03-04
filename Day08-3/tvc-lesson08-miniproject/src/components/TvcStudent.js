import React, { Component } from "react";

class TvcStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    tvcHandleView = (tvcStudent)=>{
        // Chuyển lên TvcStudentList
        this.props.onTvcHandleView(tvcStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ TvcStudentList
    let {renderTvcStudent, key} = this.props;
    console.log("Student:",renderTvcStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderTvcStudent.tvcId}</td>
          <td>{renderTvcStudent.tvcStudentName}</td>
          <td>{renderTvcStudent.tvcAge}</td>
          <td>{renderTvcStudent.tvcGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.tvcHandleView(renderTvcStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default TvcStudent;
