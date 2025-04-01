export interface User {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
}

export type TemplateType = "invitacion" | "recordatorio" | "personalizado";
export type ChannelType = "sms" | "correo" | "whatsapp";

export interface MessageData {
  template: TemplateType;
  channels: ChannelType[];
  messages: {
    sms: string;
    correo: {
      asunto: string;
      mensaje: string;
    };
    whatsapp: string;
  };
}
