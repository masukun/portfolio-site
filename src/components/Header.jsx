import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header-menu">
                        <div className="header-left">
                            <h1>Ryosei Yamano</h1>
                            <ul className="header-menu">
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#works">Works</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;