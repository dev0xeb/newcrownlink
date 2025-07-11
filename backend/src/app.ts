import express from 'express';
import userRoutes from './routes/userRoutes';
import adminRoutes from './routes/adminRoutes'
import { errorHandler } from './middleware/errorHandling';
import dotenv from 'dotenv';
import { createDefaultAdmin } from './utils/seedAdmin';
dotenv.config();

const PORT = process.env.PORT || 3000;
const secret = process.env.JWT_SECRET;

let app: express.Express;

async function startServer() {
  await createDefaultAdmin(); // Ensure admin is seeded before server starts

  app = express();

  app.use(express.json()); 

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  
  app.use('/api/auth', userRoutes);
  app.use('/api/admin', adminRoutes);
  app.use(errorHandler);
}

startServer();

