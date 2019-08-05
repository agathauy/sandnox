import React, {Component} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import * as Spinner from 'react-spinkit'

import './FrontPage.css'
import big_logo from './img/logo.svg'

class FrontPage extends Component {
    constructor() {
        super()
        this.state = {isLoading: true}
    }
    render() {
        console.log("in render")


        return (
            <div className="frontpage-container">
                <div className="sandnox-title">
                    <div className="sandnox-title-text">
                    <Link to="/terminal/welcome">
                        <div className="sandnox">SANDNOX</div>
                        <div className="cursor"></div>
                       
                    </Link>
                    </div>
                    <div className="click-hint">
                            CLICK ABOVE TO PROCEED
                            </div>
                </div>
                <div className="big-logo">
                    <img src={big_logo} alt="big-logo"/>
                </div>
            </div>
        )
    }
}

export default FrontPage