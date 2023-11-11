import React from "react";
import { Outlet } from "react-router-dom";

// imports components  ...............
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
