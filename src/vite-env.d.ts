/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Adicione aqui as variáveis que você usa no seu projeto
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
