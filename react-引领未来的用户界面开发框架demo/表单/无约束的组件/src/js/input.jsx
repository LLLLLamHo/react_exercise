import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component {
    constructor() {
        super();
    }

    submitHandler(event) {
        event.preventDefault();
        let helloTo = this.refs.helloTo.value;
        alert(helloTo);
    }

    render() {
        return (
            <form onSubmit={(e) => {this.submitHandler(e)}}>
                <input type="text" ref="helloTo" defaultValue='Hello World!'/>
                <br/>
                <button type="submit">Speak</button>
            </form>
        );
    }

}