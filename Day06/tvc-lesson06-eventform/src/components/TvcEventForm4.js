import React, { Component } from "react";

class TvcEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            tvcSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    tvcHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.tvcSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            tvcSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    tvcHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.tvcSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.tvcSelectCheckBox.includes("Apple")}
              onChange={this.tvcHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.tvcSelectCheckBox.includes("Banana")}
              onChange={this.tvcHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.tvcSelectCheckBox.includes("Orange")}
              onChange={this.tvcHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.tvcHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TvcEventForm4;
