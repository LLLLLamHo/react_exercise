/**
 * Created by Lam on 16/12/6.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {

        console.log(this.props.children);

        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
})