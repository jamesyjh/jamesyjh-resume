import React from "react";
import "./styles.css";

const About = () => {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content justify-content-center text-center">
                <h1
                    className="mb-0"
                    style={{
                        fontFamily: "Raleway",
                        fontSize: 70,
                        fontWeight: 800,
                    }}
                >
                    James&nbsp;
                    <span className="text-secondary">Hong</span>
                </h1>

                <div className="subheading mb-5">
                    3542 Berry Street · Cheyenne Wells, CO 80810 · (317)
                    585-8468 ·<a href="mailto:name@email.com">name@email.com</a>
                </div>
                <p className="lead mb-5">
                    I am experienced in leveraging agile frameworks to provide a
                    robust synopsis for high level overviews. Iterative
                    approaches to corporate strategy foster collaborative
                    thinking to further the overall value proposition.
                </p>
                <div className="social-icons">
                    <a className="social-icon" href="#!">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="social-icon" href="#!">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="social-icon" href="#!">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="social-icon" href="#!">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
