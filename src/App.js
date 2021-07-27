import React from "react";
import Layout from "./Components/Layout/Layout/Layout";
// import Contentholder from "./Components/Layout/Containers/Contentholder/Contentholder";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout />;
    </Router>
  );
}
export default App;
