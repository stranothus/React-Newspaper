import React from "react";
import StaffCard from "./StaffCard/index";
import "./style.scss";

class StaffList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.staff.map((v, i) => <StaffCard key={i}>{v}</StaffCard>)}
            </ul>
        );
    };
}

export default StaffList;