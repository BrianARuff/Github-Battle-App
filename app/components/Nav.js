import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <ul className="nav">
            <li>
                <NavLink
                    activeClassName="active"
                    to="/"
                    exact
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active"
                         to="/battle"
                         exact
                >
                    Battle
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active"
                         to="/popular"
                >
                    Popular
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav;