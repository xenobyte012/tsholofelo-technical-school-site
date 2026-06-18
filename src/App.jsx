import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admission from "./pages/Admission";
import Academics from "./pages/Academics";
import News from "./pages/News";
import Application from "./pages/Application"
import Loaction from "./pages/Loaction"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/academics" element={<Academics /> } />
      <Route path="/news" element={<News />} />
      <Route path="/application"  element={<Application/> } /> 
      <Route path="/location" element={<Loaction />} />
      <Route path="/contact" element={<Contact /> } />
    </Routes>
  );
}

export default App;
