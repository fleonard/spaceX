import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { Box } from "@material-ui/core";

import { GlobalStyles } from "./globalStyles";

import Dragons from "./views/Dragons/Dragons";
import Rockets from "./views/Rockets/Rockets";
import Nav from "./components/Nav/Nav";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Box component="main" className="container">
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/rockets" />
          <Route path="/rockets" component={Rockets} />
          <Route path="/dragons" component={Dragons} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};

export default App;
