import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";

export default function ModalAnuncios({
  delaySegundos = 1,
  cooldownMinutos = 0,
  intervaloCarrusel = 5, // Segundos para cambiar de imagen
}) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const anuncios = [
    {
      id: 1,
      tag: "Admisión 2026",
      title: "¡Resultados Admisión!",
      img: "https://arcoiris.edu.pe/assets/Img/comunicados/WhatsApp%20Image%202026-03-29%20at%203.57.42%20PM.jpeg",
      link: "/admision",
      btnText: "Ver Resultados",
    },
    {
      id: 2,
      tag: null,
      title: "Convocatoria Laboral",
      img: "https://arcoiris.edu.pe/assets/Img/comunicados/CONVOCATORIA%202026-l-2.png",
      link: "/eventos",
      btnText: "Postular",
    },
    {
      id: 3,
      tag: null,
      title: "Cronograma de Actividades",
      img: "https://arcoiris.edu.pe/assets/Img/comunicados/CONVOCATORIA%202026-I-1.png",
    },
  ];

  useEffect(() => {
    if (anuncios.length === 0) return;
    const lastClosed = localStorage.getItem("arcoiris_ad_closed");
    const now = new Date().getTime();
    const cooldownMs = cooldownMinutos * 60 * 1000;

    if (!lastClosed || now - parseInt(lastClosed) > cooldownMs) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, delaySegundos * 1000);
      return () => clearTimeout(timer);
    }
  }, [delaySegundos, cooldownMinutos, anuncios.length]);

  // Lógica del Carrusel Automático
  useEffect(() => {
    if (!open || anuncios.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === anuncios.length - 1 ? 0 : prev + 1));
    }, intervaloCarrusel * 1000);
    return () => clearInterval(interval);
  }, [open, currentIndex, anuncios.length, intervaloCarrusel]);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("arcoiris_ad_closed", new Date().getTime().toString());
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === anuncios.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? anuncios.length - 1 : prev - 1));
  };

  if (anuncios.length === 0) return null;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 40px 80px rgba(0, 51, 102, 0.3)",
          bgcolor: "#ffffff",
          m: 2,
        },
      }}
      TransitionProps={{ timeout: 600 }}
    >
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: 15,
          right: 15,
          zIndex: 10,
          bgcolor: "rgba(0,0,0,0.4)",
          color: "#fff",
          backdropFilter: "blur(4px)",
          width: 45,
          height: 45,
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)", transform: "rotate(90deg)" },
          transition: "all 0.3s ease",
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          p: 0,
          position: "relative",
          minHeight: "650px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "350px", md: "520px" },
                position: "relative",
                flexShrink: 0,
                overflow: "hidden", // Necesario para que el hover no se salga del contenedor
              }}
            >
              <Box
                component="img"
                src={anuncios[currentIndex].img}
                alt={anuncios[currentIndex].title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease-in-out",
                  "&:hover": {
                    transform: "scale(0.95)",
                  },
                }}
              />

              {/* Condicional para el Tag */}
              {anuncios[currentIndex].tag && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    bgcolor: "#007BFF",
                    color: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    pointerEvents: "none",
                  }}
                >
                  <CampaignRoundedIcon fontSize="small" />
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    letterSpacing={1}
                    textTransform="uppercase"
                  >
                    {anuncios[currentIndex].tag}
                  </Typography>
                </Box>
              )}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "30%",
                  background:
                    "linear-gradient(to top, #ffffff77 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
            </Box>

            <Box
              sx={{
                mt: "auto",
                px: { xs: 3, sm: 4 },
                pt: { xs: 1, md: 2 },
                pb: { xs: 5, md: 5 },
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography
                variant="h4"
                fontWeight={900}
                color="#003366"
                mb={2}
                sx={{ lineHeight: 1.2 }}
              >
                {anuncios[currentIndex].title}
              </Typography>

              {/* Condicional para el Botón */}
              {anuncios[currentIndex].btnText &&
                anuncios[currentIndex].link && (
                  <Button
                    variant="contained"
                    onClick={() => {
                      window.location.href = anuncios[currentIndex].link;
                    }}
                    sx={{
                      bgcolor: "#003366",
                      color: "#fff",
                      px: 5,
                      py: 1.5,
                      borderRadius: "30px",
                      fontWeight: "bold",
                      textTransform: "none",
                      boxShadow: "0 10px 20px rgba(0, 51, 102, 0.2)",
                      "&:hover": {
                        bgcolor: "#007BFF",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {anuncios[currentIndex].btnText}
                  </Button>
                )}
            </Box>
          </motion.div>
        </AnimatePresence>

        {anuncios.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                top: "40%",
                left: 10,
                bgcolor: "rgba(255,255,255,0.7)",
                color: "#003366",
                width: 50,
                height: 50,
                "&:hover": { bgcolor: "#fff" },
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
              size="small"
            >
              <ArrowBackIosNewRoundedIcon fontSize="medium" />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                top: "40%",
                right: 10,
                bgcolor: "rgba(255,255,255,0.7)",
                color: "#003366",
                width: 50,
                height: 50,
                "&:hover": { bgcolor: "#fff" },
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
              size="small"
            >
              <ArrowForwardIosRoundedIcon fontSize="small" />
            </IconButton>
            <Box
              sx={{
                position: "absolute",
                bottom: 15,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {anuncios.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: currentIndex === index ? 15 : 30,
                    height: 8,
                    borderRadius: "8px",
                    bgcolor: currentIndex === index ? "#007BFF" : "#e0e0e0",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Box>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
