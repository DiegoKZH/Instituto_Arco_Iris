import React, { useState, useEffect } from "react";
import { useGlobalData } from "../routes/AppContext";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import QuizIcon from "@mui/icons-material/Quiz";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PublicIcon from "@mui/icons-material/Public";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`admision-tabpanel-${index}`}
      aria-labelledby={`admision-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: { xs: 2, md: 4 } }}>{children}</Box>}
    </div>
  );
}

export default function Admision() {
  const [tabValue, setTabValue] = useState(0);
  const { periodo } = useGlobalData();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "65vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-right">
            <Typography
              variant="overline"
              sx={{
                color: "#007BFF",
                fontWeight: 900,
                letterSpacing: { xs: 2, md: 3 },
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
              }}
            >
              ADMisións {periodo}
            </Typography>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Tu Futuro Docente <br /> Comienza Aquí
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#F0F2F5",
                maxWidth: "600px",
                fontWeight: 400,
                borderLeft: "4px solid #C59B27",
                pl: { xs: 2, md: 3 },
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
              }}
            >
              Descubre el camino para formarte como un educador de excelencia en
              el Instituto Arcoíris.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          data-aos="fade-up"
          sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}
        >
          <Typography
            variant="h2"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
            sx={{ fontSize: "clamp(1.8rem, 5vw, 3.75rem)" }}
          >
            Nuestro Sencillo Proceso de Admisión
          </Typography>
          <Typography
            variant="h6"
            color="#666"
            mt={2}
            sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Te guiamos paso a paso para que tu ingreso sea lo más fácil y
            transparente posible.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 4 }} position="relative">
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              top: "50%",
              left: "10%",
              right: "10%",
              height: "4px",
              bgcolor: "#003366",
              zIndex: 0,
              transform: "translateY(-50%)",
            }}
          />

          {[
            {
              step: "01",
              title: "Presentación de Requisitos",
              desc: "Adjunta toda la documentación solicitada de manera digital. Verifica la lista detallada para evitar inconvenientes.",
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3566/3566024.png"
                  alt="Requisitos"
                  style={{
                    width: 50,
                    height: 50,
                    filter: `brightness(0) saturate(100%) invert(25%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(95%)`,
                  }}
                />
              ),
            },
            {
              step: "02",
              title: "Evaluación de Postulantes",
              desc: "Participa en nuestra evaluación integral que mide tus conocimientos y habilidades básicas. Ofrecemos material de apoyo para tu preparación.",
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/10188/10188018.png"
                  alt="Evaluación"
                  style={{
                    width: 50,
                    height: 50,
                    filter: `brightness(0) saturate(100%) invert(25%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(95%)`,
                  }}
                />
              ),
            },
            {
              step: "03",
              title: "Resultados y Matrícula",
              desc: "Consulta los resultados en las fechas establecidas mediante nuestra página web. Si eres admitido, completa tu matrícula para formalizar tu ingreso.",
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/16859/16859033.png"
                  alt="Matrícula"
                  style={{
                    width: 55,
                    height: 55,
                    filter: `brightness(0) saturate(100%) invert(25%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(95%)`,
                  }}
                />
              ),
            },
          ].map((item, idx) => (
            <Grid
              size={{ xs: 12, md: 4 }}
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
              sx={{ position: "relative", zIndex: 1 }}
            >
              <Paper
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "24px",
                  textAlign: "center",
                  height: "100%",
                  borderTop: "8px solid #007BFF",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    border: "3px solid #026ee1",
                    bgcolor: "#ffffff",
                    color: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    boxShadow: "0 10px 20px rgba(0,51,102,0.3)",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="#003366"
                  mb={2}
                  sx={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
                >
                  {item.step}. {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="#555"
                  sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: "#ffffff",
          py: { xs: 6, md: 10 },
          borderTop: "1px solid #e0e0e0",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Container maxWidth="lg">
          <Box data-aos="fade-right" sx={{ mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              fontWeight="900"
              color="#003366"
              textTransform="uppercase"
              textAlign="center"
              sx={{ fontSize: "clamp(1.8rem, 5vw, 3.75rem)" }}
            >
              Modalidades Periodo {periodo}
            </Typography>
            <Typography
              variant="h6"
              color="#666"
              mt={1}
              textAlign="center"
              sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              Elige la modalidad que mejor se adapte a tu perfil y trayectoria
              académica.
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              borderRadius: "24px",
              border: "1px solid #eee",
              overflow: "hidden",
              display: { md: "flex" },
              minHeight: { md: "500px" },
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              orientation="vertical"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                minWidth: { xs: "100%", md: "320px" },
                bgcolor: "#f8f9fa",
                borderRight: { md: "1px solid #eee" },
                borderBottom: { xs: "1px solid #eee", md: "none" },
                "& .MuiTab-root": {
                  py: { xs: 2.5, md: 4 },
                  px: { xs: 3, md: 4 },
                  fontSize: "clamp(1rem, 2vw, 1.1rem)",
                  fontWeight: "bold",
                  color: "#0e3a8b",
                  justifyContent: "flex-start",
                  textAlign: "left",
                  minHeight: { xs: "60px", md: "80px" },
                  opacity: 1,
                },
                "& .Mui-selected": {
                  color: "#003366 !important",
                  bgcolor: "#fff",
                },
                "& .MuiTabs-indicator": {
                  left: 0,
                  width: { xs: "100%", md: "6px" },
                  height: { xs: "4px", md: "100%" },
                  top: { xs: "auto", md: 0 },
                  bottom: 0,
                  bgcolor: "#1d4e96",
                },
              }}
            >
              <Tab
                icon={
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3135/3135736.png"
                    alt="Exoneración"
                    style={{
                      width: 28,
                      height: 28,
                      filter: `brightness(0) saturate(100%) invert(25%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(95%)`,
                    }}
                  />
                }
                iconPosition="start"
                label="Por Exoneración"
              />
              <Tab
                icon={
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3626/3626788.png"
                    alt="Admision"
                    style={{
                      width: 28,
                      height: 28,
                      filter: `brightness(0) saturate(100%) invert(25%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(95%)`,
                    }}
                  />
                }
                iconPosition="start"
                label="Por Admisión"
              />
            </Tabs>

            <Box sx={{ flexGrow: 1, p: { xs: 3, md: 6 } }}>
              <CustomTabPanel value={tabValue} index={0}>
                <Grid container spacing={{ xs: 4, md: 6 }}>
                  <Grid size={{ xs: 12, md: 7 }} data-aos="fade-in">
                    <Typography
                      variant="body1"
                      paragraph
                      color="#444"
                      textAlign="justify"
                      sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                    >
                      Esta modalidad se realiza de manera anticipada a la
                      admisión ordinaria. Si no alcanzas vacante por esta vía,
                      podrás inscribirte en la modalidad ordinaria.
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: "rgba(117, 176, 242, 0.1)",
                        p: { xs: 2.5, md: 3 },
                        borderRadius: "16px",
                        mb: 4,
                        borderLeft: "4px solid #007bff",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#003366"
                        sx={{ fontSize: "clamp(0.95rem, 2vw, 1rem)" }}
                      >
                        Requisitos clave: Haber concluido la educación básica y
                        contar con DNI.
                      </Typography>
                      <Typography
                        variant="body2"
                        color="#292929"
                        textAlign="justify"
                        mt={1}
                        sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)" }}
                      >
                        Se reserva el 20% de las vacantes por programa de
                        estudios para esta modalidad. Los postulantes por
                        exoneración{" "}
                        <strong>
                          solo rinden la fase de Evaluación Diagnóstica
                          Vocacional.
                        </strong>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 5 }} data-aos="fade-left">
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="#003366"
                      mb={2}
                      sx={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}
                    >
                      ¿Quiénes pueden postular?
                    </Typography>
                    <List dense sx={{ "& .MuiListItem-root": { px: 0 } }}>
                      {[
                        "Egresados del Colegio Mayor Secundario Presidente del Perú o COAR.",
                        "Primer y segundo puesto de la Educación Básica (certificado).",
                        "Deportistas calificados (constancia IPD/Federación).",
                        "Artistas calificados que hayan representado al país o región.",
                        "Beneficiarios del Programa de Reparaciones (PIR) - Ley N° 28592.",
                        "Quienes se encuentren cumpliendo Servicio Militar.",
                      ].map((text, i) => (
                        <ListItem key={i}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={text}
                            primaryTypographyProps={{
                              sx: {
                                fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)",
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <Typography
                      variant="subtitle2"
                      color="#eb4040"
                      fontStyle="italic"
                      display="block"
                      textAlign="justify"
                      mt={2}
                      sx={{ fontSize: "clamp(0.8rem, 1.5vw, 0.875rem)" }}
                    >
                      *De no cubrirse el 20% asignado, el instituto dispone de
                      dichas vacantes para la modalidad ordinaria.
                    </Typography>
                  </Grid>
                </Grid>
              </CustomTabPanel>

              <CustomTabPanel value={tabValue} index={1}>
                <Grid container spacing={{ xs: 4, md: 6 }}>
                  <Grid size={{ xs: 12, md: 6 }} data-aos="fade-in">
                    <Typography
                      variant="body1"
                      paragraph
                      color="#444"
                      textAlign="justify"
                      sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                    >
                      Participan en esta modalidad todos los estudiantes que han
                      culminado la Educación Básica en cualquiera de sus
                      modalidades, acreditándolo con su certificado de estudios
                      y DNI (o carné de extranjería).
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#eb4040"
                      fontStyle="italic"
                      textAlign="justify"
                      paddingLeft="6px"
                      mb={3}
                      sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)" }}
                    >
                      *Si realizaste estudios secundarios en el extranjero,
                      deberás convalidar o revalidar tus estudios previamente
                      según la normativa.
                    </Typography>
                    <Box
                      sx={{
                        bgcolor: "rgba(0, 123, 255, 0.05)",
                        p: { xs: 2.5, md: 3 },
                        borderRadius: "16px",
                        borderLeft: "4px solid #007BFF",
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="#003366"
                        fontWeight="bold"
                        textAlign="justify"
                        sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                      >
                        Se reserva el 5% de las vacantes por programa de
                        estudios en la modalidad Ordinaria para postulantes con
                        discapacidad, con los ajustes razonables para la
                        atención en el proceso de admisión.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="#003366"
                      mb={3}
                      sx={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}
                    >
                      Fases del Proceso Ordinario:
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: { xs: 2.5, md: 3 },
                          bgcolor: "#f8f9fa",
                          border: "1px solid #e0e0e0",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          color="#003366"
                          mb={1}
                          sx={{ fontSize: "clamp(0.95rem, 2vw, 1rem)" }}
                        >
                          1. Prueba Escrita de Competencias
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#555"
                          sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)" }}
                        >
                          Evalúa competencias fundamentales para la Formación
                          Inicial Docente.
                        </Typography>
                      </Paper>
                      <Paper
                        elevation={0}
                        sx={{
                          p: { xs: 2.5, md: 3 },
                          bgcolor: "#f8f9fa",
                          border: "1px solid #e0e0e0",
                          borderRadius: "16px",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          color="#003366"
                          mb={1}
                          sx={{ fontSize: "clamp(0.95rem, 2vw, 1rem)" }}
                        >
                          2. Evaluación Diagnóstica Vocacional
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#555"
                          sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)" }}
                        >
                          A través de entrevista y dinámica grupal, se evalúan
                          capacidades de disposición y buen desempeño para el
                          ejercicio docente.
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </CustomTabPanel>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          data-aos="zoom-in"
          sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}
        >
          <Typography
            variant="h2"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
            sx={{ fontSize: "clamp(1.8rem, 5vw, 3.75rem)" }}
          >
            Documentos Necesarios para tu Postulación
          </Typography>
          <Typography
            variant="h6"
            color="#666"
            mt={2}
            sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Asegúrate de tener la siguiente documentación completa y
            digitalizada para tu proceso de admisión.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {[
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8509/8509159.png"
                  alt="DNI"
                  style={{
                    width: 45,
                    height: 45,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(100%) invert(20%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(75%)`,
                  }}
                />
              ),
              title: "Copia de DNI",
              desc: "Fotocopia a color y ampliada de tu Documento Nacional de Identidad.",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1021/1021129.png"
                  alt="Certificado"
                  style={{
                    width: 45,
                    height: 45,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(100%) invert(20%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(95%)`,
                  }}
                />
              ),
              title: "Certificado de Estudios",
              desc: "Certificado de Educación Secundaria (1° a 5° EBR o 1° a 4° EBA), electrónico emitido por SIAGIE, con código QR.",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5240/5240807.png"
                  alt="Partida Nacimiento"
                  style={{
                    width: 45,
                    height: 45,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(100%) invert(20%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(95%)`,
                  }}
                />
              ),
              title: "Partida de Nacimiento Original",
              desc: "Partida de Nacimiento original expedida por el registro civil.",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/7782/7782095.png"
                  alt="Foto Pasaporte"
                  style={{
                    width: 40,
                    height: 40,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(100%) invert(20%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(85%)`,
                  }}
                />
              ),
              title: "Fotos Tamaño Pasaporte",
              desc: "Dos (02) fotografías recientes tamaño pasaporte, a color, con fondo blanco y terno.",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/14034/14034867.png"
                  alt="Declaracion"
                  style={{
                    width: 45,
                    height: 45,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(10%) invert(20%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(75%)`,
                  }}
                />
              ),
              title: "Declaración Jurada",
              desc: "Declaración Jurada suscrita por el postulante (formato IESPP “AI”).",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5614/5614638.png"
                  alt="Recibo"
                  style={{
                    width: 45,
                    height: 45,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(100%) invert(20%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(105%) contrast(95%)`,
                  }}
                />
              ),
              title: "Recibo de Pago",
              desc: "Comprobante de pago por Derecho de Admisión (S/ 120.00).",
            },
          ].map((doc, idx) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <Paper
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "16px",
                  height: "100%",
                  display: "flex",
                  gap: { xs: 1.5, md: 2 },
                  border: "1px solid #eaeaea",
                  "&:hover": {
                    borderColor: "#007BFF",
                    boxShadow: "0 10px 30px rgba(0,123,255,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "#C59B27",
                    "& svg": { fontSize: { xs: 30, md: 40 } },
                  }}
                >
                  {doc.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#003366"
                    mb={1}
                    lineHeight={1.2}
                    sx={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}
                  >
                    {doc.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#666"
                    sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                  >
                    {doc.desc}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          bgcolor: "#003366",
          py: { xs: 8, md: 12 },
          color: "#fff",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "30%",
            height: "100%",
            bgcolor: "#002244",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 30% 0)",
            zIndex: 0,
            display: { xs: "none", md: "block" },
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box data-aos="fade-right" sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="900"
              textTransform="uppercase"
              sx={{ fontSize: "clamp(1.8rem, 5vw, 3.75rem)" }}
            >
              Detalles de la Evaluación de Admisión
            </Typography>
            <Typography
              variant="h6"
              color="#a0aec0"
              mt={1}
              sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              Nuestra evaluación busca identificar tu potencial y vocación
              docente.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
              <Paper
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "24px",
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  height: "100%",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3626/3626788.png"
                    alt="Fase 1"
                    style={{
                      width: 40,
                      height: 40,
                      filter: `brightness(0) saturate(100%) invert(25%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(155%) contrast(95%)`,
                    }}
                  />
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#fff"
                    sx={{ fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)" }}
                  >
                    Primera Fase
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  color="#61acfc"
                  fontWeight="bold"
                  mb={2}
                  sx={{ fontSize: "clamp(1rem, 2.5vw, 1.1rem)" }}
                >
                  Prueba Escrita de Competencias
                </Typography>
                <Typography
                  variant="body2"
                  color="#e2e8f0"
                  mb={3}
                  sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                >
                  <strong>Duración:</strong> 2 horas (09:00 a.m. - 11:00 a.m.)
                  <br />
                  Evaluación de aptitudes en áreas clave con un total de 50
                  preguntas de alternativa múltiple (puntaje máximo de 50
                  puntos):
                </Typography>
                <List sx={{ pt: 0 }}>
                  <ListItem sx={{ py: 0.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <ArrowForwardIcon
                        sx={{ color: "#61acfc", fontSize: 16 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Comunicación en su Lengua Materna: 20 preguntas (20 ptos)"
                      primaryTypographyProps={{
                        color: "#e2e8f0",
                        fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)",
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <ArrowForwardIcon
                        sx={{ color: "#61acfc", fontSize: 16 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Resolución de Problemas Matemáticos: 20 preguntas (20 ptos)"
                      primaryTypographyProps={{
                        color: "#e2e8f0",
                        fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)",
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <ArrowForwardIcon
                        sx={{ color: "#61acfc", fontSize: 16 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Convivencia y Participación Democrática: 10 preguntas (10 ptos)"
                      primaryTypographyProps={{
                        color: "#e2e8f0",
                        fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)",
                      }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Paper
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "24px",
                  bgcolor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  height: "100%",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/476/476698.png"
                    alt="Fase 2"
                    style={{
                      width: 45,
                      height: 45,
                      filter: `brightness(0) saturate(100%) invert(25%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(155%) contrast(95%)`,
                    }}
                  />
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    color="#fff"
                    sx={{ fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)" }}
                  >
                    Segunda Fase
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  color="#61acfc"
                  fontWeight="bold"
                  mb={2}
                  sx={{ fontSize: "clamp(1rem, 2.5vw, 1.1rem)" }}
                >
                  Evaluación Diagnóstica Vocacional
                </Typography>
                <Typography
                  variant="body2"
                  color="#e2e8f0"
                  mb={3}
                  sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                >
                  <strong>Modalidad:</strong> Entrevista y Dinámica Grupal
                  <br />
                  <strong>Duración:</strong> 3 minutos por postulante (a partir
                  de las 09:00 a.m.)
                  <br />
                  Evalúa capacidades para el ejercicio docente (máximo 50
                  puntos):
                </Typography>
                <List sx={{ pt: 0 }}>
                  <ListItem sx={{ py: 0.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <ArrowForwardIcon
                        sx={{ color: "#61acfc", fontSize: 16 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Pensamiento Crítico y Creativo: 20 puntos"
                      primaryTypographyProps={{
                        color: "#e2e8f0",
                        fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)",
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <ArrowForwardIcon
                        sx={{ color: "#61acfc", fontSize: 16 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Trabajo Colaborativo: 20 puntos"
                      primaryTypographyProps={{
                        color: "#e2e8f0",
                        fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)",
                      }}
                    />
                  </ListItem>
                  <ListItem sx={{ py: 0.5, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <ArrowForwardIcon
                        sx={{ color: "#61acfc", fontSize: 16 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="TICs: 10 puntos"
                      primaryTypographyProps={{
                        color: "#e2e8f0",
                        fontSize: "clamp(0.85rem, 1.5vw, 0.9rem)",
                      }}
                    />
                  </ListItem>
                </List>
                <Typography
                  variant="caption"
                  color="rgba(255,255,255,0.5)"
                  display="block"
                  mt={2}
                  sx={{ fontSize: "clamp(0.7rem, 1.5vw, 0.75rem)" }}
                >
                  *Contendrá pruebas de ejecución y prueba oral, elaboradas por
                  docentes de especialidad.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box mt={{ xs: 5, md: 6 }} textAlign="center" data-aos="zoom-in">
            <Chip
              label="Nota mínima de aprobación: 12"
              color="primary"
              sx={{
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                py: { xs: 2, md: 2.5 },
                px: { xs: 1, md: 2 },
                fontWeight: "bold",
                bgcolor: "#c59b27",
                color: "#003366",
                height: "auto",
                "& .MuiChip-label": { whiteSpace: "normal" },
              }}
            />
            <Typography
              variant="body2"
              color="#a0aec0"
              mt={2}
              sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
            >
              Los resultados serán publicados en la página web del IESPP “Arco
              Iris” y el SIA del MINEDU.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          data-aos="fade-up"
          sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}
        >
          <Typography
            variant="h2"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
            sx={{ fontSize: "clamp(1.8rem, 5vw, 3.75rem)" }}
          >
            Inversión y Costos
          </Typography>
          <Typography
            variant="h6"
            color="#666"
            mt={2}
            sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Conoce las tarifas de inscripción y matrícula para el ciclo{" "}
            {periodo}.
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          mb={{ xs: 4, md: 6 }}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, md: 4 }} data-aos="fade-up" data-aos-delay="0">
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                border: "1px solid #eee",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="subtitle1"
                color="#666"
                fontWeight="bold"
                textTransform="uppercase"
                sx={{ fontSize: "clamp(0.95rem, 2vw, 1rem)" }}
              >
                Examen de Admisión
              </Typography>
              <Typography
                variant="h3"
                fontWeight="900"
                color="#003366"
                my={2}
                sx={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                S/ 120.00
              </Typography>
              <Typography
                variant="body2"
                color="#555"
                mb={3}
                flexGrow={1}
                sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
              >
                Costo único por el derecho a rendir el examen de admisión.
              </Typography>
            </Paper>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                border: "2px solid #007BFF",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                mt: { xs: 2, md: 0 },
              }}
            >
              <Chip
                label="RECOMENDADO"
                size="small"
                sx={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  bgcolor: "#007BFF",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              />
              <Typography
                variant="subtitle1"
                color="#007BFF"
                fontWeight="bold"
                textTransform="uppercase"
                sx={{ fontSize: "clamp(0.95rem, 2vw, 1rem)" }}
              >
                Paquetes PRE-ARCO IRIS
              </Typography>
              <Box my={2}>
                <Typography
                  variant="h5"
                  fontWeight="900"
                  color="#003366"
                  sx={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
                >
                  Enero: S/ 270.00
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="900"
                  color="#003366"
                  sx={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
                >
                  Ene y Feb: S/ 370.00
                </Typography>
              </Box>
              <Typography
                variant="body2"
                color="#555"
                mb={3}
                flexGrow={1}
                sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
              >
                Incluyen clases de preparación y el derecho al examen de
                admisión.
              </Typography>
            </Paper>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                border: "1px solid #eee",
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="subtitle1"
                color="#666"
                fontWeight="bold"
                textTransform="uppercase"
                sx={{ fontSize: "clamp(0.95rem, 2vw, 1rem)" }}
              >
                Examen Simulacro
              </Typography>
              <Typography
                variant="h3"
                fontWeight="900"
                color="#003366"
                my={2}
                sx={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                S/ 5.00
              </Typography>
              <Typography
                variant="body2"
                color="#555"
                mb={3}
                flexGrow={1}
                sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
              >
                Costo por participar en el examen simulacro (miércoles 25 de
                marzo).
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box data-aos="zoom-in">
          <Paper
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid #e0e0e0",
              boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
            }}
          >
            <Box
              sx={{
                bgcolor: "#003366",
                py: { xs: 2, md: 2.5 },
                textAlign: "center",
                color: "#fff",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)", px: 2 }}
              >
                Costos de Matrícula y Cuotas Mensuales
              </Typography>
            </Box>
            <Grid container>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRight: { md: "1px solid #e0e0e0" },
                  borderBottom: { xs: "1px solid #e0e0e0", md: "none" },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7456/7456976.png"
                    alt="Inicial"
                    style={{
                      width: 45,
                      height: 45,
                      filter: `brightness(0) saturate(100%) invert(25%) sepia(30%)
                        saturate(2000%) hue-rotate(170deg) brightness(185%) contrast(95%)`,
                    }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="#003366"
                    sx={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
                  >
                    Educación Inicial
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                    pb: 2,
                    borderBottom: "1px dashed #ccc",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="#555"
                    sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                  >
                    Matrícula
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#333"
                    sx={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)" }}
                  >
                    S/ 240.00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body1"
                    color="#555"
                    sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                  >
                    Cuotas Mensuales
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#333"
                    sx={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)" }}
                  >
                    S/ 280.00
                  </Typography>
                </Box>
              </Grid>
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ p: { xs: 3, md: 5 }, bgcolor: "#fafafa" }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3048/3048355.png"
                    alt="Educación Física"
                    style={{
                      width: 50,
                      height: 50,
                      filter: `brightness(0) saturate(100%) invert(25%) sepia(90%)
                        saturate(2000%) hue-rotate(170deg) brightness(145%) contrast(65%)`,
                    }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="#003366"
                    sx={{ fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)" }}
                  >
                    Educación Física
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                    pb: 2,
                    borderBottom: "1px dashed #ccc",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="#555"
                    sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                  >
                    Matrícula
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#333"
                    sx={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)" }}
                  >
                    S/ 280.00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body1"
                    color="#555"
                    sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                  >
                    Cuotas Mensuales
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="#333"
                    sx={{ fontSize: "clamp(1.1rem, 2vw, 1.25rem)" }}
                  >
                    S/ 320.00
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                bgcolor: "#F0F2F5",
                py: { xs: 2, md: 1.5 },
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle2"
                color="#003366"
                fontWeight="bold"
                sx={{ fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)" }}
              >
                INICIO DE CLASES: LUNES 06 DE ABRIL
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>

      <Box
        sx={{
          bgcolor: "#ffffff",
          py: { xs: 8, md: 12 },
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Container maxWidth="lg">
          <Box data-aos="fade-right" sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              fontWeight="900"
              color="#003366"
              textTransform="uppercase"
              sx={{ fontSize: "clamp(1.8rem, 5vw, 3.75rem)" }}
            >
              Nuestra Oferta Formativa
            </Typography>
            <Typography
              variant="h6"
              color="#666"
              mt={1}
              sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
            >
              Formamos profesionales de la educación con excelencia y visión
              humanista.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up">
              <Paper
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid #eaeaea",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: { xs: 180, md: 200 },
                    bgcolor: "#f0f0f0",
                    backgroundImage:
                      "url('https://plus.unsplash.com/premium_photo-1663047589329-e340c9234b61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGRvY2VudGUlMjBlZHVjYWNpb24lMjBpbmljaWFsfGVufDB8fDB8fHww')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight="900"
                    color="#003366"
                    mb={2}
                    sx={{ fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)" }}
                  >
                    Educación Inicial
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#555"
                    mb={3}
                    textAlign="justify"
                    sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                  >
                    Formamos profesionales capacitados para enseñar y cuidar a
                    niños durante su primera infancia (0-6 años), con un enfoque
                    integral en su desarrollo motriz e intelectual.
                  </Typography>
                  <Box sx={{ mt: "auto", mb: { xs: 4, md: 3 } }}>
                    <Typography
                      variant="body2"
                      color="#333"
                      sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                    >
                      <strong>Duración:</strong> 5 años (10 ciclos académicos)
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#333"
                      mt={1}
                      sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                    >
                      <strong>Campo Laboral:</strong> Docencia en I.E.
                      públicas/privadas, guarderías, cunas, jardines de
                      infancia, especialista pedagógico, consultor en ONG,
                      investigación, formador MINEDU, entre otros.
                    </Typography>
                  </Box>
                  <Button
                    component={Link}
                    to="/Inicial"
                    onClick={() => window.scrollTo(0, 0)}
                    variant="outlined"
                    sx={{
                      color: "#ffffff",
                      borderColor: "#ffffff",
                      backgroundColor: "#003366",
                      borderRadius: "35px",
                      p: { xs: 1.5, md: 2 },
                      alignSelf: { xs: "stretch", sm: "flex-start" },
                      fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                      "&:hover": { bgcolor: "#045bb3" },
                    }}
                  >
                    Ver Detalles del Programa
                  </Button>
                </Box>
              </Paper>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Paper
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid #eaeaea",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: { xs: 180, md: 200 },
                    bgcolor: "#f0f0f0",
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1717689410645-62564f0a9acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRvY2VudGUlMjBlZHVjYWNpb24lMjBmaXNpY2F8ZW58MHx8MHx8fDA%3D')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight="900"
                    color="#003366"
                    mb={2}
                    sx={{ fontSize: "clamp(1.5rem, 3.5vw, 2.125rem)" }}
                  >
                    Educación Física
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#555"
                    mb={3}
                    textAlign="justify"
                    sx={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)" }}
                  >
                    Formamos profesionales dedicados a la docencia de la
                    educación física en todos los niveles, promoviendo la
                    actividad física, el deporte y valores como la honestidad y
                    el respeto.
                  </Typography>
                  <Box sx={{ mt: "auto", mb: { xs: 4, md: 3 } }}>
                    <Typography
                      variant="body2"
                      color="#333"
                      sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                    >
                      <strong>Duración:</strong> 5 años (10 ciclos académicos)
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#333"
                      mt={1}
                      sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                    >
                      <strong>Campo Laboral:</strong> Profesor de Educación
                      Física (EBR), preparador físico, investigador, entrenador
                      deportivo, instructor de actividad física, director
                      técnico de clubes, especialista pedagógico, formador
                      MINEDU, entre otros.
                    </Typography>
                  </Box>
                  <Button
                    component={Link}
                    to="/Fisica"
                    onClick={() => window.scrollTo(0, 0)}
                    sx={{
                      color: "#ffffff",
                      borderColor: "#ffffff",
                      backgroundColor: "#003366",
                      borderRadius: "35px",
                      p: { xs: 1.5, md: 2 },
                      alignSelf: { xs: "stretch", sm: "flex-start" },
                      fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                      "&:hover": { bgcolor: "#044d96" },
                    }}
                  >
                    Ver Detalles del Programa
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          data-aos="zoom-in"
          sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}
        >
          <Typography
            variant="h2"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
            sx={{ fontSize: "clamp(1.8rem, 5vw, 3.75rem)" }}
          >
            ¿Por Qué Elegir el Instituto Arcoíris?
          </Typography>
          <Typography
            variant="h6"
            color="#666"
            mt={2}
            sx={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Más de dos décadas formando los mejores docentes del país con
            excelencia y compromiso.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {[
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/993/993552.png"
                  alt="Innovación Pedagógica"
                  style={{
                    width: 48,
                    height: 48,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(10%) invert(31%) sepia(100%)
                        saturate(2714%) hue-rotate(170deg) brightness(105%) contrast(105%)`,
                  }}
                />
              ),
              title: "Innovación Pedagógica",
              desc: "Adoptamos las últimas metodologías y tecnologías educativas para una enseñanza dinámica y efectiva, preparándote para los desafíos del futuro.",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2972/2972383.png"
                  alt="Docentes Altamente Calificados"
                  style={{
                    width: 48,
                    height: 48,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(10%) invert(31%) sepia(100%)
                        saturate(2714%) hue-rotate(170deg) brightness(105%) contrast(105%)`,
                  }}
                />
              ),
              title: "Docentes Altamente Calificados",
              desc: "Contamos con un equipo de profesionales apasionados, con amplia experiencia académica y práctica, dedicados a tu formación integral.",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2463/2463988.png"
                  alt="Formación Integral y Humanista"
                  style={{
                    width: 48,
                    height: 48,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(10%) invert(31%) sepia(100%)
                        saturate(2714%) hue-rotate(170deg) brightness(105%) contrast(105%)`,
                  }}
                />
              ),
              title: "Formación Integral y Humanista",
              desc: "Nuestro enfoque va más allá de lo académico, desarrollando tus habilidades personales, éticas y sociales para que seas un educador completo.",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18790/18790608.png"
                  alt="Infraestructura Moderna"
                  style={{
                    width: 48,
                    height: 48,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(10%) invert(31%) sepia(100%)
                        saturate(2714%) hue-rotate(170deg) brightness(105%) contrast(105%)`,
                  }}
                />
              ),
              title: "Infraestructura Moderna",
              desc: "Disfruta de aulas cómodas, laboratorios especializados, biblioteca actualizada y áreas verdes que propician un ambiente óptimo.",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4599/4599539.png"
                  alt="Convenios y Oportunidades"
                  style={{
                    width: 48,
                    height: 48,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(10%) invert(31%) sepia(100%)
                        saturate(2714%) hue-rotate(170deg) brightness(105%) contrast(105%)`,
                  }}
                />
              ),
              title: "Convenios y Oportunidades",
              desc: "Accede a una red de convenios con instituciones educativas y organizaciones que te brindarán valiosas oportunidades de prácticas.",
            },
            {
              icon: (
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18036/18036298.png"
                  alt="Compromiso Social y Comunitario"
                  style={{
                    width: 48,
                    height: 48,
                    objectFit: "contain",
                    filter: `brightness(0) saturate(10%) invert(31%) sepia(100%)
                        saturate(2714%) hue-rotate(170deg) brightness(105%) contrast(105%)`,
                  }}
                />
              ),
              title: "Compromiso Social y Comunitario",
              desc: "Formamos docentes con una sólida conciencia social, capaces de impulsar proyectos de impacto y contribuir activamente a su entorno.",
            },
          ].map((item, idx) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <Paper
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: "24px",
                  height: "100%",
                  textAlign: "center",
                  border: "1px solid transparent",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: "#007BFF",
                    transform: "translateY(-5px)",
                    boxShadow: "0 15px 30px rgba(0,51,102,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 60, md: 70 },
                    height: { xs: 60, md: 70 },
                    mx: "auto",
                    bgcolor: "rgba(0, 123, 255, 0.1)",
                    color: "#007BFF",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  {React.cloneElement(item.icon, { fontSize: "large" })}
                </Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#003366"
                  mb={2}
                  sx={{ fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="#666"
                  sx={{ fontSize: "clamp(0.85rem, 1.5vw, 0.95rem)" }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
