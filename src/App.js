import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/Home";

function App() {
  return (
    <div className="App overflow-hidden scrollbar-hide">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
