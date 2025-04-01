# 📬 Sistema de Mensajería 

## 📖 Descripción

Esta aplicación web permite enviar mensajes personalizados a usuarios a través de múltiples canales de comunicación (**SMS, correo electrónico y WhatsApp**) de manera sencilla y eficiente. Diseñada con una interfaz intuitiva, facilita la gestión de comunicaciones masivas utilizando **plantillas predefinidas** o mensajes personalizados.

---

## 🚀 Características principales

✅ **Envío multicanal**: Permite enviar mensajes a través de **SMS, correo electrónico y WhatsApp** desde una única interfaz.  
✅ **Plantillas predefinidas**: Incluye plantillas de **"Invitación"** y **"Recordatorio"** para una creación rápida de mensajes.  
✅ **Personalización de mensajes**: Posibilidad de **personalizar** cada mensaje según el canal seleccionado.  
✅ **Flujo de trabajo guiado**: Proceso **paso a paso** que facilita la creación y envío de mensajes.  
✅ **Interfaz amigable**: Diseño moderno e intuitivo desarrollado con **React y Material UI**.

---

## ⚙️ Instalación

### 📌 Requisitos previos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### 📥 Pasos para instalar

1️⃣ Clona el repositorio:

```sh
 git clone https://github.com/elrufo21/react-reto.git
 cd react-reto
```

2️⃣ Instala las dependencias:

```sh
 npm install  # o yarn install
```

3️⃣ Inicia la aplicación en modo desarrollo:

```sh
 npm run dev  # o yarn dev
```

📌 La aplicación estará disponible en **[http://localhost:5173](http://localhost:5173)**

---

## 📝 Guía de uso

1. **Visualiza la lista de usuarios**: Al iniciar la aplicación, verás una lista de usuarios disponibles.
2. **Inicia el envío de mensajes**: Haz clic en el botón **"Enviar Mensaje"** junto al usuario deseado.
3. **Selección de plantilla**: Elige entre **"Invitación", "Recordatorio" o "Personalizado"**.
4. **Selección de canales**: Marca los canales por los que deseas enviar el mensaje (**SMS, correo, WhatsApp**).
5. **Composición del mensaje**: Personaliza el contenido para cada canal seleccionado.
6. **Envío**: Finalmente, **envía el mensaje** y recibe la confirmación.

---

## 📂 Estructura del proyecto

El proyecto sigue una estructura organizada para facilitar su mantenimiento:

```
/sistema-mensajeria-multicanal
│── /src          # Código fuente de la aplicación
│── /components   # Componentes React reutilizables
│── /steps        # Componentes para cada paso del proceso de envío
│── /constants    # Definiciones de constantes y plantillas
│── /types        # Definiciones de tipos TypeScript
```

---

## 🛠️ Tecnologías utilizadas

🔹 **React 19** → Biblioteca para construir interfaces de usuario.  
🔹 **TypeScript** → Superset de JavaScript con tipos estáticos.  
🔹 **Material UI 7** → Biblioteca de componentes de interfaz de usuario.  
🔹 **Immer** → Para la gestión inmutable del estado.  
🔹 **Vite** → Herramienta de construcción rápida para desarrollo web.  
🔹 **TailwindCSS 4** → Framework de CSS utilitario.
