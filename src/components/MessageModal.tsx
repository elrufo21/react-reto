import React, { useState, useEffect } from "react";
import { produce } from "immer";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
} from "@mui/material";
import TemplateSelection from "./steps/TemplateSelection";
import ChannelSelection from "./steps/ChannelSelection";
import MessageComposition from "./steps/MessageComposition";
import { User, TemplateType, ChannelType, MessageData } from "../types";
import { TEMPLATE_MESSAGES } from "../constants/templates";

interface MessageModalProps {
  open: boolean;
  onClose: () => void;
  user: User;
}

const steps = [
  "Selección de Plantilla",
  "Selección de Canales",
  "Composición de Mensaje",
];

const MessageModal: React.FC<MessageModalProps> = ({ open, onClose, user }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [messageData, setMessageData] = useState<MessageData>({
    template: "invitacion",
    channels: [],
    messages: {
      sms: TEMPLATE_MESSAGES.invitacion.sms.replace(/\[nombre\]/g, user.nombre),
      whatsapp: TEMPLATE_MESSAGES.invitacion.whatsapp.replace(
        /\[nombre\]/g,
        user.nombre
      ),
      correo: {
        asunto: TEMPLATE_MESSAGES.invitacion.correo.asunto,
        mensaje: TEMPLATE_MESSAGES.invitacion.correo.mensaje.replace(
          /\[nombre\]/g,
          user.nombre
        ),
      },
    },
  });

  useEffect(() => {
    if (open) {
      setMessageData((prev) => ({
        ...prev,
        template: "invitacion",
        messages: {
          sms: TEMPLATE_MESSAGES.invitacion.sms.replace(
            /\[nombre\]/g,
            user.nombre
          ),
          whatsapp: TEMPLATE_MESSAGES.invitacion.whatsapp.replace(
            /\[nombre\]/g,
            user.nombre
          ),
          correo: {
            asunto: TEMPLATE_MESSAGES.invitacion.correo.asunto,
            mensaje: TEMPLATE_MESSAGES.invitacion.correo.mensaje.replace(
              /\[nombre\]/g,
              user.nombre
            ),
          },
        },
      }));
    }
  }, [open, user.nombre]);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleTemplateChange = (template: TemplateType) => {
    setMessageData(
      produce(messageData, (draft) => {
        draft.template = template;
        if (template !== "personalizado") {
          const templateMessages = TEMPLATE_MESSAGES[template];
          draft.messages = {
            sms: templateMessages.sms.replace(/\[nombre\]/g, user.nombre),
            whatsapp: templateMessages.whatsapp.replace(
              /\[nombre\]/g,
              user.nombre
            ),
            correo: {
              asunto: templateMessages.correo.asunto,
              mensaje: templateMessages.correo.mensaje.replace(
                /\[nombre\]/g,
                user.nombre
              ),
            },
          };
        } else {
          draft.messages = {
            sms: "",
            whatsapp: "",
            correo: {
              asunto: "",
              mensaje: "",
            },
          };
        }
      })
    );
  };

  const handleChannelToggle = (channel: ChannelType) => {
    setMessageData(
      produce(messageData, (draft) => {
        if (draft.channels.includes(channel)) {
          draft.channels = draft.channels.filter((c) => c !== channel);
        } else {
          draft.channels.push(channel);
        }
      })
    );
  };

  const handleMessageChange = (
    channel: ChannelType,
    message: string,
    field?: "asunto" | "mensaje"
  ) => {
    setMessageData(
      produce(messageData, (draft) => {
        if (channel === "correo" && field) {
          draft.messages.correo[field] = message;
        } else if (channel === "sms") {
          draft.messages.sms = message;
        } else if (channel === "whatsapp") {
          draft.messages.whatsapp = message;
        }
      })
    );
  };

  const handleSendMessage = () => {
    const filteredMessages: any = {};

    if (messageData.channels.includes("sms")) {
      filteredMessages.sms = messageData.messages.sms;
    }

    if (messageData.channels.includes("whatsapp")) {
      filteredMessages.whatsapp = messageData.messages.whatsapp;
    }

    if (messageData.channels.includes("correo")) {
      filteredMessages.correo = messageData.messages.correo;
    }

    const dataToSend = {
      template: messageData.template,
      channels: messageData.channels,
      messages: filteredMessages,
    };

    console.log("Datos enviados:", dataToSend);

    onClose();
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <TemplateSelection
            selectedTemplate={messageData.template}
            onTemplateChange={handleTemplateChange}
          />
        );
      case 1:
        return (
          <ChannelSelection
            selectedChannels={messageData.channels}
            onChannelToggle={handleChannelToggle}
          />
        );
      case 2:
        return (
          <MessageComposition
            selectedChannels={messageData.channels}
            messages={messageData.messages}
            onMessageChange={handleMessageChange}
          />
        );
      default:
        return "Paso desconocido";
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Enviar mensaje a {user.nombre}</DialogTitle>

      <DialogContent>
        <Box className="mb-6 mt-2">
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box className="py-4">{getStepContent(activeStep)}</Box>
      </DialogContent>

      <DialogActions className="p-4">
        <Button onClick={onClose} color="inherit">
          Cancelar
        </Button>

        <Box className="flex-grow" />

        {activeStep > 0 && (
          <Button onClick={handleBack} color="inherit" className="mr-2">
            Atrás
          </Button>
        )}

        {activeStep === steps.length - 1 ? (
          <Button
            onClick={handleSendMessage}
            variant="contained"
            color="primary"
          >
            Enviar
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            variant="contained"
            color="primary"
            disabled={
              (activeStep === 0 && !messageData.template) ||
              (activeStep === 1 && messageData.channels.length === 0)
            }
          >
            Siguiente
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default MessageModal;
