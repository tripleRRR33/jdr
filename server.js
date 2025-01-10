// On importe ce dont on a besoin
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Quand quelqu'un se connecte
io.on('connection', (socket) => {
  console.log('Un joueur s'est connecté !');
  
  // Quand quelqu'un envoie un message
  socket.on('message', (message) => {
    // On envoie le message à tous les autres
    io.emit('message', message);
  });

  // Quand quelqu'un lance un dé
  socket.on('diceRoll', (result) => {
    // On envoie le résultat à tous
    io.emit('diceRoll', result);
  });
});

// Démarrer le serveur
server.listen(3000, () => {
  console.log('Le serveur est prêt !');
});
