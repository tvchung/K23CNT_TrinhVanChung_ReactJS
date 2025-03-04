import React, { Component } from "react";
import TvcControl from "./components/TvcControl";
import TvcStudentList from "./components/TvcStudentList";
import TvcForm from "./components/TvcForm";

class TvcApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      tvcStudents:[
        {tvcId:"SV001",tvcStudentName:"Trịnh Văn Chung",tvcAge:46,tvcGender:"Nam",tvcBirthday:"25/05/1979",tvcBirthPlace:"HN", tvcAddress:"Tòa VCN, 25 Vũ Ngọc Phan"},
        {tvcId:"SV002",tvcStudentName:"Chu Nguyên Chương",tvcAge:188,tvcGender:"Nữ",tvcBirthday:"25/05/1179",tvcBirthPlace:"HP", tvcAddress:"Trung quốc"},
        {tvcId:"SV003",tvcStudentName:"Tần Thủy Hoàng",tvcAge:55,tvcGender:"Nam",tvcBirthday:"25/05/1079",tvcBirthPlace:"TpHCM", tvcAddress:"Trung Quốc"},
        {tvcId:"SV004",tvcStudentName:"Hoàng Thùy Linh",tvcAge:55,tvcGender:"Nam",tvcBirthday:"25/05/1079",tvcBirthPlace:"TpHCM", tvcAddress:"Hồ chí minh"},
      ],
      tvcStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  tvcHandleView = (tvcStudent)=>{
    this.setState({
      tvcStudent:tvcStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.tvcStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Trịnh Văn Chung - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <TvcControl  />
                {/* danh sách sinh vien  */}
                <TvcStudentList  renderTvcStudents={this.state.tvcStudents} onTvcHandleView={this.tvcHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <TvcForm  renderTvcStudent = {this.state.tvcStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TvcApp;
