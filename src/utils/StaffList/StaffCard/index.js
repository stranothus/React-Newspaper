import React from "react";
import "./style.scss";

class StaffCard extends React.Component {
    render() {
        const v = this.props.children;

        return (
            <li>
                <h3>{v.position} <span>{v.name}</span></h3>
                <p><i>{v.about}</i></p>
            </li>
        );
    }
}

export default StaffCard;