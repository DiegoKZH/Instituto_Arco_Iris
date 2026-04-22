import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  // Centralizamos el color para asegurarnos de que el fondo y la ola sean idénticos
  const footerColor = "#003366";

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: footerColor,
        color: "#fff",
        pt: { xs: 8, md: 6 },
        pb: { xs: 12, md: 4 },
        position: "relative",
        zIndex: 2,
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* ========================================================
                        FORMA DE OLA INVERTIDA
        ======================================================== */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "30px", md: "50px" },
          transform: "translateY(-99%)",
          lineHeight: 0,
          zIndex: 3,
          pointerEvents: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            transform: "rotateX(180deg) scaleX(-1)",
          }}
        >
          <path
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            fill={footerColor}
          ></path>
        </svg>
      </Box>

      {/* ========================================================
                      CONTENIDO PRINCIPAL DEL FOOTER
        ======================================================== */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} mb={8}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Box
                component="img"
                src="https://arcoiris.edu.pe/assets/Img/LOGO%20INSTI%20BLANCO.png"
                alt="Logo Arco Iris"
                sx={{
                  height: 160,
                  width: "auto",
                  transition: "all 0.3s ease",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#F0F2F5", mb: 3, lineHeight: 1.8, pr: 2 }}
            >
              Formando educadores líderes con vocación de servicio, pensamiento
              crítico y valores éticos para el desarrollo de la región Cusco y
              el Perú.
            </Typography>
            <Typography variant="body2" sx={{ color: "#F0F2F5" }}>
              RUC: 20123456789
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
              Institucional
            </Typography>
            {[
              "Nosotros",
              "Autoridades",
              "Docentes",
              "Transparencia",
              "Reclamaciones",
            ].map((link) => (
              <Typography
                key={link}
                variant="body2"
                sx={{
                  color: "#F0F2F5",
                  mb: 1.5,
                  cursor: "pointer",
                  "&:hover": { color: "#ffffff", textDecoration: "underline" },
                }}
              >
                {link}
              </Typography>
            ))}
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
              Contacto
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mb: 2,
                alignItems: "flex-start",
              }}
            >
              <LocationOnIcon sx={{ color: "#007BFF", fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: "#F0F2F5" }}>
                Tenería 4 Fracción II Enaco San Sebastián, San Sebastian, Cusco.
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", gap: 1.5, mb: 2, alignItems: "center" }}
            >
              <PhoneIcon sx={{ color: "#007BFF", fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: "#F0F2F5" }}>
                +51 986 249 212
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", gap: 1.5, mb: 2, alignItems: "center" }}
            >
              <EmailIcon sx={{ color: "#007BFF", fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: "#F0F2F5" }}>
                informes@arcoiris.edu.pe
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>
              ¿Tienes dudas?
            </Typography>
            <Typography variant="body2" sx={{ color: "#F0F2F5", mb: 3 }}>
              Nuestro equipo está listo para ayudarte con tu proceso.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#007BFF",
                color: "#fff",
                py: 1.5,
                borderRadius: "8px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { bgcolor: "#0056B3" },
              }}
            >
              Contáctanos Ahora
            </Button>
            {/* ========================================================
                                    WIDGET FLOTANTE SOCIAL
            ======================================================== */}
            <Box
              sx={{
                paddingTop: 6,
                width: "236px",
                height: "54px",
                zIndex: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton
                component="a"
                href="https://www.facebook.com/pedagogicoarcoiris/?locale=es_LA"
                target="_blank"
                sx={{
                  width: "46px",
                  height: "46px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#003366", color: "#fff" },
                }}
              >
                <FacebookIcon sx={{ fontSize: 26 }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://wa.me/51986249212"
                target="_blank"
                sx={{
                  width: "54px",
                  height: "54px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#003366", color: "#fff" },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 32 }} />
              </IconButton>

              <IconButton
                component="a"
                href="mailto:informes@arcoiris.edu.pe"
                sx={{
                  width: "46px",
                  height: "46px",
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#003366", color: "#fff" },
                }}
              >
                <EmailIcon sx={{ fontSize: 26 }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            pr: { xs: 0, sm: "240px", md: 0 },
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#F0F2F5", mb: { xs: 2, sm: 0 } }}
          >
            © 2026 IESPP Arco Iris. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
