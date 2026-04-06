import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos - Vida Estudiantil
import PaletteIcon from "@mui/icons-material/Palette";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EventIcon from "@mui/icons-material/Event";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import FestivalIcon from "@mui/icons-material/Festival";

// Íconos - Biblioteca
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import WeekendIcon from "@mui/icons-material/Weekend";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ComputerIcon from "@mui/icons-material/Computer";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Íconos - Bolsa de Trabajo
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import HandshakeIcon from "@mui/icons-material/Handshake";

// Íconos - Bienestar
import PsychologyIcon from "@mui/icons-material/Psychology";
import ExploreIcon from "@mui/icons-material/Explore";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Diversity1Icon from "@mui/icons-material/Diversity1";

export default function Estudiantes() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden" }}>
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
            // CAMBIO: Nueva imagen de banner con tonos más fríos
            backgroundImage:
              "url('https://images.unsplash.com/photo-1758270705140-4e39219d4bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHZpZGElMjBlc3R1ZGlhbnRpbHxlbnwwfHwwfHx8MA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-right">
            {/* CAMBIO: Color dorado eliminado, se usa azul claro/variación de #007BFF */}
            <Typography
              variant="overline"
              sx={{
                color: "#80bdff",
                fontWeight: 900,
                letterSpacing: 3,
                fontSize: "1.2rem",
              }}
            >
              COMUNIDAD ARCO IRIS
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
              Vida Estudiantil
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#F0F2F5",
                maxWidth: "600px",
                fontWeight: 400,
                borderLeft: "4px solid #007BFF",
                pl: 3,
              }}
            >
              Descubre todas las oportunidades y servicios que tenemos para ti
              como estudiante del Instituto Arco Iris.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* TÍTULO DE SECCIÓN GENERAL */}
      <Container maxWidth="lg" sx={{ pt: 10, pb: 4, textAlign: "center" }}>
        <Typography
          variant="h2"
          fontWeight="900"
          color="#003366"
          textTransform="uppercase"
          data-aos="zoom-in"
        >
          Servicios para Estudiantes
        </Typography>
        {/* CAMBIO: Color dorado eliminado, se usa azul claro #007BFF */}
        <Box
          sx={{ width: 80, height: 4, bgcolor: "#007BFF", mx: "auto", mt: 2 }}
          data-aos="fade-up"
        />
      </Container>

      {/* 2. VIDA ESTUDIANTIL (Imagen Izquierda, Texto Derecha) */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src="https://arcoiris.edu.pe/assets/Img/Fotos%20Estudiantes/est-16.jpg"
                alt="Estudiantes compartiendo"
                sx={{
                  width: "100%",
                  borderRadius: "24px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  objectFit: "cover",
                  height: "450px",
                }}
              />
              {/* Tarjeta flotante decorativa */}
              {/* CAMBIO: Color dorado eliminado, se usa azul oscuro institucional #003366 */}
              <Paper
                sx={{
                  position: "absolute",
                  bottom: -30,
                  right: -20,
                  p: 3,
                  borderRadius: "20px",
                  bgcolor: "#003366",
                  color: "#fff",
                  boxShadow: "0 10px 30px rgba(0, 51, 102, 0.3)",
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="900"
                  sx={{ color: "#ffffff" }}
                >
                  +50
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{ color: "#ffffff" }}
                >
                  Eventos Anuales
                </Typography>
              </Paper>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
            <Typography variant="h3" fontWeight="900" color="#003366" mb={2}>
              Vida Estudiantil
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              mb={3}
              fontSize="1.1rem"
              textAlign="justify"
            >
              Fomentamos un ambiente dinámico y participativo donde los
              estudiantes pueden desarrollar sus talentos y habilidades más allá
              del aula. Organizamos diversas actividades culturales, deportivas
              y recreativas a lo largo del año académico.
            </Typography>

            <List sx={{ mb: 4 }}>
              {[
                {
                  icon: <PaletteIcon />,
                  text: "Talleres de arte y cultura (danza, música, teatro).",
                },
                {
                  icon: <SportsSoccerIcon />,
                  text: "Clubes deportivos (fútbol, vóley, baloncesto).",
                },
                {
                  icon: <EventIcon />,
                  text: "Eventos académicos y conferencias.",
                },
                {
                  icon: <VolunteerActivismIcon />,
                  text: "Voluntariado y proyectos de impacto social.",
                },
                {
                  icon: <FestivalIcon />,
                  text: "Celebraciones y festividades institucionales.",
                },
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1 }}>
                  <ListItemIcon sx={{ minWidth: 40, color: "#007BFF" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ fontWeight: 500, color: "#333" }}
                  />
                </ListItem>
              ))}
            </List>

            <Chip
              label="¡Participa y vive una experiencia universitaria inolvidable!"
              sx={{
                bgcolor: "rgba(0, 123, 255, 0.1)",
                color: "#007BFF",
                fontWeight: "bold",
                px: 1,
                py: 2.5,
                fontSize: "0.95rem",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* 3. BIBLIOTECA (Texto Izquierda, Imagen Derecha, Forma Orgánica) */}
      <Box
        sx={{
          bgcolor: "#ffffff",
          py: 10,
          borderTop: "1px solid #eaeaea",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            alignItems="center"
            direction={{ xs: "column-reverse", md: "row" }}
          >
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
              <Typography variant="h3" fontWeight="900" color="#003366" mb={2}>
                Biblioteca
              </Typography>
              <Typography variant="body1" color="#555" mb={4} fontSize="1.1rem">
                Nuestra biblioteca es un espacio fundamental para el aprendizaje
                y la investigación, ofreciendo una amplia colección de recursos
                físicos y digitales.
              </Typography>

              <Grid container spacing={2} mb={4}>
                {[
                  {
                    icon: <AutoStoriesIcon />,
                    text: "Acceso a libros, revistas y tesis especializadas.",
                  },
                  {
                    icon: <WeekendIcon />,
                    text: "Salas de estudio individuales y grupales.",
                  },
                  {
                    icon: <ImportContactsIcon />,
                    text: "Préstamo de material bibliográfico.",
                  },
                  {
                    icon: <ComputerIcon />,
                    text: "Acceso a bases de datos y revistas (Biblioteca Virtual).",
                  },
                  {
                    icon: <LiveHelpIcon />,
                    text: "Asesoría en búsqueda de información y referencias.",
                  },
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      {/* CAMBIO: Color dorado eliminado, se usa azul institucional claro #007BFF */}
                      <Box sx={{ color: "#007BFF", mt: 0.5 }}>{item.icon}</Box>
                      <Typography variant="body2" color="#444" fontWeight="500">
                        {item.text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Caja de Horario */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: "rgba(0, 51, 102, 0.05)",
                  borderLeft: "4px solid #003366",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 35, color: "#003366" }} />
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="#666"
                    textTransform="uppercase"
                    fontWeight="bold"
                  >
                    Horario de atención
                  </Typography>
                  <Typography variant="h6" color="#003366" fontWeight="900">
                    Lunes a Viernes de 8:00 AM a 6:00 PM
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
              <Box
                component="img"
                src="https://arcoiris.edu.pe/assets/Img/Fotos%20Estudiantes/est-18.jpg"
                alt="Biblioteca Institucional"
                sx={{
                  width: "100%",
                  borderRadius: "40px 10px 40px 10px",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                  objectFit: "cover",
                  height: "500px",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. BOLSA DE TRABAJO (Bloque Oscuro Full-Width para romper la monotonía) */}
      <Box
        sx={{
          bgcolor: "#003366",
          py: 12,
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* Patrón de fondo sutil */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }} data-aos="zoom-in-right">
              <Box sx={{ position: "relative", p: 1 }}>
                <Box
                  component="img"
                  src="https://arcoiris.edu.pe/assets/Img/Fotos%20Estudiantes/est-09.jpg"
                  alt="Networking y Bolsa de Trabajo"
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    objectFit: "cover",
                    height: "400px",
                    border: "4px solid rgba(255,255,255,0.1)",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
              {/* CAMBIO: Color dorado eliminado, se usa azul institucional claro #007BFF */}
              <Typography
                variant="overline"
                color="#007BFF"
                fontWeight="bold"
                letterSpacing={2}
              >
                DESARROLLO PROFESIONAL
              </Typography>
              <Typography variant="h3" fontWeight="900" color="#ffffff" mb={2}>
                Bolsa de Trabajo
              </Typography>
              <Typography
                variant="body1"
                color="#a0aec0"
                mb={4}
                fontSize="1.1rem"
                textAlign="justify"
              >
                Apoyamos a nuestros estudiantes y egresados en su inserción
                laboral y desarrollo profesional, conectándolos con
                oportunidades en el sector educativo y afines.
              </Typography>

              <Grid container spacing={3} mb={5}>
                {[
                  {
                    icon: <WorkOutlineIcon />,
                    text: "Publicación de ofertas laborales exclusivas.",
                  },
                  {
                    icon: <DescriptionIcon />,
                    text: "Asesoría en elaboración de currículum vitae y entrevistas.",
                  },
                  {
                    icon: <ModelTrainingIcon />,
                    text: "Talleres de empleabilidad y desarrollo de habilidades blandas.",
                  },
                  {
                    icon: <HandshakeIcon />,
                    text: "Ferias laborales y networking con instituciones educativas.",
                  },
                ].map((item, idx) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                    {/* CAMBIO: Efecto hover de dorado a azul institucional claro */}
                    <Paper
                      sx={{
                        p: 2.5,
                        bgcolor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                        height: "100%",
                        "&:hover": {
                          bgcolor: "rgba(0, 123, 255, 0.1)",
                          borderColor: "#007BFF",
                        },
                      }}
                    >
                      {/* CAMBIO: Color dorado eliminado, se usa azul institucional claro #007BFF */}
                      <Box sx={{ color: "#007BFF" }}>{item.icon}</Box>
                      <Typography
                        variant="body2"
                        color="#e2e8f0"
                        fontWeight="500"
                      >
                        {item.text}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* CAMBIO: Color dorado eliminado, se usa azul institucional #007BFF, hover ajustado */}
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#007BFF",
                  color: "#fff",
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#0069d9" },
                }}
              >
                Regístrate en nuestra plataforma
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. BIENESTAR ESTUDIANTIL (Tarjetas Superpuestas) */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
            <Typography
              variant="overline"
              color="#007BFF"
              fontWeight="bold"
              letterSpacing={2}
            >
              TU SALUD ES PRIMERO
            </Typography>
            <Typography variant="h3" fontWeight="900" color="#003366" mb={2}>
              Bienestar Estudiantil
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              mb={4}
              fontSize="1.1rem"
              textAlign="justify"
            >
              El área de Bienestar Estudiantil se encarga de promover la salud
              física y mental, así como el desarrollo personal y social de
              nuestros estudiantes.
            </Typography>

            <List sx={{ mb: 4 }}>
              {[
                {
                  icon: <PsychologyIcon />,
                  text: "Atención psicopedagógica individual y grupal.",
                },
                {
                  icon: <ExploreIcon />,
                  text: "Orientación vocacional y profesional.",
                },
                {
                  icon: <LocalHospitalIcon />,
                  text: "Servicio de enfermería y primeros auxilios.",
                },
                {
                  icon: <FavoriteIcon />,
                  text: "Programas de prevención de salud y hábitos saludables.",
                },
                {
                  icon: <Diversity1Icon />,
                  text: "Apoyo en situaciones de vulnerabilidad social.",
                },
              ].map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    px: 0,
                    py: 1.5,
                    borderBottom: index !== 4 ? "1px dashed #ddd" : "none",
                  }}
                >
                  {/* CAMBIO: Color rojo eliminado, se usa azul institucional claro #007BFF */}
                  <ListItemIcon sx={{ minWidth: 40, color: "#007BFF" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ fontWeight: 500, color: "#333" }}
                  />
                </ListItem>
              ))}
            </List>

            <Button
              variant="outlined"
              sx={{
                color: "#003366",
                borderColor: "#003366",
                borderRadius: "20px",
                px: 3,
                fontWeight: "bold",
                "&:hover": { bgcolor: "rgba(0, 51, 102, 0.05)" },
              }}
            >
              Contáctanos para agendar cita
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} data-aos="zoom-in-left">
            <Box
              sx={{
                position: "relative",
                height: "550px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Círculo decorativo de fondo */}
              <Box
                sx={{
                  position: "absolute",
                  width: "80%",
                  height: "80%",
                  borderRadius: "50%",
                  bgcolor: "rgba(0, 123, 255, 0.05)",
                  zIndex: 0,
                }}
              />

              <Box
                component="img"
                src="https://arcoiris.edu.pe/assets/Img/Fotos%20Estudiantes/est-15.jpg"
                alt="Bienestar y Apoyo"
                sx={{
                  width: "85%",
                  height: "85%",
                  borderRadius: "100px 100px 20px 20px",
                  objectFit: "cover",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                  position: "relative",
                  zIndex: 1,
                }}
              />

              {/* Insignia Flotante */}
              <Paper
                sx={{
                  position: "absolute",
                  top: "15%",
                  left: 0,
                  p: 2,
                  borderRadius: "16px",
                  bgcolor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  zIndex: 2,
                }}
              >
                {/* CAMBIO: Color rojo/rosa eliminado, se usa azul institucional claro #007BFF y variación de fondo */}
                <Box
                  sx={{
                    bgcolor: "rgba(0, 123, 255, 0.1)",
                    p: 1,
                    borderRadius: "50%",
                    color: "#007BFF",
                    display: "flex",
                  }}
                >
                  <FavoriteIcon />
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="#333"
                  >
                    Apoyo Constante
                  </Typography>
                  <Typography variant="caption" color="#666">
                    Físico y Mental
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 6. CALL TO ACTION FINAL */}
      <Box sx={{ bgcolor: "#F0F2F5", pb: 10 }}>
        <Container maxWidth="md">
          <Paper
            data-aos="fade-up"
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: "24px",
              textAlign: "center",
              bgcolor: "#007BFF",
              color: "#fff",
              backgroundImage:
                "linear-gradient(135deg, #007BFF 0%, #003366 100%)",
              boxShadow: "0 20px 40px rgba(0, 123, 255, 0.3)",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="900"
              mb={2}
              sx={{ color: "#ffffff" }}
            >
              Tu éxito y bienestar son nuestra prioridad
            </Typography>
            <Typography
              variant="h6"
              fontWeight="400"
              sx={{ opacity: 0.9, color: "#ffffff" }}
            >
              ¡Aprovecha todos los servicios que el Instituto Arco Iris tiene
              para ti!
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}
