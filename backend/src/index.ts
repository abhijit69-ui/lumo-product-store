import express from 'express';
import cors from 'cors';
import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express';

const app = express();

app.use(
  cors({
    origin: ENV.FRONTEND_URL,
  }),
);
app.use(clerkMiddleware()); // auth obj will be attached to the req obj
app.use(express.json()); // parses JSON req bodies
app.use(express.urlencoded({ extended: true })); // parses form data (like HTML Forms)

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
