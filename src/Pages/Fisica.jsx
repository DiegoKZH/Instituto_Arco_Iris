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
  useScrollTrigger,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import SportsRoundedIcon from "@mui/icons-material/SportsRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";

import imgCompetencias from "../assets/Imagenes/Fisica1.jpg";
import imgProyectos from "../assets/Imagenes/Fisica2.jpg";
import imgValores from "../assets/Imagenes/Fisica3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = { visible: { transition: { staggerChildren: 0.2 } } };

export default function Fisica() {
  const [openPdf, setOpenPdf] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const laboralesData = [
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

  const competenciasData = [
    "Desarrollo de competencias en diversas disciplinas deportivas.",
    "Énfasis en la planificación y ejecución de clases dinámicas.",
    "Formación en gestión de proyectos deportivos y recreativos.",
    "Prácticas pre-profesionales en instituciones educativas.",
  ];

  const proyectosData = [
    {
      title: "Proyectos Deportivos",
      desc: "Organización y ejecución de olimpiadas, campeonatos y actividades recreativas que fomentan el trabajo en equipo, la disciplina y el liderazgo en la comunidad educativa.",
      img: imgProyectos,
      reverse: false,
    },
    {
      title: "Compromiso Institucional",
      desc: "Nuestros estudiantes se forman con sólidos principios éticos, promoviendo la inclusión, el respeto y la salud integral como pilares fundamentales en su labor docente.",
      img: imgValores,
      reverse: true,
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
      <Box
        sx={{
          position: "relative",
          height: { xs: "85vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          clipPath: {
            xs: "polygon(0 0, 100% 0, 100% 95%, 0 100%)",
            md: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          },
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
                letterSpacing: { xs: 2, md: 3 },
                fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
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
                fontSize: "clamp(3.5rem, 10vw, 6rem)",
                lineHeight: 1.1,
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
                pl: { xs: 2, md: 3 },
                fontSize: "clamp(0.95rem, 2.5vw, 1.25rem)",
              }}
            >
              Formando docentes que inspiran el movimiento, la salud y el
              desarrollo integral a través del deporte.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: -8, md: -10 },
          position: "relative",
          zIndex: 3,
          pb: { xs: 6, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 3, md: 4 }}>
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
                p: { xs: 4, md: 5 },
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
                sx={{ fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)" }}
              >
                El Programa
              </Typography>
              <Typography
                variant="body1"
                color="#333333"
                lineHeight={1.8}
                sx={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
              >
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
                p: { xs: 4, md: 5 },
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
                sx={{ fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)" }}
              >
                Enfoque y Metodología
              </Typography>
              <Typography
                variant="body1"
                color="#F0F2F5"
                lineHeight={1.8}
                sx={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
              >
                Nos enfocamos en la didáctica del movimiento, desarrollo de
                habilidades motrices y gestión deportiva. Integramos las últimas
                tendencias en entrenamiento deportivo, nutrición y psicología
                del deporte.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "#F0F2F5", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
            <Grid
              size={{ xs: 12, md: 6 }}
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Box sx={{ position: "relative", px: { xs: 2, md: 0 } }}>
                <Box
                  sx={{
                    position: "absolute",
                    inset: { xs: -10, md: -20 },
                    border: {
                      xs: "3px solid #007BFF",
                      md: "4px solid #007BFF",
                    },
                    transform: {
                      xs: "translate(10px, 10px)",
                      md: "translate(20px, 20px)",
                    },
                    zIndex: 0,
                  }}
                />
                <Box
                  component="img"
                  src={imgCompetencias}
                  sx={{
                    width: "100%",
                    height: { xs: "280px", sm: "350px", md: "400px" },
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
                sx={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
              >
                Competencias <br />
                <span style={{ color: "#007BFF" }}>Clave</span>
              </Typography>
              {competenciasData.map((item, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  variants={fadeUp}
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: 3,
                    alignItems: "center",
                    p: { xs: 1.5, md: 2 },
                    bgcolor: "#ffffff",
                    borderLeft: "4px solid #003366",
                  }}
                >
                  <FitnessCenterIcon sx={{ color: "#007BFF" }} />
                  <Typography
                    variant="body1"
                    fontWeight="600"
                    color="#333333"
                    sx={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Typography
              variant="h3"
              fontWeight="900"
              color="#003366"
              textAlign="center"
              mb={{ xs: 6, md: 8 }}
              textTransform="uppercase"
              sx={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Proyectos e <span style={{ color: "#007BFF" }}>Identidad</span>
            </Typography>
          </motion.div>

          {proyectosData.map((item, index) => (
            <Grid
              key={index}
              container
              spacing={{ xs: 6, md: 8 }}
              alignItems="center"
              mb={index === proyectosData.length - 1 ? 0 : { xs: 8, md: 10 }}
              direction={{
                xs: "column-reverse",
                md: item.reverse ? "row-reverse" : "row",
              }}
            >
              <Grid
                size={{ xs: 12, md: 6 }}
                component={motion.div}
                initial={{ opacity: 0, x: item.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h4"
                  fontWeight="900"
                  color="#003366"
                  mb={3}
                  textTransform="uppercase"
                  sx={{
                    fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="#555"
                  lineHeight={1.8}
                  sx={{
                    fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {item.desc}
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, md: 6 }}
                component={motion.div}
                initial={{ opacity: 0, x: item.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ position: "relative", px: { xs: 2, md: 0 } }}>
                  <Box
                    sx={{
                      position: "absolute",
                      inset: { xs: -10, md: -15 },
                      border: {
                        xs: "3px solid #003366",
                        md: "4px solid #003366",
                      },
                      transform: item.reverse
                        ? {
                            xs: "translate(-10px, 10px)",
                            md: "translate(-15px, 15px)",
                          }
                        : {
                            xs: "translate(10px, 10px)",
                            md: "translate(15px, 15px)",
                          },
                      zIndex: 0,
                    }}
                  />
                  <Box
                    component="img"
                    src={item.img}
                    sx={{
                      width: "100%",
                      height: { xs: "280px", sm: "320px", md: "350px" },
                      objectFit: "cover",
                      position: "relative",
                      zIndex: 1,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: "#003366",
          py: { xs: 8, md: 12 },
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
              width: { xs: 55, md: 85 },
              height: { xs: 55, md: 85 },
              filter: "brightness(0) invert(1)",
              mb: { xs: 2, md: 0 },
            }}
          />
          <Typography
            variant="h3"
            fontWeight="900"
            mb={3}
            textTransform="uppercase"
            sx={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Malla Curricular
          </Typography>
          <Typography
            variant="body1"
            color="#F0F2F5"
            mb={{ xs: 4, md: 6 }}
            lineHeight={1.8}
            sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
          >
            Aborda áreas como anatomía, fisiología, didáctica, deportes e
            individuales, y gestión deportiva. Cumpliendo con los estándares del
            MINEDU.
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            justifyContent="center"
            mb={{ xs: 4, md: 6 }}
          >
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                sx={{
                  p: { xs: 2, md: 3 },
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="900"
                  color="#007BFF"
                  sx={{ fontSize: "clamp(1.5rem, 3vw, 2.125rem)" }}
                >
                  5
                </Typography>
                <Typography
                  variant="overline"
                  sx={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
                >
                  Años de Duración
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                sx={{
                  p: { xs: 2, md: 3 },
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="900"
                  color="#007BFF"
                  sx={{ fontSize: "clamp(1.5rem, 3vw, 2.125rem)" }}
                >
                  10
                </Typography>
                <Typography
                  variant="overline"
                  sx={{ fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)" }}
                >
                  Semestres
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, md: 3 },
              justifyContent: "center",
              flexDirection: { xs: "column", sm: "row" },
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
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                width: { xs: "100%", sm: "auto" },
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
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                width: { xs: "100%", sm: "auto" },
                "&:hover": { borderColor: "#007BFF", color: "#007BFF" },
              }}
            >
              Descargar Plan (PDF)
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          position: "relative",
          py: { xs: 8, md: 14 },
          bgcolor: "#F8FAFC",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: { xs: 300, md: 500 },
            height: { xs: 300, md: 500 },
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
            width: { xs: 400, md: 600 },
            height: { xs: 400, md: 600 },
            bgcolor: "rgba(0, 51, 102, 0.04)",
            borderRadius: "50%",
            filter: "blur(100px)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Typography
              variant="h3"
              fontWeight="900"
              textAlign="center"
              color="#003366"
              mb={{ xs: 6, md: 8 }}
              sx={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
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
          </motion.div>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {laboralesData.map((item, index) => {
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
                  component={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
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
                        "& > svg": { fontSize: 160 },
                      }}
                    >
                      {item.icon}
                    </Box>

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
                      sx={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{
              mt: { xs: 8, md: 12 },
              p: { xs: 4, md: 8 },
              bgcolor: "#007BFF",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1761258772213-49262ad73ec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGVkdWNhY2klQzMlQjNuJTIwZGVwb3J0ZXxlbnwwfHwwfHx8MA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              borderRadius: { xs: "30px", md: "40px" },
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0, 51, 102, 0.25)",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(0, 51, 102, 0.85)",
                zIndex: 1,
              }}
            />

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography
                variant="h3"
                fontWeight="900"
                color="#fff"
                mb={3}
                sx={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: 1.2 }}
              >
                ¡TU VICTORIA COMIENZA AQUÍ!
              </Typography>
              <Button
                variant="contained"
                onClick={handleWhatsAppClick}
                sx={{
                  bgcolor: "#ffffff",
                  color: "#003366",
                  px: { xs: 4, md: 6 },
                  py: { xs: 1.5, md: 2 },
                  width: { xs: "100%", sm: "auto" },
                  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#F0F2F5",
                    transform: { xs: "none", md: "translateY(-3px)" },
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

      <Dialog
        open={openPdf}
        onClose={() => setOpenPdf(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: { m: { xs: 2, md: 4 } } }}
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
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Malla Curricular - Educación Física
          </Typography>
          <IconButton
            onClick={() => setOpenPdf(false)}
            sx={{ color: "#ffffff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent
          sx={{ p: 0, height: { xs: "70vh", md: "80vh" }, bgcolor: "#333333" }}
        >
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
