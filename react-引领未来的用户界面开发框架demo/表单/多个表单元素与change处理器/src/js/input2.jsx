import React from 'react';

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            given_name : "",
            family_name : ""
        }
    }

    submitHandler(event) {
        event.preventDefault();
        let words = [
            "Hi",this.state.given_name,this.state.family_name
        ];
        alert(words.join(','));
    }

    handleChange(e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <form onSubmit={(e) => {this.submitHandler(e)}}>
                <label htmlFor="given_name">Given Name:</label>
                <br/>
                <input
                    type="text"
                    name="given_name"
                    value={this.state.given_name}
                    onChange={(e) => {this.handleChange(e)}}
                />
                <br/>
                <label htmlFor="family_name">Family Name:</label>
                <br/>
                <input
                    type="text"
                    name="family_name"
                    value={this.state.family_name}
                    onChange={(e) => {this.handleChange(e)}}
                />
                <br/>
                <button type="submit">Speak</button>
            </form>
        );
    }

}