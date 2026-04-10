import React, { useState, useEffect, memo, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  IconButton,
  Dialog,
  DialogContent,
  Snackbar,
  Alert,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Íconos
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/Email";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ImageIcon from "@mui/icons-material/Image";

// --- FUNCIÓN PARA ASIGNAR COLORES---
const getColorBySpecialty = (specialty) => {
  const spec = specialty.toUpperCase();
  if (spec.includes("INICIAL")) return "#880E4F";
  if (spec.includes("FISICA")) return "#BF360C";
  if (
    spec.includes("SOCIALES") ||
    spec.includes("HISTORIA") ||
    spec.includes("ANTROPOLOGIA")
  )
    return "#004D40"; // Verdeoscuro
  if (
    spec.includes("COMUNICACIÓN") ||
    spec.includes("INGLES") ||
    spec.includes("QUECHUA") ||
    spec.includes("ARTE")
  )
    return "#311B92";
  if (
    spec.includes("BIOLOGIA") ||
    spec.includes("QUIMICA") ||
    spec.includes("MEDICO") ||
    spec.includes("PSICOLOGA")
  )
    return "#1B5E20";
  return "#003366";
};

// =====================================================================
// COMPONENTE ESTÁTICO Y OPTIMIZADO PARA LA TARJETA DEL DOCENTE (React.memo)
// =====================================================================
const DocenteCard = memo(({ docente, onOpenCV, onCopyPhone }) => {
  const themeColor = getColorBySpecialty(docente.especialidad);

  // Verificamos si tiene una imagen real
  const hasRealImage = !!docente.image;
  const defaultSilhouette =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: "24px",
        position: "relative",
        bgcolor: "#ffffff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
        border: "1px solid #eaeaea",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0, 51, 102, 0.08)",
        },
      }}
    >
      {/* Contenedor de Imagen */}
      <Box
        sx={{
          width: "100%",
          height: hasRealImage ? "280px" : "160px",
          position: "relative",
          bgcolor: "#f0f2f5",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={hasRealImage ? docente.image : defaultSilhouette}
          alt={docente.nombre}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "#003366",
            opacity: 0.15,
            borderTopLeftRadius: "24px",
            borderTopRightRadius: "24px",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Medalla*/}
      <Box
        sx={{
          position: "absolute",
          top: hasRealImage ? "255px" : "135px",
          left: "24px",
          bgcolor: "#ffffff",
          borderRadius: "50%",
          p: 0.5,
          display: "flex",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <img
          style={{
            backgroundColor: themeColor,
            width: 40,
            height: 40,
            webkitMask:
              "url('https://cdn-icons-png.flaticon.com/128/1378/1378526.png') no-repeat center",
            mask: "url('https://cdn-icons-png.flaticon.com/128/1378/1378526.png') no-repeat center",
            maskRepeat: "no-repeat",
            maskSize: "contain",
          }}
        />
      </Box>

      {/* Contenido de la Tarjeta */}
      <Box
        sx={{
          p: 4,
          pt: 4,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#fff",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          zIndex: 3,
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight="900"
          color={themeColor}
          textTransform="uppercase"
          mb={2}
          sx={{ minHeight: "40px", letterSpacing: 0.5 }}
        >
          {docente.especialidad}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            mb: 4,
            flexGrow: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
            <PersonIcon sx={{ color: "#003366", fontSize: 20, mt: 0.3 }} />
            <Typography
              variant="body1"
              fontWeight="800"
              color="#003366"
              lineHeight={1.2}
            >
              {docente.grado} <br /> {docente.nombre}
            </Typography>
          </Box>

          <Box
            onClick={() => onCopyPhone(docente.phone)}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              p: 0.5,
              borderRadius: "8px",
              ml: -0.5,
              "&:hover": { bgcolor: "#f0f6ff" },
              "&:hover .phone-text": { color: "#007BFF" },
            }}
          >
            <PhoneIcon sx={{ color: "#666", fontSize: 18 }} />
            <Typography
              className="phone-text"
              variant="body2"
              fontWeight="600"
              color="#666"
              sx={{ transition: "color 0.2s" }}
            >
              Contactar Teléfono
            </Typography>
          </Box>

          <Box
            onClick={() =>
              window.open(`https://wa.me/51${docente.phone}`, "_blank")
            }
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              p: 0.5,
              borderRadius: "8px",
              ml: -0.5,
              "&:hover": { bgcolor: "#e8f5e9" },
              "&:hover .wa-text": { color: "#2E7D32" },
              "&:hover .wa-icon": { color: "#2E7D32" },
            }}
          >
            <WhatsAppIcon
              className="wa-icon"
              sx={{ color: "#666", fontSize: 18, transition: "color 0.2s" }}
            />
            <Typography
              className="wa-text"
              variant="body2"
              fontWeight="600"
              color="#666"
              sx={{ transition: "color 0.2s" }}
            >
              Enviar Mensaje
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mt: "auto",
          }}
        >
          <Box sx={{ display: "flex", color: "#003366", pb: 1, opacity: 0.4 }}>
            <KeyboardDoubleArrowRightIcon />
            <KeyboardDoubleArrowRightIcon sx={{ ml: -1.5 }} />
          </Box>

          <Button
            variant="contained"
            onClick={() => onOpenCV(docente.nombre, docente.cvUrl)}
            sx={{
              bgcolor: "#C59B27",
              color: "#ffffff",
              borderRadius: "20px",
              px: 3,
              py: 0.8,
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#a88421",
                boxShadow: "0 4px 10px rgba(197, 155, 39, 0.3)",
              },
            }}
          >
            Ver CV
          </Button>
        </Box>
      </Box>
    </Paper>
  );
});

