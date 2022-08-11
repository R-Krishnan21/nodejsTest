import React, { useState, useEffect, useSelector } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthHandler from './Auth'

export const PrivateRoute = () => {
    const isLogin = useSelector((state) => state.user.isLogin)
    return (

        isLogin ? <Outlet/> : <Navigate to="/login"/> 

    )
}