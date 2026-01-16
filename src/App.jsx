import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home/Home";
import News from "./components/pages/News/News";
import Club from "./components/pages/Club/Club";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="club" element={<Club />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
