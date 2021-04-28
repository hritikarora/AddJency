import React,{useState} from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SignUp from "./components/SignUp";
import Footer from "./components/Footer"
import LoginPage from "./components/LoginPage"
import Head from "./components/Head";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/app.css";
import { createBrowserHistory } from "history";

function App()
{
  const history = createBrowserHistory();

  return (
    <div>
      <Router history={history}>
        <Head />
        <div>
              <Switch>
                  {/* <Route path="/" exact ><LoginPage/></Route> */}
                  <Route path="/signin" exact><LoginPage /></Route>
                  <Route path="/signup" exact><SignUp /></Route>
              </Switch>
              </div>
        <Footer />
      </Router>
      </div>
  );
}

export default App;