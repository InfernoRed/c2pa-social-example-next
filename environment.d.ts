declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_VERCEL_URL: string;

      // Content Integrity
      CONTENT_INTEGRITY_API_URL: string;

      // Google Drive
      GOOGLE_DRIVE_API_KEY: string;
      GOOGLE_DRIVE_FOLDER_ID: string;
    }
  }
}

export {};
