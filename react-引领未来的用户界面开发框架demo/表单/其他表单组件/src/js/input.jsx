import React from 'react';

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            helloTo : 'Hello World!',
            d_select : 'a'
        }
    }

    handleChange(event) {
        this.setState({
            helloTo : event.target.value.toUpperCase()
        });
    }

    selectChange(event) {
        this.setState({
            d_select : event.target.value
        });
    }

    submitHandler(event) {
        event.preventDefault();
        alert(this.state.helloTo);
    }

    render() {
        return (
            <form onSubmit={(e) => {this.submitHandler(e)}}>
                <label htmlFor="text1">输入文字:</label>
                <input
                    id="text1"
                    type="text"
                    value={this.state.helloTo.toUpperCase()}
                    onChange={(e) => {this.handleChange(e)}}
                />
                <br/>
                <textarea onChange={(e) => {this.handleChange(e)}} defaultValue={this.state.helloTo} name="text_more" id="text_more" cols="30" rows="10"></textarea>
                <br/>
                <h5>单选select</h5>
                <select onChange={(e) => {this.selectChange(e)}} defaultValue={this.state.d_select}>
                    <option value="a">i'm is a</option>
                    <option value="b">i'm is b</option>
                    <option value="c">i'm is c</option>
                </select>
                <p>现在选择的是:{this.state.d_select}</p>
                <br/>
                <button type="submit">Speak</button>
            </form>
        );
    }

}