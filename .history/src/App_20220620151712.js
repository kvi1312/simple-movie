import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<Homepage></Homepage>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
