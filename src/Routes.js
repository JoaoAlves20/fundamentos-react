import React from "react";
import { Route, Switch } from 'react-router-dom'

import Home from "./pages/home";
import Posts from "./pages/Posts";
import NotFound from './pages/NotFound'

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/posts" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  )
}