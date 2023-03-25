import React from 'react';

const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar gameon-navbar navbar-expand">
                <div className="container header">
                    {/* Logo */}
                    <a className="navbar-brand" href="/">
                        <img src="/img/logo.png" style={{height:'30px'}} alt="Brand Logo" />
                    </a>
                    <div className="ml-auto" />
                    {/* Navbar Nav */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#problem" className="nav-link">Problem</a>
                        </li>
                        <li className="nav-item">
                            <a href="#solution" className="nav-link">Solution</a>
                        </li>
                        <li className="nav-item">
                            <a href="#roadmap" className="nav-link">RoadMap</a>
                        </li>
                        <li className="nav-item">
                            <a href="#tokeninfo" className="nav-link">Token Info</a>
                        </li>
                        <li className="nav-item">
                            <a href="#howto" className="nav-link">How To Do?</a>
                        </li>
                        <li className="nav-item">
                            <a href="#team" className="nav-link">Team</a>
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="icon-menu m-0" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;