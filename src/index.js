import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import News from "./pages/News/index";
import Staff from "./pages/Staff/index";
import FourOFour from "./pages/FourOFour/index";
import React from "react";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="news" element={<News />} />
                <Route path="staff" element={<Staff />} />
                <Route path="*" element={<FourOFour />} />
                </Route>
            </Routes>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));