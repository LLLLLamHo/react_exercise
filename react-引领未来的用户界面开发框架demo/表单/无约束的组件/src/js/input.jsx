import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <input type="text" defaultValue='Hello World!'/>;
    }

}