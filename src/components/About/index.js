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
                    I am an aspiring software engineer that has a background in project management and business analysis. I am currently located in Newport Beach, CA. I enjoy the outdoors and strive to live an active lifestyle. I hope to take my management and team collaboration skills over to the software development field.
                </p>
                <p>
                    I am currently attending the University of California, Berkeley coding bootcamp and will be graduating December 2022. I plan to pursue a career in software development and implementation after graduation.
                </p>
            </div>
        </section>
    );
}

export default About;