// =====================================================================
// COMPONENTE PRINCIPAL
// =====================================================================
export default function Directorio() {
  const [openPdf, setOpenPdf] = useState(false);
  const [selectedDocente, setSelectedDocente] = useState("");
  const [selectedCvUrl, setSelectedCvUrl] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleOpenCV = useCallback((nombre, url) => {
    setSelectedDocente(nombre);
    setSelectedCvUrl(url);
    setOpenPdf(true);
  }, []);

  const handleCopyPhone = useCallback((phone) => {
    navigator.clipboard.writeText(phone);
    setSnackbarOpen(true);
  }, []);

  // --- DATOS DEL DIRECTORIO ---
  const directivo = [
    {
      grado: "Dr.",
      nombre: "PAREDES OJEDA, MARIO JESUS",
      cargo: "DIRECCION GENERAL",
    },
  ];

  const administrativo = [
    {
      grado: "Lic.",
      nombre: "VICTORIA CABALLERO, JOSE ALEJANDRO",
      cargo: "JEFE DE AREA DE ADMINISTRACION",
    },
    {
      grado: "Mag.",
      nombre: "TORRES MAMANI, VERONICA LUZ",
      cargo: "SECRETARIA GENERAL",
      cvUrl: "https://drive.google.com/file/d/ID_DEL_ARCHIVO/preview",
    },
    {
      grado: "Abog.",
      nombre: "TORRES HUAMAN, JANIA KARIN",
      cargo: "AREA DE CALIDAD",
    },
    {
      grado: "Abog.",
      nombre: "TORRES HUAMAN, JANIA KARIN",
      cargo: "ASESORIA NORMATIVA",
    },
    {
      grado: "Dra.",
      nombre: "MOSQUEIRA SOTOMAYOR, IDA ANTONIA",
      cargo: "UNIDAD ACADEMICA",
    },
    {
      grado: "Mag.",
      nombre: "CONCHA MARTINEZ, NELLY ROXANA",
      cargo: "JEFA DE LA UNIDAD DE FORMACION CONTINUA",
    },
    {
      grado: "Lic.",
      nombre: "ESPINOZA ROJAS, KARINA LIZT",
      cargo: "SECRETARIA ACADEMICA",
    },
    {
      grado: "Mag.",
      nombre: "RODRIGUEZ SOTO, VÍCTOR",
      cargo: "UNIDAD DE INVESTIGACION E INNOVACION",
    },
    {
      grado: "Mag.",
      nombre: "PUMA CONCHA, MARLENY",
      cargo: "UNIDAD DE BIENESTAR Y EMPLEABILIDAD",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/PUMA%20CONCHA%20MARLENY.jpg",
    },
  ];

  const docentes = [
    {
      grado: "Lic.",
      nombre: "ABARCA OCHOA, JUDITH",
      especialidad: "MATEMÁTICA",
      phone: "987654321",
      cvUrl: "https://drive.google.com/file/d/ID_DEL_ARCHIVO/preview",
    },
    {
      grado: "Prof.",
      nombre: "ALTAMIRANO QUISPE, NOEMI",
      especialidad: "EDUCACION INICIAL",
      phone: "987654322",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/ALTAMIRANO%20QUISPE%20NOEMI.jpg",
    },
    {
      grado: "Mag.",
      nombre: "APAZA ROJAS, PATRICIA",
      especialidad: "EDUCACION INICIAL",
      phone: "987654323",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/APAZA%20PATRICIA%20ROJAS.jpg",
    },
    {
      grado: "Mag.",
      nombre: "AQUINO LARICO, JENNIFER",
      especialidad: "INVESTIGACIÓN",
      phone: "987654324",
    },
    {
      grado: "Prof.",
      nombre: "ARIZACA MACEDO, SERAFIN",
      especialidad: "QUECHUA",
      phone: "987654325",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/ARIZACA%20MACEDO%20SERAFIN.jpg",
    },
    {
      grado: "Prof.",
      nombre: "ARMUTO TAYRO, EDGAR",
      especialidad: "EDUCACION FISICA",
      phone: "987654326",
    },
    {
      grado: "Lic.",
      nombre: "AUCCAISE UÑAPILLCO, DOROTEA",
      especialidad: "EDUCACION INICIAL",
      phone: "987654327",
    },
    {
      grado: "Prof.",
      nombre: "AVILES DALGUERRE, FELIX",
      especialidad: "HISTORIA Y GEOGRAFIA",
      phone: "987654328",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/AVILES%20DALGUERRE%20FELIX.jpg",
    },
    {
      grado: "Prof.",
      nombre: "AYBAR BUSTAMANTE, EUNICE LUCERO",
      especialidad: "EDUCACION FISICA",
      phone: "987654329",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/AYBAR%20BUSTAMANTE%20EUNICE%20LUCERO.jpg",
    },
    {
      grado: "Mag.",
      nombre: "AZURIN QUILLILLI, EYELIT",
      especialidad: "EDUCACION INICIAL",
      phone: "987654330",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/AZURIN%20QUILLILLI%20EYELIT.jpg",
    },
    {
      grado: "Dra.",
      nombre: "BAÑARES JAQUE, MIRIAN",
      especialidad: "INVESTIGACIÓN",
      phone: "987654331",
    },
    {
      grado: "Mgt.",
      nombre: "BEDOYA MENDOZA, JAIME",
      especialidad: "CIENCIAS SOCIALES",
      phone: "987654332",
    },
    {
      grado: "Prof.",
      nombre: "BEJAR GARCIA, EDISSON",
      especialidad: "COMUNICACION COMPUTACION E INFORMATICA",
      phone: "987654333",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/BEJAR%20GARCIA%20EDISSON.jpg",
    },
    {
      grado: "Mgt.",
      nombre: "CAMA JARA, MANUEL NICANOR",
      especialidad: "INGLES",
      phone: "987654334",
    },
    {
      grado: "Lic.",
      nombre: "CARDENAS ROZAS, NARCISO",
      especialidad: "EDUCACION FISICA",
      phone: "987654335",
    },
    {
      grado: "Dr.",
      nombre: "CARREON SUTEC, ALAIN GUNNAR",
      especialidad: "INVESTIGACIÓN",
      phone: "987654336",
    },
    {
      grado: "Lic.",
      nombre: "CHALLANCA HUILLCA, FANY ODALIZ",
      especialidad: "COMUNICACIÓN",
      phone: "987654337",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/CHALLANCA%20HUILLCA%20FANY%20ODALIZ.jpg",
    },
    {
      grado: "Dra.",
      nombre: "CHAVEZ MEZA, ABIGAIL",
      especialidad: "INVESTIGACIÓN",
      phone: "987654338",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/CHAVEZ%20MEZA%20ABIGAIL.jpg",
    },
    {
      grado: "Mat.",
      nombre: "CONCHA MARTINEZ, NELLY ROXANA",
      especialidad: "EDUCACION INICIAL",
      phone: "987654339",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/CONCHA%20MARTINEZ%20NELLY%20ROXANA.jpg",
    },
    {
      grado: "Mgt.",
      nombre: "CORRALES VISA, WILBERT",
      especialidad: "MATEMATICA",
      phone: "987654340",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/CORRALES%20VISA%20WILBERT.jpg",
    },
    {
      grado: "Prof.",
      nombre: "ESPINOZA BACA, OSCAR",
      especialidad: "EDUCACIÓN PRIMARIA",
      phone: "987654341",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/ESPINOZA%20BACA%20OSCAR.jpg",
    },
    {
      grado: "Mgt.",
      nombre: "ESPINOZA CHALLCO, DANILO",
      especialidad: "CIENCIAS SOCIALES",
      phone: "987654342",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/ESPINOZA%20CHALLCO%20DANILO.jpg",
    },
    {
      grado: "Prof.",
      nombre: "FERNANDEZ BACA ARENAS, FRANCISCO",
      especialidad: "EDUCACION FISICA",
      phone: "987654343",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/FERNANDEZ%20BACA%20ARENAS%20FRANCISCO.jpg",
    },
    {
      grado: "Dr.",
      nombre: "GARCIA HUAMAN, SANTOS",
      especialidad: "HISTORIA Y GEOGRAFIA",
      phone: "987654344",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/GARCIA%20HUAMAN%20SANTOS.jpg",
    },
    {
      grado: "Lic.",
      nombre: "GARCIA JARA, JESSICA ANGELA",
      especialidad: "EDUCACION INICIAL",
      phone: "987654345",
    },
    {
      grado: "Lic.",
      nombre: "GARCIA MOSCOSO, YARITNA",
      especialidad: "HISTORIA Y GEOGRAFIA",
      phone: "987654346",
    },
    {
      grado: "Mat.",
      nombre: "GUTIERREZ DELGADO, ADAUS",
      especialidad: "EDUCACION FISICA",
      phone: "987654347",
    },
    {
      grado: "Prof.",
      nombre: "GUTIERREZ DIAZ, EPIFANIO MARTIN",
      especialidad: "EDUCACION FISICA",
      phone: "987654348",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/GUTIERREZ%20DIAZ%20EPIFANIO%20MARTIN.jpg",
    },
    {
      grado: "Lic.",
      nombre: "HOLDER TAMAYO, ALEXEY",
      especialidad: "EDUCACION FISICA",
      phone: "987654349",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/HOLDER%20TAMAYO%20ALEXEY.jpg",
    },
    {
      grado: "Mat.",
      nombre: "HUAMAN CORDOVA, ALEXANDER",
      especialidad: "EDUCACION FISICA",
      phone: "987654350",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/HUAMAN%20CORDOVA%20ALEXANDER.jpg",
    },
    {
      grado: "Dra.",
      nombre: "HUANACO BUSTINZA, MERY ZULEMA",
      especialidad: "EDUCACION INICIAL",
      phone: "987654351",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/HUANACO%20BUSTINZA%20MERY%20ZULEMA.jpg",
    },
    {
      grado: "Prof.",
      nombre: "HUILLCA CCUNO, ROCDY",
      especialidad: "EDUCACIÓN FISICA",
      phone: "987654352",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/HUILLCA%20CCUNO%20ROCDY.jpg",
    },
    {
      grado: "Prof.",
      nombre: "INCARROCA QUISPE, WILBER",
      especialidad: "EDUCACIÓN FISICA",
      phone: "987654353",
    },
    {
      grado: "Ing.",
      nombre: "LOPE DAZA, LUZ KATIA",
      especialidad: "ESTADISTICO",
      phone: "987654354",
    },
    {
      grado: "Dra.",
      nombre: "MOSQUEIRA SOTOMAYOR, IDA ANTONIA",
      especialidad: "EDUCACION INICIAL",
      phone: "987654355",
      image:
        "https://arcoiris.edu.pe/assets/Img/Fotos_Docentes/MOSQUEIRA%20SOTOMAYOR%20IDA%20ANTONIA.jpg",
    },
    {
      grado: "Bch.",
      nombre: "MUÑOZ HUAMANCARI, MARIA ANTONIETA",
      especialidad: "HISTORIA",
      phone: "987654356",
    },
    {
      grado: "Lic.",
      nombre: "OLIVERA LEZAMA, JULIO EDMUNDO",
      especialidad: "ANTROPOLOGIA",
      phone: "987654357",
    },
    {
      grado: "Mat.",
      nombre: "OVALLE ARAPA, HUGO",
      especialidad: "ARTE",
      phone: "987654358",
    },
    {
      grado: "Mgt.",
      nombre: "PEÑA PACHECO, YENNY",
      especialidad: "EDUCACION FISICA",
      phone: "987654359",
    },
    {
      grado: "Prof.",
      nombre: "PEREZ OPORTO, GLORIA MARY LUZ",
      especialidad: "EDUCACION INICIAL, EDUCACION FISICA",
      phone: "987654360",
    },
    {
      grado: "Prof.",
      nombre: "QUIÑONES FERNANDEZ, ADOLFO",
      especialidad: "N/A",
      phone: "987654361",
    },
    {
      grado: "Lic.",
      nombre: "QUISIYUPANQUI CATALAN, MARTHA",
      especialidad: "EDUCACIÓN FISICA",
      phone: "987654362",
    },
    {
      grado: "Prof.",
      nombre: "QUISPE ARROYO, FELIX",
      especialidad: "EDUCACION FISICA",
      phone: "987654363",
    },
    {
      grado: "Md.",
      nombre: "QUISPE SUPANTA, ERICK WAGNER",
      especialidad: "MEDICO",
      phone: "987654364",
    },
    {
      grado: "Lic.",
      nombre: "RAMIREZ PEZO, ABEL",
      especialidad: "TURISMO",
      phone: "987654365",
    },
    {
      grado: "Mgt.",
      nombre: "RODRIGUEZ SOTO, VICTOR",
      especialidad: "EDUCACION PRIMARIA",
      phone: "987654366",
    },
    {
      grado: "Prof.",
      nombre: "ROSAS GOMEZ, RENZO GUILLERMO",
      especialidad: "EDUCACION FISICA",
      phone: "987654367",
    },
    {
      grado: "Prof.",
      nombre: "SALAZAR VALENCIA, LUCIA CEFERINA",
      especialidad: "EDUCACION INICIAL",
      phone: "987654368",
    },
    {
      grado: "Prof.",
      nombre: "SALCEDO QUISPE, JULIO CESAR",
      especialidad: "EDUCACIÓN FISICA",
      phone: "987654369",
    },
    {
      grado: "Mgt.",
      nombre: "SARAVIA PEÑA, CELINDA",
      especialidad: "COMUNICACIÓN",
      phone: "987654370",
    },
    {
      grado: "Lic.",
      nombre: "SERRANO FLOREZ, OSCAR",
      especialidad: "EDUCACION FISICA",
      phone: "987654371",
    },
    {
      grado: "Lic.",
      nombre: "SORIA MENDOZA, YULI YASMINA",
      especialidad: "INVESTIGACIÓN",
      phone: "987654372",
    },
    {
      grado: "Mat.",
      nombre: "TAPIA ALOSILLA, ROGER TEOFILO",
      especialidad: "MATEMATICA E INFORMATICA",
      phone: "987654373",
    },
    {
      grado: "Mgt.",
      nombre: "TAPIA MELENDEZ, DAVID ARTURO",
      especialidad: "CIENCIAS SOCIALES",
      phone: "987654374",
    },
    {
      grado: "Prof.",
      nombre: "TORRES HUAMAN, JANIA KARIN",
      especialidad: "BIOLOGIA Y QUIMICA",
      phone: "987654375",
    },
    {
      grado: "Prof.",
      nombre: "VALENZUELA BARRETO, ELOY",
      especialidad: "EDUCACION FISICA",
      phone: "987654376",
    },
    {
      grado: "Lic.",
      nombre: "VICTORIA CABALLERO, YANIRA",
      especialidad: "EDUCACIÓN PRIMARIA",
      phone: "987654377",
    },
    {
      grado: "Prof.",
      nombre: "VICTORIO MOSCOSO, ANGIE MICHELLE",
      especialidad: "EDUCACIÓN INICIAL",
      phone: "987654378",
    },
    {
      grado: "Lic.",
      nombre: "YANA MOSQUEIRA, KALINKA KRUSKAYA",
      especialidad: "PSICOLOGA",
      phone: "987654379",
    },
    {
      grado: "Mgt.",
      nombre: "ZARATE CASTRO, FRANCISCO PEPE",
      especialidad: "CIENCIAS SOCIALES",
      phone: "987654380",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F0F2F5", overflow: "hidden" }}>
      {/* 1. PORTADA HERO */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "60vh" },
          display: "flex",
          alignItems: "center",
          bgcolor: "#003366",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')",
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
                color: "#007BFF",
                fontWeight: 900,
                letterSpacing: 3,
                fontSize: "1.2rem",
              }}
            >
              NUESTRO EQUIPO
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
              Directorio Institucional
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
              Conoce a los líderes y profesionales que impulsan nuestra misión
              educativa.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. ORGANIGRAMA INSTITUCIONAL */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Box data-aos="zoom-in" sx={{ textAlign: "center", mb: 6 }}>
          <AccountTreeIcon sx={{ fontSize: 50, color: "#007BFF", mb: 2 }} />
          <Typography
            variant="h3"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
          >
            Organigrama Institucional
          </Typography>
          <Typography variant="body1" color="#333333" mt={1}>
            Nuestra estructura organizativa para una gestión eficiente y
            transparente.
            <br />
            Estructura jerárquica del Instituto Superior Pedagógico Privado Arco
            Iris del Cusco.
          </Typography>
        </Box>

        <Box data-aos="fade-up">
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: "24px",
              border: "2px dashed rgba(0, 123, 255, 0.4)",
              bgcolor: "#ffffff",
              minHeight: "750px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
            }}
          >
            <Box
              component="img"
              width="75%"
              height="auto"
              loading="lazy"
              src="https://arcoiris.edu.pe/assets/Img/organigrama_iespp_arcoiris_cusco.jpg"
            ></Box>
          </Paper>
        </Box>
      </Container>

      {/* 3. PERSONAL DIRECTIVO Y ADMINISTRATIVO */}
      <Box
        sx={{ bgcolor: "#003366", py: 10, color: "#fff", position: "relative" }}
      >
        <Container maxWidth="lg">
          {/* Directivo */}
          <Box mb={10}>
            <Box
              data-aos="fade-right"
              sx={{ mb: 6, borderLeft: "4px solid #007BFF", pl: 3 }}
            >
              <Typography
                variant="h3"
                fontWeight="900"
                textTransform="uppercase"
              >
                Personal Directivo
              </Typography>
              <Typography variant="body1" color="#a0aec0" mt={1}>
                Líderes comprometidos con la visión y misión de nuestra
                institución.
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {directivo.map((person, idx) => (
                <Grid
                  size={{ xs: 12, md: 6 }}
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <Paper
                    sx={{
                      p: 4,
                      borderRadius: "16px",
                      bgcolor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        borderColor: "#007BFF",
                        bgcolor: "rgba(0,123,255,0.1)",
                      },
                    }}
                  >
                    <AssignmentIndIcon
                      sx={{ fontSize: 50, color: "#C59B27" }}
                    />
                    <Box>
                      <Typography
                        variant="caption"
                        color="#007BFF"
                        fontWeight="bold"
                        letterSpacing={1}
                      >
                        {person.cargo}
                      </Typography>
                      <Typography variant="h6" fontWeight="bold" color="#fff">
                        {person.grado} {person.nombre}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Administrativo */}
          <Box>
            <Box
              data-aos="fade-right"
              sx={{ mb: 6, borderLeft: "4px solid #C59B27", pl: 3 }}
            >
              <Typography
                variant="h3"
                fontWeight="900"
                textTransform="uppercase"
              >
                Personal Administrativo
              </Typography>
              <Typography variant="body1" color="#a0aec0" mt={1}>
                Nuestro equipo que asegura el funcionamiento eficiente y el
                soporte integral.
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {administrativo.map((person, idx) => {
                const hasImage = !!person.image;
                return (
                  <Grid
                    size={{ xs: 12, sm: 6, md: 4 }}
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={idx * 50}
                  >
                    <Paper
                      sx={{
                        p: 3,
                        borderRadius: "16px",
                        bgcolor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        // --- NUEVAS PROPIEDADES PARA EL EFECTO ---
                        position: "relative",
                        overflow: "hidden",
                        height: "120px",

                        transition:
                          "height 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease",

                        "&:hover": hasImage
                          ? {
                              height: "340px",
                              borderColor: "#C59B27",
                              bgcolor: "rgba(197, 155, 39, 0.05)",
                              transform: "translateY(-5px)",
                              zIndex: 10,
                              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                            }
                          : {
                              transform: "translateY(-5px)",
                              borderColor: "#C59B27",
                              bgcolor: "rgba(197, 155, 39, 0.05)",
                            },

                        // Gatillo para animar la caja de la imagen por dentro
                        "&:hover .admin-img-box": hasImage
                          ? {
                              opacity: 1,
                              transform: "translateY(0)",
                            }
                          : {},
                        // ----------------------------------------
                      }}
                    >
                      {/* Contenido Texto */}
                      <Box sx={{ position: "relative", zIndex: 2 }}>
                        <Typography
                          variant="caption"
                          color="#C59B27"
                          fontWeight="bold"
                          display="block"
                          mb={0.5}
                        >
                          {person.cargo}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          color="#fff"
                          lineHeight={1.3}
                        >
                          {person.grado} {person.nombre}
                        </Typography>

                        {hasImage && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              mt: 1,
                              color: "rgba(255,255,255,0.4)",
                            }}
                          >
                            <ImageIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption">
                              Pasa el mouse para ver perfil
                            </Typography>
                          </Box>
                        )}
                      </Box>

                      {/* Imagen Oculta que se revela*/}
                      {hasImage && (
                        <Box
                          className="admin-img-box"
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "230px",
                            // --- ESTADOS INICIALES PARA ANIMACIÓN ---
                            opacity: 0,
                            transform: "translateY(50px)",
                            transition:
                              "opacity 0.4s ease, transform 0.4s ease",
                            zIndex: 1,
                          }}
                        >
                          <Box
                            component="img"
                            src={person.image}
                            alt={person.nombre}
                            loading="lazy"
                            sx={{
                              width: "70%",
                              height: "100%",
                              borderRadius: "45% 45% 0 0",
                              objectFit: "cover",
                              objectPosition: "top center",
                              display: "block",
                              margin: "0 auto",
                              borderTop: "1px solid rgba(255,255,255,0.1)",
                            }}
                          />
                        </Box>
                      )}
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 4. PERSONAL DOCENTE OPTIMIZADO */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box data-aos="zoom-in" sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="overline"
            sx={{ color: "#007BFF", fontWeight: 900, letterSpacing: 2 }}
          >
            EXCELENCIA ACADÉMICA
          </Typography>
          <Typography
            variant="h2"
            fontWeight="900"
            color="#003366"
            textTransform="uppercase"
            mb={2}
          >
            Personal Docente
          </Typography>
          <Typography
            variant="h6"
            color="#333333"
            fontWeight="400"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            Nuestros docentes, el pilar fundamental de la formación académica y
            profesional.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {docentes.map((docente, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              data-aos="fade-up"
              data-aos-offset="100"
            >
              <DocenteCard
                docente={docente}
                onOpenCV={handleOpenCV}
                onCopyPhone={handleCopyPhone}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SNACKBAR PARA AVISO DE NÚMERO COPIADO */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%", bgcolor: "#003366", color: "#fff" }}
        >
          ¡Número copiado al portapapeles exitosamente!
        </Alert>
      </Snackbar>

      {/* MODAL PDF PARA VER CV */}
      <Dialog
        open={openPdf}
        onClose={() => setOpenPdf(false)}
        maxWidth="lg"
        fullWidth
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            bgcolor: "#003366",
            color: "#ffffff",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Curriculum Vitae - {selectedDocente}
          </Typography>
          <IconButton
            onClick={() => setOpenPdf(false)}
            sx={{ color: "#ffffff" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent sx={{ p: 0, height: "80vh", bgcolor: "#333333" }}>
          {selectedCvUrl ? (
            <iframe
              src={selectedCvUrl}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title={`CV de ${selectedDocente}`}
            />
          ) : (
            <Typography color="white" textAlign="center" mt={10}>
              Cargando documento...
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
