import React from 'react';

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            radio : "B"
        }
    }

    submitHandler(event) {
        event.preventDefault();
        alert(this.state.radio);
    }

    handleChange(e) {
        this.setState({
            radio : e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => {this.submitHandler(e)}}>
                <input
                    type="radio"
                    value="A"
                    checked={this.state.radio == "A"}
                    onChange={(e) => {this.handleChange(e)}}
                />A
                <input
                    type="radio"
                    value="B"
                    checked={this.state.radio == "B"}
                    onChange={(e) => {this.handleChange(e)}}
                />B
                <input
                    type="radio"
                    value="C"
                    checked={this.state.radio == "C"}
                    onChange={(e) => {this.handleChange(e)}}
                />C
                <br/>
                <button type="submit">Speak</button>
            </form>
        );
    }

}