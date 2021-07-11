import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom"
import About from './About'
import Home from './Home'
import Users from './Users'
const Main = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li> <NavLink activeClassName="active" exact to="/">Home</NavLink> </li>
            <li> <NavLink activeClassName="active" to="/about">About</NavLink> </li>
            <li> <NavLink activeClassName="active" to="/users">Users</NavLink> </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>  
    
  )
}

export default Main
