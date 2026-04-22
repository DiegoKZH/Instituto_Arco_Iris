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
  delaySegundos = 3,
  intervaloCarrusel = 4,
}) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    if (window.location.pathname !== "/") return;
    const timer = setTimeout(() => setOpen(true), delaySegundos * 1000);
    return () => clearTimeout(timer);
  }, [delaySegundos]);

  useEffect(() => {
    if (isPaused || !open) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === anuncios.length - 1 ? 0 : prev + 1));
    }, intervaloCarrusel * 1000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, open, anuncios.length, intervaloCarrusel]);

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
          height: { xs: "65vh", sm: "70vh", md: "80vh" },
          overflow: "hidden",
        },
      }}
    >
      <DialogContent
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        sx={{
          p: 0,
          height: "100%",
          position: "relative",
          bgcolor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover .nav-btn": { opacity: 1 },
        }}
      >
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

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <Box
              component="img"
              src={anuncios[currentIndex].img}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </motion.div>
        </AnimatePresence>

        {anuncios[currentIndex].btnText && (
          <Box
            sx={{
              position: "absolute",
              bottom: 35,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              zIndex: 5,
            }}
          >
            <Button
              variant="contained"
              onClick={() =>
                (window.location.href = anuncios[currentIndex].link)
              }
              disableElevation
              sx={{
                bgcolor: "#003366",
                color: "#fff",
                px: { xs: 4, md: 5 },
                py: { xs: 1.2, md: 1.5 },
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 800,
                fontSize: "1rem",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.5)",
                position: "relative",
                overflow: "hidden",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "50%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  transition: "all 0.6s ease",
                },
                "&:hover": {
                  bgcolor: "#004080",
                  transform: "scale(1.08) translateY(0)",
                  boxShadow: "0 12px 30px rgba(0, 51, 102, 0.8)",
                  "&::before": {
                    left: "100%",
                  },
                },
                ".MuiDialogContent-root:hover &": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              {anuncios[currentIndex].btnText}
            </Button>
          </Box>
        )}

        <IconButton
          onClick={handlePrev}
          className="nav-btn"
          sx={{
            position: "absolute",
            left: { xs: 10, md: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0,
            transition: "0.4s ease",
            bgcolor: "rgba(0,0,0,0.5)",
            color: "#fff",
            zIndex: 6,
            backdropFilter: "blur(4px)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.8)",
              transform: "translateY(-50%) scale(1.1)",
            },
          }}
        >
          <ArrowBackIosNewRoundedIcon fontSize="medium" />
        </IconButton>

        <IconButton
          onClick={handleNext}
          className="nav-btn"
          sx={{
            position: "absolute",
            right: { xs: 10, md: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0,
            transition: "0.4s ease",
            bgcolor: "rgba(0,0,0,0.5)",
            color: "#fff",
            zIndex: 6,
            backdropFilter: "blur(4px)",
            "&:hover": {
              bgcolor: "rgba(0,0,0,0.8)",
              transform: "translateY(-50%) scale(1.1)",
            },
          }}
        >
          <ArrowForwardIosRoundedIcon fontSize="medium" />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
}
