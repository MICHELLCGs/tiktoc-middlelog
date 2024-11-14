# Documentación de la API TikToc MiddleLog

Esta API proporciona funcionalidades de OTP (One Time Password) y alertas para grupos de WhatsApp, diseñada para facilitar la autenticación y el envío de notificaciones en tiempo real. Utiliza servicios de terceros, como Green API para WhatsApp y Gmail para el envío de correos electrónicos.

## Tabla de Contenidos

-   [Instalación](#instalaci%C3%B3n)
-   [Configuración](#configuraci%C3%B3n)
-   [Rutas de la API](#rutas-de-la-api)
    -   [OTP Email](#otp-email)
    -   [OTP WhatsApp](#otp-whatsapp)
    -   [Logs WhatsApp](#logs-whatsapp)

----------

## Instalación desarrollo

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/tu-usuario/tiktoc-middlelog.git
cd tiktoc-middlelog
npm install
npm start
```
## despliegue con docker

Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tiktoc-middlelog.git
cd tiktoc-middlelog
```
Contruye la imagen:
```bash
docker compose -f docker-compose.yml build
```
Despliega la imagen:
```bash
docker compose -f docker-compose.yml up -d
```


## Configuración

Asegúrate de tener un archivo `.env` con las siguientes variables:

```plaintext
API_KEY=     "aqui hay que generarlo"
GMAIL_USER=  "Correo de gmail.com" 
GMAIL_PASS=  "Crea una 'Contraseñas de aplicación'"
GREEN_API_URL= "GEEN API: apiUrl"
GREEN_API_INSTANCE_ID= "GREEN API"
GREEN_API_TOKEN= "GREEN API"
PORT=3000` 
```
Para obtener el `GMAIL_PASS`, utiliza una contraseña de aplicación generada en tu cuenta de Google, ponerle cualquier nombre. 
Configura también tus credenciales de Green API.

## Rutas de la API

### 1. OTP Email

-   **Método:** `POST`
-   **Ruta:** `/api/otp-email`
-   **Descripción:** Envía un código OTP al correo electrónico especificado.
-   **Parámetros de consulta:** `api-key` (obligatorio)
-   **Cuerpo de la solicitud:**
    -   `recipient` (string, obligatorio): Dirección de correo del destinatario.
    -   `code` (string, obligatorio): Código OTP a enviar.

**Ejemplo de solicitud:**

http

```http
POST /api/otp-email?api-key=xxxxxxx
Content-Type: application/json

{
    "recipient": "usuario@ejemplo.com",
    "code": "123456"
}` 
```
**Ejemplo de respuesta exitosa:**

```json
{
    "status": "OTP sent to email",
    "recipient": "usuario@ejemplo.com"
} 
```
----------

### 2. OTP WhatsApp

-   **Método:** `POST`
-   **Ruta:** `/api/otp-whatsapp`
-   **Descripción:** Envía un código OTP al número de WhatsApp especificado.
-   **Parámetros de consulta:** `api-key` (obligatorio)
-   **Cuerpo de la solicitud:**
    -   `recipient` (string, obligatorio): Número de WhatsApp del destinatario, en formato internacional sin el signo `+`.
    -   `code` (string, obligatorio): Código OTP a enviar.

**Ejemplo de solicitud:**

http
```http
POST /api/otp-whatsapp?api-key=xxxxxxx
Content-Type: application/json

{
    "recipient": "51987654321",
    "code": "123456"
} 
```
**Ejemplo de respuesta exitosa:**

```json
{
    "status": "OTP sent to WhatsApp",
    "recipient": "51987654321"
} 
```
----------

### 3. Logs WhatsApp

-   **Método:** `POST`
-   **Ruta:** `/api/logs-whatsapp`
-   **Descripción:** Envía un mensaje de log a un grupo de WhatsApp.
-   **Parámetros de consulta:** `api-key` (obligatorio)
-   **Cuerpo de la solicitud:**
    -   `groupId` (string, obligatorio): ID del grupo de WhatsApp, en formato `1234567890@g.us`.
    -   `message` (string, obligatorio): Mensaje de log a enviar.

**Ejemplo de solicitud:**

http
```http
POST /api/logs-whatsapp?api-key=xxxxxxx
Content-Type: application/json

{
    "groupId": "1234567890@g.us",
    "message": "Este es un mensaje de log de prueba"
}
```
**Ejemplo de respuesta exitosa:**

```json
`{
    "status": "Log sent to WhatsApp group",
    "groupId": "1234567890@g.us"
}` 
```
----------

## Notas

-   La API requiere una `api-key` válida en cada solicitud, que debe incluirse como parámetro de consulta.
-   La ruta `/api/logs-whatsapp` utiliza la [Green API](https://green-api.com/) para enviar mensajes a grupos de WhatsApp y requiere una instancia y token de Green API configurados en las variables de entorno.

## Ejemplo de Uso con Insomnia

Configura cada solicitud en Insomnia o cualquier herramienta similar de acuerdo con los ejemplos anteriores, asegurándote de incluir `?api-key=xxxxxxx` en la URL.