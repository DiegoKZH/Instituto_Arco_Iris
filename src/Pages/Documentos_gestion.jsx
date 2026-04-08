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
  IconButton,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export default function DocumentosGestion() {
  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const documentosEstrategicos = [
    "Proyecto Educativo Institucional (PEI)",
    "Proyecto Curricular Institucional (PCI)",
    "Plan Anual de Trabajo (PAT)",
    "Reglamento Institucional (RI)",
    "Manual de Procesos Institucionales (MPI)",
    "Cuadro de Asignación de Personal (CAP)",
  ];

  const reglamentos = [
    "Reglamento Institucional General",
    "Reglamento de Investigación",
  ];

  return (
    <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh", pb: 12 }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          bgcolor: "#003366",
          pt: { xs: 15, md: 18 },
          pb: { xs: 12, md: 16 },
          position: "relative",
          overflow: "hidden",
          borderRadius: "0 0 50px 50px",
        }}
      >
        {/* Patrón de fondo */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <Container
          maxWidth="md"
          sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <FolderCopyIcon
            sx={{ fontSize: 60, color: "#007BFF", mb: 2 }}
            data-aos="zoom-in"
          />
          <Typography
            variant="h1"
            data-aos="fade-up"
            fontWeight={900}
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: { xs: "2.5rem", md: "4rem" },
              mb: 3,
            }}
          >
            Documentos de Gestión
          </Typography>
          <Typography
            variant="h6"
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{
              color: "#e2e8f0",
              fontWeight: 400,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Accede a la documentación oficial que rige el funcionamiento, la
            planificación y la estructura de nuestra institución.
          </Typography>
        </Container>
      </Box>

      {/* CONTENIDO PRINCIPAL */}
      <Container maxWidth="lg" sx={{ mt: -8, position: "relative", zIndex: 2 }}>
        <Grid container spacing={4}>
          {/* Documentos de Gestión */}
          <Grid item xs={12} md={7} data-aos="fade-right" data-aos-delay="200">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: "30px",
                height: "100%",
                border: "1px solid rgba(0, 123, 255, 0.1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
              }}
            >
              <Typography variant="h4" fontWeight={900} color="#003366" mb={2}>
                Documentos de Gestión
              </Typography>
              <Typography variant="body1" color="#555" mb={4} lineHeight={1.6}>
                Estos documentos son fundamentales para la planificación,
                organización, dirección y control de las actividades académicas
                y administrativas del instituto.
              </Typography>

              <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {documentosEstrategicos.map((doc, idx) => (
                  <Paper
                    key={idx}
                    elevation={0}
                    sx={{
                      p: 2,
                      bgcolor: "#F4F7F9",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      border: "1px solid transparent",
                      "&:hover": {
                        bgcolor: "#ffffff",
                        borderColor: "#007BFF",
                        boxShadow: "0 10px 20px rgba(0, 123, 255, 0.1)",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          p: 1,
                          bgcolor: "rgba(0, 123, 255, 0.1)",
                          color: "#007BFF",
                          borderRadius: "10px",
                          display: "flex",
                        }}
                      >
                        <InsertDriveFileRoundedIcon />
                      </Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        color="#333"
                      >
                        {doc}
                      </Typography>
                    </Box>
                    <IconButton
                      sx={{
                        color: "#007BFF",
                        "&:hover": { bgcolor: "rgba(0, 123, 255, 0.1)" },
                      }}
                    >
                      <DownloadRoundedIcon />
                    </IconButton>
                  </Paper>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Reglamentos Institucionales */}
          <Grid item xs={12} md={5} data-aos="fade-left" data-aos-delay="300">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: "30px",
                height: "100%",
                bgcolor: "#003366",
                color: "#fff",
                boxShadow: "0 20px 40px rgba(0, 51, 102, 0.2)",
              }}
            >
              <GavelRoundedIcon
                sx={{ fontSize: 50, color: "#007BFF", mb: 3 }}
              />
              <Typography variant="h4" fontWeight={900} color="#fff" mb={2}>
                Reglamentos Institucionales
              </Typography>
              <Typography
                variant="body1"
                color="rgba(255,255,255,0.8)"
                mb={4}
                lineHeight={1.6}
              >
                Nuestros reglamentos establecen las normas y procedimientos que
                aseguran un ambiente educativo ordenado y justo para toda la
                comunidad.
              </Typography>

              <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {reglamentos.map((reg, idx) => (
                  <Paper
                    key={idx}
                    elevation={0}
                    sx={{
                      p: 2,
                      bgcolor: "rgba(255,255,255,0.05)",
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(255,255,255,0.1)",
                      "&:hover": {
                        bgcolor: "rgba(0, 123, 255, 0.2)",
                        borderColor: "#007BFF",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <InsertDriveFileRoundedIcon sx={{ color: "#007BFF" }} />
                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        color="#fff"
                      >
                        {reg}
                      </Typography>
                    </Box>
                    <IconButton
                      sx={{
                        color: "#fff",
                        "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
                      }}
                    >
                      <DownloadRoundedIcon />
                    </IconButton>
                  </Paper>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
