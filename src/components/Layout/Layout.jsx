import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Section />
      <Main />
      <Footer />
    </>
  );
};

export default Layout;
