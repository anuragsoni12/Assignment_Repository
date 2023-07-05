import "./App.css";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Authentication />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
