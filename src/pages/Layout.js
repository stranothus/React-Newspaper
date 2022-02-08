import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../utils/NavBar/index";
import Footer from "../utils/Footer/index";

class Layout extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <Outlet />
                <Footer></Footer>
            </>
        )
    }
};

export default Layout;