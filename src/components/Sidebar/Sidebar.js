import React, { useState } from 'react';
import cn from 'classnames';

import { Link } from "react-router-dom";

import './style.css';

function Sidebar() {

    const [active, setActive] = useState('0');

    const handleActivePage = (e) => {
        setActive(e.target.id);
    }

    return (
        <div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${cn({'active': active === '0'})}`} id={0} onClick={handleActivePage}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/table" className={`nav-link ${cn({'active': active === '1'})}`} id={1} onClick={handleActivePage}>Table</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
