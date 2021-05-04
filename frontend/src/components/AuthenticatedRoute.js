import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../services/UserService"

function AuthenticatedRoute(props){

    let user = JSON.parse(sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME));
    
    if(user['id'] == null) return <Redirect to="/signup"/>;
    else return <Route {...props}></Route>
        
}

export default AuthenticatedRoute;