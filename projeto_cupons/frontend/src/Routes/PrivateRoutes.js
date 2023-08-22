// components/PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth'

const PrivateRoute = (props) => {
    const isAuthenticated = useAuth();

    if (isAuthenticated) {
        return <Route {...props} />;
    } else {
        return <Navigate to="/" />;
    }
};

export default PrivateRoute;
