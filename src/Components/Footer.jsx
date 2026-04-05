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
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessIcon from "@mui/icons-material/Business";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#003366",
        color: "#fff",
        pt: 10,
        pb: 4,
        borderTop: "4px solid #007BFF",
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
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
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  "&:hover": { bgcolor: "#007BFF" },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  "&:hover": { bgcolor: "#007BFF" },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  bgcolor: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  "&:hover": { bgcolor: "#007BFF" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
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
                  "&:hover": { color: "#ffffff" },
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
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#F0F2F5" }}>
            © 2026 IESPP Arco Iris. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" sx={{ color: "#F0F2F5" }}>
            RUC: 20123456789
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
