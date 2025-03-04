import express, {Application } from "express";
import animalRouter from './routes/AnimalsRouters';

const app: Application = express()

app.use(express.json())

app.use("/animals", animalRouter);

export default app;