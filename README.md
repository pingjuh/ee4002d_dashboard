# Smart sensor with edge AI Dashboard

> React app to display sensor array data and classification results.

## Usage

### `npm install`

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds the app for production to the `build` folder.<br>

---

## Set IP address for socket.io-client
In client/src/context/sensor/SensorState.js, change IP to the IP address of API server, that is your public IP

---

## Generate fake sensor array data
``` bash
python3 fake_data/fake_data.py
```