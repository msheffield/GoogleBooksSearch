import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Google Books Search
            </a>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className="navbar-brand" href="/">
                        Home
                    </a>
                </li>
                <li className='nav-item'>
                    <a className="navbar-brand" href="/saved">
                        Saved Books
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;