import React, { Component } from 'react';

class TvcClassComp extends Component {
    constructor(props){
        super(props);
        // khởi tạo state
        this.state = {
            fullName:"Chung Chung",
            age:40,
            phone:"0978611889"
        }
    }
    // Hàm xử lý sự kiện
    changeInfo = (ev)=>{
        // cập nhật state
        this.setState({
            fullName:"Trịnh Văn Chung"
        });
    }
    render() {
       
        return (
            <div className='alert alert-success'>
                <h2>Trình bày dữ liệu từ state</h2>
                <p>info state (fullName): {this.state.fullName}</p>
                <p>info state (age): {this.state.age}</p>
                <p>info state (phone): {this.state.phone}</p>

                <hr/>
                <button className='btn btn-primary' onClick={this.changeInfo}>Change Info</button>
                <hr/>
                <h3>Lấy dữ liệu từ Props</h3>
                <p>Name: {this.props.renderName}</p>
               
                <p>FullName:{ this.props.renderUsers ?this.props.renderUsers.fullName:''}</p>
                <p>Age:{ this.props.renderUsers ?this.props.renderUsers.age:''}</p>
                <p>Phone:{ this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
                
            </div>
        );
    }
}

export default TvcClassComp;