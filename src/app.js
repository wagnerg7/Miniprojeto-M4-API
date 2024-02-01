import express from 'express';
import bodyParser from 'body-parser';
import materiaisRoute from './routes/materiaisRoute.js';
import buscaRoute from './routes/buscaRoute.js';
import compartilhamentoRoute from './routes/compartilhamentoRoute.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', materiaisRoute);
app.use('/', buscaRoute);
app.use('/', compartilhamentoRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});