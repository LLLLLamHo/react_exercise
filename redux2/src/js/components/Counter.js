/**
 * Created by Lam on 16/11/18.
 */
import React,{ Component, PropTypes} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

export default Counter;


