#include <Servo.h>

const int Servo1=7;
Servo servo1;
  
int num = 0;

void setup() {
servo1.attach(Servo1, 650, 2100);

Serial.begin(9600);

servo1.write(0);
}

void loop() {
  while(Serial.available()>0){
      num = Serial.parseInt();
      if (num<0 || num>180){  
      Serial.println("no gires tanto man");
      }else if(num == 1){
        servo1.write(70);
      }else if(num == 2){
        servo1.write(70);
      }else if(num == 3){
        servo1.write(70);
      }else if(num == 4){
        servo1.write(0);
      }
       
  }
}




