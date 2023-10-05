import React, { Component } from 'react'

class Submit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            enable: false,
            content: "",
        }
    }

    increment = () => {
        this.setState((prev, props) => (
            { counter: prev.counter + 1 }
        ));
    };

    decrement = () => {
        this.setState((prev, props) => (
            { counter: prev.counter - 1 }
        ));
    }

    checkboxClicked = () => {
        this.setState((prev, props) => (
            { enable: !prev.enable }
        ))
    };

    changeHandler = (e) => {
        this.setState({content: e.target.value})
    }



    render() {
        return (
            <div>
                <button onClick={this.increment} >Increase</button>
                <button onClick={this.decrement} >Decrease</button>
                <p> {this.state.counter} </p>
                <br />
                <label>
                    check box <p>{this.state.enable ? "Enabled" : "Disabled"}</p>
                </label>
                <input type="checkbox" onClick={this.checkboxClicked} />
                <input type="text" onChange={ this.changeHandler } /><br />
                <p> { this.state.content } </p>
            </div>
        )
    }
}



export default Submit
