import React from "react";
import NavLink from "./NavLink/index";
import NavTitle from "./NavTitle/index";
import "./style.scss";

class NavBar extends React.Component {
    render() {
        return (
            <ul>
                <NavTitle>Ka News</NavTitle>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/staff">Staff</NavLink>
            </ul>
        );
    };
}

export default NavBar;