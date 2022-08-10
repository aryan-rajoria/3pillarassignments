import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from '../../logo.svg';
import "./navbar.css";

function alert_function() {
    console.log("hello world");
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="port__navbar">
            <div className="port__navbar-links">
                <div className="port__navbar-links_logo">
                    {/* <img src={logo} /> */}
                    <h3>Aryan Rajoria</h3>
                </div>
                <div className="port__navbar-links_container">
                    <p>
                        <a href="#home">Home</a>
                    </p>
                    <p>
                        <a href="#aboutme">About Me</a>
                    </p>
                    <p>
                        <a href="#skills">My Skills</a>
                    </p>
                    <p>
                        <a href="#features">Works</a>
                    </p>
                    <p>
                        <a href="#blog">Blogs</a>
                    </p>
                </div>
            </div>
            <div className="port__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="port__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="port__navbar-menu_container scale-up-center">
                        <div className="port__navbar-menu_container-links">
                            <p>
                                <a href="#home">Home</a>
                            </p>
                            <p>
                                <a href="#aboutme">About Me</a>
                            </p>
                            <p>
                                <a href="#skills">My Skills</a>
                            </p>
                            <p>
                                <a href="#features">Works</a>
                            </p>
                            <p>
                                <a href="#blog">Blogs</a>
                            </p>
                        </div>
                        <div className="port__navbar-menu_container-links-sign">
                            <p onClick={alert_function}>Sign in</p>
                            <button type="button" onClick={alert_function}>
                                Sign up
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
