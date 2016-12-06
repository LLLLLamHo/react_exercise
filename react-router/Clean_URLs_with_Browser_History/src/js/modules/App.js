/**
 * Created by Lam on 16/12/6.
 */
import React from 'react'
import { Link } from 'react-router'

import Home from './Home'

export default React.createClass({
    render() {
        return (
            <div>

                {this.props.children || <Home/>}

            </div>
        )
    }
})