import express from 'express';
import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express';

const app = express();

app.use(clerkMiddleware()); // auth obj will be attached to the req obj

app.get('/', (req, res) => {
  res.json({
    message:
      'Welcome to Lumo API - Powered by PostgreSQL, Drizzle ORM $ Clerk Auth',
    endpoints: {
      users: '/api/users',
      products: '/api/products',
      comments: '/api/comments',
    },
  });
});

app.listen(ENV.PORT, () => {
  console.log(`Server is up and running in: ${ENV.PORT}`);
});
