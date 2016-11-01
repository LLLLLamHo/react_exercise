/**
 * Created by Lam on 16/11/1.
 */
import React from 'react';
import Radio from './Radio.jsx';

export default class Form extends React.Component {
    constructor() {
        super();
    }

    submitHandler(event) {
        event.preventDefault();
        console.log(this.refs);
        alert(this.refs.radio.state.value);
    }

    render() {
        return(
            <form onSubmit={(e) => {this.submitHandler(e)}}>
                <Radio ref="radio" name="my_radio" defaultValue="B">
                    <option value="A">First Option</option>
                    <option value="B">Second Option</option>
                    <option value="C">Third Option</option>
                </Radio>
                <button type="submit">Speak</button>
            </form>
        )
    }

}