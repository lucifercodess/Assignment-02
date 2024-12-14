import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

// infile imports
import dataRoute from './routes/data.route.js';

const app = express();
app.use(cors({
  origin: '*',
  credentials: true, // for cookies, but not necessary here
}));
dotenv.config();
app.use(express.json()); // for parsing JSON responses
app.use(morgan('dev')); // for logging HTTP requests


// routes

app.use('/api/v1/dummy',dataRoute)

app.listen(process.env.PORT,()=>{
  console.log(`Server running on port ${process.env.PORT}`);
})