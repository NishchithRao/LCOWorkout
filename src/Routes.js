import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Creator from "./components/Creator";
import Home from "./components/Home";
import ConductExercise from "./components/ConductExercise";
import PassExercises from "./components/PassExercises";
import Random from "./components/Random";
import Day from "./components/Day";
import Break from "./components/Break";
import Compeleted from "./components/Compeleted";
const Routes = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/random" exact component={Random} />
        <Route path="/day" exact component={Day} />
        <Route path="/creator" exact component={Creator} />
        <Route path="/exercise" exact component={ConductExercise} />
        <Route path="/select" exact component={PassExercises} />
        <Route path="/break" exact component={Break} />
        <Route path="/completed" exact component={Compeleted} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
