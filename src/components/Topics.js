import React from "react";
import { 
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Topics = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <h2>I am from Topics Component</h2>
      <ul>
        <li>
          <NavLink to={`${match.url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-vs-state`}>
            Props vs State
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={match.path} exact>
          <h3>Please select a topic</h3>
        </Route>
        <Route path={`${match.path}/:topicId`}>
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
