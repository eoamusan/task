import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import appService from 'services/appService'

const ProtectedAuth = ({ component: Component, ...rest }) => {
    console.log(appService.loggedIn());
    
    return (
        <Route {...rest} render={props => appService.loggedIn() ? <Redirect to={`/`} /> : <Component {...props} />} />
    )
}

export default ProtectedAuth;