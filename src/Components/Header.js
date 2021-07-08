import React from 'react';
import logo from '../images/logo.png';

function HeaderSection() {
    return (
        <header id="ntheader">
            <img src={logo} alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
        </a>
        </header>
        )
}


export default HeaderSection;
