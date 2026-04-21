import React, { useState, useEffect, forwardRef } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Button,
  Slide,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Transition = forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export default function ModalAnuncios({
  delaySegundos = 2,
  intervaloCarrusel = 5,
}) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const anuncios = [
    {
      img: "https://arcoiris.edu.pe/assets/Img/comunicados/WhatsApp%20Image%202026-03-29%20at%203.57.42%20PM.jpeg",
      link: "/admision",
      btnText: "Ver Resultados",
    },
    {
      img: "https://arcoiris.edu.pe/assets/Img/comunicados/CONVOCATORIA%202026-l-2.png",
      link: "/eventos",
      btnText: "Postular",
    },
    {
      img: "https://arcoiris.edu.pe/assets/Img/comunicados/CONVOCATORIA%202026-I-1.png",
    },
    {
      img: "https://arcoiris.edu.pe/assets/Img/comunicados/Comunicado_Simuilacro.jpeg",
    },
    {
      img: "https://arcoiris.edu.pe/assets/Img/comunicados/ultimo_lic.jpg",
    },
  ];

  useEffect(() => {
    // Solo Inicio
    if (window.location.pathname !== "/") return;

    const timer = setTimeout(() => setOpen(true), delaySegundos * 1000);
    return () => clearTimeout(timer);
  }, [delaySegundos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === anuncios.length - 1 ? 0 : prev + 1));
    }, intervaloCarrusel * 1000);
    return () => clearInterval(interval);
  }, [currentIndex, anuncios.length, intervaloCarrusel]);

  const handleNext = () =>
    setCurrentIndex((p) => (p === anuncios.length - 1 ? 0 : p + 1));
  const handlePrev = () =>
    setCurrentIndex((p) => (p === 0 ? anuncios.length - 1 : p - 1));

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "24px",
          bgcolor: "#000",
          maxWidth: "750px",
          width: "100%",
          overflow: "hidden",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0,
          height: { xs: "60vh", md: "100%" },
          position: "relative",
          bgcolor: "#000",
          "&:hover .nav-btn": { opacity: 1 },
        }}
      >
        {/* Botón Cerrar */}
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            zIndex: 10,
            bgcolor: "rgba(0,0,0,0.4)",
            color: "#fff",
            backdropFilter: "blur(8px)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
          }}
        >
          <CloseIcon fontSize="big" />
        </IconButton>

        {/* Imágenes */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={anuncios[currentIndex].img}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Botón Acción */}
        <Box
          sx={{
            position: "absolute",
            bottom: 25,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: 5,
          }}
        >
          <Button
            variant="contained"
            onClick={() => (window.location.href = anuncios[currentIndex].link)}
            sx={{
              bgcolor: "rgba(255,255,255,0.95)",
              color: "#000",
              px: 4,
              py: 1,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              opacity: 0,
              transform: "translateY(10px)",
              transition: "0.4s",
              "&:hover": { bgcolor: "#003366", color: "#fff" },
              ".MuiDialogContent-root:hover &": {
                opacity: 1,
                transform: "translateY(0)",
              },
            }}
          >
            {anuncios[currentIndex].btnText}
          </Button>
        </Box>

        {/* Flechas */}
        <IconButton
          onClick={handlePrev}
          className="nav-btn"
          sx={{
            position: "absolute",
            left: 15,
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0,
            transition: "0.3s",
            bgcolor: "rgba(0,0,0,0.4)",
            color: "#fff",
            zIndex: 6,
          }}
        >
          <ArrowBackIosNewRoundedIcon fontSize="medium" />
        </IconButton>
        <IconButton
          onClick={handleNext}
          className="nav-btn"
          sx={{
            position: "absolute",
            right: 15,
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0,
            transition: "0.3s",
            bgcolor: "rgba(0,0,0,0.4)",
            color: "#fff",
            zIndex: 6,
          }}
        >
          <ArrowForwardIosRoundedIcon fontSize="medium" />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
}
