const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Puedes configurar el puerto que prefieras

// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'build')));

// Ruta para manejar todas las solicitudes y cargar la página principal
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
