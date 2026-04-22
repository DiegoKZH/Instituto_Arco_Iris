import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import PageLoader from "./Components/PageLoader";
import HomeWithBranding from "./Components/HomeWithBranding";

// Páginas a Lazy Loading
const Inicio = lazy(() => import("./Pages/Inicio"));
const Inicial = lazy(() => import("./Pages/Inicial"));
const Fisica = lazy(() => import("./Pages/Fisica"));
const Transparencia = lazy(() => import("./Pages/Transparencia"));
const MisionVision = lazy(() => import("./Pages/MisionVision"));
const Historia = lazy(() => import("./Pages/Historia"));
const Directorio = lazy(() => import("./Pages/Directorio"));
const Admision = lazy(() => import("./Pages/Admision"));
const Estudiantes = lazy(() => import("./Pages/Estudiantes"));
const Egresados = lazy(() => import("./Pages/Egresados"));
const Unidades = lazy(() => import("./Pages/Unidades"));
const Contacto = lazy(() => import("./Pages/Contacto"));
const Plataformas = lazy(() => import("./Pages/Plataformas"));
const Servicios = lazy(() => import("./Pages/Servicios"));
const DocumentosGestion = lazy(() => import("./Pages/Documentos_gestion"));
const UnidadInvestigacion = lazy(() => import("./Pages/Unidad_investigacion"));

export default function App() {
  return (
    <BrowserRouter>
      {/* Suspense chapa la carga de cualquier componente "lazy" y muestra el paje loader */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeWithBranding />} />
            <Route path="inicial" element={<Inicial />} />
            <Route path="fisica" element={<Fisica />} />
            <Route path="transparencia" element={<Transparencia />} />
            <Route path="mision_vision" element={<MisionVision />} />
            <Route path="historia" element={<Historia />} />
            <Route path="Directorio" element={<Directorio />} />
            <Route path="Admision" element={<Admision />} />
            <Route path="Estudiantes" element={<Estudiantes />} />
            <Route path="Egresados" element={<Egresados />} />
            <Route path="Unidades" element={<Unidades />} />
            <Route path="Contacto" element={<Contacto />} />
            <Route path="Plataformas" element={<Plataformas />} />
            <Route path="Servicios" element={<Servicios />} />
            <Route path="Documentos_gestion" element={<DocumentosGestion />} />
            <Route
              path="Unidad_investigacion"
              element={<UnidadInvestigacion />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
