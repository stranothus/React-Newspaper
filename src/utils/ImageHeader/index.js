import React from "react";
import "./style.scss";

class ImageHeader extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: `url("${this.props.src}")` }} className="image-header">
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}

export default ImageHeader;