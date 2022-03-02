uint8_t a = 0;
uint8_t b = 1;
uint8_t c = 2;
uint8_t d = 3;
uint8_t e = 4;
uint8_t f = 5;
uint8_t g = 6;
uint8_t  h = 7;
uint8_t i = 8;
uint8_t j = 9;
uint8_t k = 10;
uint8_t l = 11;
uint8_t m = 12;


void setup() {
  Serial.begin(115200);
}

void loop() {
  delay(2500);
  uint8_t arr0[13] = {0};
  uint8_t arr1[13] = {0};
  arr0[0] = a++;
  arr0[1] = b++;
  arr0[2] = c++;
  arr0[3] = d++;
  arr0[4] = e++;
  arr0[5] = f++;
  arr0[6] = g++;
  arr0[7] = h++;
  arr0[8] = i++;
  arr0[9] = j++;
  arr0[10] = k++;
  arr0[11] = l++;
  arr0[12] = m++;
  memcpy(arr1, arr0, 10);

  
  for (int i = 0; i < sizeof(arr); i++) {
    Serial.print(arr1[i]);
    Serial.print(" ");
  }
  Serial.println();
}
