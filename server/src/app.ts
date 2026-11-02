import express from 'express';

/** Builds the Express app with routes and middleware. */
export function createApp() {
  const app = express();

  app.use(express.json());

  // Liveness check.
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  return app;
}
