import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "../utils/NavBar/index";

class Layout extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Outlet />
            </>
        )
    }
};

export default Layout;