import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmpDir from "./pages/emp-dir";


function App() {
  return (
    <Router>
      <Route exact path="/" component={EmpDir} />
    </Router>
  );
}

export default App;
