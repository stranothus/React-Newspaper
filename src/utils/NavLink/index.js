import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class NavLink extends React.Component {
    render() {
        return (
            <li>
                <Link to={this.props.to}>{this.props.children}</Link>
            </li>
        );
    };
}

export default NavLink;