import React from 'react';

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            checked : true
        }
    }

    submitHandler(event) {
        event.preventDefault();
        alert(this.state.checked);
    }

    handleChange(e) {
        this.setState({
            checked : e.target.checked
        })
    }

    render() {
        return (
            <form onSubmit={(e) => {this.submitHandler(e)}}>
                <input
                    type="checkbox"
                    value="A"
                    checked={this.state.checked}
                    onChange={(e) => {this.handleChange(e)}}
                />
                <br/>
                <button type="submit">Speak</button>
            </form>
        );
    }

}