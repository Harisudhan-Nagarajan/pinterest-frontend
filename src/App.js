import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import "./App.css";
import { Welcome } from "./Welcome";
import { Homedashboard } from "./Homedashboard";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route  path="/Home">
          <Homedashboard />
        </Route>
      </Switch>
    </div>
  );
}






export default App;
