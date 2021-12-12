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
app.use(cors());


// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running!'));

// Define Routes
app.use('/api/sensor', require('./routes/api/sensors'));

// Listen for socket connections
io.on('connection', socket => {
  setInterval(() => {
    (async () => {
      try {
        const sensor = await Sensor.findOne().sort({ inserted: -1 });
        const channels = sensor.toObject()
        console.log(channels)
        socket.emit('sensor', {
          sensorsReading: channels.sensorsReading,
          inserted: channels.inserted
        });
      } catch(err) {
        console.log(err);
      }  
    })();
  }, 200);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server start on port ${PORT}`));
