const connectDB = require('./config/db');
const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

const Sensor = require('./models/Sensor');
const cors = require('cors');
const { info } = require('console');
app.use(cors());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// Define Routes
app.use('/api/sensor', require('./routes/api/sensors'));

io.on('connection', socket => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
});

// Listen for socket connections
(() => {
  Sensor.watch().on('change', (data) => {
    console.log(data);
    io.emit('sensor', {
      sensorsReading: data.fullDocument.sensorsReading,
      inserted: data.fullDocument.inserted
    });
  });

})();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server start on port ${PORT}`));