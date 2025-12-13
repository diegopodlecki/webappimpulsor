import express from 'express';
import cors from 'cors';
import leadsRouter from './routes/leads';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', leadsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
