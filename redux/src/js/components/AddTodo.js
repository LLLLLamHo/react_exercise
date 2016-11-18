/**
 * Created by Lam on 16/11/17.
 */
import React,{Component,PropTypes} from 'react';

export default class AddTodo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <input type='text' ref='input'/>
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>

                
            </div>
        );
    }

    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}