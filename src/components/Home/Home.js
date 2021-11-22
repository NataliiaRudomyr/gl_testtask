import React from 'react';

import greetings from '../../assets/greetings.png';

import './style.css';

function Home() {
    return (
        <div className="home">
            <img src={greetings} className="img-fluid" alt="greetings" />
            <h3>You`re Welcome!</h3>
        </div>
    )
}

export default Home;
