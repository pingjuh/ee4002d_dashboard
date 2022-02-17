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
BLECharacteristic gestureCharacteristic("2a76", BLERead | BLENotify, BLE_BUFFER_SIZE); // remote clients will be able to get notifications if this characteristic changes

uint8_t data[BLE_BUFFER_SIZE]= {0,0,0,0,0,0,0,0,0,0,0,0,0};

void setup() {
  Serial.begin(115200);
  
  if (!BLE.begin()) {
    Serial.println("- Starting BLE module failed!");
    while (1);
  }
  /* Set a local name for the BLE device
     This name will appear in advertising packets
     and can be used by remote devices to identify this BLE device
     The name can be changed but maybe be truncated based on space left in advertisement packet
  */
  BLE.setLocalName("Arduino Nano 33 BLE");
  BLE.setAdvertisedService(gestureService); // add the service UUID
  gestureService.addCharacteristic(gestureCharacteristic); // add the gesture characteristic
  BLE.addService(gestureService); // add the gesture service
  gestureCharacteristic.writeValue(&data, sizeof(data)); // set initial value for this characteristic
  BLE.advertise();

  Serial.println("Nano 33 BLE (Peripheral Device)");
  Serial.println(" ");
}

void loop() {
  BLEDevice central = BLE.central();
  Serial.println("- Discovering central device...");
  delay(500);

  if (central) {
    Serial.println("* Connected to central device!");
    Serial.print("* Device MAC address: ");
    Serial.println(central.address());
    Serial.println(" ");
    int k = 0;
    while (central.connected()) {
      data[0] = random(0,20);
      data[1] = random(0,30);
      data[2] = random(0,20);
      data[3] = random(0,30);
      data[4] = random(0,20);
      data[5] = random(0,30);
      data[6] = (k >= 10 && k <= 20) ? random(200, 255) : 0; 
      data[7] = (k >= 10 && k <= 20) ? random(200, 255) : 0; 
      data[8] = (k >= 10 && k <= 20) ? random(200, 255) : 0; 
      data[9] = (k >= 10 && k <= 20) ? random(200, 255) : 0; 
      data[10] = random(0,20);
      data[11] = random(0,30);
      data[12] = random(0,9);

      gestureCharacteristic.writeValue(&data,sizeof(data));
       
      for(int i = 0; i < BLE_BUFFER_SIZE; i++) {
        Serial.print(data[i]);
        Serial.print("\t");
      }
      if (k > 20) k = 0;
      k++;
      Serial.println();
      delay(100);
    }    
    Serial.println("* Disconnected to central device!");
  }
}
