import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Routes/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="content/:slide" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </Router>
  );
}

export default App;
