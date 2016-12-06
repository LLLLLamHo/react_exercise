/**
 * Created by Lam on 16/12/6.
 */
import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul>
            </div>

        )
    }
})