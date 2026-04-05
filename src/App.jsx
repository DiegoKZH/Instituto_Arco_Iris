import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Inicio from "./Pages/inicio";
import Inicial from "./Pages/Inicial";
import Fisica from "./Pages/Fisica";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicial" element={<Inicial />} />
          <Route path="/fisica" element={<Fisica />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
