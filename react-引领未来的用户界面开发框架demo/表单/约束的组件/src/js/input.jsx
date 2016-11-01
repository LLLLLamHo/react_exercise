import React from 'react';

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            helloTo : 'Hello World!'
        }
    }

    handleChange(event) {
        this.setState({
            helloTo : event.target.value.toUpperCase()
        });
    }

    submitHandler(event) {
        event.preventDefault();
        alert(this.state.helloTo);
    }

    render() {
        return (
            <form onSubmit={(e) => {this.submitHandler(e)}}>
                <input
                    type="text"
                    value={this.state.helloTo.toUpperCase()}
                    onChange={(e) => {this.handleChange(e)}}
                />
                <br/>
                <button type="submit">Speak</button>
            </form>
        );
    }

}