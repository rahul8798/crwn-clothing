import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage-component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => <h1>HATS PAGE</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
