import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import "./App.css";
import { Welcome } from "./Welcome";
import { Homedashboard } from "./Homedashboard";
import { useState, createContext, useContext } from "react"


export const UserContext = createContext();
function App() {
  const [info, setinfo] = useState(false);
  const values={info,setinfo}
  return (
    <UserContext.Provider value={values} >
      <div className="App">
        <Switch>
          <Route path="/Home">
            <Homedashboard />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
