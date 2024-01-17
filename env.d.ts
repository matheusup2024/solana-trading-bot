declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string | undefined;
      FIREBASE_KEY: string | undefined;
      TRENDING_TOKENS_API: string | undefined;
    }
  }
}

export {};
