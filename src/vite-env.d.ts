/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_REACT_STRICT_MODE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
