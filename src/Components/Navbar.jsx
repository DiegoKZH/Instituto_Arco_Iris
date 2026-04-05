import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  "Inicio",
  "Institucional",
  "Programas",
  "Admisión",
  "Estudiantes",
  "Egresados",
  "Unidades",
  "Plataformas",
  "Servicios",
  "Contacto",
];

export default function Navbar() {
  // El trigger detecta si el usuario ha hecho scroll
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 2 : 0}
      sx={{
        bgcolor: trigger ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: trigger ? "blur(10px)" : "none",
        color: trigger ? "#003366" : "#ffffff", // Cambia de blanco a azul oscuro al hacer scroll
        transition: "all 0.5s ease",
        pt: trigger ? 0 : 2,
        borderBottom: trigger ? "1px solid rgba(0,0,0,0.05)" : "none",
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: trigger ? "70px" : "90px",
            transition: "min-height 0.4s ease",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={
                trigger
                  ? "https://arcoiris.edu.pe/assets/Img/LOGO%20INSTITUTO%20ARCO%20IRIS%20CUSCO%20(5).png"
                  : "https://arcoiris.edu.pe/assets/Img/LOGO%20INSTI%20BLANCO.png"
              }
              alt="Logo Arco Iris"
              sx={{ height: 60, width: "auto", transition: "all 0.3s ease" }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 0.5 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "inherit", // Hereda el color del AppBar
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textTransform: "none",
                  px: 1.5,
                  "&:hover": {
                    color: "#007BFF",
                    bgcolor: "transparent",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton sx={{ display: { lg: "none" }, color: "inherit" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
