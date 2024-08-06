declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ENABLE_MANIFEST_LOGS: string;
      CONTENT_INTEGRITY_API_URL: string;
      BLOB_READ_WRITE_TOKEN: string;
    }
  }
}

export {};
