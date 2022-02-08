import React from "react";
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