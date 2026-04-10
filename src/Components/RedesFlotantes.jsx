import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

// Ícono SVG personalizado para TikTok (No había otra forma)
const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);

export default function RedesFlotantes({
  scrollBanner = 300, // Píxeles de scroll para sacar redes
  scrollSubir = 2900, // Píxeles de scroll para sacar mi flechon
}) {
  const [showSocials, setShowSocials] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowSocials(currentScroll > scrollBanner);
      setShowScrollTop(currentScroll > scrollSubir);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollBanner, scrollSubir]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const redes = [
    { name: "WhatsApp", icon: <WhatsAppIcon />, color: "#25D366", link: "#" },
    { name: "Facebook", icon: <FacebookIcon />, color: "#1877F2", link: "#" },
    //{ name: "TikTok", icon: <TikTokIcon />, color: "#000000", link: "#" },
  ];

  const buttonStyle = {
    width: 45,
    height: 45,
    bgcolor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    "&:hover": { transform: "scale(1.15)", bgcolor: "#fff" },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 30,
        left: 30,
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        alignItems: "center",
      }}
    >
      <AnimatePresence>
        {/* Flecha pa subir */}
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <Tooltip placement="right">
              <IconButton
                onClick={scrollToTop}
                sx={{
                  ...buttonStyle,
                  bgcolor: "#003366",
                  color: "#fff",
                  "&:hover": { ...buttonStyle["&:hover"], bgcolor: "#1f73cc" },
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/25/25216.png"
                  alt="Subir"
                  style={{
                    width: 20,
                    height: 20,
                    filter: "brightness(0) invert(1) contrast(0.9)",
                  }}
                />
              </IconButton>
            </Tooltip>
          </motion.div>
        )}

        {/* Separadorcin*/}
        {showScrollTop && showSocials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              width: "24px",
              height: "2px",
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: "2px",
              margin: "4px 0",
            }}
          />
        )}

        {/* Redes Sociales */}
        {showSocials &&
          redes.map((red, index) => (
            <motion.div
              key={red.name}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Tooltip title={red.name} placement="right">
                <IconButton
                  component="a"
                  href={red.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ...buttonStyle,
                    color: red.color,
                    "&:hover": {
                      ...buttonStyle["&:hover"],
                      color: "#fff",
                      bgcolor: red.color,
                    },
                  }}
                >
                  {red.icon}
                </IconButton>
              </Tooltip>
            </motion.div>
          ))}
      </AnimatePresence>
    </Box>
  );
}
