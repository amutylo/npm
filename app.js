// ./node_modules/.bin/eslint --init
// const path = require('path');

// console.log(path.join(__dirname, 'app.js'));
process.stdout.write('\u001B[2]\u001B[0;0f]');

const server = require('net').createServer();

server.on('connection', (socket) => {
  console.log('Client connection');
  socket.write('Welcome new client!\n');

  socket.on('data', (data) => {
    // console.log('data is', data.toString());
    // socket.write('data is: ');
    // socket.write(data, 'utf8');
    Object.entries(sockets).forEach(([, cs]) => {
      cs.write(`${socket.id}: `);
      cs.write(data);
    });
  });

  socket.on('end', () => {
    delete sockets[socket.id];
    console.log('Client disconnected!!!');
  });
});



server.listen(8000, () => {
  console.log('Server bound');
});
