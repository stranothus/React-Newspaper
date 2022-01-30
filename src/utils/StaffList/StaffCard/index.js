import React from "react";
import "./style.scss";

class StaffCard extends React.Component {
    render() {
        const v = this.props.children;

        return (
            <li className="staff-card">
                <svg viewBox="-20 -1 100 100" className="logo">
                    <path d="
                        M 0 5
                        c 0 0 0 -5 5 -5
                        h 50
                        c 0 0 5 0 5 5
                        v 65
                        c 0 0 0 5 -5 5
                        h -50
                        c 0 0 -5 0 -5 -5
                        v -65
                        Z" ></path>
                    
                    <path d="
                        M 4 7
                        c 0 0 0 -3 3 -3
                        h 12
                        c 0 0 3 0 3 3
                        v 12
                        c 0 0 0 3 -3 3
                        h -12
                        c 0 0 -3 0 -3 -3
                        v -12
                        Z" ></path>

                    <g stroke-width = "0.5">
                        <line x1 = "25" x2 = "56" y1 = "5" y2 = "5" ></line>
                        <line x1 = "25" x2 = "56" y1 = "10" y2 = "10" ></line>
                        <line x1 = "25" x2 = "56" y1 = "15" y2 = "15"></line>
                        <line x1 = "25" x2 = "56" y1 = "20" y2 = "20" ></line>
                        <line x1 = "3" x2 = "56" y1 = "25" y2 = "25" ></line>
                        <line x1 = "3" x2 = "56" y1 = "30" y2 = "30" ></line>
                        <line x1 = "3" x2 = "56" y1 = "35" y2 = "35" ></line>
                        <line x1 = "3" x2 = "56" y1 = "40" y2 = "40" ></line>
                        <line x1 = "3" x2 = "56" y1 = "45" y2 = "45" ></line>
                        <line x1 = "3" x2 = "56" y1 = "50" y2 = "50" ></line>
                        <line x1 = "3" x2 = "56" y1 = "55" y2 = "55" ></line>
                        <line x1 = "3" x2 = "56" y1 = "60" y2 = "60" ></line>
                        <line x1 = "3" x2 = "56" y1 = "65" y2 = "65" ></line>
                        <line x1 = "3" x2 = "56" y1 = "70" y2 = "70" ></line>
                    </g>

                    <text transform="rotate(-15)" x="-25" y="50">KA News</text>
                </svg>
                <svg viewBox="0 0 100 24" className="img-outline">
                    <path d="
                            M 0 0
                            h 38
                            c 0 0 -5 4 -5 12
                            c 0 0 0 6 5 12
                            h -38
                            Z" ></path>
                    <path d="
                        M 0 0
                        h 38
                        c 0 0 -5 5 -5 12
                        c 0 0 0 5 5 12
                        h -38
                        Z" transform="translate(100 0) scale(-1 1)" ></path>
                </svg>
                <img src={v.image}></img>
                <hgroup>
                    <h3>{v.name}</h3>
                    <h4>{v.position}</h4>
                </hgroup>
                <p><i>{v.about}</i></p>
            </li>
        );
    }
}

export default StaffCard;