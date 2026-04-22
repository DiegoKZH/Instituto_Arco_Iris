import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Dialog,
  DialogContent,
  IconButton,
  Divider,
  useScrollTrigger,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// Íconos para Campo Laboral
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SportsRoundedIcon from "@mui/icons-material/SportsRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";

// Animaciones
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.2 } } };

export default function Fisica() {
  const [openPdf, setOpenPdf] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  // Array de Campo Laboral
  const laborales = [
    {
      text: "Docente de Educación Física en colegios (públicos y privados).",
      icon: <SchoolRoundedIcon fontSize="large" />,
    },
    {
      text: "Entrenador(a) deportivo en academias y clubes.",
      icon: <SportsRoundedIcon fontSize="large" />,
    },
    {
      text: "Coordinador(a) de programas de actividades recreativas y deportivas.",
      icon: <EventRoundedIcon fontSize="large" />,
    },
    {
      text: "Promotor(a) de salud y bienestar físico.",
      icon: <FavoriteRoundedIcon fontSize="large" />,
    },
    {
      text: "Gestor(a) de proyectos de instalaciones deportivas.",
      icon: <EngineeringRoundedIcon fontSize="large" />,
    },
    {
      text: "Investigador(a) en ciencias del deporte y la actividad física.",
      icon: <ScienceRoundedIcon fontSize="large" />,
    },
  ];
  const handleWhatsAppClick = () => {
    const numero = "51986249212";
    const mensaje =
      "Hola buenos días, ¡Quiero postular para Educación Física¡ 💪";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden" }}>
      {/* 1. PORTADA CON CORTE DIAGONAL */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "70vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          bgcolor: "#003366",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1661721911673-b49c107d547e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2FjaSVDMyVCM24lMjBmJUMzJUFEc2ljYXxlbnwwfHwwfHx8MA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Typography
              variant="overline"
              sx={{
                color: "#007BFF",
                fontWeight: 900,
                letterSpacing: 3,
                fontSize: "1.2rem",
              }}
            >
              PROGRAMA PROFESIONAL
            </Typography>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: { xs: "3.5rem", md: "6rem" },
                lineHeight: 1,
                mb: 2,
                textShadow: "4px 4px 0px rgba(0, 123, 255, 0.5)",
              }}
            >
              Educación <br /> Física
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
              Formando docentes que inspiran el movimiento, la salud y el
              desarrollo integral a través del deporte.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* 2. PROGRAMA Y METODOLOGÍA (Tarjetas desplazadas) */}
      <Container
        maxWidth="lg"
        sx={{ mt: -10, position: "relative", zIndex: 3, pb: 10 }}
      >
        <Grid container spacing={4}>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Paper
              elevation={0}
              sx={{
                p: 5,
                bgcolor: "#ffffff",
                borderTop: "6px solid #007BFF",
                borderRadius: 0,
                height: "100%",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="900"
                color="#003366"
                mb={3}
                textTransform="uppercase"
              >
                El Programa
              </Typography>
              <Typography variant="body1" color="#333333" lineHeight={1.8}>
                Nuestro programa está diseñado para formar profesionales
                altamente capacitados en la enseñanza de la educación física,
                promoviendo estilos de vida activos y saludables en todas las
                etapas educativas.
              </Typography>
            </Paper>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Paper
              elevation={0}
              sx={{
                p: 5,
                bgcolor: "#003366",
                color: "#ffffff",
                borderTop: "6px solid #0056B3",
                borderRadius: 0,
                height: "100%",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="900"
                mb={3}
                textTransform="uppercase"
              >
                Enfoque y Metodología
              </Typography>
              <Typography variant="body1" color="#F0F2F5" lineHeight={1.8}>
                Nos enfocamos en la didáctica del movimiento, desarrollo de
                habilidades motrices y gestión deportiva. Integramos las últimas
                tendencias en entrenamiento deportivo, nutrición y psicología
                del deporte.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* 3. COMPETENCIAS CON IMAGEN (Diseño Asimétrico) */}
      <Box sx={{ bgcolor: "#F0F2F5", py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid
              size={{ xs: 12, md: 6 }}
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    inset: -20,
                    border: "4px solid #007BFF",
                    transform: "translate(20px, 20px)",
                    zIndex: 0,
                  }}
                />
                <Box
                  component="img"
                  src="https://arcoiris.edu.pe/assets/Img/Fotos%20Estudiantes/est-07.jpg"
                  sx={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    position: "relative",
                    zIndex: 1,
                    filter: "grayscale(20%) contrast(1.2)",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, md: 6 }}
              component={motion.div}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                fontWeight="900"
                color="#003366"
                mb={4}
                textTransform="uppercase"
              >
                Competencias <br />
                <span style={{ color: "#007BFF" }}>Clave</span>
              </Typography>
              {[
                "Desarrollo de competencias en diversas disciplinas deportivas.",
                "Énfasis en la planificación y ejecución de clases dinámicas.",
                "Formación en gestión de proyectos deportivos y recreativos.",
                "Prácticas pre-profesionales en instituciones educativas.",
              ].map((item, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  variants={fadeUp}
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 3,
                    alignItems: "center",
                    p: 2,
                    bgcolor: "#ffffff",
                    borderLeft: "4px solid #003366",
                  }}
                >
                  <FitnessCenterIcon sx={{ color: "#007BFF" }} />
                  <Typography variant="body1" fontWeight="600" color="#333333">
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
          bgcolor: "#003366",
          py: 12,
          color: "#ffffff",
          backgroundImage:
            "radial-gradient(circle at 90% 10%, rgba(0, 123, 255, 0.15) 0%, transparent 50%)",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/128/3048/3048355.png"
            alt="icono E Física"
            sx={{
              width: { xs: 65, md: 85 },
              height: { xs: 65, md: 85 },
              filter: "brightness(0) invert(1)",
            }}
          />
          <Typography
            variant="h3"
            fontWeight="900"
            mb={3}
            textTransform="uppercase"
          >
            Malla Curricular
          </Typography>
          <Typography
            variant="body1"
            color="#F0F2F5"
            mb={6}
            fontSize="1.1rem"
            lineHeight={1.8}
          >
            Aborda áreas como anatomía, fisiología, didáctica, deportes e
            individuales, y gestión deportiva. Cumpliendo con los estándares del
            MINEDU.
          </Typography>

          <Grid container spacing={3} justifyContent="center" mb={6}>
            <Grid size={{ xs: 6, md: 4 }}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                }}
              >
                <Typography variant="h4" fontWeight="900" color="#007BFF">
                  5
                </Typography>
                <Typography variant="overline">Años de Duración</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                }}
              >
                <Typography variant="h4" fontWeight="900" color="#007BFF">
                  10
                </Typography>
                <Typography variant="overline">Semestres</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box
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
              startIcon={<PictureAsPdfIcon />}
              sx={{
                bgcolor: "#007BFF",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                "&:hover": { bgcolor: "#0056B3" },
              }}
            >
              Ver Malla Curricular
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<DownloadIcon />}
              sx={{
                color: "#ffffff",
                borderColor: "#ffffff",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                "&:hover": { borderColor: "#007BFF", color: "#007BFF" },
              }}
            >
              Descargar Plan (PDF)
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 5. CAMPO LABORAL*/}
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
                "url('https://images.unsplash.com/photo-1761258772213-49262ad73ec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGVkdWNhY2klQzMlQjNuJTIwZGVwb3J0ZXxlbnwwfHwwfHx8MA%3D%3D')",
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
                ¡TU VICTORIA COMIENZA AQUÍ!
              </Typography>
              <Button
                variant="contained"
                onClick={handleWhatsAppClick}
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
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            bgcolor: "#003366",
            color: "#ffffff",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Malla Curricular - Educación Física
          </Typography>
          <IconButton
            onClick={() => setOpenPdf(false)}
            sx={{ color: "#ffffff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0, height: "80vh", bgcolor: "#333333" }}>
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
