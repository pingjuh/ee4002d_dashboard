/*
  BLE_Peripheral.ino

  This program uses the ArduinoBLE library to set-up an Arduino Nano 33 BLE 
  as a peripheral device and specifies a service and a characteristic. 

  The circuit:
  - Arduino Nano 33 BLE.
*/

#include <ArduinoBLE.h>
#define BLE_BUFFER_SIZE 13
BLEService gestureService("181a");
BLECharacteristic gestureCharacteristic("2a76",
  BLERead|BLENotify, BLE_BUFFER_SIZE);

uint8_t data[BLE_BUFFER_SIZE] = {0};

void setup() {
  Serial.begin(115200);

  if (!BLE.begin()) {
    Serial.println("- Starting BLE module failed!");
    while (1) {}
  }
  /* Set a local name for the BLE device
     This name will appear in advertising packets
     and can be used by remote devices to identify this BLE device
     The name can be changed but maybe be truncated based on space left in advertisement packet
  */
  BLE.setLocalName("Arduino Nano 33 BLE");
  // add the service UUID
  BLE.setAdvertisedService(gestureService);
  // add the gesture characteristic
  gestureService.addCharacteristic(gestureCharacteristic);
  // add the gesture service
  BLE.addService(gestureService);
  // set initial value for this characteristic
  gestureCharacteristic.writeValue(&data, sizeof(data));
  BLE.advertise();

  Serial.println("Nano 33 BLE (Peripheral Device)");
  Serial.println(" ");
}


void loop() {
  BLEDevice central = BLE.central();
  Serial.println("- Discovering central device...");
  delay(500);

  if (central.connected()) {
    Serial.println("* Connected to central device!");
    Serial.print("* Device MAC address: ");
    Serial.println(central.address());
    Serial.println(" ");
    int k = 0;
    while (central.connected()) {
      if (k == 150) k = 0;
      // Draw the number '5' on the heatmap
      if (k == 0) {
        data[0] = random(140, 155);
        data[1] = random(0, 20);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(0, 20);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 1) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(0, 20);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 2) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(0, 20);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 3) {
        data[0] = random(140, 155);
        data[1] = random(0, 20);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(0, 20);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 4) {
        data[0] = random(140, 155);
        data[1] = random(0, 20);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(0, 20);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 5) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(0, 20);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 6) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(0, 20);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 7) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(0, 20);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(0, 20);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 8) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(0, 20);
        data[11] = random(140, 155);
      } else if (k == 9) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(0, 20);
      } else if (k == 10) {
        data[0] = random(140, 155);
        data[1] = random(0, 20);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(0, 20);
        data[11] = random(140, 155);
      } else if (k == 11) {
        data[0] = random(0, 20);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(0, 20);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k >= 12 && k <= 50) {
        data[0] = 155;
        data[1] = 155;
        data[2] = 155;
        data[3] = 155;
        data[4] = 155;
        data[5] = 155;
        data[6] = 155;
        data[7] = 155;
        data[8] = 155;
        data[9] = 155;
        data[10] = 155;
        data[11] = 155;
      } else if (k == 51) {
        // Draw the number '1' on the heatmap
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(0, 20);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 52) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(0, 20);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 53) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(0, 20);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 54) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(0, 20);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 55) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(0, 20);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 56) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(0, 20);
        data[11] = random(140, 155);
      } else if (k == 57) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(0, 20);
      } else if (k >= 58 && k <= 100) {
        data[0] = 155;
        data[1] = 155;
        data[2] = 155;
        data[3] = 155;
        data[4] = 155;
        data[5] = 155;
        data[6] = 155;
        data[7] = 155;
        data[8] = 155;
        data[9] = 155;
        data[10] = 155;
        data[11] = 155;
      } else if (k == 101) {
        // Draw the number '4' on the heatmap
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(0, 20);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 102) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(0, 20);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 103) {
        data[0] = random(140, 155);
        data[1] = random(0, 20);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(0, 20);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 104) {
        data[0] = random(0, 20);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(0, 20);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 105) {
        data[0] = random(140, 155);
        data[1] = random(0, 20);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(0, 20);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 106) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(0, 20);
        data[3] = random(140, 155);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(0, 20);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 107) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(0, 20);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 108) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(140, 155);
        data[4] = random(0, 20);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(0, 20);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 109) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(0, 20);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 110) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(0, 20);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 111) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(0, 20);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 112) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(0, 20);
        data[10] = random(140, 155);
        data[11] = random(140, 155);
      } else if (k == 113) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(0, 20);
        data[11] = random(140, 155);
      } else if (k == 114) {
        data[0] = random(140, 155);
        data[1] = random(140, 155);
        data[2] = random(140, 155);
        data[3] = random(0, 20);
        data[4] = random(140, 155);
        data[5] = random(140, 155);
        data[6] = random(140, 155);
        data[7] = random(140, 155);
        data[8] = random(140, 155);
        data[9] = random(140, 155);
        data[10] = random(140, 155);
        data[11] = random(0, 20);
      } else {
        data[0] = 155;
        data[1] = 155;
        data[2] = 155;
        data[3] = 155;
        data[4] = 155;
        data[5] = 155;
        data[6] = 155;
        data[7] = 155;
        data[8] = 155;
        data[9] = 155;
        data[10] = 155;
        data[11] = 155;
      }
      if (k >= 30 && k <= 50) {
        data[12] = 5;
      } else if (k >= 80 && k <= 100) {
        data[12] = 1;
      } else if (k >= 130 && k <= 150) {
        data[12] = 4;
      } else {
        data[12] = 0;
      }
      gestureCharacteristic.writeValue(&data, sizeof(data));
      for (int i = 0; i < BLE_BUFFER_SIZE; i++) {
        Serial.print(data[i], DEC);
        Serial.print("\t");
      }
      Serial.println();
      delay(200);
      k++;
    }
    Serial.println("* Disconnected to central device!");
  }
}
