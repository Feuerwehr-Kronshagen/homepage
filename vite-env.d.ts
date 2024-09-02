/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly PUBLIC_BASE_URL: string
    readonly VITE_BASE_URL: string
    readonly BASE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}