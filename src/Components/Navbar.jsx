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
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMore from "@mui/icons-material/ExpandMore";

import logo1 from "../assets/logo_arcoiris_rm.png";
import logo2 from "../assets/logo_arcoiris_blanco.png";

export default function Navbar() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const location = useLocation();
  const navigate = useNavigate();
  const [isLight, setIsLight] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  useEffect(() => {
    const theme = document.body.getAttribute("data-theme");
    setIsLight(theme === "light");
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileNavigation = (path) => {
    handleNavigation(path);
    setMobileOpen(false);
  };

  const handleSubMenuToggle = (label) => {
    setOpenSubMenus((prev) => ({ ...prev, [label]: !prev[label] }));
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

  // 1. Contenido del Drawer (Menú Móvil)
  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "flex-start",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          border: "3px solid rgba(8, 90, 161, 0.12)",
          bottom: "1%",
          left: "-100px",
          zIndex: 0,
          pointerEvents: "none",
          animation: "floatUpDownStroke 18s ease-in-out infinite",
          "@keyframes floatUpDownStroke": {
            "0%, 100%": { transform: "translateY(0) scale(1)" },
            "50%": { transform: "translateY(-30px) scale(1.05)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 123, 255, 0.29) 0%, rgba(0,0,0,0) 70%)",
          top: "20%",
          left: "-120px",
          zIndex: 1,
          pointerEvents: "none",
          animation: "floatCircleFilled 15s ease-in-out infinite",
          "@keyframes floatCircleFilled": {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(40px, 20px)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(20, 81, 151, 0.35) 0%, rgba(0,0,0,0) 60%)",
          bottom: "15%",
          right: "-50px",
          zIndex: 1,
          pointerEvents: "none",
          animation: "floatCircleFilledReverse 20s ease-in-out infinite",
          "@keyframes floatCircleFilledReverse": {
            "0%, 100%": { transform: "translate(0, 0)" },
            "50%": { transform: "translate(-30px, -40px)" },
          },
        }}
      />

      <List
        sx={{
          px: 0,
          pt: "135px",
          pb: 3,
          overflowY: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", mb: 2, mx: 4.5 }}
        />

        {navItems.map((item) => {
          const isMainActive = item.path
            ? location.pathname === item.path
            : false;
          const isSubActive = item.subItems?.some(
            (sub) => location.pathname === sub.path,
          );
          const isActive = isMainActive || isSubActive;

          return (
            <React.Fragment key={item.label}>
              <ListItemButton
                onClick={() => {
                  if (item.subItems) {
                    handleSubMenuToggle(item.label);
                  } else {
                    handleMobileNavigation(item.path);
                  }
                }}
                sx={{
                  borderRadius: 0,
                  mb: 0,
                  width: "100%",
                  px: 4.5,
                  py: 1.2,
                  bgcolor: isActive ? "rgb(4, 61, 121)" : "transparent",
                  color: isActive ? "#3ea6ff" : "#e2e8f0",
                  boxShadow: isActive
                    ? "inset 0 0 20px rgb(3, 74, 155)"
                    : "none",
                  transform: "none",
                  transition: "all 0.2s ease",
                  "&:hover": { bgcolor: "rgba(4, 61, 121, 0.86)" },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isActive ? 700 : 500,
                    fontSize: "1.05rem",
                  }}
                />
                {item.subItems && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      transition: "transform 0.3s ease",
                      transform: openSubMenus[item.label]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <ExpandMore />
                  </Box>
                )}
              </ListItemButton>

              {item.subItems && (
                <Collapse
                  in={openSubMenus[item.label]}
                  timeout={350}
                  easing={{
                    enter: "cubic-bezier(0.4, 0, 0.2, 1)",
                    exit: "cubic-bezier(0.4, 0, 1, 1)",
                  }}
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    sx={{ mb: 1, paddingLeft: 4, paddingTop: 2 }}
                  >
                    {item.subItems.map((sub) => {
                      const isSubItemActive = location.pathname === sub.path;
                      return (
                        <ListItemButton
                          key={sub.label}
                          onClick={() => handleMobileNavigation(sub.path)}
                          sx={{
                            pl: 4,
                            pr: 2,
                            py: 1.4,
                            borderRadius: "10px",
                            mb: 0.6,
                            width: "90%",
                            bgcolor: isSubItemActive
                              ? "rgb(3, 65, 131)"
                              : "transparent",
                            color: isSubItemActive ? "#3ea6ff" : "#94a3b8",
                            boxShadow: isSubItemActive
                              ? "-2px -2px 2px rgb(10, 105, 206)"
                              : "none",
                            transform: isSubItemActive
                              ? "scale(1.01)"
                              : "scale(1)",
                            transition: "all 0.25s ease",
                            "&:hover": {
                              bgcolor: "rgba(255, 255, 255, 0.64)",
                              color: "#ffffff",
                              transform: "translateX(4px)",
                            },
                          }}
                        >
                          <Box
                            component="img"
                            src={sub.icon}
                            sx={{
                              width: 22,
                              height: 22,
                              mr: 2,
                              filter: isSubItemActive
                                ? "invert(36%) sepia(82%) saturate(2853%) hue-rotate(195deg) brightness(103%) contrast(105%)"
                                : "invert(60%) sepia(12%) saturate(400%) hue-rotate(180deg) brightness(95%) contrast(85%)",
                            }}
                          />
                          <ListItemText
                            primary={sub.label}
                            primaryTypographyProps={{
                              fontSize: "0.95rem",
                              fontWeight: isSubItemActive ? 600 : 400,
                            }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );

  // 2. Barra de Navegación Principal
  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger && !mobileOpen ? 2 : 0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: mobileOpen
            ? "#0A192F"
            : trigger
              ? "rgba(255, 255, 255, 0.95)"
              : "transparent",
          backdropFilter: trigger && !mobileOpen ? "blur(10px)" : "none",
          color: mobileOpen
            ? "#ffffff"
            : trigger
              ? "#003366"
              : isLight
                ? "#0A192F"
                : "#ffffff",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom:
            trigger && !mobileOpen ? "1px solid rgba(0,0,0,0.05)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: mobileOpen ? "120px" : trigger ? "70px" : "90px",
              transition: "minHeight 0.4s ease",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0, lg: 10 },
                flexGrow: 1,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  zIndex: 1,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <Box
                  component="img"
                  onClick={() => handleNavigation("/")}
                  src={mobileOpen ? logo2 : trigger ? logo1 : logo2}
                  sx={{
                    height: mobileOpen ? 85 : 60,
                    cursor: "pointer",
                    transition: "height 0.5s ease, filter 0.3s ease",
                    filter:
                      !trigger && !mobileOpen && isLight
                        ? "brightness(0) saturate(100%)"
                        : "none",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                  alignItems: "stretch",
                  gap: 1.5,
                  alignSelf: "stretch",
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
                          color: isActive
                            ? trigger && !mobileOpen
                              ? "#007BFF"
                              : "#ffffff"
                            : "inherit",
                          fontWeight: isActive ? 800 : 600,
                          fontSize: "0.85rem",
                          textTransform: "none",
                          transition: "all 0.3s ease",
                          cursor: item.subItems ? "default" : "pointer",
                          "&:hover": {
                            color:
                              trigger && !mobileOpen ? "#007BFF" : "inherit",
                          },
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: 0,
                            left: "10%",
                            width: "80%",
                            height: "4px",
                            borderRadius: "4px 4px 0 0",
                            bgcolor: isActive ? "#ffffff" : "transparent",
                            boxShadow:
                              isActive && trigger && !mobileOpen
                                ? "0 -4px 18px 2px rgba(0, 123, 255, 0.6)"
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
                                borderLeft: isActive
                                  ? "4px solid #3ea6ff"
                                  : "4px solid transparent",
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
                                      boxShadow:
                                        "0 6px 15px rgba(0, 123, 255, 0.3)",
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
                                      justifyContent: "flex-start",
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

            <Box
              sx={{
                display: { xs: "flex", lg: "none" },
                alignItems: "center",
                zIndex: mobileOpen ? 1 : "auto",
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ color: "inherit", p: 1.5 }}
                disableRipple
              >
                <Box sx={{ position: "relative", width: 20, height: 16 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: mobileOpen ? 7 : 0,
                      left: 0,
                      width: 20,
                      height: 1.5,
                      bgcolor: "currentColor",
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: mobileOpen ? "rotate(45deg)" : "none",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 7,
                      left: 0,
                      width: 20,
                      height: 1.5,
                      bgcolor: "currentColor",
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      opacity: mobileOpen ? 0 : 1,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: mobileOpen ? 7 : 14,
                      left: 0,
                      width: 20,
                      height: 1.5,
                      bgcolor: "currentColor",
                      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: mobileOpen ? "rotate(-45deg)" : "none",
                    }}
                  />
                </Box>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: "380px" },
            bgcolor: "#0A192F",
            color: "#ffffff",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
