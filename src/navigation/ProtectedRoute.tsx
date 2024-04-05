import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Routes } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
    const { loading, error, userInfo }  = useSelector((state:any) => state.user)
    return userInfo ? element : (
        <Navigate to="/sign-in" replace />
    );
}

export default ProtectedRoute;
