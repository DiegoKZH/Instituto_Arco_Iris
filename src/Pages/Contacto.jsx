import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MapIcon from "@mui/icons-material/Map";

export default function Contacto() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden", pb: 10 }}>
      {/* 1. PORTADA HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "45vh", md: "55vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516387622842-87db70912185?q=80&w=2070&auto=format&fit=crop')", // Imagen de equipo / contacto
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
            mixBlendMode: "overlay",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box data-aos="fade-down" sx={{ textAlign: "center" }}>
            <Typography
              variant="overline"
              sx={{
                color: "#80bdff",
                fontWeight: 900,
                letterSpacing: 3,
                fontSize: "1.2rem",
              }}
            >
              ATENCIÓN AL ESTUDIANTE
            </Typography>
            <Typography
              variant="h1"
              fontWeight="900"
              sx={{
                color: "#ffffff",
                textTransform: "uppercase",
                fontSize: { xs: "3rem", md: "5rem" },
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Contáctanos
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#F0F2F5",
                maxWidth: "600px",
                mx: "auto",
                fontWeight: 400,
              }}
            >
              Estamos aquí para escucharte y resolver tus dudas de manera rápida
              y eficiente.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. SECCIÓN PRINCIPAL: SPLIT CARD (Información + Formulario) */}
      <Container
        maxWidth="lg"
        sx={{ mt: { xs: -5, md: -10 }, position: "relative", zIndex: 3 }}
      >
        <Paper
          elevation={0}
          sx={{
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0, 51, 102, 0.15)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* LADO IZQUIERDO: INFORMACIÓN (Fondo Oscuro) */}
          <Box
            data-aos="fade-right"
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 40%" },
              bgcolor: "#003366",
              color: "#ffffff",
              p: { xs: 4, md: 6 },
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Círculos decorativos de fondo */}
            <Box
              sx={{
                position: "absolute",
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: "50%",
                bgcolor: "rgba(0, 123, 255, 0.1)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -80,
                left: -50,
                width: 250,
                height: 250,
                borderRadius: "50%",
                bgcolor: "rgba(0, 123, 255, 0.1)",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Typography variant="h4" fontWeight="900" mb={1}>
                Nuestra Información
              </Typography>
              <Typography
                variant="body2"
                color="#80bdff"
                mb={5}
                fontSize="1rem"
              >
                Visítanos o comunícate a través de nuestros canales oficiales.
              </Typography>

              {/* Lista de Contacto */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {/* Dirección */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <LocationOnIcon sx={{ color: "#007BFF", fontSize: 30 }} />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="#80bdff"
                      textTransform="uppercase"
                      mb={0.5}
                    >
                      Dirección
                    </Typography>
                    <Typography variant="body1" fontWeight="500" mb={1}>
                      Tenería 4 Fracción II Enaco San Sebastián,
                      <br />
                      San Sebastian, Cusco.
                    </Typography>
                    <Button
                      variant="text"
                      size="small"
                      sx={{
                        color: "#007BFF",
                        p: 0,
                        minWidth: "auto",
                        fontWeight: "bold",
                        "&:hover": { color: "#ffffff", bgcolor: "transparent" },
                      }}
                      onClick={() =>
                        window.open(
                          "https://maps.app.goo.gl/asdBtSkJ7CJ3VhTz5",
                          "_blank",
                        )
                      }
                    >
                      Ver en Google Maps
                    </Button>
                  </Box>
                </Box>

                {/* Teléfono */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <PhoneInTalkIcon sx={{ color: "#007BFF", fontSize: 30 }} />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="#80bdff"
                      textTransform="uppercase"
                      mb={0.5}
                    >
                      Teléfono
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      +51 986 249 212{" "}
                      <Typography
                        component="span"
                        variant="body2"
                        color="rgba(255,255,255,0.7)"
                      >
                        (Admisión)
                      </Typography>
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      +51 999 888 777{" "}
                      <Typography
                        component="span"
                        variant="body2"
                        color="rgba(255,255,255,0.7)"
                      >
                        (Central)
                      </Typography>
                    </Typography>
                  </Box>
                </Box>

                {/* Correo Electrónico */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <EmailIcon sx={{ color: "#007BFF", fontSize: 30 }} />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="#80bdff"
                      textTransform="uppercase"
                      mb={0.5}
                    >
                      Correo Electrónico
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      informes@arcoiris.edu.pe{" "}
                      <Typography
                        component="span"
                        variant="body2"
                        color="rgba(255,255,255,0.7)"
                      >
                        (General)
                      </Typography>
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      admision@arcoiris.edu.pe{" "}
                      <Typography
                        component="span"
                        variant="body2"
                        color="rgba(255,255,255,0.7)"
                      >
                        (Admisión)
                      </Typography>
                    </Typography>
                  </Box>
                </Box>

                {/* Horario */}
                <Box sx={{ display: "flex", gap: 2 }}>
                  <AccessTimeIcon sx={{ color: "#007BFF", fontSize: 30 }} />
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      color="#80bdff"
                      textTransform="uppercase"
                      mb={0.5}
                    >
                      Horario de Atención
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      Lunes a Viernes:
                    </Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.8)">
                      8:00 AM - 1:00 PM
                      <br />
                      2:00 PM - 5:00 PM
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 4 }} />

              {/* Redes Sociales */}
              <Box>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  color="#80bdff"
                  mb={2}
                >
                  Síguenos en Redes:
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      "&:hover": { bgcolor: "#007BFF" },
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      "&:hover": { bgcolor: "#007BFF" },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      bgcolor: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      "&:hover": { bgcolor: "#007BFF" },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* LADO DERECHO: FORMULARIO (Fondo Blanco) */}
          <Box
            data-aos="fade-left"
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 60%" },
              bgcolor: "#ffffff",
              p: { xs: 4, md: 8 },
            }}
          >
            <Typography variant="h3" fontWeight="900" color="#003366" mb={1}>
              ¡Ponte en Contacto con Nosotros!
            </Typography>
            <Typography variant="body1" color="#555" mb={5}>
              Ya sea para información académica, trámites administrativos o
              cualquier consulta, estamos listos para asistirte. Envíanos un
              mensaje.
            </Typography>

            <form noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Nombre Completo"
                    variant="outlined"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Correo Electrónico"
                    variant="outlined"
                    type="email"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Número de Teléfono (Opcional)"
                    variant="outlined"
                    type="tel"
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Asunto"
                    variant="outlined"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Tu Mensaje"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": { borderRadius: "12px" },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      bgcolor: "#007BFF",
                      color: "#fff",
                      borderRadius: "30px",
                      px: 5,
                      py: 1.5,
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textTransform: "none",
                      boxShadow: "0 10px 20px rgba(0, 123, 255, 0.3)",
                      "&:hover": {
                        bgcolor: "#0056b3",
                        boxShadow: "0 15px 30px rgba(0, 123, 255, 0.4)",
                      },
                    }}
                  >
                    Enviar Mensaje
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>

      {/* 3. SECCIÓN DEL MAPA: DISEÑO CREATIVO Y PROFESIONAL */}
      <Container maxWidth="lg" sx={{ mt: 12, mb: 10 }}>
        <Box data-aos="fade-up" sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: "#007BFF", fontWeight: 900, letterSpacing: 2 }}
          >
            UBICACIÓN ESTRATÉGICA
          </Typography>
          <Typography
            variant="h3"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
          >
            Encuéntranos en el Corazón de Cusco
          </Typography>
        </Box>

        <Box
          sx={{ position: "relative", width: "100%", height: "700px" }}
          data-aos="zoom-in"
        >
          {/* Contenedor Principal del Mapa */}
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: { xs: "18px", md: "80px 24px 80px 24px" },
              overflow: "hidden",
              position: "relative",
              border: "8px solid #ffffff",
              boxShadow: "0 40px 80px rgba(0, 51, 102, 0.12)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.067407932292!2d-71.9115345!3d-13.5314547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd79210b3ff55%3A0x8bbc894355fce762!2sInstituto%20De%20Educaci%C3%B3n%20Superior%20Pedag%C3%B3gico%20Privado%20%22Arco%20Iris%22%20-%20Cusco!5e0!3m2!1ses!2spe!4v1775448815673!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.2) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Instituto Arco Iris"
            ></iframe>
          </Paper>

          {/* Tarjeta de Información Flotante (Glassmorphism) */}
          <Paper
            sx={{
              position: "absolute",
              bottom: { xs: 20, md: 50 },
              left: { xs: 20, md: 50 },
              p: { xs: 3, md: 4 },
              maxWidth: "380px",
              borderRadius: "24px",
              bgcolor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              {/* Icono con animación de pulso */}
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "#003366",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    border: "2px solid #007BFF",
                    animation: "pulse 2s infinite",
                  },
                  "@keyframes pulse": {
                    "0%": { transform: "scale(1)", opacity: 1 },
                    "100%": { transform: "scale(1.8)", opacity: 0 },
                  },
                }}
              >
                <LocationOnIcon />
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold" color="#003366">
                  Nuestra Sede
                </Typography>
                <Typography variant="body2" color="#007BFF" fontWeight="bold">
                  San Sebastián, Cusco
                </Typography>
              </Box>
            </Box>

            <Typography variant="body2" color="#555" mb={3} lineHeight={1.6}>
              Tenería 4 Fracción II Enaco San Sebastián. Ubicados en una zona
              accesible para toda nuestra comunidad estudiantil.
            </Typography>

            <Button
              fullWidth
              variant="contained"
              startIcon={<MapIcon />}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.067407932292!2d-71.9115345!3d-13.5314547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd79210b3ff55%3A0x8bbc894355fce762!2sInstituto%20De%20Educaci%C3%B3n%20Superior%20Pedag%C3%B3gico%20Privado%20%22Arco%20Iris%22%20-%20Cusco!5e0!3m2!1ses!2spe!4v1775448815673!5m2!1ses!2spe",
                  "_blank",
                )
              }
              sx={{
                bgcolor: "#003366",
                color: "#fff",
                borderRadius: "15px",
                py: 1.5,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { bgcolor: "#007BFF" },
              }}
            >
              Obtener Indicaciones
            </Button>
          </Paper>

          {/* Elemento decorativo detrás del mapa */}
          <Box
            sx={{
              position: "absolute",
              top: -50,
              right: -50,
              width: "200px",
              height: "200px",
              bgcolor: "rgba(0, 123, 255, 0.05)",
              borderRadius: "50%",
              zIndex: -1,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
