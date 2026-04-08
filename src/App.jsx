import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Inicio from "./Pages/Inicio";
import Inicial from "./Pages/Inicial";
import Fisica from "./Pages/Fisica";
import Transparencia from "./Pages/Transparencia";
import MisionVision from "./Pages/MisionVision";
import Historia from "./Pages/Historia";
import Directorio from "./Pages/Directorio";
import Admision from "./Pages/Admision";
import Estudiantes from "./Pages/Estudiantes";
import Egresados from "./Pages/Egresados";
import Unidades from "./Pages/Unidades";
import Contacto from "./Pages/Contacto";
import Plataformas from "./Pages/Plataformas";
import Servicios from "./Pages/Servicios";
import DocumentosGestion from "./Pages/Documentos_gestion";
import UnidadInvestigacion from "./Pages/Unidad_investigacion";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicial" element={<Inicial />} />
          <Route path="/fisica" element={<Fisica />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/mision_vision" element={<MisionVision />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/Directorio" element={<Directorio />} />
          <Route path="/Admision" element={<Admision />} />
          <Route path="/Estudiantes" element={<Estudiantes />} />
          <Route path="/Egresados" element={<Egresados />} />
          <Route path="/Unidades" element={<Unidades />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Plataformas" element={<Plataformas />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Documentos_gestion" element={<DocumentosGestion />} />
          <Route
            path="/Unidad_investigacion"
            element={<UnidadInvestigacion />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
