import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Modal,
  TextField,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid";

// Paleta oscura
const COLORS = {
  primary: "#0A1929",
  secondary: "#001E3C",
  accent: "#132F4C",
  surface: "#0A1929CC",
  text: "#F3F6F9",
  free: "#173A5E",
};

// Data mock
const reservasDB = [
  {
    id: 1,
    fecha: "2026-06-05",
    inicio: "08:00",
    fin: "10:00",
    docente: "Raul Díaz Castro",
  },
  {
    id: 2,
    fecha: "2026-06-03",
    inicio: "14:00",
    fin: "16:00",
    docente: "María Zavaleta",
  },
];

// Estructura grid
const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const HORAS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

// Obtener fecha
const getFechasSemana = (fechaBase) => {
  const diaSemana = fechaBase.getDay();
  const lunes = new Date(fechaBase);
  lunes.setDate(fechaBase.getDate() - (diaSemana === 0 ? 6 : diaSemana - 1));

  return DIAS.map((_, i) => {
    const d = new Date(lunes);
    d.setDate(lunes.getDate() + i);
    return d.toISOString().split("T")[0];
  });
};

export default function ReservaComp() {
  // Manejo estados
  const [fechaActual, setFechaActual] = useState(new Date("2026-06-05"));
  const [modalOpen, setModalOpen] = useState(false);
  const [slot, setSlot] = useState(null);

  // Data form
  const [formData, setFormData] = useState({
    docente: "",
    alumnos: "",
  });

  const fechasSemana = getFechasSemana(fechaActual);

  // Buscar reserva
  const checkReserva = (fecha, hora) => {
    return reservasDB.find(
      (r) => r.fecha === fecha && r.inicio <= hora && r.fin > hora,
    );
  };

  // Abrir modal
  const handleSlotClick = (fecha, hora, reserva) => {
    if (reserva) return;
    setSlot({ fecha, hora });
    setModalOpen(true);
  };

  // Cerrar modal
  const handleClose = () => {
    setModalOpen(false);
    setSlot(null);
  };

  // Cambiar input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        bgcolor: COLORS.primary,
        minHeight: "100vh",
        pt: { xs: 10, md: 14 },
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        {/* Encabezado bento */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: COLORS.secondary,
                borderRadius: "24px",
                color: COLORS.text,
                height: "100%",
              }}
            >
              <Typography variant="h4" fontWeight="bold" mb={1}>
                Calendario de Reservas
              </Typography>
              <Typography variant="body1" color={`${COLORS.text}99`}>
                Seleccione un horario disponible para registrar su clase.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: COLORS.accent,
                borderRadius: "24px",
                color: COLORS.text,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="overline" color={`${COLORS.text}99`}>
                Semana Actual
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {fechasSemana[0]} / {fechasSemana[4]}
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Grilla principal */}
        <Paper
          elevation={0}
          sx={{
            bgcolor: COLORS.secondary,
            borderRadius: "24px",
            overflow: "hidden",
            border: `1px solid ${COLORS.accent}`,
          }}
        >
          <Box sx={{ display: "flex", overflowX: "auto" }}>
            {/* Columna horas */}
            <Box
              sx={{
                minWidth: "80px",
                borderRight: `1px solid ${COLORS.accent}`,
              }}
            >
              <Box
                sx={{ h: "60px", borderBottom: `1px solid ${COLORS.accent}` }}
              />
              {HORAS.map((hora) => (
                <Box
                  key={hora}
                  sx={{
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: `1px solid ${COLORS.accent}`,
                    color: `${COLORS.text}80`,
                  }}
                >
                  <Typography variant="caption" fontWeight="bold">
                    {hora}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Columnas días */}
            {DIAS.map((dia, index) => {
              const fechaDia = fechasSemana[index];
              return (
                <Box
                  key={dia}
                  sx={{
                    flex: 1,
                    minWidth: "150px",
                    borderRight: `1px solid ${COLORS.accent}`,
                  }}
                >
                  <Box
                    sx={{
                      height: "60px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: `1px solid ${COLORS.accent}`,
                      bgcolor: COLORS.accent,
                      color: COLORS.text,
                    }}
                  >
                    <Typography variant="subtitle2" fontWeight="bold">
                      {dia}
                    </Typography>
                    <Typography variant="caption" color={`${COLORS.text}99`}>
                      {fechaDia}
                    </Typography>
                  </Box>

                  {/* Celdas horas */}
                  {HORAS.map((hora) => {
                    const reserva = checkReserva(fechaDia, hora);
                    return (
                      <Box
                        key={`${fechaDia}-${hora}`}
                        onClick={() => handleSlotClick(fechaDia, hora, reserva)}
                        sx={{
                          height: "100px",
                          borderBottom: `1px solid ${COLORS.accent}`,
                          p: 1,
                          cursor: reserva ? "default" : "pointer",
                          transition: "all 0.2s",
                          "&:hover": {
                            bgcolor: reserva ? "" : COLORS.free,
                          },
                        }}
                      >
                        {reserva && (
                          <Paper
                            elevation={0}
                            sx={{
                              height: "100%",
                              p: 1.5,
                              bgcolor: COLORS.primary,
                              borderRadius: "8px",
                              borderLeft: `4px solid #64FFDA`,
                              color: COLORS.text,
                              overflow: "hidden",
                            }}
                          >
                            <Typography
                              variant="caption"
                              display="block"
                              color={`${COLORS.text}80`}
                            >
                              {reserva.inicio} - {reserva.fin}
                            </Typography>
                            <Typography
                              variant="body2"
                              fontWeight="bold"
                              noWrap
                            >
                              {reserva.docente}
                            </Typography>
                          </Paper>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Container>

      {/* Modal flotante */}
      <Modal
        open={modalOpen}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper
          elevation={24}
          sx={{
            width: "100%",
            maxWidth: "400px",
            m: 2,
            p: 4,
            borderRadius: "24px",
            bgcolor: COLORS.surface,
            backdropFilter: "blur(16px)",
            border: `1px solid ${COLORS.accent}`,
            color: COLORS.text,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Nueva Reserva
          </Typography>
          <Typography variant="body2" color={`${COLORS.text}99`} mb={3}>
            {slot?.fecha} a las {slot?.hora}
          </Typography>

          <TextField
            fullWidth
            label="Docente"
            name="docente"
            value={formData.docente}
            onChange={handleChange}
            sx={inputStyles}
          />

          <TextField
            fullWidth
            type="number"
            label="Alumnos"
            name="alumnos"
            value={formData.alumnos}
            onChange={handleChange}
            sx={{ ...inputStyles, mt: 2 }}
          />

          <Divider sx={{ my: 3, borderColor: COLORS.accent }} />

          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button onClick={handleClose} sx={{ color: COLORS.text }}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#64FFDA",
                color: COLORS.primary,
                fontWeight: "bold",
              }}
            >
              Confirmar
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
}

// Estilos inputs
const inputStyles = {
  "& .MuiInputLabel-root": { color: `${COLORS.text}80` },
  "& .MuiOutlinedInput-root": {
    color: COLORS.text,
    "& fieldset": { borderColor: COLORS.accent },
    "&:hover fieldset": { borderColor: `${COLORS.text}80` },
    "&.Mui-focused fieldset": { borderColor: "#64FFDA" },
  },
};
