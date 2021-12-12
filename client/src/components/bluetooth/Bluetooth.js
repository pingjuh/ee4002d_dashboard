// Adapted from https://github.com/hutscape/hutscape.github.io/blob/master/_tutorials/web-ble-gatt/web-ble-gatt.html

import axios from 'axios'

const bleService = 'environmental_sensing'
const bleCharacteristic = 'uv_index'
let bluetoothDeviceDetected
let gattCharacteristic

export const connect = () => {
  if (isWebBluetoothEnabled()) {
    read()
  }
}

const getDeviceInfo = () => {
  let options = {
    optionalServices: [bleService],
    acceptAllDevices: true,
  }
  console.log('Requesting any Bluetooth Device...')
  return navigator.bluetooth.requestDevice(options).then(device => {
    bluetoothDeviceDetected = device
  }).catch(error => {
    console.log('Argh! ' + error)
  })
}

const isWebBluetoothEnabled = () => {
  if (!navigator.bluetooth) {
    console.log('Web Bluetooth API is not available in this browser!')
    return false
  }
  return true
}

const read = () => {
  return (bluetoothDeviceDetected ? Promise.resolve() : getDeviceInfo())
    .then(connectGATT)
    .then(_ => {
      console.log('Reading...')
      return gattCharacteristic.readValue()
    })
    .catch(error => {
      console.log('Waiting to start reading: ' + error)
    })
}

const connectGATT = () => {
  if (bluetoothDeviceDetected.gatt.connected && gattCharacteristic) {
    return Promise.resolve()
  }

  return bluetoothDeviceDetected.gatt.connect()
    .then(server => {
      console.log('Getting GATT Service...')
      return server.getPrimaryService(bleService)
    })
    .then(service => {
      console.log('Getting GATT Characteristic...')
      return service.getCharacteristic(bleCharacteristic)
    })
    .then(characteristic => {
      gattCharacteristic = characteristic
      gattCharacteristic.addEventListener('characteristicvaluechanged',
        handleChangedValue)
    })
}

const handleChangedValue = (event) => {
  let value = [
    event.target.value.getUint8(0), 
    event.target.value.getUint8(1),
    event.target.value.getUint8(2),
    event.target.value.getUint8(3),
    event.target.value.getUint8(4),
    event.target.value.getUint8(5),
    event.target.value.getUint8(6),
    event.target.value.getUint8(7),
    event.target.value.getUint8(8),
    event.target.value.getUint8(9),
    event.target.value.getUint8(10),
    event.target.value.getUint8(11),
    event.target.value.getUint8(12)
  ];
  console.log(value);
  (async () => {
    await axios.post('http://localhost:5000/api/sensor', {"sensorsReading" : value})
  })();
}

export const start = () => {
  gattCharacteristic.startNotifications()
    .then(_ => {
      console.log('Start reading...')
    })
    .catch(error => {
      console.log('[ERROR] Start: ' + error)
    })
}

export const stop = () => {
  gattCharacteristic.stopNotifications()
    .then(_ => {
      console.log('Stop reading...')
    })
    .catch(error => {
      console.log('[ERROR] Stop: ' + error)
    })
}