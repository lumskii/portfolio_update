// EmailJS Configuration
// Get these values from your EmailJS dashboard: https://dashboard.emailjs.com/
// Environment variables are loaded from .env file (VITE_* prefix required for Vite)

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}
