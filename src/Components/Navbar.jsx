import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  useScrollTrigger,
  Typography,
  Paper,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const location = useLocation();
  const navigate = useNavigate();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const theme = document.body.getAttribute("data-theme");
    setIsLight(theme === "light");
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "Inicio", path: "/" },
    {
      label: "Institucional",
      subItems: [
        {
          label: "Misión y Visión",
          path: "/mision_vision",
          icon: "https://cdn-icons-png.flaticon.com/128/14250/14250086.png",
          desc: "Nuestro propósito y proyección",
        },
        {
          label: "Historia",
          path: "/historia",
          icon: "https://cdn-icons-png.flaticon.com/128/2201/2201563.png",
          desc: "Nuestra trayectoria educativa",
        },
        {
          label: "Directorio",
          path: "/directorio",
          icon: "https://cdn-icons-png.flaticon.com/128/6501/6501114.png",
          desc: "Conoce a nuestro equipo líder",
        },
        {
          label: "Transparencia",
          path: "/transparencia",
          icon: "https://cdn-icons-png.flaticon.com/128/5165/5165914.png",
          desc: "Conoce toda nuestra información",
        },
        {
          label: "Documentos",
          path: "/documentos_gestion",
          icon: "https://cdn-icons-png.flaticon.com/128/3396/3396237.png",
          desc: "Normativas y gestión oficial",
        },
      ],
    },
    {
      label: "Programas",
      subItems: [
        {
          label: "Educación Inicial",
          path: "/inicial",
          icon: "https://cdn-icons-png.flaticon.com/512/7456/7456976.png",
          desc: "Formando el futuro desde la niñez",
        },
        {
          label: "Educación Física",
          path: "/fisica",
          icon: "https://cdn-icons-png.flaticon.com/128/3048/3048355.png",
          desc: "Salud, deporte y disciplina",
        },
      ],
    },
    { label: "Admisión", path: "/admision" },
    { label: "Estudiantes", path: "/estudiantes" },
    { label: "Egresados", path: "/egresados" },
    { label: "Unidades", path: "/unidades" },
    { label: "Plataformas", path: "/plataformas" },
    { label: "Servicios", path: "/servicios" },
    { label: "Contacto", path: "/contacto" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 2 : 0}
      sx={{
        bgcolor: trigger ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: trigger ? "blur(10px)" : "none",
        color: trigger ? "#003366" : isLight ? "#0A192F" : "#ffffff",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        borderBottom: trigger ? "1px solid rgba(0,0,0,0.05)" : "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: trigger ? "70px" : "90px",
            transition: "minHeight 0.4s ease",
            alignItems: "stretch",
          }}
        >
          {/* CONTENEDOR AGRUPADOR*/}
          <Box
            sx={{
              display: "flex",
              alignItems: "stretch",
              gap: { xs: 0, lg: 10 },
            }}
          >
            {/* LOGO */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                onClick={() => handleNavigation("/")}
                src={
                  trigger
                    ? "https://arcoiris.edu.pe/assets/Img/LOGO%20INSTITUTO%20ARCO%20IRIS%20CUSCO%20(5).png"
                    : "https://arcoiris.edu.pe/assets/Img/LOGO%20INSTI%20BLANCO.png"
                }
                sx={{
                  height: trigger ? 50 : 60,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  filter:
                    !trigger && isLight
                      ? "brightness(0) saturate(100%)"
                      : "none",
                }}
              />
            </Box>

            {/* MENÚ DESKTOP */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "stretch",
                gap: 1.5,
              }}
            >
              {navItems.map((item) => {
                const isMainActive = item.path
                  ? location.pathname === item.path
                  : false;
                const isSubActive = item.subItems?.some(
                  (sub) => location.pathname === sub.path,
                );
                const isActive = isMainActive || isSubActive;

                return (
                  <Box
                    key={item.label}
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: "stretch",
                      "&:hover .dropdown-menu": {
                        opacity: 1,
                        visibility: "visible",
                        transform: "translateX(-50%) translateY(0)",
                      },
                    }}
                  >
                    <Button
                      onClick={() => {
                        if (!item.subItems && item.path) {
                          handleNavigation(item.path);
                        }
                      }}
                      disableRipple={!!item.subItems}
                      endIcon={
                        item.subItems ? (
                          <KeyboardArrowDownIcon sx={{ ml: -0.5 }} />
                        ) : null
                      }
                      sx={{
                        height: "100%",
                        px: 2,
                        borderRadius: 0,
                        color: isActive ? "#007BFF" : "inherit",
                        fontWeight: isActive ? 800 : 600,
                        fontSize: "0.85rem",
                        textTransform: "none",
                        transition: "all 0.3s ease",
                        cursor: item.subItems ? "default" : "pointer",
                        "&:hover": {
                          color: trigger ? "#007BFF" : "inherit",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "10%",
                          width: "80%",
                          height: "4px",
                          borderRadius: "4px 4px 0 0",
                          bgcolor: isActive ? "#007BFF" : "transparent",
                          boxShadow:
                            isActive && trigger
                              ? "0 -4px 18px 2px rgba(0, 123, 255, 0.85)"
                              : "none",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        },
                        "&:hover::after": {
                          bgcolor: "#007BFF",
                          width: "100%",
                          left: "0%",
                        },
                      }}
                    >
                      {item.label}
                    </Button>

                    {item.subItems && (
                      <Box
                        className="dropdown-menu"
                        sx={{
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%) translateY(10px)",
                          opacity: 0,
                          visibility: "hidden",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          pt: 2.5,
                          zIndex: 10,
                        }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            position: "relative",
                            minWidth: "320px",
                            bgcolor: "#ffffff",
                            borderRadius: "20px",
                            boxShadow: "0 25px 50px rgba(0,51,102,0.15)",
                            border: "1px solid rgba(0,0,0,0.06)",
                            p: 1.5,
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: "-6px",
                              left: "50%",
                              transform: "translateX(-50%) rotate(45deg)",
                              width: "12px",
                              height: "12px",
                              bgcolor: "#ffffff",
                              borderLeft: "1px solid rgba(0,0,0,0.06)",
                              borderTop: "1px solid rgba(0,0,0,0.06)",
                              zIndex: 0,
                            },
                          }}
                        >
                          {item.subItems.map((subItem) => {
                            const isSubItemActive =
                              location.pathname === subItem.path;
                            return (
                              <Box
                                key={subItem.path}
                                onClick={() => handleNavigation(subItem.path)}
                                sx={{
                                  position: "relative",
                                  zIndex: 1,
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2.5,
                                  px: 2,
                                  py: 1.5,
                                  borderRadius: "14px",
                                  cursor: "pointer",
                                  transition: "all 0.2s ease",
                                  bgcolor: isSubItemActive
                                    ? "rgba(0, 123, 255, 0.05)"
                                    : "transparent",
                                  "&:hover": {
                                    bgcolor: "rgba(0, 123, 255, 0.04)",
                                    transform: "translateX(5px)",
                                  },
                                  "&:hover .icon-box": {
                                    bgcolor: "#007BFF",
                                    boxShadow: "0 6px 15px rgba(0,123,255,0.3)",
                                    transform: "scale(1.05)",
                                  },
                                  "&:hover .flaticon-icon": {
                                    filter: "brightness(0) invert(1)",
                                  },
                                }}
                              >
                                <Box
                                  className="icon-box"
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 45,
                                    height: 45,
                                    flexShrink: 0,
                                    borderRadius: "12px",
                                    bgcolor: isSubItemActive
                                      ? "#007BFF"
                                      : "rgba(0, 123, 255, 0.08)",
                                    transition:
                                      "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                  }}
                                >
                                  <Box
                                    component="img"
                                    src={subItem.icon}
                                    className="flaticon-icon"
                                    sx={{
                                      width: "80%",
                                      height: "80%",
                                      filter: isSubItemActive
                                        ? "brightness(0) invert(1)"
                                        : "invert(36%) sepia(82%) saturate(2853%) hue-rotate(195deg) brightness(103%) contrast(105%)",
                                      transition:
                                        "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                  />
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <Typography
                                    variant="body2"
                                    color={
                                      isSubItemActive ? "#007BFF" : "#003366"
                                    }
                                    fontWeight={isSubItemActive ? 800 : 700}
                                    sx={{ lineHeight: 1.2, mb: 0.5 }}
                                  >
                                    {subItem.label}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="#666666"
                                    sx={{ lineHeight: 1.2 }}
                                  >
                                    {subItem.desc}
                                  </Typography>
                                </Box>
                              </Box>
                            );
                          })}
                        </Paper>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* BOTÓN MOBILE */}
          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
            }}
          >
            <IconButton sx={{ color: "inherit" }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
