import React from "react";

function NavBar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
                <a className="navbar-brand" href="/">uHungry?</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/">Search</a>
                        <a className="nav-item nav-link" href="/list">List</a>
                    </div>
                    <div className="navbar-nav text-right">
                    <ul className="navbar-nav text-right"></ul>
                        <a className="nav-item nav-link" href="/">Register</a>
                        <a className="nav-item nav-link" href="/list">Login</a>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default NavBar