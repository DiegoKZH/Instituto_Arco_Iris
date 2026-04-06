import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos Principales
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PaletteIcon from "@mui/icons-material/Palette";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

// Íconos para Campo Laboral
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import CastForEducationRoundedIcon from "@mui/icons-material/CastForEducationRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import BiotechRoundedIcon from "@mui/icons-material/BiotechRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";

export default function Inicial() {
  const [openPdf, setOpenPdf] = useState(false);

  // Array de Campo Laboral rediseñado con íconos específicos
  const laborales = [
    {
      text: "Docente en nidos y jardines de infancia (públicos y privados).",
      icon: <SchoolRoundedIcon fontSize="large" />,
    },
    {
      text: "Coordinador(a) de programas de estimulación temprana.",
      icon: <ExtensionRoundedIcon fontSize="large" />,
    },
    {
      text: "Asesor(a) pedagógico en centros educativos.",
      icon: <CastForEducationRoundedIcon fontSize="large" />,
    },
    {
      text: "Desarrollador(a) de materiales didácticos.",
      icon: <DashboardCustomizeRoundedIcon fontSize="large" />,
    },
    {
      text: "Investigador(a) en el campo de la educación infantil.",
      icon: <BiotechRoundedIcon fontSize="large" />,
    },
    {
      text: "Gestor(a) de proyectos educativos comunitarios.",
      icon: <Diversity3RoundedIcon fontSize="large" />,
    },
  ];

  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    // Inicializar AOS
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Configuración de partículas elegantes (Framer Motion)
  const particles = [
    { size: 8, top: "20%", left: "15%", duration: 6, delay: 0 },
    { size: 12, top: "60%", left: "80%", duration: 8, delay: 1 },
    { size: 6, top: "80%", left: "30%", duration: 5, delay: 2 },
    { size: 10, top: "30%", left: "75%", duration: 7, delay: 0.5 },
    { size: 15, top: "50%", left: "45%", duration: 9, delay: 1.5 },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#F0F2F5",
        overflow: "hidden",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* 1. PORTADA CON FILTRO OSCURECEDOR Y PARTÍCULAS */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "75vh", md: "85vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366", // Color de fondo base en caso de que tarde la imagen
          borderRadius: "0 0 50% 50% / 0 0 10% 10%",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
        }}
      >
        {/* Imagen de Fondo */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Filtro Oscurecedor Elegante (Gradiente) */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0, 51, 102, 0.85) 0%, rgba(0, 123, 255, 0.4) 100%)",
            zIndex: 1,
          }}
        />

        {/* Sistema de Partículas Minimalistas (Framer Motion) */}
        {particles.map((p, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              bgcolor: "#ffffff",
              borderRadius: "50%",
              filter: "blur(1px)",
              zIndex: 2,
            }}
          />
        ))}

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 3, textAlign: "center" }}
        >
          <Box data-aos="fade-down">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                px: 3,
                py: 1,
                borderRadius: "50px",
                mb: 4,
              }}
            >
              <AutoAwesomeIcon sx={{ color: "#ffffff" }} />
              <Typography
                variant="overline"
                sx={{
                  color: "#ffffff",
                  fontWeight: 800,
                  letterSpacing: 2,
                  m: 0,
                }}
              >
                Primera Infancia
              </Typography>
            </Box>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                fontSize: { xs: "3.5rem", md: "5.5rem" },
                mb: 3,
                textTransform: "uppercase",
                letterSpacing: "-1px",
              }}
            >
              Educación Inicial
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#e2e8f0",
                maxWidth: "700px",
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.6,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Formando líderes en la primera infancia, con un enfoque innovador,
              humanista y lleno de creatividad.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. PROGRAMA Y METODOLOGÍA */}
      <Container
        maxWidth="lg"
        sx={{ mt: -8, position: "relative", zIndex: 4, pb: 10 }}
      >
        <Grid container spacing={4}>
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "#fff",
                borderRadius: "40px",
                height: "100%",
                boxShadow: "0 25px 50px rgba(0, 51, 102, 0.08)",
                textAlign: "center",
                border: "1px solid rgba(0,0,0,0.05)",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <ChildCareIcon sx={{ fontSize: 60, color: "#007BFF", mb: 2 }} />
              <Typography variant="h4" fontWeight="800" color="#003366" mb={3}>
                El Programa
              </Typography>
              <Typography variant="body1" color="#555" lineHeight={1.8}>
                Diseñado para formar profesionales altamente capacitados en el
                desarrollo integral de niños de 0 a 5 años, preparándolos para
                los desafíos de la educación del siglo XXI.
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "#007BFF",
                color: "#fff",
                borderRadius: "40px",
                height: "100%",
                boxShadow: "0 25px 50px rgba(0, 123, 255, 0.2)",
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <PaletteIcon sx={{ fontSize: 60, color: "#ffffff", mb: 2 }} />
              <Typography variant="h4" fontWeight="800" mb={3}>
                Enfoque Metodológico
              </Typography>
              <Typography
                variant="body1"
                color="rgba(255,255,255,0.9)"
                lineHeight={1.8}
              >
                Se centra en metodologías activas, promoviendo el aprendizaje a
                través del juego y la exploración. Integramos avances en
                neurociencia y psicología del desarrollo.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 3. COMPETENCIAS CON IMAGEN EN FORMA DE BLOB */}
      <Box sx={{ py: 10, bgcolor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }} data-aos="fade-right">
              <Box
                component="img"
                src="https://arcoiris.edu.pe/assets/Img/Fotos%20Estudiantes/est-11.jpg"
                sx={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                  boxShadow: "20px 20px 0px rgba(0, 123, 255, 0.15)",
                  transition: "all 0.5s ease",
                  "&:hover": {
                    borderRadius: "60% 40% 30% 70% / 50% 60% 50% 40%",
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }} data-aos="fade-left">
              <Typography variant="h3" fontWeight="900" color="#003366" mb={4}>
                Creciendo y{" "}
                <span style={{ color: "#007BFF" }}>Aprendiendo</span>
              </Typography>
              {[
                "Desarrollo de habilidades pedagógicas innovadoras.",
                "Énfasis en la estimulación temprana y el juego didáctico.",
                "Formación en gestión de aulas inclusivas y diversificadas.",
                "Prácticas pre-profesionales desde los primeros ciclos.",
              ].map((item, i) => (
                <Box
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  sx={{
                    display: "flex",
                    gap: 2.5,
                    mb: 3,
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "rgba(0, 123, 255, 0.1)",
                      color: "#007BFF",
                      p: 1.5,
                      borderRadius: "50%",
                      display: "flex",
                    }}
                  >
                    <AutoAwesomeIcon fontSize="small" />
                  </Box>
                  <Typography
                    variant="body1"
                    fontSize="1.1rem"
                    color="#444"
                    mt={0.8}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. PLAN DE ESTUDIOS */}
      <Box
        sx={{
          bgcolor: "#F0F2F5",
          py: 12,
          borderRadius: { xs: "0", md: "80px" },
          mx: { xs: 0, md: 4 },
          my: 6,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Box data-aos="zoom-in">
            <MenuBookIcon sx={{ fontSize: 60, color: "#003366", mb: 2 }} />
            <Typography variant="h3" fontWeight="900" color="#003366" mb={3}>
              Malla Curricular
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              mb={6}
              fontSize="1.1rem"
              lineHeight={1.8}
            >
              Un plan de estudios completo, abarcando pedagogía, psicología,
              desarrollo infantil, arte y música. Alineado a los estándares del
              MINEDU.
            </Typography>
          </Box>

          <Box
            data-aos="fade-up"
            sx={{ display: "flex", gap: 4, justifyContent: "center", mb: 8 }}
          >
            <Box>
              <Typography variant="h2" fontWeight="900" color="#007BFF">
                5
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="#003366">
                Años
              </Typography>
            </Box>
            <Box sx={{ width: "2px", bgcolor: "rgba(0,0,0,0.1)" }} />
            <Box>
              <Typography variant="h2" fontWeight="900" color="#007BFF">
                10
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="#003366">
                Semestres
              </Typography>
            </Box>
            <Box sx={{ width: "2px", bgcolor: "rgba(0,0,0,0.1)" }} />
            <Box>
              <Typography variant="h2" fontWeight="900" color="#007BFF">
                100%
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="#003366">
                Presencial
              </Typography>
            </Box>
          </Box>

          <Box
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenPdf(true)}
              startIcon={<VisibilityRoundedIcon />}
              sx={{
                bgcolor: "#007BFF",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)",
                "&:hover": { bgcolor: "#0056b3" },
              }}
            >
              Ver Malla Curricular
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<DownloadRoundedIcon />}
              sx={{
                color: "#003366",
                borderColor: "#003366",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "#007BFF",
                  color: "#007BFF",
                  bgcolor: "rgba(0, 123, 255, 0.05)",
                },
              }}
            >
              Descargar PDF
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 5. CAMPO LABORAL (REDISEÑADO: BENTO GRID Y WATERMARKS) */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 14 },
          bgcolor: "#F8FAFC",
          overflow: "hidden",
        }}
      >
        {/* Luces de fondo difuminadas para quitar el aspecto "plano y blanco" */}
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: 500,
            height: 500,
            bgcolor: "rgba(0, 123, 255, 0.05)",
            borderRadius: "50%",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-10%",
            right: "-5%",
            width: 600,
            height: 600,
            bgcolor: "rgba(0, 51, 102, 0.04)",
            borderRadius: "50%",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            data-aos="fade-down"
            variant="h3"
            fontWeight="900"
            textAlign="center"
            color="#003366"
            mb={8}
          >
            Campo{" "}
            <span style={{ color: "#007BFF", position: "relative" }}>
              Laboral
              <Box
                sx={{
                  position: "absolute",
                  bottom: 4,
                  left: 0,
                  width: "100%",
                  height: "30%",
                  bgcolor: "rgba(0, 123, 255, 0.2)",
                  zIndex: -1,
                  borderRadius: "10px",
                }}
              />
            </span>
          </Typography>

          <Grid container spacing={4}>
            {laborales.map((item, index) => {
              // Lógica BENTO GRID: Destacamos la tarjeta 1 y la 5
              const isHighlighted = index === 0 || index === 4;
              const bgCard = isHighlighted
                ? index === 0
                  ? "linear-gradient(135deg, #007BFF 0%, #0056b3 100%)"
                  : "linear-gradient(135deg, #003366 0%, #001f3f 100%)"
                : "#ffffff";
              const textColor = isHighlighted ? "#ffffff" : "#333333";
              const iconColor = isHighlighted ? "#ffffff" : "#007BFF";
              const iconBg = isHighlighted
                ? "rgba(255,255,255,0.15)"
                : "rgba(0, 123, 255, 0.08)";

              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      background: bgCard,
                      borderRadius: "24px",
                      height: "100%",
                      boxShadow: isHighlighted
                        ? "0 20px 40px rgba(0, 123, 255, 0.25)"
                        : "0 10px 30px rgba(0,0,0,0.04)",
                      border: isHighlighted
                        ? "none"
                        : "1px solid rgba(0, 123, 255, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      textAlign: "left",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: isHighlighted
                          ? "0 25px 50px rgba(0, 123, 255, 0.35)"
                          : "0 20px 40px rgba(0, 123, 255, 0.12)",
                        borderColor: isHighlighted ? "transparent" : "#007BFF",
                      },
                      "&:hover .laboral-icon": {
                        bgcolor: isHighlighted ? "#ffffff" : "#007BFF",
                        color: isHighlighted
                          ? index === 0
                            ? "#007BFF"
                            : "#003366"
                          : "#ffffff",
                        transform: "scale(1.1) rotate(5deg)",
                      },
                      "&:hover .watermark-icon": {
                        transform: "scale(1.1) rotate(-10deg)",
                        opacity: isHighlighted ? 0.2 : 0.06,
                      },
                    }}
                  >
                    {/* Marca de agua gigante de fondo (Rellena el espacio vacío) */}
                    <Box
                      className="watermark-icon"
                      sx={{
                        position: "absolute",
                        right: -20,
                        bottom: -20,
                        color: isHighlighted ? "#ffffff" : "#007BFF",
                        opacity: isHighlighted ? 0.08 : 0.03,
                        transition: "all 0.5s ease",
                        zIndex: 0,
                        "& > svg": { fontSize: 160 }, // Tamaño gigante
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Contenido Real */}
                    <Box
                      className="laboral-icon"
                      sx={{
                        bgcolor: iconBg,
                        p: 2,
                        borderRadius: "16px",
                        mb: 3,
                        color: iconColor,
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        zIndex: 1,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="800"
                      color={textColor}
                      lineHeight={1.5}
                      zIndex={1}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          {/* CTA FINAL INTEGRAD0 */}
          <Box
            data-aos="zoom-in"
            sx={{
              mt: 12,
              p: { xs: 6, md: 8 },
              bgcolor: "#007BFF",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              borderRadius: "40px",
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0, 51, 102, 0.25)",
              overflow: "hidden",
            }}
          >
            {/* Capa oscurecedora para el CTA */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(0, 51, 102, 0.85)",
                zIndex: 1,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography variant="h3" fontWeight="900" color="#fff" mb={3}>
                ¡Forma parte de su primer gran paso!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ffffff",
                  color: "#003366",
                  px: 6,
                  py: 2,
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#F0F2F5",
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
                  },
                }}
              >
                ¡Inscríbete Ahora!
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* MODAL PDF */}
      <Dialog
        open={openPdf}
        onClose={() => setOpenPdf(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: { borderRadius: "24px" } }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            bgcolor: "#F0F2F5",
          }}
        >
          <Typography variant="h6" fontWeight="bold" color="#003366">
            Malla Curricular - Educación Inicial
          </Typography>
          <IconButton
            onClick={() => setOpenPdf(false)}
            sx={{
              color: "#333",
              bgcolor: "#fff",
              "&:hover": { bgcolor: "#e0e0e0" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0, height: "80vh", bgcolor: "#e0e0e0" }}>
          <iframe
            src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="PDF Malla"
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
