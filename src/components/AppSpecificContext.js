import React from "react";
import { BrowserRouter, Redirect, Route, StaticRouter, Switch } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';

function RedirectWithStatus({ from, to, status }) {
    return (
        <Route
            render={({ staticContext }) => {
                if (staticContext) staticContext.status = status;
                return <Redirect from={from} to={to} />;
            }}
        />
    );
}
const AppSpecificContext = () => {
    return (
        <BrowserRouter>
          <Switch>
            <RedirectWithStatus status={301} from="/users" to="/profiles" />
            <RedirectWithStatus status={302} from="/courses" to="/dashboard" />
        </Switch>
        </BrowserRouter>
    );
};

// on the server
const context = {};
const markup = ReactDOMServer.renderToString(
    <StaticRouter context={context}>
        <AppSpecificContext />
    </StaticRouter>
);

if (context.url) {
    Redirect(context.status, context.url);
}
export default AppSpecificContext;
