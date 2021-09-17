### Set IP address for socket.io-client
In dashboard/src/App.js, update IP address of io(`http://localhost:${PORT}`, {transports: ['websocket', 'polling']}) to the IP address of API server