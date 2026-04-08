import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import BiotechIcon from "@mui/icons-material/Biotech";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";

export default function UnidadInvestigacion() {
  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const objetivos = [
    "Establecer los lineamientos y procedimientos para la ejecución de proyectos de investigación.",
    "Promover la cultura de investigación entre docentes y estudiantes.",
    "Regular la difusión y publicación de los resultados de investigación.",
    "Garantizar la calidad y pertinencia de los trabajos de investigación.",
  ];

  const documentos = [
    "Documentos para el Desarrollo de la Investigacion e Innovacion Institucional",
    "Reglamento de Investigación 2023-2027",
    "Guía de Tesis y Proyectos de Investigación",
  ];

  const publicaciones = [
    "Líneas de Investigación: Programa de Educación Inicial",
    "Líneas de Investigación: Programa de Educación Física",
    "Esquema del proyecto de investigación",
    "Informe de Tesis",
  ];

  // Componente reutilizable para los botones de documentos
  const DocButton = ({ text }) => (
    <Button
      variant="outlined"
      fullWidth
      startIcon={<PictureAsPdfRoundedIcon sx={{ color: "#D32F2F" }} />}
      sx={{
        justifyContent: "flex-start",
        textAlign: "left",
        px: 3,
        py: 2,
        borderRadius: "16px",
        color: "#333",
        borderColor: "rgba(0, 123, 255, 0.2)",
        bgcolor: "#fff",
        textTransform: "none",
        fontWeight: 600,
        boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
        "&:hover": {
          bgcolor: "#F4F7F9",
          borderColor: "#007BFF",
          color: "#003366",
          transform: "translateY(-3px)",
          boxShadow: "0 10px 20px rgba(0, 123, 255, 0.1)",
        },
        transition: "all 0.3s ease",
      }}
    >
      {text}
    </Button>
  );

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh", pb: 12 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#003366",
          pt: { xs: 15, md: 20 },
          pb: { xs: 10, md: 15 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            bgcolor: "rgba(0, 123, 255, 0.1)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              p: 2,
              bgcolor: "rgba(0, 123, 255, 0.15)",
              borderRadius: "20px",
              display: { xs: "none", sm: "block" },
            }}
            data-aos="fade-right"
          >
            <BiotechIcon sx={{ fontSize: 80, color: "#007BFF" }} />
          </Box>
          <Box data-aos="fade-left">
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, color: "#007BFF", fontWeight: 900 }}
            >
              DESARROLLO ACADÉMICO
            </Typography>
            <Typography
              variant="h1"
              fontWeight={900}
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              Unidad de Investigación e Innovación
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* INTRODUCCIÓN & OBJETIVOS */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 10 } }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Typography variant="h3" fontWeight={900} color="#003366" mb={3}>
              Introducción
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              fontSize="1.1rem"
              lineHeight={1.8}
              textAlign="justify"
            >
              De acuerdo con la misión del Instituto de Educación Superior
              Pedagógico Privado "Arco Iris" de Cusco, la Unidad de
              Investigación e Innovación tiene como propósito fundamental
              promover, organizar, ejecutar y difundir la investigación
              formativa, aplicada, e innovación que responda a las necesidades
              educativas de la región y del país.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: "#F4F7F9",
                borderRadius: "30px",
                borderLeft: "6px solid #007BFF",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <TrackChangesIcon sx={{ color: "#007BFF", fontSize: 35 }} />
                <Typography variant="h4" fontWeight={900} color="#003366">
                  Objetivos del Reglamento
                </Typography>
              </Box>
              <List sx={{ p: 0 }}>
                {objetivos.map((obj, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "#007BFF",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={obj}
                      primaryTypographyProps={{
                        color: "#444",
                        fontWeight: 500,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* REPOSITORIO DE DOCUMENTOS (BENTO BOX) */}
      <Box
        sx={{
          bgcolor: "#F8FAFC",
          py: 10,
          mt: 10,
          borderTop: "1px solid #eaeaea",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Documentos de la Unidad */}
            <Grid item xs={12} md={6} data-aos="zoom-in">
              <Box
                sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}
              >
                <ArticleRoundedIcon sx={{ fontSize: 40, color: "#003366" }} />
                <Box>
                  <Typography variant="h4" fontWeight={900} color="#003366">
                    Documentos de la Unidad
                  </Typography>
                  <Typography variant="body2" color="#666">
                    Accede a los documentos normativos más importantes.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {documentos.map((doc, idx) => (
                  <DocButton key={idx} text={doc} />
                ))}
              </Box>
            </Grid>

            {/* Publicaciones y Recursos */}
            <Grid item xs={12} md={6} data-aos="zoom-in" data-aos-delay="200">
              <Box
                sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}
              >
                <LibraryBooksRoundedIcon
                  sx={{ fontSize: 40, color: "#007BFF" }}
                />
                <Box>
                  <Typography variant="h4" fontWeight={900} color="#003366">
                    Publicaciones y Recursos
                  </Typography>
                  <Typography variant="body2" color="#666">
                    Material esencial para el desarrollo de investigaciones.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {publicaciones.map((pub, idx) => (
                  <DocButton key={idx} text={pub} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
