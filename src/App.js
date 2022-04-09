import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import "./App.css";
import { Welcome } from "./Welcome";
import { Homedashboard } from "./Homedashboard";
import { useState, createContext, useContext } from "react";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Home">
          <Homedashboard />
        </Route>
        <Route path="/*">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
