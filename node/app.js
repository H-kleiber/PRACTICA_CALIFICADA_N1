const express = require('express');
const cors = require('cors');
const app = express();

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: '¡Hola, este es un servidor Express y una API!' });
});

app.get('/api/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'juan' },
    { id: 2, nombre: 'joel' },
    { id: 3, nombre: 'maria' },
    { id: 4, nombre: 'pedro' },
    { id: 5, nombre: 'kattia'},
    { id: 6, nombre: 'alejandra'}
  ];
  res.json(clientes);
});

const puerto = 3000;
app.listen(puerto, () => {
  console.log(`Servidor Express iniciado en http://localhost:${puerto}`);
});

