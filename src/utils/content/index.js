import React from "react";
import "./style.scss";

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    };
}

export default Content;