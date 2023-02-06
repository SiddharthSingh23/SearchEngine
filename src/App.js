import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import './App.css'

const App = () => {

    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className={`App ${darkTheme ? 'dark-app' : 'light-app'}`}>
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default App