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
                        <path id="double-wave" filter="url(#filter1)" d="
                            M 0 50
                            C 40 10, 60 10, 100 50 C 140 90, 160 90, 200 50
                            C 240 10, 260 10, 300 50 C 340 90, 360 90, 400 50
                            L 400 100 L 0 100 Z" />
                    </defs>

                    <use href="#double-wave" x="0" y="0" transform="scale(2.5 -0.2) translate(0 -100)">
                        <animate attributeName="x" from="0" to="-200" dur="4s"
                                repeatCount="indefinite"></animate>
                    </use>
                </svg>
            </div>
        );
    };
}

export default LowerSquiggle;