import React from "react";
import "./style.scss";

class NavTitle extends React.Component {
    render() {
        return (
            <li className="nav-title">
                <h2>{this.props.children}</h2>
            </li>
        );
    };
}

export default NavTitle;