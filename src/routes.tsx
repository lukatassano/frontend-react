import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/Home";
import Post from "./pages/Post";

const Routes: React.FC = () => {
  return(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/post" component={Post} />
    </Switch>
  </BrowserRouter>
  )
}

export default Routes