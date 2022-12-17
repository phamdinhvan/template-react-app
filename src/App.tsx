import React from "react";
import Layout from "@Cores/Layout";
import { appRoutes } from "@Cores/Layout/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
