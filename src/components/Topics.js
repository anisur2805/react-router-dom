import React from "react";
import { 
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Topics = () => {
  const {path, url} = useRouteMatch();
  console.log("Path " + path );
  console.log("URL " + url);
  return (
    <div>
      <h2>I am from Topics Component</h2>
      <ul>
        <li>
          <NavLink to={`${url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/props-vs-state`}>
            Props vs State
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={path} exact>
          <h3>Please select a topic</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
        
      </Switch>
    </div>
  );
};

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default Topics;
