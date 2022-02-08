import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class FooterSection extends React.Component {
    render() {
        return (
            <li className="footer-section">
                <ul>{this.props.children}</ul>
            </li>
        );
    }
}

export default FooterSection;