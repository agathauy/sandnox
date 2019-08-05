import React, {Component} from 'react'
import {Switch, Route, Link} from 'react-router-dom'

import './FrontPage.css'

class FrontPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="frontpage-container">
                <div className="sandnox-title">
                    <Link to="/terminal/welcome">
                        <div className="sandnox">SANDNOX</div>
                        <div className="cursor"></div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default FrontPage