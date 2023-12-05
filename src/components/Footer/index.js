import React from "react";

function Footer() {
    return(
        <footer className="footer">
            <div>
                <a href="https://github.com/aaront080" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/logos/github-logo.png")} alt="Github" className="logo"></img>
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/aaron-torres-003672b1/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../../assets/logos/linkedin-logo.png")} alt="Github" className="logo"></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;