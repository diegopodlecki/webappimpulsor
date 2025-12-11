# Modern Landing Page Project

This project is a modern landing page for a digital services agency, featuring a chatbot, a WhatsApp link, and Supabase integration for lead capture.

## Setup

### Backend

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory and add your Supabase credentials:
    ```env
    SUPABASE_URL=YOUR_SUPABASE_URL
    SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```
4.  Start the backend server:
    ```bash
    npm run dev
    ```

### Frontend

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `frontend` directory and add your WhatsApp phone number:
    ```env
    VITE_WHATSAPP_PHONE_NUMBER=YOUR_WHATSAPP_PHONE_NUMBER
    ```
4.  Start the frontend development server:
    ```bash
    npm run dev
    ```
