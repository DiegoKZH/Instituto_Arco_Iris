import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Divider,
  useScrollTrigger,
  Toolbar,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PaletteIcon from "@mui/icons-material/Palette";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

// Animaciones flotantes
const floatUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

export default function Inicial() {
  const [openPdf, setOpenPdf] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const laborales = [
    "Docente en nidos y jardines de infancia (públicos y privados).",
    "Coordinador(a) de programas de estimulación temprana.",
    "Asesor(a) pedagógico en centros educativos.",
    "Desarrollador(a) de materiales didácticos.",
    "Investigador(a) en el campo de la educación infantil.",
    "Gestor(a) de proyectos educativos comunitarios.",
  ];

  return (
    <Box
      sx={{
        bgcolor: "#F0F2F5",
        overflow: "hidden",
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {/* 1. PORTADA CON FORMAS ORGÁNICAS (Blobs) */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "75vh", md: "85vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#F0F2F5",
          borderRadius: "0 0 50% 50% / 0 0 15% 15%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            mixBlendMode: "multiply",
          }}
        />
        {/* Burbujas decorativas flotantes */}
        <Box
          component={motion.div}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          sx={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: 150,
            height: 150,
            bgcolor: "rgba(0, 123, 255, 0.4)",
            borderRadius: "50%",
            filter: "blur(30px)",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
        >
          <motion.div initial="hidden" animate="visible" variants={floatUp}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#fff",
                px: 3,
                py: 1,
                borderRadius: "50px",
                mb: 4,
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
              }}
            >
              <AutoAwesomeIcon sx={{ color: "#007BFF" }} />
              <Typography
                variant="overline"
                sx={{
                  color: "#0056B3",
                  fontWeight: 800,
                  letterSpacing: 1,
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
                color: "#003366",
                fontSize: { xs: "3.5rem", md: "5.5rem" },
                mb: 3,
                letterSpacing: "-2px",
              }}
            >
              Educación Inicial
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#333333",
                maxWidth: "700px",
                mx: "auto",
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              Formando líderes en la primera infancia, con un enfoque innovador,
              humanista y lleno de creatividad.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* 2. PROGRAMA Y METODOLOGÍA */}
      <Container
        maxWidth="lg"
        sx={{ mt: -8, position: "relative", zIndex: 3, pb: 10 }}
      >
        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            variants={floatUp}
          >
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "#fff",
                borderRadius: "40px",
                height: "100%",
                boxShadow: "0 25px 50px rgba(0, 86, 179, 0.1)",
                textAlign: "center",
              }}
            >
              <ChildCareIcon sx={{ fontSize: 60, color: "#007BFF", mb: 2 }} />
              <Typography variant="h4" fontWeight="800" color="#003366" mb={3}>
                El Programa
              </Typography>
              <Typography variant="body1" color="#333333" lineHeight={1.8}>
                Diseñado para formar profesionales altamente capacitados en el
                desarrollo integral de niños de 0 a 5 años, preparándolos para
                los desafíos de la educación del siglo XXI.
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            component={motion.div}
            variants={floatUp}
          >
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "#0056B3",
                color: "#fff",
                borderRadius: "40px",
                height: "100%",
                boxShadow: "0 25px 50px rgba(0, 86, 179, 0.2)",
                textAlign: "center",
              }}
            >
              <PaletteIcon sx={{ fontSize: 60, color: "#F0F2F5", mb: 2 }} />
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
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid
              size={{ xs: 12, md: 5 }}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="https://arcoiris.edu.pe/assets/Img/Fotos%20Estudiantes/est-11.jpg"
                sx={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                  borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                  boxShadow: "20px 20px 0px rgba(0, 123, 255, 0.3)",
                }}
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 7 }}
              component={motion.div}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
                  component={motion.div}
                  variants={floatUp}
                  sx={{
                    display: "flex",
                    gap: 2.5,
                    mb: 4,
                    alignItems: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#007BFF",
                      color: "#fff",
                      p: 1,
                      borderRadius: "50%",
                      display: "flex",
                    }}
                  >
                    <AutoAwesomeIcon fontSize="small" />
                  </Box>
                  <Typography
                    variant="body1"
                    fontSize="1.1rem"
                    color="#333333"
                    mt={0.5}
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
          <MenuBookIcon sx={{ fontSize: 50, color: "#003366", mb: 2 }} />
          <Typography variant="h3" fontWeight="900" color="#003366" mb={3}>
            Malla Curricular
          </Typography>
          <Typography
            variant="body1"
            color="#333333"
            mb={6}
            fontSize="1.1rem"
            lineHeight={1.8}
          >
            Un plan de estudios completo, abarcando pedagogía, psicología,
            desarrollo infantil, arte y música. Alineado a los estándares del
            MINEDU.
          </Typography>

          <Box
            sx={{ display: "flex", gap: 4, justifyContent: "center", mb: 6 }}
          >
            <Box>
              <Typography variant="h3" fontWeight="900" color="#007BFF">
                5
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="#003366">
                Años
              </Typography>
            </Box>
            <Box sx={{ width: "2px", bgcolor: "rgba(0,0,0,0.1)" }} />
            <Box>
              <Typography variant="h3" fontWeight="900" color="#007BFF">
                10
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="#003366">
                Semestres
              </Typography>
            </Box>
            <Box sx={{ width: "2px", bgcolor: "rgba(0,0,0,0.1)" }} />
            <Box>
              <Typography variant="h3" fontWeight="900" color="#007BFF">
                100%
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="#003366">
                Presencial
              </Typography>
            </Box>
          </Box>

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
              startIcon={<VisibilityRoundedIcon />}
              sx={{
                bgcolor: "#0056B3",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                boxShadow: "0 10px 20px rgba(0, 86, 179, 0.3)",
                "&:hover": { bgcolor: "#003366" },
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
                "&:hover": {
                  borderColor: "#0056B3",
                  color: "#0056B3",
                  bgcolor: "rgba(0, 86, 179, 0.05)",
                },
              }}
            >
              Descargar PDF
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 5. CAMPO LABORAL Y CTA */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
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
                bgcolor: "rgba(0, 123, 255, 0.4)",
                zIndex: -1,
                borderRadius: "10px",
              }}
            />
          </span>
        </Typography>
        <Grid container spacing={3}>
          {laborales.map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              component={motion.div}
              variants={floatUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  p: 4,
                  bgcolor: "#fff",
                  borderRadius: "24px",
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0, 123, 255, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0, 86, 179, 0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#F0F2F5",
                    p: 2,
                    borderRadius: "50%",
                    mb: 3,
                    color: "#007BFF",
                  }}
                >
                  <ChildCareIcon fontSize="large" />
                </Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="700"
                  color="#333333"
                  lineHeight={1.4}
                >
                  {item}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box
          sx={{
            mt: 12,
            p: { xs: 6, md: 8 },
            bgcolor: "#0056B3",
            borderRadius: "40px",
            textAlign: "center",
            boxShadow: "0 20px 40px rgba(0, 86, 179, 0.3)",
          }}
        >
          <Typography variant="h3" fontWeight="900" color="#fff" mb={3}>
            ¡Forma parte de su primer gran paso!
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#003366",
              color: "#fff",
              px: 6,
              py: 2,
              fontSize: "1.2rem",
              fontWeight: "bold",
              borderRadius: "30px",
              boxShadow: "none",
              "&:hover": { bgcolor: "#007BFF" },
            }}
          >
            ¡Inscríbete Ahora!
          </Button>
        </Box>
      </Container>

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
            sx={{ color: "#333333", bgcolor: "#fff" }}
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
