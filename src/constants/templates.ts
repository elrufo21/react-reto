export const TEMPLATE_MESSAGES = {
    invitacion: {
      sms: "Hola [Nombre], te invitamos a participar en el proceso de [nombre del proceso/actividad] que se llevará a cabo el [fecha] a las [hora]. Por favor, confirma tu asistencia respondiendo a este mensaje. ¡Te esperamos!",
      whatsapp: "Hola [Nombre], te invitamos a participar en el proceso de [nombre del proceso/actividad] que se llevará a cabo el [fecha] a las [hora]. Por favor, confirma tu asistencia respondiendo a este mensaje. ¡Te esperamos!",
      correo: {
        asunto: "Invitación al proceso de [nombre del proceso]",
        mensaje: `Estimado/a [Nombre],
  
  Esperamos que te encuentres bien. A través de este medio, queremos invitarte a participar en el proceso de [nombre del proceso], que se llevará a cabo el [fecha] a las [hora]. El lugar del encuentro será [dirección/sala virtual].
  
  Tu participación es muy importante para nosotros. Agradeceríamos que confirmes tu asistencia respondiendo a este correo.
  
  Quedamos atentos a cualquier consulta que puedas tener.
  
  Cordialmente,
  [Nombre del remitente]
  [puesto]
  [Empresa/Organización]`
      }
    },
    recordatorio: {
      sms: "Hola [Nombre], te recordamos que el proceso de [nombre del proceso/actividad] al que confirmaste tu asistencia se realizará el [fecha] a las [hora]. ¡Te esperamos puntual!",
      whatsapp: "Hola [Nombre], te recordamos que el proceso de [nombre del proceso/actividad] al que confirmaste tu asistencia se realizará el [fecha] a las [hora]. ¡Te esperamos puntual!",
      correo: {
        asunto: "Recordatorio del proceso de [nombre del proceso]",
        mensaje: `Estimado/a [Nombre],
  
  Queremos recordarte que el proceso de [nombre del proceso], al que amablemente confirmaste tu asistencia, se realizará el [fecha] a las [hora].
  
  El evento tendrá lugar en [dirección/sala virtual]. Si tienes alguna duda o necesitas asistencia previa, no dudes en contactarnos.
  
  Te esperamos puntual.
  
  Saludos cordiales,
  [Nombre del remitente]
  [puesto]
  [Empresa/Organización]`
      }
    },
    personalizado: {
      sms: "",
      whatsapp: "",
      correo: {
        asunto: "",
        mensaje: ""
      }
    }
  };