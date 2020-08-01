import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadRoundPage from "./views/UploadRoundPage/UploadRoundPage";
import UserHomePage from "./views/UserHomePage/UserHomePage"

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/user" component={Auth(UserHomePage, true)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/upload" component={Auth(UploadRoundPage, true)} />
        </Switch>
    </Suspense>
  );
}

export default App;
