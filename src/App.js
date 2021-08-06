import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/Navbar";
import Companies from "./components/company/Companies";
import NoPageFound from "./components/common/NoPageFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Companies} />
        <Route path="/Companies" exact component={Companies} />
        {/* <Route path="/CompanyDetails/:id" component={CompanyDetails} /> */}
        <Route path="*" component={NoPageFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
