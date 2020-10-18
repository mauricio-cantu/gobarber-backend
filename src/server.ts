import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import './database';

dotenv.config();

const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}! 🚀️`);
});
