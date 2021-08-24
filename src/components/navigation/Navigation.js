import React from "react";
import "./styles.css";
import profilePhoto from "../../assets/profile.jpg";

const Navigation = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top"
                id="sideNav"
            >
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">James Hong</span>
                    <span className="d-none d-lg-block">
                        <img
                            className="img-fluid img-profile rounded-circle mx-auto mb-2"
                            src={profilePhoto}
                            alt="..."
                        />
                    </span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link js-scroll-trigger"
                                href="#about"
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link js-scroll-trigger"
                                href="#experience"
                            >
                                Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link js-scroll-trigger"
                                href="#education"
                            >
                                Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link js-scroll-trigger"
                                href="#skills"
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link js-scroll-trigger"
                                href="#interests"
                            >
                                Interests
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link js-scroll-trigger"
                                href="#awards"
                            >
                                Awards
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
