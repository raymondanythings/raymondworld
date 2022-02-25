import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="content/:slide" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
