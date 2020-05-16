import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
       content: '',
    }

    // Handle Form on Change in input
    handleForm = (e) => {
        this.setState({
            content: e.target.value,
        })
    }

    // Handle form on adding and submitting the form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        }) 
    }
    
    render() {
        return (
            <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
            <label className="label-add" style={{fontSize:"18px"}}>Todo List:</label>
              <div className="row" >
                <div className="input-field col s12" style={styleMe}>
                <input className="file-path validate" type="text" onChange={this.handleForm} value={this.state.content} placeholder="Add a Todo..."/>
                <button style={btnStyle} onClick={this.handleSubmit}>Add</button>
                </div>
              </div>
            </form>
            </div>
        )
    }
}

// Styling
const styleMe = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
}

const btnStyle = {
    marginLeft: "40px",
    fontSize: "18px",
    width: "100px",
    height: "50px",
    border: "0",
    borderRadius: "5px",
    backgroundColor: "teal",
    color: "white",
    cursor: "pointer"
}

export default AddTodo;
