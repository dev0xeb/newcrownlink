import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middleware/errorHandling';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
const secret = process.env.JWT_SECRET;

const app = express();

app.use(express.json()); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

  
app.use('/api/auth', userRoutes);
app.use(errorHandler);


export default app;