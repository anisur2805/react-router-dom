import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./About";
import AllContacts from "./AllContacts";
import Contact from "./Contact";
import Home from "./Home";

export default function RouteMatchers(){
  return (
    <div>
      <Switch>
         {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
            <Route path="/about">
              <About />
            </Route>
            
            {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
            
            <Route path="/contact/:id">
              <Contact />
            </Route>
             <Route path="/contacts">
              <AllContacts />
            </Route>
            
            <Route path="/">
              <Home />
            </Route>
      </Switch>
    </div>
  )
}