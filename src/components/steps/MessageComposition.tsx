import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Box,
  Paper,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { ChannelType, MessageData } from "../../types";

interface MessageCompositionProps {
  selectedChannels: ChannelType[];
  messages: MessageData["messages"];
  onMessageChange: (
    channel: ChannelType,
    message: string,
    field?: "asunto" | "mensaje"
  ) => void;
}

const MessageComposition: React.FC<MessageCompositionProps> = ({
  selectedChannels,
  messages,
  onMessageChange,
}) => {
  const orderedChannels: ChannelType[] = [];

  if (selectedChannels.includes("sms")) {
    orderedChannels.push("sms");
  }

  if (selectedChannels.includes("correo")) {
    orderedChannels.push("correo");
  }

  if (selectedChannels.includes("whatsapp")) {
    orderedChannels.push("whatsapp");
  }

  const [activeChannelIndex, setActiveChannelIndex] = useState(0);

  useEffect(() => {
    setActiveChannelIndex(0);
  }, [selectedChannels]);

  if (orderedChannels.length === 0) {
    return (
      <Typography color="error">
        No ha seleccionado ningún canal. Por favor, regrese al paso anterior.
      </Typography>
    );
  }

  const currentChannel = orderedChannels[activeChannelIndex];

  const handleNext = () => {
    if (activeChannelIndex < orderedChannels.length - 1) {
      setActiveChannelIndex(activeChannelIndex + 1);
    }
  };

  const handleBack = () => {
    if (activeChannelIndex > 0) {
      setActiveChannelIndex(activeChannelIndex - 1);
    }
  };

  const getChannelLabel = (channel: ChannelType) => {
    switch (channel) {
      case "sms":
        return "SMS";
      case "correo":
        return "Correo electrónico";
      case "whatsapp":
        return "WhatsApp";
      default:
        return channel;
    }
  };

  return (
    <div className="space-y-6">
      <Typography variant="h6" gutterBottom>
        Componga sus mensajes
      </Typography>

      {/* Stepper para mostrar en qué canal estamos */}
      <Stepper activeStep={activeChannelIndex} alternativeLabel>
        {orderedChannels.map((channel) => (
          <Step key={channel}>
            <StepLabel>{getChannelLabel(channel)}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {currentChannel === "sms" && (
          <Paper variant="outlined" sx={{ p: 3, bgcolor: "#f9f9f9" }}>
            <Typography
              variant="h6"
              gutterBottom
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              SMS
            </Typography>
            <TextField
              label="Mensaje"
              multiline
              rows={3}
              fullWidth
              value={messages.sms}
              onChange={(e) => onMessageChange("sms", e.target.value)}
              placeholder="Escriba su mensaje SMS"
              variant="outlined"
            />
          </Paper>
        )}

        {currentChannel === "correo" && (
          <Paper variant="outlined" sx={{ p: 3, bgcolor: "#f9f9f9" }}>
            <Typography
              variant="h6"
              gutterBottom
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              Correo electrónico
            </Typography>
            <Box className="space-y-4">
              <TextField
                label="Asunto"
                fullWidth
                value={messages.correo.asunto}
                onChange={(e) =>
                  onMessageChange("correo", e.target.value, "asunto")
                }
                placeholder="Escriba el asunto del correo"
                variant="outlined"
              />
              <TextField
                label="Mensaje"
                multiline
                rows={6}
                fullWidth
                value={messages.correo.mensaje}
                onChange={(e) =>
                  onMessageChange("correo", e.target.value, "mensaje")
                }
                placeholder="Escriba el cuerpo del correo"
                variant="outlined"
              />
            </Box>
          </Paper>
        )}

        {currentChannel === "whatsapp" && (
          <Paper variant="outlined" sx={{ p: 3, bgcolor: "#f9f9f9" }}>
            <Typography
              variant="h6"
              gutterBottom
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              WhatsApp
            </Typography>
            <TextField
              label="Mensaje"
              multiline
              rows={3}
              fullWidth
              value={messages.whatsapp}
              onChange={(e) => onMessageChange("whatsapp", e.target.value)}
              placeholder="Escriba su mensaje de WhatsApp"
              variant="outlined"
            />
          </Paper>
        )}

        {/* Botones para navegar entre canales */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            onClick={handleBack}
            disabled={activeChannelIndex === 0}
            variant="outlined"
          >
            Anterior
          </Button>
          <Button
            onClick={handleNext}
            disabled={activeChannelIndex === orderedChannels.length - 1}
            variant="contained"
          >
            Siguiente
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default MessageComposition;
