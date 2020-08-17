import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import AuthContextProvider from "./data/AuthContext";

import WelcomeView from "./views/WelcomeView";
import SignInView from "./views/SignInView";
import RecoverView from "./views/RecoverView";
import SignUpMasterView from "./views/SignUpView/SignUpMasterView";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Route exact path="/" component={WelcomeView} />
          <Route path="/signin" component={SignInView} />
          <Route path="/recover" component={RecoverView} />
          <Route path="/signup" component={SignUpMasterView} />
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
