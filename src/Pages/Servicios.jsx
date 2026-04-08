import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import SearchIcon from "@mui/icons-material/Search";
import TerminalIcon from "@mui/icons-material/Terminal";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function Servicios() {
  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    // Inicialización de AOS con configuraciones para un scroll suave y profesional
    AOS.init({
      duration: 1000,
      once: false, // Animaciones se repiten al subir y bajar
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const servicios = [
    {
      id: "01",
      title: "Servicio Psicopedagógico",
      tagline:
        "Acompañamiento integral para tu bienestar emocional y académico.",
      mision:
        "Potenciar tu desarrollo integral, mejorar rendimiento y fomentar bienestar emocional.",
      responsable: "Unidad de Bienestar Estudiantil",
      icon: <PsychologyIcon />,
      color: "#007BFF",
      img: "https://images.unsplash.com/photo-1573497620053-ea5310f94f17?q=80&w=2070&auto=format&fit=crop", // Imagen referencial
      funciones: [
        "Asesoramiento individual en estrategias de estudio.",
        "Orientación vocacional y profesional personalizada.",
        "Apoyo en la gestión de emociones y estrés.",
        "Atención de dificultades de aprendizaje.",
      ],
    },
    {
      id: "02",
      title: "Soporte Médico",
      tagline:
        "Cuidamos de tu salud con atención primaria y preventiva en el campus.",
      mision:
        "Proporcionar primeros auxilios y promover hábitos saludables para la comunidad.",
      responsable: "Dr. Erick Wagner Quispe Supanta",
      icon: <LocalHospitalIcon />,
      color: "#003366",
      img: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=2070&auto=format&fit=crop",
      funciones: [
        "Atención de primeros auxilios en emergencias.",
        "Campañas de prevención de enfermedades.",
        "Orientación en salud y derivación a especialistas.",
        "Registro y seguimiento básico de atenciones.",
      ],
    },
    {
      id: "03",
      title: "Servicio Social",
      tagline:
        "Promoviendo la equidad e inclusión de nuestra comunidad estudiantil.",
      mision:
        "Identificar y apoyar a estudiantes en situación de vulnerabilidad socioeconómica.",
      responsable: "Unidad de Bienestar Estudiantil",
      icon: <Diversity1Icon />,
      color: "#007BFF",
      img: "https://images.unsplash.com/photo-1582213726895-25783fdbd038?q=80&w=2070&auto=format&fit=crop",
      funciones: [
        "Evaluaciones socioeconómicas para beneficios.",
        "Gestión de becas y apoyos económicos.",
        "Apoyo en la solución de problemas sociales.",
        "Coordinación con instituciones de ayuda externa.",
      ],
    },
    {
      id: "04",
      title: "Soporte a Investigación",
      tagline:
        "Impulsando tus proyectos con recursos y asesoría especializada.",
      mision:
        "Facilitar actividades de investigación brindando recursos y asesoría.",
      responsable: "Mag. Víctor Rodríguez Soto",
      icon: <SearchIcon />,
      color: "#003366",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
      funciones: [
        "Asesoría metodológica para formulación de proyectos.",
        "Acceso a bases de datos científicas y bibliografía.",
        "Apoyo en redacción de artículos científicos.",
        "Soporte para software de análisis de datos.",
      ],
    },
    {
      id: "05",
      title: "Tecnología (TIC)",
      tagline: "Soluciones digitales para optimizar tu experiencia académica.",
      mision:
        "Garantizar el correcto funcionamiento de la infraestructura tecnológica.",
      responsable: "Ing. Luz Katia Lope Daza",
      icon: <TerminalIcon />,
      color: "#007BFF",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      funciones: [
        "Mantenimiento de red y servidores institucionales.",
        "Soporte técnico para equipos y software.",
        "Gestión de plataformas virtuales (Intranet/Moodle).",
        "Capacitación en herramientas tecnológicas.",
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      {/* 1. HERO SECTION */}
      <Box
        sx={{
          bgcolor: "#003366",
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          borderRadius: "0 0 60px 60px",
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 4, color: "#007BFF", fontWeight: 900 }}
          >
            SERVICIOS INSTITUCIONALES
          </Typography>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{ mt: 2, mb: 3, textTransform: "uppercase" }}
          >
            Acompañamiento en cada paso de tu formación
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
            Descubre las áreas que trabajan para tu bienestar, salud, tecnología
            y soporte académico.
          </Typography>
        </Container>
      </Box>

      {/* 2. SECCIONES ALTERNADAS DE SERVICIOS (Layout Zig-Zag) */}
      {servicios.map((s, idx) => {
        const isEven = idx % 2 === 0;
        const bgSection = isEven ? "#ffffff" : "#F4F7F9"; // Intercalamos fondos

        return (
          <Box
            key={s.id}
            sx={{
              bgcolor: bgSection,
              py: { xs: 10, md: 16 },
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Título Numérico de Fondo Gigante (Elemento de diseño premium) */}
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                [isEven ? "right" : "left"]: "-5%",
                bottom: "-10%",
                fontSize: { xs: "15rem", md: "30rem" },
                fontWeight: 900,
                color: isEven ? "rgba(0,0,0,0.02)" : "rgba(0,123,255,0.03)",
                zIndex: 0,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {s.id}
            </Typography>

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
              <Grid
                container
                spacing={8}
                alignItems="center"
                direction={isEven ? "row" : "row-reverse"}
              >
                {/* COLUMNA DE IMAGEN/ÍCONO (Alternada) */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  data-aos={isEven ? "fade-right" : "fade-left"}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box
                      component="img"
                      src={s.img}
                      sx={{
                        width: "100%",
                        height: { xs: "300px", md: "500px" },
                        objectFit: "cover",
                        borderRadius: isEven
                          ? "30px 100px 30px 30px"
                          : "100px 30px 30px 30px", // Formas orgánicas
                        boxShadow: "0 30px 60px rgba(0,51,102,0.15)",
                      }}
                    />
                    {/* Icono Flotante Grande */}
                    <Avatar
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      sx={{
                        position: "absolute",
                        top: -40,
                        [isEven ? "left" : "right"]: -40,
                        width: 100,
                        height: 100,
                        bgcolor: s.color,
                        color: "#fff",
                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                        border: "8px solid #fff",
                        "& svg": { fontSize: 50 },
                      }}
                    >
                      {s.icon}
                    </Avatar>
                  </Box>
                </Grid>

                {/* COLUMNA DE TEXTO (Alternada y con animaciones escalonadas) */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  data-aos={isEven ? "fade-left" : "fade-right"}
                >
                  <Typography
                    variant="h2"
                    data-aos="fade-up"
                    fontWeight={900}
                    color="#003366"
                    mb={1}
                    sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                  >
                    {s.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    color={s.color}
                    fontWeight={700}
                    mb={4}
                    sx={{ fontSize: "1.2rem", fontStyle: "italic" }}
                  >
                    "{s.tagline}"
                  </Typography>

                  {/* Tarjeta de Responsable y Misión (Estilo Badge) */}
                  <Paper
                    elevation={0}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    sx={{
                      p: 3,
                      mb: 5,
                      borderRadius: "20px",
                      bgcolor: isEven ? "#F4F7F9" : "#fff",
                      border: "1px solid #eaeaea",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2.5,
                    }}
                  >
                    <Avatar sx={{ bgcolor: s.color, color: "#fff" }}>
                      <PersonIcon />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight={800}
                        color="#333"
                      >
                        RESPONSABLE:{" "}
                        <span style={{ fontWeight: 500, color: "#666" }}>
                          {s.responsable}
                        </span>
                      </Typography>
                      <Divider sx={{ my: 1.5 }} />
                      <Typography
                        variant="body2"
                        color="#555"
                        textAlign="justify"
                      >
                        <strong>Misión:</strong> {s.mision}
                      </Typography>
                    </Box>
                  </Paper>

                  {/* Lista de Funciones con animaciones individuales */}
                  <Typography
                    variant="subtitle1"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    fontWeight={900}
                    color="#003366"
                    mb={2}
                    sx={{ textTransform: "uppercase", letterSpacing: 1 }}
                  >
                    Funciones Principales
                  </Typography>
                  <List dense sx={{ p: 0, mb: 5 }}>
                    {s.funciones.map((f, i) => (
                      <ListItem
                        key={i}
                        data-aos="fade-up"
                        data-aos-delay={400 + i * 100}
                        sx={{ px: 0, py: 1 }}
                      >
                        <ListItemIcon sx={{ minWidth: 35 }}>
                          <VerifiedIcon sx={{ color: s.color, fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={f}
                          primaryTypographyProps={{
                            variant: "body1",
                            fontWeight: 500,
                            color: "#444",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  {/* Botón de Acción */}
                  <Button
                    variant="contained"
                    data-aos="zoom-in"
                    data-aos-delay="800"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: s.color,
                      color: "#fff",
                      px: 4,
                      py: 1.5,
                      borderRadius: "30px",
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: "1rem",
                      "&:hover": {
                        bgcolor: "#0056b3",
                        transform: "scale(1.05)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Ver Reglamento del Servicio
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Box>
        );
      })}

      {/* 3. CTA FINAL (Diseño Emocional) */}
      <Box sx={{ bgcolor: "#ffffff", py: 15 }}>
        <Container maxWidth="md">
          <Paper
            data-aos="zoom-in"
            sx={{
              p: { xs: 5, md: 8 },
              borderRadius: "40px",
              textAlign: "center",
              bgcolor: "#003366",
              color: "#fff",
              backgroundImage:
                "linear-gradient(135deg, #003366 0%, #001a33 100%)",
              boxShadow: "0 20px 50px rgba(0, 51, 102, 0.3)",
            }}
          >
            <PsychologyIcon sx={{ fontSize: 60, color: "#007BFF", mb: 3 }} />
            <Typography
              variant="h3"
              fontWeight={900}
              mb={2}
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Estamos aquí para apoyarte
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 5, opacity: 0.8, fontWeight: 400 }}
            >
              Nuestro compromiso es tu desarrollo integral. Si tienes dudas o
              necesitas orientación, no dudes en contactar a nuestras unidades
              de apoyo.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#007BFF",
                color: "#fff",
                px: 6,
                py: 2,
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "1.1rem",
                "&:hover": { bgcolor: "#0056b3" },
              }}
            >
              Contactar a Bienestar Estudiantil
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
