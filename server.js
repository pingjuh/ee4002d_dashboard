const connectDB = require('./config/db');
const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const socketIO = require('socket.io');
const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});
const path = require('path');

const Sensor = require('./models/Sensor');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/sensor', require('./routes/api/sensors'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
  // SocketIO
  const server = app
  .use((req, res) => res.sendFile('index.html', { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
  const io = socketIO(server);
}

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

// Listen for socket connections
(() => {
  Sensor.watch().on('change', (data) => {
    io.emit('sensor', {
      sensorsReading: data.fullDocument.sensorsReading,
      inserted: data.fullDocument.inserted
    });
  });
})();

server.listen(PORT, () => console.log(`Server start on port ${PORT}`));
