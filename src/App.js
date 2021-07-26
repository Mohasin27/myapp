import React from 'react';
import './css/bootstrap.min.css';
import './css/core.css';
import './css/index.css';
import './css/reset.css';
import HeaderSection from './Components/Header';

import FooterSection from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Products from './pages/products';
import Reports from './pages/reports';
import Contactus from './pages/contactus';


function App() {
    return (
        <>
            <Router>
                <div id="nt_wrapper" className="App">
                    <HeaderSection />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/aboutus' component={Aboutus} />
                        <Route path='/products' component={Products} />
                        <Route path='/reports' component={Reports} />
                        <Route path='/contactus' component={Contactus} />
                    </Switch>
                    <FooterSection />
            </div>
            </Router>
            </>
    );
}

export default App;
