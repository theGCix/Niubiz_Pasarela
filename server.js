import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import donationRoutes from './routes/donationRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Rutas
app.use('/donaciones', donationRoutes);

// Ruta raíz que devuelve tu index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});


// console.log("ENV USER:", process.env.NIUBIZ_USER);
// console.log("ENV PASS:", process.env.NIUBIZ_PASSWORD);
// console.log("ENV MERCHANT:", process.env.NIUBIZ_MERCHANT_ID);

