import React, { useState, useEffect } from "react";
import Sitebar from "./home/Navbar";
import Auth from "./auth/Auth";
import TemplateIndex from "./templates/TemplateIndex";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import About from "./home/About";
import Blog from "./home/Blog";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <TemplateIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  

  return (
    <div>
      <Router>
        <Sitebar clearToken={clearToken} />
        <Switch>
          <Route exact path="/">
            {protectedViews()}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
