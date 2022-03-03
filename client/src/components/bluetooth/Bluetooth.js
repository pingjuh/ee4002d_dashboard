// Adapted from https://github.com/hutscape/hutscape.github.io/blob/master/_tutorials/web-ble-gatt/web-ble-gatt.html

import axios from 'axios'

let bluetoothDevice;
let bleCharacteristic;

export async function connect() {
  try {
    if (!bluetoothDevice) {
      await requestDevice();
    }
    await connectDeviceAndCacheCharacteristics();
    console.log('Reading ...');
    alert('Reading ...');
    await bleCharacteristic.readValue();
  } catch (error) {
    console.log('Argh! ' + error);
  }
}

async function requestDevice() {
  console.log('Requesting any Bluetooth Device...');
  bluetoothDevice = await navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
    optionalServices: ['environmental_sensing']
  });
  bluetoothDevice.addEventListener('gattserverdisconnected', disconnect);
}

async function connectDeviceAndCacheCharacteristics() {
  if (bluetoothDevice.gatt.connected && bleCharacteristic) {
    return;
  }

  console.log('Connecting to GATT Server...');
  const server = await bluetoothDevice.gatt.connect();

  console.log('Getting Service...');
  const service = await server.getPrimaryService('environmental_sensing');

  console.log('Getting Characteristic...');
  bleCharacteristic = await service.getCharacteristic('uv_index');

  bleCharacteristic.addEventListener('characteristicvaluechanged', handleChangedValue);
}

/* This function will be called when `readValue` resolves and
 * characteristic value changes since `characteristicvaluechanged` event
 * listener has been added. */

function handleChangedValue(event) {
  let sensorData = [
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
  (async () => {
    await axios.post('/api/sensor', {"sensorsReading": sensorData});
  })();
}

export async function start() {
  try {
    console.log('Starting Notifications...');
    await bleCharacteristic.startNotifications();

    console.log('> Notifications started');
  } catch (error) {
    console.log('Argh! ' + error);
  }
}

export async function stop() {
  try {
    console.log('Stopping Battery Level Notifications...');
    await bleCharacteristic.stopNotifications();

    console.log('> Notifications stopped');
  } catch (error) {
    console.log('Argh! ' + error);
  }
}

export function reset() {
  if (bleCharacteristic) {
    bleCharacteristic.removeEventListener('characteristicvaluechanged', handleChangedValue);
    bleCharacteristic = null;
  }
  // Note that it doesn't disconnect device.
  bluetoothDevice = null;
  console.log('> Bluetooth Device reset');
}

export async function disconnect() {
  console.log('> Bluetooth Device disconnected');
  try {
    await connectDeviceAndCacheCharacteristics()
  } catch (error) {
    console.log('Argh! ' + error);
  }
}