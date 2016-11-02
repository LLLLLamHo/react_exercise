/**
 * Created by Lam on 16/11/1.
 */
import React from 'react';
import Radio from './Radio.jsx';

export default class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            my_radio : 'B'
        }
    }

    handleChange(e) {
        this.setState({
            my_radio : e.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault();
        alert(this.state.my_radio);
    }

    render() {
        return(
            <form onSubmit={(e) => {this.submitHandler(e)}}>
                <Radio
                    ref="radio"
                    name="my_radio"
                    defaultValue="B"
                    onChange={(e) => {this.handleChange(e)}}
                >
                    <option value="A">First Option</option>
                    <option value="B">Second Option</option>
                    <option value="C">Third Option</option>
                </Radio>
                <button type="submit">Speak</button>
            </form>
        )
    }

}