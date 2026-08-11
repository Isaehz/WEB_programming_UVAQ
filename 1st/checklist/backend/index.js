const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const cors = require('cors');
const sequelize = require('./src/libs/sequelize');
const routerApi = require('./src/router/index');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
}));
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('API Checklist funcionando');
});

routerApi(app);

sequelize.authenticate()
  .then(() => console.log('Conexión a PostgreSQL OK'))
  .catch((err) => console.error('Error de conexión:', err.message));

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
