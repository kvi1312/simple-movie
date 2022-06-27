import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      {/* outlet là những thằng đươ */}
      <Outlet></Outlet>
    </>
  );
};

export default Main;
