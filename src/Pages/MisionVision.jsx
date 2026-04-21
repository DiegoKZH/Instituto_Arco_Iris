import React, { useEffect } from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import GavelIcon from "@mui/icons-material/Gavel";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Diversity1Icon from "@mui/icons-material/Diversity1";

export default function MisionVision() {
  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const valores = [
    {
      title: "Compromiso",
      desc: "Dedicación y responsabilidad en todas nuestras acciones, con la comunidad educativa y la sociedad.",
      icon: <HandshakeIcon fontSize="inherit" />,
    },
    {
      title: "Innovación",
      desc: "Búsqueda constante de nuevas ideas y metodologías para mejorar la práctica educativa.",
      icon: <LightbulbCircleIcon fontSize="inherit" />,
    },
    {
      title: "Ética",
      desc: "Actuar con integridad, honestidad y transparencia en todos los ámbitos.",
      icon: <GavelIcon fontSize="inherit" />,
    },
    {
      title: "Solidaridad",
      desc: "Apoyo mutuo y trabajo colaborativo para el bienestar de la comunidad.",
      icon: <VolunteerActivismIcon fontSize="inherit" />,
    },
    {
      title: "Excelencia",
      desc: "Búsqueda de la más alta calidad en la formación académica y profesional.",
      icon: <WorkspacePremiumIcon fontSize="inherit" />,
    },
    {
      title: "Respeto",
      desc: "Valoración de la diversidad, las opiniones y los derechos de los demás.",
      icon: <Diversity1Icon fontSize="inherit" />,
    },
  ];

  const misionBullets = [
    "Formación integral y de calidad.",
    "Innovación y transformación educativa.",
    "Contribución al desarrollo regional.",
    "Ética y compromiso social.",
    "Respeto a la diversidad cultural.",
  ];

  const visionBullets = [
    "Liderazgo en formación docente.",
    "Excelencia académica e investigación.",
    "Impacto social positivo.",
    "Promoción de la interculturalidad e inclusión.",
    "Adaptación a desafíos globales.",
  ];

  return (
    <Box sx={{ bgcolor: "#f4f7fb", overflow: "hidden" }}>
      {/* 1. PORTADA HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "55vh", md: "65vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-down">
            <Typography
              variant="overline"
              sx={{
                color: "#007BFF",
                fontWeight: 900,
                letterSpacing: 3,
                fontSize: "1.2rem",
              }}
            >
              NUESTRA IDENTIDAD
            </Typography>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: { xs: "3.5rem", md: "5.5rem" },
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Misión, Visión <br /> y Valores
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#F0F2F5",
                maxWidth: "650px",
                fontWeight: 400,
                borderLeft: "4px solid #007BFF",
                pl: 3,
              }}
            >
              Conoce el propósito que nos impulsa, hacia dónde nos dirigimos y
              los pilares que sostienen nuestra excelencia educativa.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. SECCIÓN MISIÓN */}
      <Container
        maxWidth="lg"
        sx={{ mt: 8, position: "relative", zIndex: 3, pb: 10 }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "#ffffff",
                borderTop: "8px solid #007BFF",
                borderRadius: "24px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}
              >
                <FlagCircleIcon sx={{ fontSize: 50, color: "#007BFF" }} />
                <Typography
                  variant="h3"
                  fontWeight="900"
                  color="#003366"
                  textTransform="uppercase"
                >
                  Nuestra Misión
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="#333333"
                lineHeight={1.8}
                mb={2}
                textAlign="justify"
              >
                Somos una Institución de Educación Superior especializada en la
                Formación Inicial Docente, enfocada en los programas de
                Educación Inicial y Educación Física. Nuestra misión se centra
                en atender a estudiantes con vocación docente, tanto a nivel
                local, regional como nacional.
              </Typography>
              <Typography
                variant="body1"
                color="#333333"
                lineHeight={1.8}
                textAlign="justify"
              >
                Destacamos por cultivar el pensamiento crítico y reflexivo,
                integrando de manera equilibrada la investigación y la
                innovación con prácticas preprofesionales en contextos reales.
                Nos dedicamos a abordar los diversos desafíos educativos con un
                enfoque comprometido y orientado a la excelencia.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {misionBullets.map((item, index) => (
                <Box
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 150}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    bgcolor: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0, 51, 102, 0.05)",
                    transition: "transform 0.3s",
                    borderLeft: "4px solid transparent",
                    "&:hover": {
                      transform: "translateX(10px)",
                      borderLeft: "4px solid #0056B3",
                    },
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#007BFF", fontSize: 28 }} />
                  <Typography variant="h6" fontWeight="700" color="#003366">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 3. SECCIÓN VISIÓN (Invertido y Oscuro) */}
      <Box sx={{ bgcolor: "#003366", py: 12, position: "relative" }}>
        {/* Adornos de fondo */}
        <Box
          sx={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 300,
            height: 300,
            bgcolor: "rgba(0, 123, 255, 0.1)",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -50,
            left: -50,
            width: 300,
            height: 300,
            bgcolor: "rgba(0, 86, 179, 0.2)",
            borderRadius: "50%",
            filter: "blur(50px)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid
            container
            spacing={6}
            alignItems="center"
            direction={{ xs: "column-reverse", md: "row" }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {visionBullets.map((item, index) => (
                  <Box
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 150}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 3,
                      bgcolor: "rgba(156, 53, 53, 0.05)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.93)",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "translateX(-10px)",
                        bgcolor: "rgba(0, 123, 255, 0.2)",
                        borderColor: "#007BFF",
                      },
                    }}
                  >
                    <CheckCircleIcon sx={{ color: "#F0F2F5", fontSize: 28 }} />
                    <Typography variant="h6" fontWeight="700" color="#ffffff">
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, md: 6 },
                  bgcolor: "#0056B3",
                  color: "#ffffff",
                  borderTop: "8px solid #F0F2F5",
                  borderRadius: "24px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}
                >
                  <VisibilityIcon sx={{ fontSize: 50, color: "#F0F2F5" }} />
                  <Typography
                    variant="h3"
                    fontWeight="900"
                    color="#ffffff"
                    textTransform="uppercase"
                  >
                    Nuestra Visión
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  color="rgba(255,255,255,0.9)"
                  lineHeight={1.8}
                  mb={2}
                  textAlign="justify"
                >
                  Para el año 2027, aspiramos a convertirnos en una destacada
                  Escuela de Educación Superior Pedagógica, reconocida por su
                  excelencia en la formación inicial de docentes y docentes de
                  formación continua. Nuestra institución se distingue por su
                  infraestructura moderna que valora el medio ambiente, acorde a
                  la tecnología y comunicación, con un servicio de calidad de
                  programas de bachillerato, licenciamiento y de especialización
                  y egresados altamente creativos e innovadores.
                </Typography>
                <Typography
                  variant="body1"
                  color="rgba(255,255,255,0.9)"
                  lineHeight={1.8}
                  textAlign="justify"
                >
                  Estos profesionales poseen competencias docentes sólidas
                  respaldadas por una conducta ética ejemplar, un pensamiento
                  crítico y reflexivo, así como una actitud investigativa.
                  Nuestra práctica profesional se enfoca en el desarrollo
                  integral del estudiante y de los docentes en servicio para
                  contribuir de manera significativa al desarrollo sostenible de
                  la región y del país.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. SECCIÓN VALORES*/}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box data-aos="zoom-in" sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#007BFF", fontWeight: 900, letterSpacing: 2 }}
          >
            NUESTROS PILARES
          </Typography>
          <Typography
            variant="h2"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
          >
            Valores Institucionales
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {valores.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  p: 5,
                  height: "100%",
                  bgcolor: "#ffffff",
                  borderRadius: "24px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  border: "1px solid rgba(0, 123, 255, 0.1)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  zIndex: 1,
                  "&:hover": {
                    transform: "translateY(-12px)",
                    bgcolor: "#003366",
                    boxShadow: "0 25px 50px rgba(0, 51, 102, 0.3)",
                    borderColor: "transparent",
                  },
                  // Animaciones hijas inicializadas por el hover del padre
                  "&:hover .value-icon": {
                    color: "#007BFF",
                    transform: "scale(1.15) translateY(-5px)",
                  },
                  "&:hover .value-title": { color: "#ffffff" },
                  "&:hover .value-desc": { color: "#F0F2F5" },
                  "&:hover .bg-watermark": {
                    opacity: 0.08,
                    transform: "scale(1) rotate(-15deg)",
                  },
                  "&:hover .accent-line": {
                    width: "60px",
                    bgcolor: "#007BFF",
                  },
                }}
              >
                {/* Ícono gigante translúcido de fondo (Marca de agua) */}
                <Box
                  className="bg-watermark"
                  sx={{
                    position: "absolute",
                    bottom: -30,
                    right: -30,
                    opacity: 0,
                    color: "#ffffff",
                    transform: "scale(0.5) rotate(0deg)",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: -1,
                    fontSize: 180,
                    display: "flex",
                  }}
                >
                  {item.icon}
                </Box>

                {/* Contenido Superior (Ícono + Título) */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Box
                    className="value-icon"
                    sx={{
                      color: "#0056B3",
                      fontSize: 40,
                      transition: "all 0.4s ease",
                      display: "flex",
                      mr: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    className="value-title"
                    variant="h5"
                    fontWeight="900"
                    color="#003366"
                    sx={{ transition: "color 0.4s ease", m: 0 }}
                  >
                    {item.title}
                  </Typography>
                </Box>

                {/* Línea de acento animada */}
                <Box
                  className="accent-line"
                  sx={{
                    height: "4px",
                    width: "25px",
                    bgcolor: "#0056B3",
                    mb: 3,
                    borderRadius: "2px",
                    transition: "all 0.4s ease",
                  }}
                />

                {/* Descripción */}
                <Typography
                  className="value-desc"
                  variant="body1"
                  color="#333333"
                  lineHeight={1.7}
                  sx={{ transition: "color 0.4s ease", fontWeight: 500 }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
