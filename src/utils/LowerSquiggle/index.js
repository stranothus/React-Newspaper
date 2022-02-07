import React from "react";
import "./style.scss";

class LowerSquiggle extends React.Component {
    render() {
        return (
            <div className="lower-squiggle">
                <div className="squiggle-inner">
                    {this.props.children}
                </div>
                <svg viewBox="0 0 500 25" className="squiggle-svg">
                    <defs>
                        <filter id="filter1" x="0" y="0">
                            <feOffset result="offOut" in="SourceAlpha" dx="0" dy="-1"></feOffset>
                            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3"></feGaussianBlur>
                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
                        </filter>
                    </defs>
                    <path d="
                        M 500 15
                        c 0 0 -150 10 -250 -2.5
                        c 0 0 -100 -12.5 -250 -2.5
                        l 0 -10
                        l 500 0
                        Z" filter="url(#filter1)"></path>
                </svg>
            </div>
        );
    };
}

export default LowerSquiggle;