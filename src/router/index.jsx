import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Pages/Main/Main"
import Portfolio from "../Pages/Portfolio/Portfolio";
import News from "../Pages/News/News";


const index = () => {
  return (
    // for pages routes
    <>
      <main>
        <section>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Main />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default index;