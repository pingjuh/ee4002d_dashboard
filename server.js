const connectDB = require('./config/db');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  transports: ['websocket', 'polling']
});

const Sensor = require('./models/Sensor');
const { channel } = require('diagnostics_channel');


// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// Define Routes
app.use('/api/sensor', require('./routes/api/sensors'));
app.use('/api/classification', require('./routes/api/classification'));

let x = 0;

// Listen for socket connections
io.on('connection', socket => {
  setInterval(() => {
    (async (x) => {
      const sensor = await Sensor.findOne().sort({ date: -1 });
      const ch1 = sensor.toObject().sensorsReading[0]
      console.log(ch1)
      socket.emit('sensor', {
        time: x++,
        sensorReading: ch1
      });
    })();
  }, 200);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server start on port ${PORT}`));
