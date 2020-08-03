import { BrowserRouter as Router, NavLink } from "react-router-dom";
import React from 'react';
import type {Node} from "react";
import "./style.css";

type Props = {|
    children: Node
|};

function Layout(props: Props) {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="link" exact={true} activeClassName='active' to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="link" activeClassName='active' to='/about'>About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="link" activeClassName='active' to='/users'>Users</NavLink>
                            </li>

                        </ul>
                    </div>chat
                </nav>
                <div className="context">
                    {props.children}
                </div>
                <nav className="navbar navbar-dark bg-dark footer">
                    @Footer
                </nav>
            </div>
        </Router>
    );
}

export default Layout;
