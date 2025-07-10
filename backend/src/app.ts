import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middleware/errorHandling';

const app = express();

app.use(express.json()); 

app.use('/api/auth', userRoutes);
app.use(errorHandler);


export default app;