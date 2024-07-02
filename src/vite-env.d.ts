/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VOUNCHERS_API_LINK: string
  readonly VITE_IMPACTO_API_LINK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}