import React, { useState, useEffect } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function AccesosDirectos({
  scrollBanner = 300,
  footerThreshold = 350,
}) {
  const [showAccesos, setShowAccesos] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Mostrar u ocultar los botones
      setShowAccesos(scrollY > scrollBanner);

      // Calcular si hemos llegado al footer
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const distanceToBottom = documentHeight - (scrollY + windowHeight);

      // Si la distancia al fondo es menor que el threshold, estamos en el footer
      setIsAtFooter(distanceToBottom < footerThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Ejecutar una vez al montar por si la página carga ya scrolleadaza
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollBanner, footerThreshold]);

  const accesos = [
    {
      name: "Transparencia",
      icon: "https://cdn-icons-png.flaticon.com/128/5165/5165915.png",
      link: "transparencia",
    },
    {
      name: "Aula Virtual",
      icon: "https://cdn-icons-png.flaticon.com/128/15748/15748451.png",
      link: "https://aulavirtual.arcoiris.edu.pe/",
    },
    {
      name: "Intranet",
      icon: "https://cdn-icons-png.flaticon.com/128/1865/1865721.png",
      link: "https://intranet.arcoiris.edu.pe/",
    },
    {
      name: "Biblioteca",
      icon: "https://cdn-icons-png.flaticon.com/128/2997/2997608.png",
      link: "https://elibro.net/es/lc/arcoiris/login_usuario/?next=/es/lc/arcoiris/inicio/",
    },
    {
      name: "Repositorio",
      icon: "https://cdn-icons-png.flaticon.com/128/1156/1156975.png",
      link: "https://repositorio.arcoiris.edu.pe/",
    },
  ];

  // Estilos dinámicos basados en isAtFooter
  const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "75px",
    height: "75px",
    bgcolor: isAtFooter ? "#0151a8" : "#003366",
    color: isAtFooter ? "#fff" : "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.3s ease",
    padding: "6px",
    "&:hover": {
      transform: "translateX(-5px)",
      bgcolor: isAtFooter ? "#f0f0f0" : "#1f73cc",
    },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "30%",
        right: "1px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <AnimatePresence>
        {showAccesos &&
          accesos.map((acceso, index) => (
            <motion.div
              key={acceso.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ButtonBase
                component="a"
                href={acceso.link}
                target="_blank"
                sx={buttonStyle}
              >
                <Box
                  component="img"
                  src={acceso.icon}
                  alt={acceso.name}
                  sx={{
                    width: 36,
                    height: 36,
                    mb: 0.5,
                    transition: "filter 0.3s ease",
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: "inherit",
                    fontWeight: 500,
                    fontSize: "0.6rem",
                    lineHeight: 1.1,
                    textAlign: "center",
                  }}
                >
                  {acceso.name}
                </Typography>
              </ButtonBase>
            </motion.div>
          ))}
      </AnimatePresence>
    </Box>
  );
}
