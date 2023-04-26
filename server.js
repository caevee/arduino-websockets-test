const io = require('socket.io')(3000, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');

  /*
  setInterval(() => {
    const data = {
      x: Math.random() * 10,
      y: Math.random() * 10,
    };
 
    socket.emit('data', data);
  }, 1000);
  */

  socket.emit("data", "test");

  socket.on("message", (data) => {
    console.log("message received");
    io.emit("message", data);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});