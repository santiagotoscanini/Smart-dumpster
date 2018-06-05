#include <Servo.h>

const int Servo1 = 7;
Servo servo1;
//Servo servo2;
  
int angulo = 0;
int num = 0;
int nummoduleado = 0;

void setup() {
  
servo1.attach(Servo1, 650, 3000);
angulo = map(num, 0, 180, 180, 0);
Serial.begin(9600);
servo1.write(0);
num = 90;
}

void loop() {
while(Serial.available()>0){
  
  num = Serial.parseInt();
  //nummoduleado = num%10; 
  //num = num / 10;
  angulo = map(num, 0, 180, 180, 0);
  servo1.write(angulo);
  delay(20);
  
  }
}
