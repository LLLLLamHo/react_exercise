/**
 * Created by Lam on 16/11/18.
 */
import {connect} from 'react-redux';
import React, { Component } from 'react';
import { INCREASEACTION } from '../actions/action.js';

import Counter from '../components/Counter.js';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { dispatch, value } = this.props;
        return (
            <div>
                <Counter
                    value={value}
                    onIncreaseClick={() => {dispatch(INCREASEACTION())}}
                />
            </div>
        )

    }
}

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        value: state.data1.count
    }
}
//将action的所有方法绑定到props上
// function mapDispatchToProps(dispatch) {
//     return {
//         onIncreaseClick : () => dispatch(INCREASEACTION())
//     }
// }

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps)(App)