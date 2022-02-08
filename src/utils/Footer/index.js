import React from "react";
import FooterLink from "./FooterLinks/index";
import FooterSection from "./FooterSection/index";
import "./style.scss";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <ul id="footer-sections">
                    <FooterSection id="footer-title">
                        <li><h2>KA News</h2></li>
                        <li><h3>© KA News and Stranothus Studios</h3></li>
                    </FooterSection>
                    <FooterSection>
                        <FooterLink to="/">Home</FooterLink>
                        <FooterLink to="/news">News</FooterLink>
                        <FooterLink to="/staff">Staff</FooterLink>
                    </FooterSection>
                    <FooterSection>
                        <FooterLink to="/about">About us</FooterLink>
                        <FooterLink to="/privacy">Privacy policy</FooterLink>
                        <FooterLink to="/cookies">Cookie policy</FooterLink>
                    </FooterSection>
                </ul>
            </footer>
        );
    }
}

export default Footer;