import React from "react";

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">About Me</h1>
            </div>
            <div className="center">
                <img src={require('../../assets/images/profile-pic.jpg')} alt="about-me" className="photo" />
            </div>
            <div>
                <p>
                    Write some about me text here vjufbeauigrabuiqbvirubnqifrbjuqndfksbnjfgjks;nb
                </p>
                <p>
                    second paragraph ergnruwovbrouwbuo
                </p>
            </div>
        </section>
    );
}

export default About;