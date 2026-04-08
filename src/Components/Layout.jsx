import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ModalAnuncios from "./ModalAnuncios";
import RedesFlotantes from "./RedesFlotantes";
import PageLoader from "./PageLoader";

export default function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <PageLoader />
      <Navbar />
      <ModalAnuncios />
      <RedesFlotantes />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
