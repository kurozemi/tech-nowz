import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Authentication from '../pages/Authentication/Authentication';
import HomeNavigation from './HomeNavigation';
import { sessionLogin } from '../store/actions/authAction';

import { userInfoSelector } from '../store/selectors'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../store/actions/cartAction';

const AppNavigation = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const userInfo = sessionStorage.getItem("userInfo");
        if (userInfo != null) {
            console.log('sessionLogin');
            dispatch(sessionLogin(JSON.parse(userInfo)));
            dispatch(getCart());
        }
    }, [])

    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path='/authentication' component={Authentication} />
                <Route path='/' component={HomeNavigation} />
            </Switch>
        </Router>
    )
}

export default AppNavigation;
