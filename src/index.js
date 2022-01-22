import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Staff from "./pages/Staff";
import FourOFour from "./pages/FourOFour";
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