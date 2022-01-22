import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/staff">Staff</Link>
                    </li>
                </ul>
            </nav>
        );
    };
}

export default NavBar;