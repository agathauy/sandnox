import React, {Component} from 'react'

import {Switch, Route, Link} from 'react-router-dom'

import {Scrollbars} from 'react-custom-scrollbars'
import * as Spinner from 'react-spinkit'

import './ReactTerminal.css'
import min_button from './img/min-button.svg'
import close_button from './img/close-button.svg'
import max_button from './img/max-button.svg'


const AnimateText = ({text}) => {
    {
       /* this.text.map((letter, key) => {
            return (
                <span key={key}>{letter}</span>
            )
        })
        */
    for (let i = 0; i < text.length; i++) {
        return (
            <span>{text[i]}</span>
        )
    }


    }
}
//<Scrollbars universal={true}  style={{height: '100vh', color: 'white'}}>
const TerminalWindow = ({name, frame, isLoading}) => {
    console.log("in terminal window")
    console.log(isLoading)
    if (isLoading == true) {

        console.log("is in false")
 
        return (
              <Scrollbars universal={true}  style={{height: '100vh', color: 'white'}}>
        <div className="terminal-spinner-window">
            <div className="terminal-spinner">
                <Spinner name="pacman" color="white" />
            </div>
            </div>
        </Scrollbars>
            )
       
    } else {
        return (
            <Scrollbars universal={true}  style={{height: '100vh', color: 'white'}}>
            <div className="inner-terminal-window">
                <div className="main-side">
                    <div className="cmd-line">
                        <div className="line">{name}:~$ {frame.cmd}</div>
                    </div>
                    <div className="text-area">
                        {
                            frame.lines.map((entry, key) => {
                                // Normal text
                                if (entry.link == null && entry.route == null) {
                                    let actual_text = " ";
                                    if (entry.text !== "") {
                                        actual_text = entry.text
                                    }
                                    return (
                                        <div className="line" key={key}>
                                        {actual_text}
                                        </div>
                                    )
                                    // <AnimateText text={entry.text} />
                                } else if (entry.link != null) {
                                    // Is a link to another resource
                                    return (
                                        <div className="line bold-text" key={key}>
                                            <span className="bold-text">> </span>
                                        <a href={entry.link}>
                                            <span className="grow">
                                                {entry.text}
                                            </span>
                                        </a>
                                        </div>
                                    )
                                } else if (entry.route != null) {
                                    // Is a link to a route within the app
                                    return (
                                        <div className="line bold-text" key={key}>
                                        <span className="bold-text">> </span>
                                            <Link to={entry.route}>
                                            <span className="grow">
                                                {entry.text}
                                            </span>
                                            </Link>
                                        </div>
                                    )
                                }
    
                            })
                        }
                        <div className="line">&nbsp;</div>
                        <div className="line">&nbsp;</div>
    
                        <div className="line">&nbsp;</div>
    
                    </div>
                </div>
                <div className="scrollbar-container">
                </div>
            </div>
            </Scrollbars>
        )
    }

   
   
}

class ReactTerminal extends Component {
    constructor() {
        super()
        this.state = {
            name: "sandnox",
            isLoading: true,
            routes: ['/terminal', '/terminal/test'],
            frames: [
                {
                    route: "/terminal",
                    cmd: "./react-terminal",
                    lines: [
                        {
                            text: "Hello World!",
                            link: null,
                            route: null,
                        },
                        {
                            text: "Test route",
                            link: null,
                            route: '/terminal/test',
                        },
                        {
                            text: "link to google.com",
                            link: "https://google.com",
                            route: null
                        }
                    ]
                },
                {
                    route: "/terminal/test",
                    cmd: "./test",
                    lines: [
                        {
                            text: "This is a test route",
                            link: null,
                            route: null,
                        },
                        {
                            text: "Back to /",
                            link: null,
                            route: "/terminal"
                        },
                        {
                            text: "",
                            link: null,
                            route: null
                        },
                        {
                            text: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem."',
                            link: null,
                            route: null
                        }
                    ]
                },
                {
                    route: "/404",
                    cmd: "./404.sh",
                    lines: [
                        {
                            text: "Not found.",
                            link: null,
                            route: null,
                        },
                        {
                            text: "Go back",
                            link: null,
                            route: "/terminal"
                        }
                    ]
                }
            ]
        }

    }

    componentWillMount() {
        console.log("in component will mount")

    }

    componentDidMount() {
    
            fetch('/api/terminal-frames')
            .then((response) => {
                if (response.status === 200) {
                    /*
                    console.log(response)
                    //console.log(response.body)
                    console.log(response.frame)
                    if (response.body.name !== null && response.body.routes !== null && response.body.frames !== null) {
                        let new_state = {...this.state, name: response.body.name, routes: response.body.routes, frames: response.body.frames, isLoading: false}
                        return this.setState(new_state)
                    }
                    */
                    return Promise.resolve(response.json())
                } else {
                    return Promise.reject()
                }
               
            })
            .then((data) => {
                console.log("data")
                console.log(data)
                if (data.name != null && data.routes != null && data.frames != null) {
                    console.log("in if statement")
                    let new_state = {...this.state, name: data.name, routes: data.routes, frames: data.frames, isLoading: false}
                    return this.setState(new_state)
                }
                return this.setState({isLoading: false})
            })
            .catch((err) => {
                return this.setState({isLoading: false})
            })
     

        // put in axios fetch
    }

    render() {
        console.log("in react terminal render")
        console.log(this.props.location);
        /* 
        if (this.state.isLoading == true) {
            return (
              <Spinner name="pacman" color="white" />
            )
        }
        */
        return (
            <div className="terminal-frame">
                <div className="menu-bar">
                    <div className="menu-bar-buttons">
                        <div className="menu-item close-button">
                            <img src={close_button} alt={"min"}/>
                        </div>
                        <div className="menu-item min-button">
                            <img src={min_button} alt={"min"}/>
                        </div>
                        <div className="menu-item max-button">
                            <img src={max_button} alt={"min"}/>
                        </div>
                    </div>
                    <div className="menu-bar-space">
                    </div>
                </div>
                <div className="outer-terminal-window">
                    <Switch>
                    {
                        this.state.routes.map((value, key) => (
                            <Route exact key={key} path={value} 
                            render={() => {
                                console.log("in before for loop)")
                                for (let i = 0; i < this.state.frames.length ; i++) {
                                    console.log("in for loop")
                                    console.log(value)
                                    console.log(this.state.frames[i].route)


                                    if (this.state.frames[i].route === value) {
                                        return (
                                            <TerminalWindow name={this.state.name} frame={this.state.frames[i]} isLoading={this.state.isLoading}/>
                                        )
                                    }
                                   
                                }
                            }
                            }
                            />
                        ))

                    }
                    <Route render={() => {
                        for (let i = 0; i < this.state.frames.length; i++) {
                            if (this.state.frames[i].route == "/404") {

                                return (
                                    <TerminalWindow name={this.state.name} frame={this.state.frames[i]}  isLoading={this.state.isLoading}/>
                                )
                            }
                        }

                    }} />
                    </Switch>
                </div>
            </div>
            
        )

    }
}

export default ReactTerminal;