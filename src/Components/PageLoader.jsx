import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
import img1 from "../assets/logo_part1_blanco.png";
import img2 from "../assets/logo_part2.png";
import img3 from "../assets/logo_part3.png";

// Animaciones desde distintas direcciones
const slideFromTopLeft = keyframes`
  0% { transform: translate(-100px, -100px); opacity: 0; }
  100% { transform: translate(0, 0); opacity: 1; }
`;

const slideFromRight = keyframes`
  0% { transform: translateX(100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
`;

const slideFromTop = keyframes`
  0% { transform: translateY(-100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export default function PageLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  const darkBlueFilter =
    "invert(13%) sepia(90%) saturate(5595%) hue-rotate(233deg) brightness(89%) contrast(110%)";

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Box sx={{ position: "relative", width: 150, height: 150 }}>
        {/* PARTE 1: Desde arriba a la izquierda */}
        <Box
          component="img"
          src={img1}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: darkBlueFilter,
            animation: `${slideFromTopLeft} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
          }}
        />

        {/* PARTE 2: Desde la derecha */}
        <Box
          component="img"
          src={img2}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: darkBlueFilter,
            animation: `${slideFromRight} 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards`,
            opacity: 0,
          }}
        />

        {/* PARTE 3: Desde abajo */}
        <Box
          component="img"
          src={img3}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: darkBlueFilter,
            animation: `${slideFromTop} 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards`,
            opacity: 0,
          }}
        />
      </Box>
    </Box>
  );
}
