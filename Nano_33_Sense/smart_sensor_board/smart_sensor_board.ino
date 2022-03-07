// #define DEBUG

#ifdef DEBUG
    #define DEBUG_PRINT(x) Serial.print(x);
    #define DEBUG_PRINTLN(x) Serial.println(x);
#else
    #define DEBUG_PRINT(x)
    #define DEBUG_PRINTLN(x)
#endif

#include <Wire.h>
#include "Adafruit_MPR121.h"
#include <ArduinoBLE.h>

Adafruit_MPR121 cap = Adafruit_MPR121();

#define BLE_BUFFER_SIZE 13
#define SAMPLE_ROW_SIZE 10000
#define SAMPLE_COL_SIZE 12

BLEService gestureService("181a");
BLECharacteristic gestureCharacteristic("2a76",
  BLERead|BLENotify, BLE_BUFFER_SIZE);
BLEDevice central;

uint8_t BLEdata[BLE_BUFFER_SIZE] = {0};
uint8_t sample[SAMPLE_ROW_SIZE][SAMPLE_COL_SIZE] = {0};
uint8_t row = 0;

void setup() {
    #ifdef DEBUG
    Serial.begin(9600);
    while (!Serial) {}  // Delay to let arduino bootup fully
    delay(100);
    #endif

    if (!cap.begin(0x5A)) {
        DEBUG_PRINTLN("MPR121 not found, check wiring?");
        while (1) {}
    }
    DEBUG_PRINTLN("MPR121 found!");
    // BLE Stuff
    if (!BLE.begin()) {
        DEBUG_PRINTLN("- Starting BLE module failed!");
        while (1) {}
    }
    // Initialise BLE
    BLE.setLocalName("Arduino Nano 33 BLE");
    BLE.setAdvertisedService(gestureService);
    gestureService.addCharacteristic(gestureCharacteristic);
    BLE.addService(gestureService);
    gestureCharacteristic.writeValue(&BLEdata, sizeof(BLEdata));
    BLE.advertise();
}

void loop() {
    if (connectToCentral(&central)) return;
    // Read the capacitive sensor
    sampling();
    // ADD Prediction HERE //////////////////////////////////
}

bool connectToCentral(BLEDevice *central) {
    if (central->connected()) {
        return false;
    } else {
        *central = BLE.central();
        delay(500);
    }
    return true;
}

void sampling() {
    while (row < SAMPLE_ROW_SIZE) {
        DEBUG_PRINT("Row ");
        DEBUG_PRINT(row);
        DEBUG_PRINT(": ");
        for (uint8_t col = 0; col < SAMPLE_COL_SIZE; col++) {
            // filteredData is a 10 bit number
            // but it is always smaller than 255 during test
            sample[row][col] = cap.filteredData(col);
            DEBUG_PRINT(sample[row][col]);
            DEBUG_PRINT(" ");
        }
        sendBLEData();
        row++;
        // Time Out check
        if (timeOut()) {
            memset(sample, 0, sizeof(sample));
            row = 0;
            return;
        }
    }
}

void sendBLEData() {
    memcpy(BLEdata, sample[row], sizeof(sample[row]));
    DEBUG_PRINT("BLEdata: ");
    for (uint8_t i = 0; i < sizeof(BLEdata); i++) {
        DEBUG_PRINT(BLEdata[i]);
        DEBUG_PRINT(" ");
    }
    DEBUG_PRINTLN("");
    gestureCharacteristic.writeValue(&BLEdata, sizeof(BLEdata));
    delay(100);
}

bool timeOut() {
// Start countdown if untouched & sample contains data
// No data buffered/sent if untouched & sample empty
// Return false if touched within 1500ms
    int count = 0;
    if (sample[0][0] != 0) {
        while (count++ < 150) {
            if (cap.touched())
                return false;
            delay(10);
        }
    }
    DEBUG_PRINTLN("Time out!");
    return true;
}
