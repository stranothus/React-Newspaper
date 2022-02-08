import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class FooterLink extends React.Component {
    render() {
        return (
            <li className="footer-link">
                <Link to={this.props.to}>{this.props.children}</Link>
            </li>
        );
    }
}

export default FooterLink;