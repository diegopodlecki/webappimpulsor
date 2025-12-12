# Proyecto de Landing Page Moderna

Este proyecto es una landing page moderna para una agencia de servicios digitales, que incluye un chatbot, un enlace a WhatsApp e integración con Supabase para la captura de prospectos.

## Configuración

### Supabase

1.  Crea un nuevo proyecto en [Supabase](https://supabase.com/).
2.  Ve a la sección "SQL Editor" y ejecuta la siguiente consulta para crear la tabla `prospectos`:
    ```sql
    CREATE TABLE prospectos (
      id SERIAL PRIMARY KEY,
      nombre TEXT NOT NULL,
      email TEXT NOT NULL,
      mensaje TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
    );
    ```

### Backend

1.  Navega al directorio `backend`:
    ```bash
    cd backend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Crea un archivo `.env` en el directorio `backend` y agrega tus credenciales de Supabase:
    ```env
    SUPABASE_URL=TU_URL_DE_SUPABASE
    SUPABASE_ANON_KEY=TU_CLAVE_ANON_DE_SUPABASE
    ```
4.  Inicia el servidor del backend:
    ```bash
    npm run dev
    ```

### Frontend

1.  Navega al directorio `frontend`:
    ```bash
    cd frontend
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Crea un archivo `.env` en el directorio `frontend` y agrega tu número de teléfono de WhatsApp y la URL de la API:
    ```env
    VITE_WHATSAPP_PHONE_NUMBER=TU_NUMERO_DE_TELEFONO_DE_WHATSAPP
    VITE_API_URL=http://localhost:3000/api
    ```
4.  Inicia el servidor de desarrollo del frontend:
    ```bash
    npm run dev
    ```
