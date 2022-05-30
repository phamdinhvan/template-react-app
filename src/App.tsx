import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./app/core/Layout";
import { appRoutes } from "./app/core/Layout/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout>
            {appRoutes.map((route, index) => {
              return <Route key={index} {...route} />;
            })}
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
