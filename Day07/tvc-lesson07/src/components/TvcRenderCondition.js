import React, { Component } from 'react';
import TvcLoginControl from './TvcLoginControl';

class TvcRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    tvcHandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    tvcHandleLogout = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <TvcLoginControl isLoggedIn={this.state.isLoggedIn} />

                {
                    this.state.isLoggedIn ? 
                        <button className='btn btn-danger' onClick={this.tvcHandleLogout} >Logout</button> 
                        : <button className='btn btn-primary' onClick={this.tvcHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default TvcRenderCondition;