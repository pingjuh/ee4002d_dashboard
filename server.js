const connectDB = require('./config/db');
const express = require('express');
const app = express();
const http = require('http');
const server = http.Server(app);
const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

const Sensor = require('./models/Sensor');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// Define Routes
app.use('/api/sensor', require('./routes/api/sensors'));
app.use('/api/classification', require('./routes/api/classification'));

// Listen for socket connections
io.on('connection', socket => {
  setInterval(() => {
    (async () => {
      try {
        const sensor = await Sensor.findOne().sort({ date: -1 });
        const channels = sensor.toObject().sensorsReading
        // console.log(channels)
        socket.emit('sensor', {
          sensorsReading: channels
        });
      } catch(err) {
        console.log(err);
      }  
    })();
  }, 100);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server start on port ${PORT}`));
