import React,{useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";

import SignUp from "./components/SignUp";
import Footer from "./components/Footer"
import LoginPage from "./components/LoginPage"
import Head from "./components/Head";
import Dashboard from './components/Dashboard';
import AuthenticatedRoute from "./components/AuthenticatedRoute";

function App()
{
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [id,setId] = useState("");
  
  return (
    <div>
      <Router> 

        <Head loggedIn={isLoggedIn}/>

        <Switch>

          <Route path="/" exact> <LoginPage /> </Route>
          <AuthenticatedRoute path="/dashboard" component={Dashboard}> <Dashboard /> </AuthenticatedRoute>
          <Route path="/signup" exact component={SignUp}> <SignUp /> </Route>
          
        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;