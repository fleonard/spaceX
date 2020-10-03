import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { Box } from "@material-ui/core";

import { GlobalStyles } from "./globalStyles";

import Dragons from "./views/Dragons/Dragons";
import Rockets from "./views/Rockets/Rockets";
import DragonPage from "./views/DetailPages/DragonPage";
import RocketPage from "./views/DetailPages/RocketPage";
import Nav from "./components/Nav/Nav";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Box component="main" className="container">
        <Nav />
        <Switch>
          <Route path="/rockets" component={Rockets} exact />
          <Route path="/rockets/:id" component={RocketPage} />
          <Route path="/dragons" component={Dragons} exact />
          <Route path="/dragons/:id" component={DragonPage} />
          <Redirect from="*" to="/rockets" />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};

export default App;
