import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Routeelement={<Main></Main>}>
          <Route path="/" element={<Homepage></Homepage>}></Route>
        </Routeelement=>
      </Routes>
    </>
  );
}

export default App;
