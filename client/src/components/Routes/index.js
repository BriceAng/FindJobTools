import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home';
import Offers from '../../pages/Offers';
import Profil from '../../pages/Profil';
import LeftNavbar from '../LeftNavbar';
import Navbar from '../Navbar';

const index = () => {
    return (
        <Router>
            <Navbar />
            <LeftNavbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Profil" exact component={Profil} />
                <Route path="/offers" exact component={Offers} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default index;