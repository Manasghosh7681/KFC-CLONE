import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let {isLogin} = useContext(AuthContext);
    if(!isLogin){
             return <Navigate to='/login'/>
    }
    return children

}

export default PrivateRoute