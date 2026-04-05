import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  IconButton,
  Divider,
  AppBar,
  useScrollTrigger,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";

// Iconos Generales
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Iconos Transparencia
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FoundationIcon from "@mui/icons-material/Foundation";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import VerifiedIcon from "@mui/icons-material/Verified";
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

// Animaciones
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

// Componente reutilizable para los enlaces a documentos
const DocumentLink = ({ title, icon }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      p: 2,
      mb: 1.5,
      bgcolor: "#f8f9fa",
      borderRadius: "12px",
      border: "1px solid #eee",
      transition: "all 0.3s",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#1976d2",
        bgcolor: "#eff6ff",
        transform: "translateX(5px)",
      },
    }}
  >
    <Box sx={{ color: "#d32f2f", display: "flex" }}>
      {icon || <PictureAsPdfIcon />}
    </Box>
    <Typography
      variant="body2"
      fontWeight="600"
      color="#0A192F"
      sx={{ flexGrow: 1 }}
    >
      {title}
    </Typography>
    <OpenInNewIcon sx={{ fontSize: 18, color: "#999" }} />
  </Box>
);

export default function Transparencia() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <Box sx={{ bgcolor: "#f4f7fb", minHeight: "100vh" }}>
      {/* NavBar */}
      <AppBar
        position="fixed"
        elevation={trigger ? 2 : 0}
        sx={{
          bgcolor: trigger ? "rgba(255, 255, 255, 0.95)" : "transparent",
          backdropFilter: trigger ? "blur(10px)" : "none",
          color: trigger ? "#0A192F" : "#ffffff",
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
                sx={{
                  height: 60,
                  width: "auto",
                  transition: "all 0.3s ease",
                }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 0.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: trigger ? "#0A192F" : "#ffffff",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    textTransform: "none",
                    px: 1.5,
                    "&:hover": {
                      color: "#1976d2",
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
            <IconButton
              sx={{
                display: { lg: "none" },
                color: trigger ? "#0A192F" : "#ffffff",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* PORTADA (HERO) */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "60vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#0A192F",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography
              variant="overline"
              sx={{ color: "#42A5F5", fontWeight: 800, letterSpacing: 2 }}
            >
              COMPROMISO INSTITUCIONAL
            </Typography>
            <Typography
              variant="h2"
              fontWeight="900"
              sx={{ color: "#fff", mb: 2 }}
            >
              Portal de Transparencia
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#e0e0e0",
                maxWidth: "700px",
                mx: "auto",
                fontWeight: 400,
              }}
            >
              Acceso público a la información oficial, normativa y de gestión de
              nuestra institución, garantizando la calidad y la confianza.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* CONTENIDO PRINCIPAL */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid
          container
          spacing={5}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* 1. Datos Generales*/}
          <Grid
            container
            item
            xs={12}
            spacing={3}
            component={motion.div}
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* 1.A Tarjeta de Texto (Full Width) */}
            <Grid item xs={12} component={motion.div} variants={fadeUp}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "24px",
                  border: "1px solid #eee",
                  bgcolor: "#fff",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="800"
                  color="#0A192F"
                  mb={1}
                >
                  1. Datos Generales de la Institución
                </Typography>
                <Typography variant="body1" color="#666" mb={4}>
                  Información clave y oficial de nuestro Instituto.
                </Typography>

                {/* Lista de texto organizada */}
                <List disablePadding>
                  {[
                    {
                      icon: <FoundationIcon />,
                      label: "Razón Social",
                      value:
                        'Instituto Superior Pedagógico Privado "Arco Iris del Cusco"',
                    },
                    { icon: <BadgeIcon />, label: "RUC", value: "20564481018" },
                    {
                      icon: <LocationOnIcon />,
                      label: "Dirección",
                      value:
                        "Tenería 4 Fracción II Enaco, San Sebastian, Cusco",
                    },
                    {
                      icon: <PhoneIcon />,
                      label: "Teléfono",
                      value: "+51 986 249 212",
                    },
                    {
                      icon: <EmailIcon />,
                      label: "Correo",
                      value: "informes@arcoiris.edu.pe",
                    },
                    {
                      icon: <AccessTimeIcon />,
                      label: "Horario",
                      value: "Lunes a Viernes (8:00 AM - 5:00 PM)",
                    },
                  ].map((info, idx) => (
                    <ListItem key={idx} sx={{ px: 0, py: 1.2 }}>
                      <ListItemIcon sx={{ minWidth: 40, color: "#1976d2" }}>
                        {info.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            color="#888"
                            fontWeight="600"
                          >
                            {info.label}
                          </Typography>
                        }
                        secondary={
                          <Typography
                            variant="body1"
                            color="#0A192F"
                            fontWeight="500"
                          >
                            {info.value}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* 1.B Tarjeta de Imagen */}
            <Grid item xs={12} component={motion.div} variants={fadeUp}>
              <Paper
                elevation={0}
                sx={{
                  p: 1.5,
                  borderRadius: "24px",
                  border: "1px solid #e0e6ed",
                  bgcolor: "#fff",
                  boxShadow: "0 15px 35px rgba(10,25,47,0.04)",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    boxShadow: "0 20px 45px rgba(10,25,47,0.1)",
                    borderColor: "rgba(25,118,210,0.3)",
                  },
                  "&:hover .facade-img": {
                    transform: "scale(1.04)",
                  },
                  "&:hover .facade-gradient": {
                    opacity: 0.9,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    borderRadius: "18px",
                    overflow: "hidden",
                    aspectRatio: { xs: "16/9", md: "21/9" },
                  }}
                >
                  {/* Imagen Base con Corrección de Color */}
                  <Box
                    className="facade-img"
                    component="img"
                    src="https://arcoiris.edu.pe/assets/Img/Fotos%20Institucional/fachada_instituto.jpg"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition:
                        "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                      filter: "brightness(1.08) contrast(1.1) saturate(1.1)",
                    }}
                  />
                  <Box
                    className="facade-gradient"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(10,25,47,0.8) 0%, rgba(10,25,47,0.2) 40%, transparent 100%)",
                      transition: "opacity 0.4s ease",
                      zIndex: 1,
                    }}
                  />

                  {/* Etiqueta */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      zIndex: 2,
                      bgcolor: "rgba(25, 118, 210, 0.9)",
                      backdropFilter: "blur(4px)",
                      px: 2,
                      py: 0.8,
                      borderRadius: "30px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    }}
                  >
                    <VerifiedIcon sx={{ color: "#fff", fontSize: 16 }} />
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      color="#fff"
                      letterSpacing={0.5}
                    >
                      CAMPUS OFICIAL
                    </Typography>
                  </Box>

                  {/* Contenido Flotante Inferior Izquierdo*/}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      p: { xs: 3, md: 4 },
                      zIndex: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(10px)",
                        p: 1.5,
                        borderRadius: "14px",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <LocationOnIcon sx={{ color: "#fff", fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight="800"
                        color="#fff"
                        sx={{
                          textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                          mb: 0.5,
                        }}
                      >
                        Sede Principal Instituto Arco Iris
                      </Typography>
                      <Typography
                        variant="body2"
                        color="rgba(255,255,255,0.85)"
                        fontWeight="500"
                      >
                        Fachada de nuestras instalaciones en Cusco.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* 2. Marco Legal & 3. Económica */}
          <Grid item xs={12} md={6} component={motion.div} variants={fadeUp}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "24px",
                border: "1px solid #eee",
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(25,118,210,0.1)",
                    p: 1.5,
                    borderRadius: "12px",
                    color: "#1976d2",
                  }}
                >
                  <GavelIcon />
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="800" color="#0A192F">
                    2. Marco Legal
                  </Typography>
                  <Typography variant="body2" color="#666">
                    Documentos normativos que nos rigen.
                  </Typography>
                </Box>
              </Box>
              <Typography variant="subtitle2" color="#888" mb={2}>
                Documentos de Gestión Institucional
              </Typography>
              <DocumentLink title="Proyecto Educativo Institucional (PEI)" />
              <DocumentLink title="Reglamento Institucional (RI)" />
              <DocumentLink title="Plan Anual de Trabajo (PAT)" />
              <DocumentLink title="Proyecto Curricular Institucional (PCI)" />
              <DocumentLink title="Cuadro de Horas Pedagógicas" />
              <DocumentLink title="Manual de Procesos Institucionales (MPI)" />
              <Typography variant="subtitle2" color="#888" mb={2} mt={3}>
                Políticas y Reglamentos Legales
              </Typography>
              <DocumentLink title="Reglamento de Investigación" />
              <DocumentLink title="Resolución de Funcionamiento Institucional" />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} component={motion.div} variants={fadeUp}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "24px",
                border: "1px solid #eee",
                height: "100%",
                display: "flex", // Flex vertical para apilar elementos
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(76,175,80,0.1)",
                    p: 1.5,
                    borderRadius: "12px",
                    color: "#4CAF50",
                  }}
                >
                  <AccountBalanceWalletIcon />
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="800" color="#0A192F">
                    3. Económica y Financiera
                  </Typography>
                  <Typography variant="body2" color="#666">
                    Gestión de recursos y apoyos.
                  </Typography>
                </Box>
              </Box>

              <Typography variant="subtitle2" color="#888" mb={2}>
                Presupuesto y Tasas
              </Typography>
              <DocumentLink title="Proyectos de Investigación" />
              <DocumentLink title="Derechos, Tasas y Pensiones Vigentes (Tarifario)" />

              <Typography variant="subtitle2" color="#888" mb={2} mt={4}>
                Becas y Créditos Educativos
              </Typography>
              <DocumentLink title="Bases y Requisitos para Becas 2025" />
              <DocumentLink title="Resultados de Convocatorias de Becas" />

              {/* Espaciador flexible que empuja el diseño decorativo al fondo */}
              <Box sx={{ flexGrow: 1 }} />

              {/* --- BLOQUE DE DISEÑO PROFESIONAL REPETIDO --- */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                  mt: 5,
                }}
              >
                {/* Elemento Geométrico 1 (Parecido al anterior) */}
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: "rgba(76,175,80,0.04)", // Verde muy sutil
                    border: "1px dashed rgba(76,175,80,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Figuras geométricas */}
                  <Box
                    sx={{
                      position: "absolute",
                      right: -20,
                      top: -20,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "rgba(76,175,80,0.08)",
                      zIndex: 0,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      right: 20,
                      bottom: -20,
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      bgcolor: "rgba(76,175,80,0.08)",
                      zIndex: 0,
                    }}
                  />

                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    <Typography
                      variant="subtitle2"
                      color="#4CAF50"
                      fontWeight="800"
                      mb={0.5}
                    >
                      Gestión Transparente
                    </Typography>
                    <Typography variant="body2" color="#888" fontSize="0.8rem">
                      Administración eficiente para el desarrollo institucional.
                    </Typography>
                  </Box>

                  {/* Ícono translúcido */}
                  <TrendingUpIcon
                    sx={{
                      fontSize: 60,
                      color: "rgba(76,175,80,0.2)",
                      position: "relative",
                      zIndex: 1,
                      ml: 2,
                    }}
                  />
                </Box>

                {/* Elemento Geométrico 2 (Parecido pero diferente) */}
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: "rgba(76,175,80,0.04)",
                    border: "1px dashed rgba(76,175,80,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Figuras geométricas en otras posiciones */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: -20,
                      top: -20,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      bgcolor: "rgba(76,175,80,0.08)",
                      zIndex: 0,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      left: 20,
                      bottom: -20,
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      bgcolor: "rgba(76,175,80,0.08)",
                      zIndex: 0,
                    }}
                  />

                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    <Typography
                      variant="subtitle2"
                      color="#4CAF50"
                      fontWeight="800"
                      mb={0.5}
                    >
                      Compromiso Institucional
                    </Typography>
                    <Typography variant="body2" color="#888" fontSize="0.8rem">
                      Fomentando la integridad y la calidad educativa.
                    </Typography>
                  </Box>

                  {/* Otro Ícono translúcido complementario */}
                  <FoundationIcon
                    sx={{
                      fontSize: 60,
                      color: "rgba(76,175,80,0.2)",
                      position: "relative",
                      zIndex: 1,
                      ml: 2,
                    }}
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* 4. Información Académica & 5. Recursos Humanos */}
          <Grid item xs={12} md={6} component={motion.div} variants={fadeUp}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "24px",
                border: "1px solid #eee",
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(255,152,0,0.1)",
                    p: 1.5,
                    borderRadius: "12px",
                    color: "#FF9800",
                  }}
                >
                  <SchoolIcon />
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="800" color="#0A192F">
                    4. Información Académica
                  </Typography>
                  <Typography variant="body2" color="#666">
                    Programas, horarios y matrículas.
                  </Typography>
                </Box>
              </Box>
              <DocumentLink
                title="Programa de Educación Inicial"
                icon={<OpenInNewIcon />}
              />
              <DocumentLink
                title="Programa de Educación Física"
                icon={<OpenInNewIcon />}
              />
              <DocumentLink title="Horarios de Clases 2025-I" />
              <DocumentLink title="Calendario Académico 2025" />

              <Typography variant="subtitle2" color="#888" mb={2} mt={3}>
                Procesos de Matrícula
              </Typography>
              <DocumentLink
                title="Proceso de Admisión completo"
                icon={<OpenInNewIcon />}
              />
              <DocumentLink title="Reporte Estadístico Anual Detallado de Estudiantes" />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} component={motion.div} variants={fadeUp}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "24px",
                border: "1px solid #eee",
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Box
                  sx={{
                    bgcolor: "rgba(156,39,176,0.1)",
                    p: 1.5,
                    borderRadius: "12px",
                    color: "#9C27B0",
                  }}
                >
                  <BadgeIcon />
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight="800" color="#0A192F">
                    5. Recursos Humanos
                  </Typography>
                  <Typography variant="body2" color="#666">
                    Equipo profesional y vacantes.
                  </Typography>
                </Box>
              </Box>
              <Typography variant="subtitle2" color="#888" mb={2}>
                Directorio e Instrumentos
              </Typography>
              <DocumentLink title="Directorio Institucional Completo" />
              <DocumentLink title="Cuadro de Asignación de Personal Administrativo (CAP 2025)" />
              <DocumentLink title="Cuadro de Asignación de Personal Docente (CAP 2025)" />

              <Typography variant="subtitle2" color="#888" mb={2} mt={3}>
                Hojas de Vida (CVs)
              </Typography>
              <DocumentLink title="Hojas de Vida Resumidas del Personal Directivo" />
            </Paper>
          </Grid>

          {/* 6. Estadísticas y 7. Inversiones (Banners Anchos) */}
          <Grid item xs={12} md={6} component={motion.div} variants={fadeUp}>
            <Box
              sx={{
                bgcolor: "#0A192F",
                color: "#fff",
                p: 4,
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <TrendingUpIcon sx={{ color: "#42A5F5" }} />
                  <Typography variant="h6" fontWeight="800">
                    6. Estadísticas
                  </Typography>
                </Box>
                <Typography variant="body2" color="#a0aec0" mb={2}>
                  Cifras de nuestra comunidad estudiantil.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#1976d2", borderRadius: "20px" }}
                  endIcon={<OpenInNewIcon />}
                >
                  Ver Reporte Detallado
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} component={motion.div} variants={fadeUp}>
            <Box
              sx={{
                bgcolor: "#1976d2",
                color: "#fff",
                p: 4,
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >
                  <FoundationIcon sx={{ color: "#BBDEFB" }} />
                  <Typography variant="h6" fontWeight="800">
                    7. Inversiones y Obras
                  </Typography>
                </Box>
                <Typography variant="body2" color="#e3f2fd" mb={2}>
                  Infraestructura y mejora continua.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#0A192F",
                    borderRadius: "20px",
                    "&:hover": { bgcolor: "#000" },
                  }}
                  endIcon={<OpenInNewIcon />}
                >
                  Ver Informe de Inversiones
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#0A192F",
          color: "#fff",
          pt: 10,
          pb: 4,
          borderTop: "4px solid #1976d2",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} mb={8}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}
              >
                <Box
                  component="img"
                  src="https://arcoiris.edu.pe/assets/Img/LOGO%20INSTI%20BLANCO.png"
                  alt="Logo Arco Iris"
                  sx={{
                    height: 160,
                    width: "auto",
                    transition: "all 0.3s ease",
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#a0aec0", mb: 3, lineHeight: 1.8, pr: 2 }}
              >
                Formando educadores líderes con vocación de servicio,
                pensamiento crítico y valores éticos para el desarrollo de la
                región Cusco y el Perú.
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    "&:hover": { bgcolor: "#1976d2" },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    "&:hover": { bgcolor: "#1976d2" },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    "&:hover": { bgcolor: "#1976d2" },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Institucional
              </Typography>
              {[
                "Nosotros",
                "Autoridades",
                "Docentes",
                "Transparencia",
                "Reclamaciones",
              ].map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{
                    color: "#a0aec0",
                    mb: 1.5,
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                Contacto
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mb: 2,
                  alignItems: "flex-start",
                }}
              >
                <LocationOnIcon sx={{ color: "#1976d2", fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: "#a0aec0" }}>
                  Tenería 4 Fracción II Enaco San Sebastián, San Sebastian,
                  Cusco.
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", gap: 1.5, mb: 2, alignItems: "center" }}
              >
                <PhoneIcon sx={{ color: "#1976d2", fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: "#a0aec0" }}>
                  +51 986 249 212
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", gap: 1.5, mb: 2, alignItems: "center" }}
              >
                <EmailIcon sx={{ color: "#1976d2", fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: "#a0aec0" }}>
                  informes@arcoiris.edu.pe
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                ¿Tienes dudas?
              </Typography>
              <Typography variant="body2" sx={{ color: "#a0aec0", mb: 3 }}>
                Nuestro equipo está listo para ayudarte con tu proceso.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#1976d2",
                  color: "#fff",
                  py: 1.5,
                  borderRadius: "8px",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": { bgcolor: "#1565c0" },
                }}
              >
                Contáctanos Ahora
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" sx={{ color: "#718096" }}>
              © 2026 IESPP Arco Iris. Todos los derechos reservados.
            </Typography>
            <Typography variant="body2" sx={{ color: "#718096" }}>
              RUC: 20123456789
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
