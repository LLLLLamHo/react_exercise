import React from 'react';
import ReactDOM from 'react-dom';

console.log(ReactDOM);

export default class RichText extends React.Component {

    constructor() {
        super();
    }

    handleKeyDown() {
        let dom = ReactDOM.findDOMNode(this),
            html = dom.innerHTML;

        console.log(html);
    }

    render() {
        return (
            <div
                ref="editableDiv"
                className="edit"
                contentEditable="true"
                onKeyDown={() => this.handleKeyDown()}
            ></div>
        )
    }
}
